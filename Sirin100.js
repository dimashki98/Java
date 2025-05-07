
$(`
  <style>
    .emoji {
      position: fixed;
      top: -50px;
      font-size: 2rem;
      animation: fall linear;
      z-index: 99999;
      pointer-events: none;
      user-select: none;
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

    .swal2-popup {
      background: linear-gradient(135deg, #ffe6f0, #fff0f5);
      border: 3px solid #ff69b4;
      border-radius: 25px !important;
      box-shadow: 0 0 25px rgba(255, 105, 180, 0.5);
      font-family: 'Aref Ruqaa', sans-serif;
    }

    .swal2-title {
      color: #d63384;
      font-size: 28px;
    }

    .swal2-html-container {
      font-size: 18px;
      color: #6c216d;
      text-align: right;
    }
  </style>
`).appendTo("head");

$(() => {
  function showCongratulations() {
    stopCelebration();
    Swal.fire({
      title: 'تهانينا يا دكتورة سيرين!',
      html: `
        <p>
          بأجمل عبارات الفرح والسرور، نبارك للدكتورة <b>سيرين</b> تخرجها من كلية طب الأسنان.<br><br>
          لقد تكللت مسيرتكِ بالنجاح بعد سنوات من الجدّ والاجتهاد، فهنيئاً لكِ هذا الإنجاز العظيم.
        </p>
        <p style="margin-top:10px;">
          نسأل الله أن يفتح لكِ أبواب الرزق، ويبارك لكِ في علمكِ وعملكِ، ويجعل التوفيق حليفكِ أينما كنتِ.<br>
          <b>ومن نجاحٍ إلى نجاح بإذن الله.</b>
        </p>
        <iframe width="100%" height="250" src="https://www.youtube.com/embed/xCc2vdV3KJY?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      `,
      showCloseButton: true,
      showConfirmButton: false,
      didOpen: () => startEmojis(),
      willClose: () => stopCelebration()
    });
  }

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
        animationDuration: duration
      });

      $('body').append(emoji);
      setTimeout(() => emoji.remove(), parseFloat(duration) * 1000);
    }, 250);
  }

  function stopCelebration() {
    clearInterval(window._emojiInterval);
    $('.emoji').remove();
  }

  // العرض عند تحميل الصفحة
  showCongratulations();

  // العرض عند الضغط على زر دخول
  const observer = new MutationObserver(() => {
    const $btn = $('button:contains("دخول")');
    if ($btn.length && !$btn.data('listener')) {
      $btn.data('listener', true).on('click', function (e) {
        e.preventDefault();
        showCongratulations();
      });
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
