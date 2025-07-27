$(`
  <style>
    body {
      overflow-x: hidden;
    }
    
    .emoji {
      position: fixed;
      top: -50px;
      font-size: 2.5rem;
      animation: fall linear;
      z-index: 99999;
      pointer-events: none;
      user-select: none;
      filter: drop-shadow(0 0 10px rgba(255, 20, 147, 0.7));
    }
    
    @keyframes fall {
      0% {
        transform: translateY(0) rotate(0deg) scale(0.5);
        opacity: 0;
      }
      10% {
        opacity: 1;
        transform: translateY(10vh) rotate(36deg) scale(1);
      }
      90% {
        opacity: 1;
        transform: translateY(90vh) rotate(324deg) scale(1);
      }
      100% {
        transform: translateY(100vh) rotate(360deg) scale(0.5);
        opacity: 0;
      }
    }
    
    .confetti {
      position: fixed;
      width: 8px;
      height: 8px;
      animation: confetti-fall linear;
      z-index: 99998;
      border-radius: 50%;
    }
    
    @keyframes confetti-fall {
      0% {
        transform: translateY(-100vh) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
      }
    }
    
    .sparkle {
      position: fixed;
      width: 4px;
      height: 4px;
      background: gold;
      border-radius: 50%;
      animation: sparkle-animation linear;
      z-index: 99997;
      box-shadow: 0 0 6px gold;
    }
    
    @keyframes sparkle-animation {
      0% {
        transform: translateY(100vh) scale(0);
        opacity: 0;
      }
      50% {
        transform: translateY(50vh) scale(1);
        opacity: 1;
      }
      100% {
        transform: translateY(-10vh) scale(0);
        opacity: 0;
      }
    }
    
    .swal2-popup {
      background: linear-gradient(135deg, #fff0f8 0%, #ffe6f2 25%, #ffd6e8 50%, #ffb3d9 75%, #ff99cc 100%);
      border: 4px solid;
      border-image: linear-gradient(45deg, #ff1493, #ff69b4, #ffc0cb, #ff1493) 1;
      border-radius: 35px !important;
      box-shadow: 
        0 0 40px rgba(255, 20, 147, 0.8),
        0 0 80px rgba(255, 105, 180, 0.4),
        inset 0 0 30px rgba(255, 255, 255, 0.3);
      font-family: 'Aref Ruqaa', 'Cairo', sans-serif;
      position: relative;
      overflow: hidden;
      animation: popup-glow 3s ease-in-out infinite;
    }
    
    @keyframes popup-glow {
      0%, 100% { 
        box-shadow: 
          0 0 40px rgba(255, 20, 147, 0.8),
          0 0 80px rgba(255, 105, 180, 0.4),
          inset 0 0 30px rgba(255, 255, 255, 0.3);
      }
      50% { 
        box-shadow: 
          0 0 60px rgba(255, 20, 147, 1),
          0 0 120px rgba(255, 105, 180, 0.6),
          inset 0 0 50px rgba(255, 255, 255, 0.5);
      }
    }
    
    .swal2-popup::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: conic-gradient(
        from 0deg,
        rgba(255,182,193,0.1) 0deg,
        rgba(255,20,147,0.2) 90deg,
        rgba(255,105,180,0.1) 180deg,
        rgba(255,182,193,0.2) 270deg,
        rgba(255,182,193,0.1) 360deg
      );
      animation: rainbow-spin 8s linear infinite;
      z-index: -1;
    }
    
    @keyframes rainbow-spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    .swal2-title {
      color: #c2185b;
      font-size: 36px;
      text-shadow: 
        2px 2px 4px rgba(194, 24, 91, 0.5),
        0 0 20px rgba(255, 20, 147, 0.3);
      margin-bottom: 25px;
      animation: title-pulse 2s ease-in-out infinite;
    }
    
    @keyframes title-pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    .swal2-html-container {
      font-size: 19px;
      color: #880e4f;
      text-align: center;
      line-height: 2;
      text-shadow: 1px 1px 2px rgba(136, 14, 79, 0.1);
    }
    
    .birthday-text {
      background: linear-gradient(45deg, #e91e63, #f06292, #f8bbd9, #e91e63);
      background-size: 300% 300%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: bold;
      animation: gradient-text 3s ease infinite;
    }
    
    @keyframes gradient-text {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    .heart-float {
      display: inline-block;
      animation: heart-float 2s ease-in-out infinite;
      color: #ff1493;
      filter: drop-shadow(0 0 5px #ff1493);
    }
    
    @keyframes heart-float {
      0%, 100% { transform: translateY(0px) scale(1); }
      50% { transform: translateY(-10px) scale(1.1); }
    }
    
    .gift-shake {
      display: inline-block;
      animation: gift-shake 1.5s ease-in-out infinite;
    }
    
    @keyframes gift-shake {
      0%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(-3deg); }
      75% { transform: rotate(3deg); }
    }
    
    iframe {
      border-radius: 20px !important;
      box-shadow: 
        0 8px 25px rgba(233, 30, 99, 0.4),
        0 0 20px rgba(255, 105, 180, 0.3) !important;
      border: 3px solid rgba(255, 20, 147, 0.3) !important;
      transition: all 0.3s ease;
    }
    
    iframe:hover {
      transform: scale(1.02);
      box-shadow: 
        0 12px 35px rgba(233, 30, 99, 0.6),
        0 0 30px rgba(255, 105, 180, 0.5) !important;
    }
    
    /* زر الإغلاق المخصص */
    .close-celebration-btn {
      position: fixed !important;
      top: 20px !important;
      right: 20px !important;
      z-index: 999999 !important;
      background: linear-gradient(45deg, #ff1493, #ff69b4) !important;
      color: white !important;
      border: none !important;
      padding: 12px 25px !important;
      border-radius: 30px !important;
      cursor: pointer !important;
      font-size: 16px !important;
      font-weight: bold !important;
      box-shadow: 0 6px 20px rgba(255,20,147,0.5) !important;
      transition: all 0.3s ease !important;
      animation: close-btn-glow 2s ease-in-out infinite !important;
    }
    
    .close-celebration-btn:hover {
      transform: translateY(-3px) scale(1.05) !important;
      box-shadow: 0 10px 30px rgba(255,20,147,0.7) !important;
    }
    
    @keyframes close-btn-glow {
      0%, 100% { 
        box-shadow: 0 6px 20px rgba(255,20,147,0.5) !important;
      }
      50% { 
        box-shadow: 0 8px 25px rgba(255,20,147,0.8) !important;
      }
    }
  </style>
`).appendTo("head");

