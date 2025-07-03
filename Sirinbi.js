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
      background: linear-gradient(135deg, #fff3f8, #ffe6f0);
      border: 3px solid #ff66cc;
      border-radius: 25px !important;
      box-shadow: 0 0 25px rgba(255, 105, 180, 0.5);
      font-family: 'Aref Ruqaa', sans-serif;
    }

    .swal2-title {
      color: #e60073;
      font-size: 30px;
    }

    .swal2-html-container {
      font-size: 18px;
      color: #7b1c5b;
      text-align: right;
    }
  </style>
`).appendTo("head");

$(() => {
  function showBirthdayCelebration() {
    stopCelebration();
    Swal.fire({
      title: 'عيد ميلاد سعيد دكتورة سيرين!',
      html: `
        <p>
          🎉🎂 كل سنة وأنتِ بألف خير يا دكتورة <b>سيرين</b>! 🎂🎉<br><br>
          في هذا اليوم المميز، نتمنى لكِ أياماً مليئة بالسعادة والنجاح والإنجازات، تمامًا كما كنتِ دائماً مصدر إلهام وفخر لكل من حولك.
        </p>
        <p style="margin-top:10px;">
          <b>أسأل الله أن يجعل عامكِ الجديد مليئًا بالأفراح،</b><br>
          وأن يحقق لكِ فيه ما تتمنين وأكثر ❤️<br><br>
          دمتِ متألقة ومزدهرة عامًا بعد عام 🌸
        </p>
        <iframe width="100%" height="250" src="https://www.youtube.com/embed/ETpzRpK2KVQ?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      `,
      showCloseButton: true,
      showConfirmButton: false,
      didOpen: () => startEmojis(),
      willClose: () => stopCelebration()
    });
  }

  function startEmojis() {
    const emojis = ['🎉', '🎂', '🎁', '🎈', '💖', '🌸', '💐', '🦋', '✨', '❤️'];
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
  showBirthdayCelebration();

  // العرض عند الضغط على زر دخول
  const observer = new MutationObserver(() => {
    const $btn = $('button:contains("دخول")');
    if ($btn.length && !$btn.data('listener')) {
      $btn.data('listener', true).on('click', function (e) {
        e.preventDefault();
        showBirthdayCelebration();
      });
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
