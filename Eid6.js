
$(function () {
  // إدراج CSS للتصميم
  $('head').append(`
    <style>
      @keyframes swing-left-right {
        0%, 100% { transform: translateX(-50%) rotate(0deg); }
        25% { transform: translateX(-50%) rotate(3deg); }
        75% { transform: translateX(-50%) rotate(-3deg); }
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

      canvas.fireworks-canvas {
        position: fixed;
        top: 0; left: 0;
        width: 100% !important;
        height: 100% !important;
        pointer-events: none;
        z-index: 9998;
      }
    </style>
  `);

  // زر العيد والخيط
  $('body').append(`
    <div id="eid-thread" style="position: fixed; top: -120px; left: 50%; transform: translateX(-50%); z-index: 9999; display: flex; flex-direction: column; align-items: center;">
      <div class="gold-thread"></div>
      <button id="eid-btn">🐑</button>
    </div>
  `);

  // تحريك الزر للأسفل أول مرة
  $('#eid-thread').animate({ top: '10px' }, 1000, 'swing');

  let emojiInterval;
  let fireworks;

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
    }, 300);

    // عرض نافذة التهنئة
    Swal.fire({
      title: '🎉 عيد أضحى مبارك! 🎉',
      html: `
        <p style="font-size:18px;">✨ تقبل الله طاعاتكم، وأعاد عليكم العيد باليُمن والبركات ✨</p>
        <p style="font-size:16px; color: #555;">🕌 اللهم اجعل هذا العيد فرحة للمسلمين، وسعادة تغمر القلوب 🤲</p>
        <iframe width="100%" height="200" src="https://www.youtube.com/embed/VXTTfNvg7SU" frameborder="0" allowfullscreen></iframe>
      `,
      confirmButtonText: '🎊 كل عام وأنتم بخير',
      background: '#fffbe6',
      color: '#b8860b',
      backdrop: `
        rgba(0,0,0,0.4)
        url("https://i.gifer.com/origin/72/7267c364ae6b1b1e81c2b7a4f45fda48_w200.gif")
        left top
        no-repeat
      `,
      willClose: () => {
        clearInterval(emojiInterval);
        if (fireworks) fireworks.stop();
      }
    });

    // تشغيل الألعاب النارية
    const container = document.createElement('div');
    document.body.appendChild(container);
    fireworks = new Fireworks(container, {
      autoresize: true,
      opacity: 0.5,
      acceleration: 1.05,
      friction: 0.97,
      gravity: 1.5,
      particles: 100,
      traceLength: 3,
      traceSpeed: 10,
      explosion: 6,
      intensity: 30,
      flickering: 50,
      lineStyle: 'round',
      hue: { min: 0, max: 360 },
      delay: { min: 15, max: 30 },
      rocketsPoint: { min: 50, max: 50 },
      lineWidth: { explosion: { min: 1, max: 3 }, trace: { min: 1, max: 2 } },
      brightness: { min: 50, max: 80 },
      decay: { min: 0.015, max: 0.03 },
    });
    fireworks.start();
  });
});