$(() => {
  let celebrationActive = false;
  
  function showBirthdayCelebration() {
    if (celebrationActive) return;
    
    celebrationActive = true;
    startAllEffects();
    
    // إضافة زر الإغلاق
    $('body').append(`
      <button class="close-celebration-btn" onclick="closeCelebration()">
        ❌ إغلاق
      </button>
    `);
    
    Swal.fire({
      title: '🎂 كل عام وأنتِ بخير غرام! 🎂',
      html: `
        <div style="text-align: center; padding: 25px;">
          <div style="font-size: 28px; margin-bottom: 20px;">
            ✨ <span class="birthday-text">عيد ميلاد سعيد يا أجمل غرام</span> ✨
          </div>
          
          <div style="background: linear-gradient(45deg, rgba(255,182,193,0.3), rgba(255,20,147,0.1)); padding: 20px; border-radius: 15px; margin: 20px 0; border: 2px solid rgba(255,105,180,0.3);">
            <p style="margin-bottom: 15px; font-size: 20px;">
              في هذا اليوم المميز، نتمنى لكِ عاماً مليئاً بالفرح والسعادة والأحلام المحققة
              <span class="heart-float">💖</span>
            </p>
            <p style="margin-bottom: 15px;">
              <span class="birthday-text">كل عام وأنتِ نور يضيء حياة من حولكِ</span> 🌟<br>
              وأن تكون كل أيامكِ مليئة بالحب والضحك والبهجة
            </p>
          </div>
          
          <div style="background: rgba(255,255,255,0.7); padding: 15px; border-radius: 12px; margin: 15px 0;">
            <p style="color: #c2185b; font-weight: bold; font-size: 18px;">
              🌸 نسأل الله أن يحفظكِ ويسعدكِ 🌸<br>
              <span class="birthday-text">وأن يحقق لكِ كل ما تتمنينه قلبكِ الطيب</span>
            </p>
          </div>
          
          <div style="font-size: 24px; margin: 20px 0;">
            <span class="gift-shake">🎁</span>
            <span class="heart-float">💕</span>
            <span class="gift-shake">🎈</span>
            <span class="heart-float">🌺</span>
            <span class="gift-shake">🎀</span>
          </div>
          
          <p style="font-size: 22px; color: #e91e63; font-weight: bold; margin: 20px 0;">
            🎈 <span class="birthday-text">عقبال 100 سنة يا غالية</span> 🎈
          </p>
          
          <iframe width="100%" height="300" 
                  src="https://www.youtube.com/embed/Uy_C_th5dn0?autoplay=1&loop=1&playlist=Uy_C_th5dn0" 
                  frameborder="0" 
                  allow="autoplay; encrypted-media" 
                  allowfullscreen>
          </iframe>
          
          <p style="font-size: 16px; color: #c2185b; margin-top: 15px; font-style: italic;">
            🎵 أغنية خاصة لأجمل غرام في الدنيا 🎵
          </p>
          
          <div style="margin-top: 20px; padding: 15px; background: rgba(255,20,147,0.1); border-radius: 10px;">
            <p style="color: #c2185b; font-size: 14px;">
              💡 <strong>نصيحة:</strong> يمكنك إغلاق الاحتفال بالضغط على الزر الأحمر في أعلى الصفحة
            </p>
          </div>
        </div>
      `,
      showCloseButton: false,
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      width: '700px',
      willClose: () => closeCelebration()
    });
  }

  // دالة إغلاق الاحتفال
  window.closeCelebration = function() {
    celebrationActive = false;
    stopAllEffects();
    $('.close-celebration-btn').remove();
    Swal.close();
  };

  function startAllEffects() {
    startBirthdayEmojis();
    startConfetti();
    startSparkles();
  }

  function startBirthdayEmojis() {
    const birthdayEmojis = [
      '🎂', '🎉', '🎈', '🎁', '🌸', '💖', '🎀', '✨', '🌟', '💐', 
      '🦋', '🌺', '💕', '🎊', '🥳', '🍰', '🎵', '🌈', '💫', '⭐'
    ];
    
    window._emojiInterval = setInterval(() => {
      if (!celebrationActive) return;
      
      const emoji = $('<div class="emoji">' + 
        birthdayEmojis[Math.floor(Math.random() * birthdayEmojis.length)] + 
        '</div>');
      
      const left = Math.random() * 100 + 'vw';
      const size = (Math.random() * 2 + 2).toFixed(2) + 'rem';
      const duration = (Math.random() * 5 + 5).toFixed(2) + 's';
      
      emoji.css({
        left: left,
        fontSize: size,
        animationDuration: duration
      });
      
      $('body').append(emoji);
      setTimeout(() => emoji.remove(), parseFloat(duration) * 1000);
    }, 150);
  }

  function startConfetti() {
    const colors = ['#ff1493', '#ff69b4', '#ffc0cb', '#e91e63', '#f06292', '#ffb3d9'];
    
    window._confettiInterval = setInterval(() => {
      if (!celebrationActive) return;
      
      for (let i = 0; i < 8; i++) {
        const confetti = $('<div class="confetti"></div>');
        const left = Math.random() * 100 + 'vw';
        const color = colors[Math.floor(Math.random() * colors.length)];
        const duration = (Math.random() * 4 + 3).toFixed(2) + 's';
        
        confetti.css({
          left: left,
          background: color,
          animationDuration: duration,
          boxShadow: `0 0 6px ${color}`
        });
        
        $('body').append(confetti);
        setTimeout(() => confetti.remove(), parseFloat(duration) * 1000);
      }
    }, 200);
  }

  function startSparkles() {
    window._sparkleInterval = setInterval(() => {
      if (!celebrationActive) return;
      
      for (let i = 0; i < 5; i++) {
        const sparkle = $('<div class="sparkle"></div>');
        const left = Math.random() * 100 + 'vw';
        const duration = (Math.random() * 3 + 2).toFixed(2) + 's';
        
        sparkle.css({
          left: left,
          animationDuration: duration
        });
        
        $('body').append(sparkle);
        setTimeout(() => sparkle.remove(), parseFloat(duration) * 1000);
      }
    }, 300);
  }

  function stopAllEffects() {
    clearInterval(window._emojiInterval);
    clearInterval(window._confettiInterval);
    clearInterval(window._sparkleInterval);
    $('.emoji, .confetti, .sparkle').remove();
  }

  // تشغيل تلقائي عند التحميل
  setTimeout(() => {
    showBirthdayCelebration();
  }, 1000);

  // مراقب للأزرار الديناميكية
  const observer = new MutationObserver(() => {
    const $btn = $('button:contains("دخول")');
    if ($btn.length && !$btn.data('birthday-listener')) {
      $btn.data('birthday-listener', true).on('click', function (e) {
        e.preventDefault();
        showBirthdayCelebration();
      });
    }
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
});
