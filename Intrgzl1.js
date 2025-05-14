$(function () {
  let lastTriggerTime = 0;

  function showRoyalImageWithSound() {
    const now = Date.now();
    if (now - lastTriggerTime < 3000) return;
    lastTriggerTime = now;

    // تشغيل الصوت
    const audio = new Audio('https://github.com/dimashki98/Java/raw/refs/heads/main/intro-205584.mp3');
    audio.play().catch(() => {});

    // إنشاء الصورة
    const royalImg = $('<img>', {
      src: 'https://up6.cc/2025/05/174723614328581.png',
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

    // بدء تساقط الإيموجي
    startEmojis();

    // إيقاف التساقط بعد 5 ثواني
    setTimeout(stopCelebration, 5000);
  }

  // كود التساقط
  function startEmojis() {
    const emojis = ['🎓', '🎉', '💖', '💐', '🌸', '🎀', '👩‍⚕️', '✨', '❤️'];
    window._emojiInterval = setInterval(() => {
      const emoji = $('<div class="emoji">' + emojis[Math.floor(Math.random() * emojis.length)] + '</div>');
      const left = Math.random() * 100 + 'vw';
      const size = (Math.random() * 1.5 + 1).toFixed(2) + 'rem';
      const duration = (Math.random() * 3 + 3).toFixed(2) + 's';

      emoji.css({
        left: left,
        fontSize: size,
        animation: `fall ${duration} linear`,
      });

      $('body').append(emoji);
      setTimeout(() => emoji.remove(), parseFloat(duration) * 1000);
    }, 250);
  }

  function stopCelebration() {
    clearInterval(window._emojiInterval);
    $('.emoji').remove();
  }

  // راقب الرسائل الجديدة
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

  // إضافة CSS للتساقط
  $(`
    <style>
      .emoji {
        position: fixed;
        top: -50px;
        font-size: 2rem;
        z-index: 99999;
        pointer-events: none;
        user-select: none;
        animation: fall linear;
      }

      @keyframes fall {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translateY(100vh) rotate(360deg);
          opacity: 0;
        }
      }
    </style>
  `).appendTo("head");
});
