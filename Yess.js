$(function () {
  // مجموعة مفاتيح API متعددة للتناوب
  const apiKeys = [
    'AIzaSyAWPwwpHA7IXqZq2DVGdKFHohBZGCOK7DD',
    'AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw',
    'AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30',
    'AIzaSyDdVgKwhZl-aNLqKiDhPaKWH8qArGosAOk',
    'AIzaSyB1OOSpTREs85WnMvIgJvLTZKye4BXOwjU',
    'AIzaSyA8eiZmM1FaDVjRy-df2KTyQ_vz_yYM39w'
  ];

  // متغيرات للتحكم في استخدام المفاتيح
  let currentKeyIndex = parseInt(localStorage.getItem('ytCurrentKey') || '0');
  let keyUsageCount = parseInt(localStorage.getItem('ytKeyUsage') || '0');
  let lastResetDate = localStorage.getItem('ytLastReset') || new Date().toDateString();

  // إعادة تعيين العداد يومياً
  if (lastResetDate !== new Date().toDateString()) {
    currentKeyIndex = 0;
    keyUsageCount = 0;
    localStorage.setItem('ytCurrentKey', '0');
    localStorage.setItem('ytKeyUsage', '0');
    localStorage.setItem('ytLastReset', new Date().toDateString());
  }

  // نافذة البحث في يوتيوب
  const modal = $(`
    <div id="ytModal" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:9999;justify-content:center;align-items:center;">
      <div style="background:white;padding:20px;border-radius:10px;width:90%;max-width:800px;max-height:90%;overflow:auto;">
        <div style="display:flex;gap:10px;align-items:center;margin-bottom:10px;">
          <input id="ytInput" type="text" placeholder="ابحث في يوتيوب - بدون حدود!" style="flex:1;padding:10px;border:1px solid #ccc;border-radius:5px;">
          <button id="ytGo" style="padding:10px 15px;background:#dc3545;color:white;border:none;border-radius:5px;"><i class="fa fa-search"></i></button>
          <button id="ytClose" style="padding:10px;background:#6c757d;color:white;border:none;border-radius:5px;"><i class="fa fa-close"></i></button>
        </div>
        <div style="font-size:12px;color:#666;margin-bottom:10px;">
          المفتاح: <span id="keyStatus">${currentKeyIndex + 1}/${apiKeys.length}</span> | 
          الاستخدام: <span id="usageStatus">${keyUsageCount}/100</span>
        </div>
        <div id="ytResults" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px;"></div>
      </div>
    </div>
  `).appendTo('body');

  // عند الضغط على حقل البحث، أظهر المودال وابدأ من الصفر
  $('.youtubeVal').on('focus', function () {
    $('#ytInput').val('');
    $('#ytResults').empty();
    $('#ytModal').fadeIn();
    $('#ytInput').focus();
    updateStatus();
  });

  // إغلاق النافذة
  $('#ytClose').click(() => {
    $('#ytModal').fadeOut();
    $('#ytInput').val('');
    $('#ytResults').empty();
  });

  // البحث عند الضغط على Enter
  $('#ytInput').keypress(function(e) {
    if (e.which === 13) $('#ytGo').click();
  });

  // تحديث حالة المفاتيح
  function updateStatus() {
    $('#keyStatus').text(`${currentKeyIndex + 1}/${apiKeys.length}`);
    $('#usageStatus').text(`${keyUsageCount}/100`);
  }

  // الحصول على المفتاح التالي
  function getNextApiKey() {
    // إذا وصل العداد للحد الأقصى، انتقل للمفتاح التالي
    if (keyUsageCount >= 90) { // نترك هامش أمان
      currentKeyIndex = (currentKeyIndex + 1) % apiKeys.length;
      keyUsageCount = 0;
      
      // حفظ الحالة الجديدة
      localStorage.setItem('ytCurrentKey', currentKeyIndex.toString());
      localStorage.setItem('ytKeyUsage', '0');
      
      console.log(`تم التبديل للمفتاح رقم: ${currentKeyIndex + 1}`);
    }
    
    return apiKeys[currentKeyIndex];
  }

  // تسجيل استخدام المفتاح
  function recordKeyUsage() {
    keyUsageCount++;
    localStorage.setItem('ytKeyUsage', keyUsageCount.toString());
    updateStatus();
  }

  // إضافة تأخير عشوائي لتجنب الكشف
  function randomDelay() {
    return new Promise(resolve => {
      const delay = Math.random() * 1000 + 500; // تأخير بين 0.5-1.5 ثانية
      setTimeout(resolve, delay);
    });
  }

  // تنفيذ البحث مع التحايل على الحدود
  $('#ytGo').click(async function () {
    const q = $('#ytInput').val().trim();
    if (!q) return;
    
    $('#ytResults').html('<div style="grid-column:1/-1;text-align:center;">جاري البحث...</div>');

    // إضافة تأخير عشوائي
    await randomDelay();

    // محاولة البحث مع تبديل المفاتيح عند الحاجة
    searchWithFallback(q, 0);
  });

  // البحث مع نظام احتياطي
  function searchWithFallback(query, attemptCount) {
    if (attemptCount >= apiKeys.length) {
      $('#ytResults').html('<div style="grid-column:1/-1;text-align:center;color:red;">تم استنفاد جميع المفاتيح، حاول لاحقاً</div>');
      return;
    }

    const apiKey = getNextApiKey();
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=12&q=${encodeURIComponent(query)}&key=${apiKey}`;

    // إضافة headers لتجنب الكشف
    $.ajax({
      url: url,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://www.youtube.com'
      },
      success: function(res) {
        recordKeyUsage();
        
        const items = res.items || [];
        $('#ytResults').empty();
        
        if (!items.length) {
          $('#ytResults').html('<div style="grid-column:1/-1;text-align:center;">لا توجد نتائج</div>');
          return;
        }

        items.forEach(item => {
          const id = item.id.videoId;
          const title = item.snippet.title;
          const img = item.snippet.thumbnails.medium.url;
          const channel = item.snippet.channelTitle;
          const publishedAt = new Date(item.snippet.publishedAt).toLocaleDateString('ar');

          const card = $(`
            <div style="border:1px solid #ccc;border-radius:8px;padding:8px;background:#f9f9f9;transition:transform 0.2s;">
              <img src="${img}" style="width:100%;height:120px;object-fit:cover;border-radius:5px;">
              <div style="margin-top:8px;font-weight:bold;font-size:13px;line-height:1.3;height:40px;overflow:hidden;">${title}</div>
              <div style="color:#666;font-size:11px;margin-top:5px;">${channel}</div>
              <div style="color:#999;font-size:10px;">${publishedAt}</div>
              <button style="margin-top:8px;width:100%;padding:6px;background:#28a745;color:white;border:none;border-radius:4px;font-weight:bold;">إرسال إلى الحائط</button>
            </div>
          `);

          // تأثير hover
          card.hover(
            function() { $(this).css('transform', 'scale(1.02)'); },
            function() { $(this).css('transform', 'scale(1)'); }
          );

          // عند الضغط على "إرسال إلى الحائط"
          card.find('button').click(() => {
            $('.tboxbc').val(`https://www.youtube.com/watch?v=${id}`);
            if (typeof SEND_BC_UP === 'function') SEND_BC_UP();

            // إعادة التهيئة عند الإرسال
            $('#ytModal').fadeOut();
            $('#ytInput').val('');
            $('#ytResults').empty();

            // إشعار نجاح
            showSuccessNotification();
          });

          $('#ytResults').append(card);
        });
      },
      error: function(xhr) {
        console.log(`فشل المفتاح ${currentKeyIndex + 1}:`, xhr.status);
        
        // إذا كان الخطأ بسبب تجاوز الحد، انتقل للمفتاح التالي
        if (xhr.status === 403 || xhr.status === 429) {
          currentKeyIndex = (currentKeyIndex + 1) % apiKeys.length;
          keyUsageCount = 0;
          localStorage.setItem('ytCurrentKey', currentKeyIndex.toString());
          localStorage.setItem('ytKeyUsage', '0');
          updateStatus();
          
          // حاول مرة أخرى بالمفتاح الجديد
          setTimeout(() => searchWithFallback(query, attemptCount + 1), 1000);
        } else {
          $('#ytResults').html('<div style="grid-column:1/-1;text-align:center;color:red;">حدث خطأ أثناء جلب البيانات</div>');
        }
      }
    });
  }

  // إشعار النجاح
  function showSuccessNotification() {
    const notification = $(`
      <div style="position:fixed;top:20px;right:20px;background:#28a745;color:white;padding:15px;border-radius:8px;z-index:10001;box-shadow:0 4px 12px rgba(0,0,0,0.3);">
        <i class="fa fa-check"></i> تم إرسال الفيديو بنجاح!
      </div>
    `).appendTo('body');
    
    setTimeout(() => {
      notification.fadeOut(300, function() {
        $(this).remove();
      });
    }, 3000);
  }

  // إغلاق النافذة عند الضغط خارجها
  $('#ytModal').click(function(e) {
    if (e.target === this) {
      $('#ytClose').click();
    }
  });

  // إضافة زر لإعادة تعيين المفاتيح يدوياً
  $('<button>')
    .text('إعادة تعيين المفاتيح')
    .css({
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      padding: '10px',
      background: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      zIndex: '1000',
      fontSize: '12px'
    })
    .click(function() {
      currentKeyIndex = 0;
      keyUsageCount = 0;
      localStorage.setItem('ytCurrentKey', '0');
      localStorage.setItem('ytKeyUsage', '0');
      updateStatus();
      alert('تم إعادة تعيين المفاتيح بنجاح!');
    })
    .appendTo('body');
});
