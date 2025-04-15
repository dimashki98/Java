$(function () {
  let lastTriggerTime = 0;

  // مراقبة وجود الصورة وحذفها فورًا إذا ظهرت
  setInterval(function () {
    $('img[src="imgs/12.gif"]').remove();
  }, 100); // تحقق كل 100 ملي ثانية

  function showRoyalImageWithSound() {
    const now = Date.now();
    if (now - lastTriggerTime < 3000) return; // منع التكرار خلال 3 ثواني
    lastTriggerTime = now;

    // تشغيل الصوت فوراً
    const audio = new Audio('https://github.com/dimashki98/Java/raw/refs/heads/main/intro-205584.mp3');
    audio.play().catch(() => {});

    // عرض الصورة المتحركة
    const royalImg = $('<img>', {
      src: 'https://up6.cc/2025/04/174469794046571.png',
      class: 'royal-entry-img'
    }).css({
      position: 'fixed',
      top: '20px',
      left: '-350px',
      width: '220px',
      height: 'auto',
      zIndex: 9999,
      borderRadius: '0px',
      opacity: 0
    });

    $('body').append(royalImg);

    royalImg.animate({ left: '20px', opacity: 1, width: '250px' }, 600, function () {
      $(this).animate({ width: '220px' }, 300);
    });

    setTimeout(function () {
      royalImg.animate({
        opacity: 0,
        top: '-100px',
        width: '300px',
        height: '300px'
      }, 1000, function () {
        $(this).remove();
      });
    }, 3000);
  }

  const observer = new MutationObserver(function () {
    $('.uzr').each(function () {
      const $this = $(this);
      const msg = $this.find('.u-msg').text().trim();
      const topic = $this.find('.u-topic').text().trim();

      if (msg.includes('هذا المستخدم قد دخل') && topic === 'MDX' && !$this.hasClass('mdx-msg')) {
        $this.addClass('mdx-msg');
        showRoyalImageWithSound();
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});
