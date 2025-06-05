$(function () {
  // إدراج أنيميشن وتحسينات تصميم عبر CSS
  const style = `
    <style>
      @keyframes swing-left-right {
        0% { transform: translateX(-50%) rotate(0deg); }
        25% { transform: translateX(-50%) rotate(3deg); }
        50% { transform: translateX(-50%) rotate(0deg); }
        75% { transform: translateX(-50%) rotate(-3deg); }
        100% { transform: translateX(-50%) rotate(0deg); }
      }

      #eid-thread {
        animation: swing-left-right 3s ease-in-out infinite;
      }

      .gold-thread {
        width: 3px;
        height: 100px;
        background: linear-gradient(to bottom, #ffd700, #fff8dc);
        box-shadow: 0 0 5px #ffd700;
      }

      #eid-btn {
        background: radial-gradient(circle at top left, #fffbe6, #ffefb0);
        border: none;
        border-radius: 50%;
        font-size: 30px;
        padding: 10px;
        cursor: pointer;
        box-shadow: 0 0 15px gold, 0 0 5px #fff;
        transition: transform 0.3s;
      }

      #eid-btn:hover {
        transform: scale(1.1);
      }
    </style>
  `;
  $('head').append(style);

  // إضافة الخيط والزر
  $('body').append(`
    <div id="eid-thread" style="position: fixed; top: -120px; left: 50%; transform: translateX(-50%); z-index: 9999; display: flex; flex-direction: column; align-items: center;">
      <div class="gold-thread"></div>
      <button id="eid-btn">🐑</button>
    </div>
  `);

  // تحريك الخيط للأسفل أول مرة
  $('#eid-thread').animate({ top: '10px' }, 1000, 'swing');

  let emojiInterval;

  // تحميل SweetAlert2
  $.getScript("https://cdn.jsdelivr.net/npm/sweetalert2@11", function () {
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

      // عرض نافذة SweetAlert
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
          clearInterval(emojiInterval); // إيقاف الإيموجيات
        }
      });
    });
  });
});
