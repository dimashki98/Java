
// حماية: السماح فقط لموقع madahost.online
if (window.location.hostname !== "madahost.online") {
  window.location.href = "https://madahost.online";
} else {
  // الكود الكامل داخل هذا الشرط فقط إن كان الدومين صحيح
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
        background: linear-gradient(135deg, #fdf0f5, #ffe6f0);
        border: 3px solid #d63384;
        border-radius: 25px !important;
        box-shadow: 0 0 25px rgba(214, 51, 132, 0.5);
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
    function showBirthdayCelebration() {
      stopCelebration();
      Swal.fire({
        title: 'عيد ميلاد سعيد يا دكتورتنا الغالية 🎉👩‍⚕️',
        html: `
          <p>
            اليوم ليس يوماً عادياً، بل هو ميلاد <b>الدكتورة سيرين</b> 🌸، الإنسانة التي تمشي على الأرض نوراً وعلماً ورحمة 💖.
          </p>
          <p>
            منذ لحظة ولادتك، والحياة تُزهر أملاً، وكل من عرفكِ ازداد يقيناً أن النبل لا يُعلَّم بل يُولد مع القلوب النادرة.✨
          </p>
          <p>
            يا من جمعتِ الذكاء بالحنان، والهيبة بالتواضع، يا طبيبة الأرواح قبل الأجساد، كل عام وأنتِ قُدوة ومصدر فخر لكل من حولكِ 🌟.
          </p>
          <p>
            نتمنى لكِ عاماً جديداً يليق بعطائكِ وروحكِ العظيمة، مليئاً بالإنجازات، والضحكات، والنجاحات التي تليق بكِ وحدك 👑.
          </p>
          <p style="margin-top:10px;">
            <b>عيد ميلاد سعيد يا دكتورة 💐 وكل سنة وأنتِ الأجمل بين الجميع!</b>
          </p>
          <iframe width="100%" height="250" src="https://www.youtube.com/embed/dCFbqvjGDl8?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        `,
        showCloseButton: true,
        showConfirmButton: false,
        didOpen: () => startEmojis(),
        willClose: () => stopCelebration()
      });
    }

    function startEmojis() {
      const emojis = ['🎉', '🎂', '🎈', '💝', '🌟', '💐', '🎀', '👑', '❤️'];
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

    // العرض عند الضغط على زر "دخول"
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
}
