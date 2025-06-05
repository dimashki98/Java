$(function () {
  // إدراج أنيميشن وتحسينات تصميم عبر CSS محسّنة
  const style = `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
      
      @keyframes swing-left-right {
        0% { transform: translateX(-50%) rotate(0deg); }
        25% { transform: translateX(-50%) rotate(5deg); }
        50% { transform: translateX(-50%) rotate(0deg); }
        75% { transform: translateX(-50%) rotate(-5deg); }
        100% { transform: translateX(-50%) rotate(0deg); }
      }

      @keyframes glow-pulse {
        0%, 100% { box-shadow: 0 0 20px #ffd700, 0 0 40px #ffd700, 0 0 60px #ffd700; }
        50% { box-shadow: 0 0 30px #ffed4e, 0 0 60px #ffed4e, 0 0 90px #ffed4e; }
      }

      @keyframes float-up-down {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }

      @keyframes sparkle {
        0%, 100% { opacity: 0; transform: scale(0); }
        50% { opacity: 1; transform: scale(1); }
      }

      #eid-thread {
        animation: swing-left-right 4s ease-in-out infinite;
        filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.7));
      }

      .gold-thread {
        width: 4px;
        height: 120px;
        background: linear-gradient(to bottom, #ffd700, #ffed4e, #fff8dc);
        box-shadow: 0 0 10px #ffd700, inset 0 0 5px rgba(255, 255, 255, 0.5);
        border-radius: 2px;
        position: relative;
      }

      .gold-thread::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        height: 100%;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), transparent);
        border-radius: 1px;
      }

      #eid-btn {
        background: radial-gradient(circle at 30% 30%, #fffbe6, #ffefb0, #ffd700);
        border: 3px solid #ffd700;
        border-radius: 50%;
        font-size: 35px;
        padding: 15px;
        cursor: pointer;
        transition: all 0.3s ease;
        animation: glow-pulse 2s ease-in-out infinite, float-up-down 3s ease-in-out infinite;
        position: relative;
        overflow: hidden;
      }

      #eid-btn:hover {
        transform: scale(1.15);
        animation-play-state: paused;
        box-shadow: 0 0 30px #ffd700, 0 0 60px #ffd700, 0 0 90px #ffd700;
      }

      #eid-btn::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transform: rotate(45deg);
        transition: all 0.5s;
        opacity: 0;
      }

      #eid-btn:hover::before {
        animation: shine 0.5s ease-in-out;
        opacity: 1;
      }

      @keyframes shine {
        0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
        100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
      }

      .sparkle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: #ffd700;
        border-radius: 50%;
        animation: sparkle 1.5s ease-in-out infinite;
      }

      .falling-emoji {
        position: fixed;
        pointer-events: none;
        z-index: 9998;
        animation: fall linear, rotate linear;
        animation-duration: inherit;
      }

      @keyframes fall {
        to { transform: translateY(calc(100vh + 100px)) rotate(360deg); }
      }

      @keyframes rotate {
        to { transform: rotate(360deg); }
      }

      .eid-firework {
        position: fixed;
        pointer-events: none;
        z-index: 9997;
      }

      @keyframes firework {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(1); opacity: 0; }
      }

      /* تحسينات SweetAlert */
      .swal2-popup {
        font-family: 'Amiri', serif !important;
        border-radius: 20px !important;
        border: 3px solid #ffd700 !important;
      }

      .swal2-title {
        color: #b8860b !important;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.1) !important;
      }

      .swal2-confirm {
        background: linear-gradient(45deg, #ffd700, #ffed4e) !important;
        border: none !important;
        border-radius: 25px !important;
        font-weight: bold !important;
        font-size: 16px !important;
        padding: 12px 30px !important;
        box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4) !important;
      }

      .swal2-confirm:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 20px rgba(255, 215, 0, 0.6) !important;
      }
    </style>
  `;
  $('head').append(style);

  // إضافة الخيط والزر مع تأثيرات إضافية
  $('body').append(`
    <div id="eid-thread" style="position: fixed; top: -150px; left: 50%; transform: translateX(-50%); z-index: 9999; display: flex; flex-direction: column; align-items: center;">
      <div class="gold-thread"></div>
      <button id="eid-btn">🐑</button>
    </div>
  `);

  // إضافة نجوم متلألئة حول الزر
  function addSparkles() {
    for (let i = 0; i < 6; i++) {
      const sparkle = $('<div class="sparkle"></div>');
      const angle = (i * 60) * Math.PI / 180;
      const distance = 80;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      
      sparkle.css({
        left: `calc(50% + ${x}px)`,
        top: `${y + 140}px`,
        animationDelay: `${i * 0.2}s`
      });
      
      $('#eid-thread').append(sparkle);
    }
  }

  // تحريك الخيط للأسفل أول مرة مع تأثير مرن
  $('#eid-thread').animate({ top: '10px' }, 1500, 'easeOutBounce', function() {
    addSparkles();
  });

  let emojiInterval;
  let fireworkInterval;

  // تحميل SweetAlert2 مع تحسينات
  $.getScript("https://cdn.jsdelivr.net/npm/sweetalert2@11", function () {
    $('#eid-btn').on('click', function () {
      
      // إضافة تأثير اهتزاز للزر
      $(this).addClass('animate__animated animate__pulse');
      
      // بدء تساقط الإيموجي المحسّن
      emojiInterval = setInterval(function () {
        const emojis = ['🐑', '🐐', '🌙', '🕌', '🎉', '🎊', '✨', '💫', '⭐', '🌟', '🎈', '🎁', '🕊️', '🤲', '📿'];
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        const size = Math.random() * 30 + 25;
        const left = Math.random() * $(window).width();
        const duration = Math.random() * 4000 + 4000;
        const rotationSpeed = Math.random() * 2 + 1;

        const $el = $('<div class="falling-emoji">').text(emoji).css({
          top: '-80px',
          left: left + 'px',
          fontSize: size + 'px',
          animationDuration: duration + 'ms',
          opacity: 0.9,
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }).appendTo('body');

        setTimeout(() => $el.remove(), duration);
      }, 300);

      // إضافة تأثيرات الألعاب النارية
      fireworkInterval = setInterval(function() {
        const colors = ['#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
        const x = Math.random() * $(window).width();
        const y = Math.random() * $(window).height() * 0.7;
        
        for (let i = 0; i < 8; i++) {
          const firework = $('<div class="eid-firework">').css({
            left: x + 'px',
            top: y + 'px',
            width: '4px',
            height: '4px',
            background: colors[Math.floor(Math.random() * colors.length)],
            borderRadius: '50%',
            animation: `firework 1s ease-out ${i * 0.1}s`
          }).appendTo('body');
          
          setTimeout(() => firework.remove(), 1000);
        }
      }, 2000);

      // عرض نافذة SweetAlert محسّنة
      Swal.fire({
        title: '🎉 عيد أضحى مبارك! 🎉',
        html: `
          <div style="text-align: center; padding: 20px;">
            <div style="font-size: 60px; margin-bottom: 20px; animation: bounce 2s infinite;">🐑🌙🕌</div>
            <p style="font-size: 20px; color: #b8860b; margin-bottom: 15px; line-height: 1.6;">
              ✨ تقبل الله طاعاتكم، وأعاد عليكم العيد باليُمن والبركات ✨
            </p>
            <p style="font-size: 18px; color: #8b7355; margin-bottom: 20px; line-height: 1.5;">
              🕌 اللهم اجعل هذا العيد فرحة للمسلمين، وسعادة تغمر القلوب 🤲
            </p>
            <div style="display: flex; justify-content: center; gap: 15px; margin: 20px 0; font-size: 40px;">
              <span style="animation: pulse 2s infinite;">🎊</span>
              <span style="animation: pulse 2s infinite 0.5s;">✨</span>
              <span style="animation: pulse 2s infinite 1s;">🎉</span>
            </div>
            <p style="font-size: 16px; color: #666; font-style: italic;">
              "وَبَشِّرِ الْمُحْسِنِينَ" 🌟
            </p>
          </div>
        `,
        confirmButtonText: '🎊 كل عام وأنتم بخير 🎊',
        background: 'linear-gradient(135deg, #fffbe6 0%, #fff8dc 100%)',
        backdrop: `
          rgba(184, 134, 11, 0.4)
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffd700' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
          left top
          repeat
        `,
        color: '#b8860b',
        showClass: {
          popup: 'animate__animated animate__zoomIn'
        },
        hideClass: {
          popup: 'animate__animated animate__zoomOut'
        },
        timer: 15000,
        timerProgressBar: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        willClose: () => {
          clearInterval(emojiInterval);
          clearInterval(fireworkInterval);
          $('.falling-emoji, .eid-firework').remove();
        }
      }).then(() => {
        // تأثير نهائي عند الإغلاق
        for (let i = 0; i < 20; i++) {
          setTimeout(() => {
            const finalEmoji = $('<div>').text('✨').css({
              position: 'fixed',
              top: '50%',
              left: '50%',
              fontSize: '30px',
              zIndex: 10000,
              pointerEvents: 'none',
              animation: `firework 2s ease-out`
            }).appendTo('body');
            
            setTimeout(() => finalEmoji.remove(), 2000);
          }, i * 100);
        }
      });
    });
  });

  // إضافة تأثيرات CSS للحركة
  $('head').append(`
    <style>
      @keyframes bounce {
        0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
        40%, 43% { transform: translate3d(0,-30px,0); }
        70% { transform: translate3d(0,-15px,0); }
        90% { transform: translate3d(0,-4px,0); }
      }
      
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
      }
    </style>
  `);

  // إضافة Animate.css للتأثيرات الإضافية
  $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">');
});
