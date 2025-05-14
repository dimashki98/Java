$(function () {
  let lastTriggerTime = 0;

  function showRoyalImageWithSound() {
    const now = Date.now();
    if (now - lastTriggerTime < 3000) return;
    lastTriggerTime = now;

    // تشغيل الصوت
    const audio = new Audio('https://github.com/dimashki98/Java/raw/refs/heads/main/cinematic-intro-3-40041.mp3');
    audio.play().catch(() => {});

    // إنشاء الصورة
    const royalImg = $('<img>', {
      src: 'https://up6.cc/2025/05/174723635782151.png',
      class: 'royal-entry-img'
    }).css({
      position: 'fixed',
      top: '5px', // مرفوعة لفوق
      left: '-400px',
      width: '260px',
      height: 'auto',
      zIndex: 9999,
      borderRadius: '0px',
      opacity: 0
    });

    $('body').append(royalImg);

    royalImg.animate({ left: '20px', opacity: 1, width: '300px' }, 800, function () {
      $(this).animate({ width: '260px' }, 400);
    });

    setTimeout(function () {
      royalImg.animate({
        opacity: 0,
        top: '-100px',
        width: '320px',
        height: 'auto'
      }, 1000, function () {
        $(this).remove();
      });
    }, 8000); // مدة العرض 8 ثواني

    // بدء تساقط الإيموجي
    startEmojis();

    // إيقاف التساقط بعد 8 ثواني
    setTimeout(stopCelebration, 8000);
  }

  // كود التساقط
  function startEmojis() {
    const emojis = ['💖', '💸', '💅', '🌸', '🎀', '💐', '🩷', '👛', '👠'];
    window._emojiInterval = setInterval(() => {
      const emoji = $('<div class="emoji">' + emojis[Math.floor(Math.random() * emojis.length)] + '</div>');
      const left = Math.random() * 100 + 'vw';
      const size = (Math.random() * 1.5 + 2.5).toFixed(2) + 'rem'; // حجم كبير
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
