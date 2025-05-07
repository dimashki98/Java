
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
      background: rgba(255, 255, 255, 0.9);
      border: 4px solid gold;
      border-radius: 20px !important;
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.6);
      font-family: 'Aref Ruqaa', sans-serif;
    }

    .swal2-title {
      color: #b8860b;
      font-size: 28px;
    }

    .swal2-html-container {
      font-size: 18px;
      color: #333;
    }
  </style>
`).appendTo("head");

$(() => {
  const observer = new MutationObserver(() => {
    const $btn = $('button:contains("دخول")');
    if ($btn.length && !$btn.data('listener')) {
      $btn.data('listener', true).on('click', function (e) {
        e.preventDefault();
        stopCelebration();

        // تشغيل الأغنية (استبدل الرابط بأغنية تخرج مناسبة)
        const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
        audio.play();
        window._audio = audio;

        // نافذة التخرج
        Swal.fire({
          title: 'ألف مبروك التخرج!',
          html: `
            <h3>نبارك للدكتورة <b>سيرين</b> تخرجها من كلية طب الأسنان!</h3>
            <iframe width="100%" height="250" src="https://www.youtube.com/embed/nFvElOX4JjQ?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          `,
          showCloseButton: true,
          showConfirmButton: false,
          didOpen: () => startEmojis(),
          willClose: () => stopCelebration()
        });
      });
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  function startEmojis() {
    const emojis = ['🎓', '🎉', '🥳', '🌟', '💐', '👏', '🎊', '❤️', '✨'];
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
    if (window._audio) {
      window._audio.pause();
      window._audio.currentTime = 0;
    }
  }
});
