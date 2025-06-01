$(function () {
  // مجموعة مفاتيح API محسنة
  const apiKeys = [
    'AIzaSyB37niCuiDfhIyVV2w1oSG6cU4VDCkzy7A',
    'AIzaSyC2HIGFO8YLZViBpy7DnncGFxNcDKA4VXE',
    'AIzaSyABOHkjTyppyD-Qkq8izOBAHWFd2gvBnq4',
    'AIzaSyDznztxGatwgaIfaNUwj6zc8hst7DErflU',
    'AIzaSyDjfMpqr1BdT5Hs7V4vdpNSZGYzSwpp3oU',
    'AIzaSyDNFoPab_dburA_ksrS8M4DAbWP3fFPBzA',
    'AIzaSyAWPwwpHA7IXqZq2DVGdKFHohBZGCOK7DQ'
  ];

  // نظام إدارة المفاتيح المتقدم (مخفي عن المستخدم)
  let currentKeyIndex = parseInt(localStorage.getItem('ytCurrentKey') || '0');
  let keyUsageCount = JSON.parse(localStorage.getItem('ytKeyUsage') || '{}');
  let lastResetDate = localStorage.getItem('ytLastReset') || new Date().toDateString();
  let searchHistory = JSON.parse(localStorage.getItem('ytSearchHistory') || '[]');

  // إعادة تعيين يومية
  if (lastResetDate !== new Date().toDateString()) {
    keyUsageCount = {};
    currentKeyIndex = 0;
    localStorage.setItem('ytKeyUsage', '{}');
    localStorage.setItem('ytCurrentKey', '0');
    localStorage.setItem('ytLastReset', new Date().toDateString());
  }

  // الحصول على المفتاح الأمثل
  function getBestApiKey() {
    // البحث عن مفتاح لم يتم استنفاده
    for (let i = 0; i < apiKeys.length; i++) {
      const keyIndex = (currentKeyIndex + i) % apiKeys.length;
      const usage = keyUsageCount[keyIndex] || 0;
      if (usage < 90) { // ترك هامش أمان
        currentKeyIndex = keyIndex;
        localStorage.setItem('ytCurrentKey', currentKeyIndex.toString());
        return apiKeys[keyIndex];
      }
    }
    return apiKeys[currentKeyIndex]; // إرجاع المفتاح الحالي كحل أخير
  }

  // تسجيل استخدام المفتاح
  function recordKeyUsage() {
    keyUsageCount[currentKeyIndex] = (keyUsageCount[currentKeyIndex] || 0) + 1;
    localStorage.setItem('ytKeyUsage', JSON.stringify(keyUsageCount));
  }

  // حفظ تاريخ البحث
  function saveSearchHistory(query) {
    if (!searchHistory.includes(query)) {
      searchHistory.unshift(query);
      if (searchHistory.length > 10) searchHistory.pop();
      localStorage.setItem('ytSearchHistory', JSON.stringify(searchHistory));
    }
  }

  // إنشاء النافذة المحسنة (بدون تفاصيل المفاتيح)
  const modal = $(`
    <div id="ytModal" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:9999;justify-content:center;align-items:center;">
      <div style="background:white;padding:25px;border-radius:15px;width:95%;max-width:1000px;max-height:90%;overflow:auto;box-shadow:0 20px 40px rgba(0,0,0,0.3);">
        <div style="display:flex;gap:10px;align-items:center;margin-bottom:15px;border-bottom:2px solid #eee;padding-bottom:15px;">
          <input id="ytInput" type="text" placeholder="ابحث في يوتيوب - محرك بحث قوي!" style="flex:1;padding:12px;border:2px solid #ddd;border-radius:8px;font-size:16px;">
          <button id="ytGo" style="padding:12px 20px;background:#dc3545;color:white;border:none;border-radius:8px;font-weight:bold;cursor:pointer;"><i class="fa fa-search"></i> بحث</button>
          <button id="ytClose" style="padding:12px;background:#6c757d;color:white;border:none;border-radius:8px;cursor:pointer;"><i class="fa fa-times"></i></button>
        </div>
        
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;font-size:12px;color:#666;">
          <div id="searchSuggestions" style="flex:1;"></div>
          <div>
            <button id="clearHistory" style="padding:4px 8px;background:#ff9800;color:white;border:none;border-radius:4px;font-size:10px;">مسح التاريخ</button>
          </div>
        </div>

        <div id="ytResults" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:15px;max-height:600px;overflow-y:auto;"></div>
      </div>
    </div>
  `).appendTo('body');

  // عرض اقتراحات البحث
  function showSearchSuggestions() {
    if (searchHistory.length > 0) {
      const suggestions = searchHistory.slice(0, 5).map(term => 
        `<span style="display:inline-block;background:#f0f0f0;padding:4px 8px;margin:2px;border-radius:12px;font-size:11px;cursor:pointer;" class="search-suggestion">${term}</span>`
      ).join('');
      $('#searchSuggestions').html(`<div style="margin-bottom:5px;font-size:11px;color:#666;">عمليات بحث سابقة:</div>${suggestions}`);
    }
  }

  // فتح النافذة
  $('.youtubeVal').on('focus', function () {
    $('#ytInput').val('');
    $('#ytResults').empty();
    showSearchSuggestions();
    $('#ytModal').css('display', 'flex').hide().fadeIn(300);
    setTimeout(() => $('#ytInput').focus(), 300);
  });

  // إغلاق النافذة
  $('#ytClose').click(() => {
    $('#ytModal').fadeOut(300);
    $('#ytInput').val('');
    $('#ytResults').empty();
    $('#searchSuggestions').empty();
  });

  // استخدام اقتراحات البحث
  $(document).on('click', '.search-suggestion', function() {
    const term = $(this).text();
    $('#ytInput').val(term);
    $('#ytGo').click();
  });

  // مسح تاريخ البحث
  $('#clearHistory').click(() => {
    searchHistory = [];
    localStorage.setItem('ytSearchHistory', '[]');
    $('#searchSuggestions').empty();
  });

  // البحث المحسن مع إعادة المحاولة الذكية (صامت)
  function searchYoutube(query, retryCount = 0) {
    if (retryCount >= apiKeys.length) {
      $('#ytResults').html(`
        <div style="grid-column:1/-1;text-align:center;padding:40px;color:#dc3545;">
          <i class="fa fa-exclamation-triangle" style="font-size:30px;"></i>
          <div style="margin-top:10px;font-size:16px;">حاول لاحقاً</div>
          <div style="font-size:12px;color:#666;margin-top:5px;">الخدمة غير متاحة حالياً</div>
        </div>
      `);
      return;
    }

    const apiKey = getBestApiKey();
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=15&q=${encodeURIComponent(query)}&key=${apiKey}&order=relevance&safeSearch=none`;

    // إضافة تأخير عشوائي لتجنب الكشف
    const delay = Math.random() * 500 + 200;
    
    setTimeout(() => {
      $.ajax({
        url: url,
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Referer': 'https://www.youtube.com'
        },
        success: function (res) {
          if (res.error && (res.error.code === 403 || res.error.code === 429)) {
            // تبديل صامت للمفتاح التالي
            currentKeyIndex = (currentKeyIndex + 1) % apiKeys.length;
            localStorage.setItem('ytCurrentKey', currentKeyIndex.toString());
            searchYoutube(query, retryCount + 1);
            return;
          }

          recordKeyUsage();
          saveSearchHistory(query);

          const items = res.items || [];
          $('#ytResults').empty();

          if (!items.length) {
            $('#ytResults').html(`
              <div style="grid-column:1/-1;text-align:center;padding:40px;">
                <i class="fa fa-search" style="font-size:30px;color:#999;"></i>
                <div style="margin-top:10px;color:#666;">لا توجد نتائج للبحث عن "${query}"</div>
              </div>
            `);
            return;
          }

          items.forEach((item, index) => {
            const id = item.id.videoId;
            const title = item.snippet.title;
            const img = item.snippet.thumbnails.medium.url;
            const channel = item.snippet.channelTitle;
            const publishedAt = new Date(item.snippet.publishedAt).toLocaleDateString('ar');
            const description = item.snippet.description.substring(0, 100) + '...';

            const card = $(`
              <div style="border:1px solid #ddd;border-radius:12px;padding:12px;background:white;box-shadow:0 4px 8px rgba(0,0,0,0.1);transition:all 0.3s;cursor:pointer;animation:fadeIn 0.5s ease-in-out ${index * 0.1}s both;">
                <div style="position:relative;overflow:hidden;border-radius:8px;">
                  <img src="${img}" style="width:100%;height:140px;object-fit:cover;transition:transform 0.3s;" 
                       onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPllvdVR1YmU8L3RleHQ+PC9zdmc+'">
                  <div style="position:absolute;top:8px;right:8px;background:rgba(0,0,0,0.7);color:white;padding:2px 6px;border-radius:4px;font-size:10px;">
                    <i class="fa fa-play"></i>
                  </div>
                </div>
                <div style="margin-top:10px;">
                  <div style="font-weight:bold;font-size:14px;line-height:1.3;height:42px;overflow:hidden;margin-bottom:8px;">${title}</div>
                  <div style="color:#666;font-size:12px;margin-bottom:4px;"><i class="fa fa-user"></i> ${channel}</div>
                  <div style="color:#999;font-size:11px;margin-bottom:8px;"><i class="fa fa-calendar"></i> ${publishedAt}</div>
                  <div style="color:#777;font-size:11px;line-height:1.3;height:30px;overflow:hidden;margin-bottom:10px;">${description}</div>
                </div>
                <button style="width:100%;padding:10px;background:linear-gradient(45deg, #28a745, #20c997);color:white;border:none;border-radius:8px;font-weight:bold;font-size:13px;transition:all 0.3s;cursor:pointer;">
                  <i class="fa fa-paper-plane"></i> إرسال إلى الحائط
                </button>
              </div>
            `);

            // تأثيرات بصرية
            card.hover(
              function() { 
                $(this).css({
                  'transform': 'translateY(-5px)',
                  'box-shadow': '0 8px 25px rgba(0,0,0,0.15)'
                });
                $(this).find('img').css('transform', 'scale(1.05)');
                $(this).find('button').css('background', 'linear-gradient(45deg, #20c997, #28a745)');
              },
              function() { 
                $(this).css({
                  'transform': 'translateY(0)',
                  'box-shadow': '0 4px 8px rgba(0,0,0,0.1)'
                });
                $(this).find('img').css('transform', 'scale(1)');
                $(this).find('button').css('background', 'linear-gradient(45deg, #28a745, #20c997)');
              }
            );

            // إرسال الفيديو
            card.find('button').click((e) => {
              e.stopPropagation();
              $('.tboxbc').val(`https://www.youtube.com/watch?v=${id}`);
              
              if (typeof SEND_BC_UP === 'function') {
                SEND_BC_UP();
              }

              $('#ytModal').fadeOut(300);
              $('#ytInput').val('');
              $('#ytResults').empty();
              $('#searchSuggestions').empty();
              
              showNotification('تم إرسال الفيديو بنجاح! 🎉', 'success');
            });

            // فتح الفيديو في تبويب جديد
            card.click(function(e) {
              if (e.target.tagName !== 'BUTTON') {
                window.open(`https://www.youtube.com/watch?v=${id}`, '_blank');
              }
            });

            $('#ytResults').append(card);
          });
        },
        error: function (xhr) {
          // تبديل صامت للمفتاح التالي في حالة الخطأ
          if (xhr.status === 403 || xhr.status === 429) {
            currentKeyIndex = (currentKeyIndex + 1) % apiKeys.length;
            localStorage.setItem('ytCurrentKey', currentKeyIndex.toString());
            searchYoutube(query, retryCount + 1);
          } else {
            $('#ytResults').html(`
              <div style="grid-column:1/-1;text-align:center;color:#dc3545;padding:40px;">
                <i class="fa fa-exclamation-circle" style="font-size:30px;"></i>
                <div style="margin-top:10px;">حدث خطأ في الاتصال</div>
                <button onclick="searchYoutube('${query}')" style="margin-top:10px;padding:8px 16px;background:#dc3545;color:white;border:none;border-radius:5px;">إعادة المحاولة</button>
              </div>
            `);
          }
        }
      });
    }, delay);
  }

  // تنفيذ البحث
  $('#ytGo').click(function () {
    const query = $('#ytInput').val().trim();
    if (!query) return;
    
    $('#ytResults').html(`
      <div style="grid-column:1/-1;text-align:center;padding:40px;">
        <div style="display:inline-block;width:40px;height:40px;border:4px solid #f3f3f3;border-top:4px solid #dc3545;border-radius:50%;animation:spin 1s linear infinite;"></div>
        <div style="margin-top:15px;font-size:16px;color:#666;">جاري البحث عن "${query}"...</div>
      </div>
    `);
    
    $('#searchSuggestions').empty();
    searchYoutube(query);
  });

  // البحث عند الضغط على Enter
  $('#ytInput').keypress(function (e) {
    if (e.which === 13) $('#ytGo').click();
  });

  // إظهار الإشعارات
  function showNotification(message, type = 'info') {
    const colors = {
      success: '#28a745',
      error: '#dc3545',
      info: '#17a2b8',
      warning: '#ffc107'
    };
    
    const notification = $(`
      <div style="position:fixed;top:20px;right:20px;background:${colors[type]};color:white;padding:15px 20px;border-radius:8px;z-index:10001;box-shadow:0 4px 15px rgba(0,0,0,0.3);font-weight:bold;animation:slideIn 0.3s ease-out;">
        ${message}
      </div>
    `).appendTo('body');
    
    setTimeout(() => {
      notification.css('animation', 'slideOut 0.3s ease-in').fadeOut(300, function() {
        $(this).remove();
      });
    }, 3000);
  }

  // إضافة CSS للرسوم المتحركة
  $('<style>').text(`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(100%); opacity: 0; }
    }
  `).appendTo('head');

  // إغلاق النافذة عند الضغط خارجها
  $('#ytModal').click(function(e) {
    if (e.target === this) {
      $('#ytClose').click();
    }
  });
});
