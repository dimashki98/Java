$(function () {
  let lastTriggerTime = 0;

  function showRoyalImageWithSound() {
    const now = Date.now();
    if (now - lastTriggerTime < 3000) return;
    lastTriggerTime = now;

    const audio = new Audio('https://github.com/dimashki98/Java/raw/refs/heads/main/intro-205584.mp3');
    audio.play().catch(() => {});

    const royalImg = $('<img>', {
      src: 'https://up6.cc/2025/04/174481793968261.png',
      class: 'royal-entry-img'
    }).css({
      position: 'fixed',
      top: '20px',
      right: '-400px',
      width: '280px',
      height: 'auto',
      zIndex: 9999,
      borderRadius: '0px',
      opacity: 0
    });

    $('body').append(royalImg);

    royalImg.animate({ right: '20px', opacity: 1, width: '310px' }, 600, function () {
      $(this).animate({ width: '280px' }, 300);
    });

    // تبدأ بالاختفاء بعد 6.1 ثانية من الأنيميشن (ليصبح المجموع 8 ثواني)
    setTimeout(function () {
      royalImg.animate({
        opacity: 0,
        top: '-120px',
        width: '350px',
        height: '350px'
      }, 1000, function () {
        $(this).remove();
      });
    }, 6100); // 0.6 + 0.3 + 6.1 = 7 ثواني، بعدها يبدء 1 ثانية للاختفاء = 8
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
