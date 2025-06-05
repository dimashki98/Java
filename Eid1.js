$(function () {
  // إدراج أنيميشن للخروف عبر CSS
  const style = `
    <style>
      @keyframes wiggle {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(5deg); }
        50% { transform: rotate(0deg); }
        75% { transform: rotate(-5deg); }
        100% { transform: rotate(0deg); }
      }

      #eid-btn {
        animation: wiggle 1s infinite;
      }
    </style>
  `;
  $('head').append(style);

  // إضافة الخيط والزر
  $('body').append(`
    <div id="eid-thread" style="position: fixed; top: -100px; left: 50%; transform: translateX(-50%); z-index: 9999; display: flex; flex-direction: column; align-items: center;">
      <div style="width: 2px; height: 100px; background: #aaa;"></div>
      <button id="eid-btn" style="background: #fffbe6; border: 2px solid #ffd700; border-radius: 50%; font-size: 30px; padding: 10px; cursor: pointer; box-shadow: 0 0 10px gold;">
        🐑
      </button>
    </div>
  `);

  // تحريك الخيط من الأعلى للأسفل
  $('#eid-thread').animate({ top: '10px' }, 1000, 'swing');

  let emojiInterval;

  // تحميل SweetAlert2
  $.getScript("https://cdn.jsdelivr.net/npm/sweetalert2@11", function () {
    // عند الضغط على زر الخروف
    $('#eid-btn').on('click', function () {
      // بدء تساقط الإيموجي
      emojiInterval = setInterval(function () {
        const emojis = ['🐑', '🌙', '🕌', '🎉', '🎊', '✨', '💫'];
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        const size = Math.random() * 24 + 24;
        const left = Math.random() * $(window).width();
        const duration = Math.random() * 3000 + 3000;

        const $el = $('<div>').text(emoji).css({
          position: 'fixed',
          top: '-50px',
          left: left + 'px',
          fontSize: size + 'px',
          zIndex: 9999,
          opacity: 0.9,
          pointerEvents: 'none'
        }).appendTo('body');

        $el.animate({ top: $(window).height() + 'px', opacity: 0.1 }, duration, function () {
          $el.remove();
        });
      }, 400);

      // عرض نافذة العيد
      Swal.fire({
        title: '🎉 عيد أضحى مبارك! 🎉',
        html: `
          <p style="font-size:18px;">✨ تقبل الله طاعاتكم، وأعاد عليكم العيد باليُمن والبركات ✨</p>
          <p style="font-size:16px; color: #555;">🕌 اللهم اجعل هذا العيد فرحة للمسلمين، وسعادة تغمر القلوب 🤲</p>
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/VXTTfNvg7SU" frameborder="0" allowfullscreen></iframe>
        `,
        confirmButtonText: '🎊 كل عام وأنتم بخير',
        background: '#fffbe6',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://i.gifer.com/origin/72/7267c364ae6b1b1e81c2b7a4f45fda48_w200.gif")
          left top
          no-repeat
        `,
        color: '#b8860b',
        willClose: () => {
          clearInterval(emojiInterval); // إيقاف الإيموجي عند الإغلاق
        }
      });
    });
  });
});
