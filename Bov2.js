$(`
  <style>
    /* الصواريخ الكبيرة */
    .firework-rocket {
      position: fixed;
      width: 8px;
      height: 40px;
      border-radius: 4px;
      z-index: 9999;
      pointer-events: none;
      animation: rocket-launch linear forwards;
      box-shadow: 0 0 15px currentColor;
    }
    
    @keyframes rocket-launch {
      0% {
        opacity: 1;
        transform: translateY(0) scale(1);
        box-shadow: 0 0 15px currentColor;
      }
      100% {
        opacity: 0.3;
        transform: translateY(-600px) scale(0.8);
        box-shadow: 0 0 25px currentColor;
      }
    }
    
    /* مسار الصاروخ */
    .rocket-trail {
      position: fixed;
      width: 4px;
      height: 60px;
      border-radius: 2px;
      z-index: 9998;
      pointer-events: none;
      animation: trail-fade linear forwards;
    }
    
    @keyframes trail-fade {
      0% {
        opacity: 0.8;
        transform: scaleY(1);
      }
      100% {
        opacity: 0;
        transform: scaleY(0.3);
      }
    }
    
    /* الانفجار الكبير */
    .big-explosion {
      position: fixed;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      z-index: 9997;
      pointer-events: none;
      animation: big-boom 0.8s ease-out forwards;
    }
    
    @keyframes big-boom {
      0% {
        opacity: 1;
        transform: scale(0);
        box-shadow: 0 0 0 0 currentColor;
      }
      30% {
        opacity: 0.9;
        transform: scale(0.7);
        box-shadow: 0 0 100px 30px currentColor;
      }
      100% {
        opacity: 0;
        transform: scale(2);
        box-shadow: 0 0 200px 80px transparent;
      }
    }
    
    /* الجسيمات الكبيرة */
    .large-particle {
      position: fixed;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      z-index: 9996;
      pointer-events: none;
      animation: particle-fly ease-out forwards;
    }
    
    @keyframes particle-fly {
      0% {
        opacity: 1;
        transform: scale(1);
        box-shadow: 0 0 20px currentColor;
      }
      50% {
        opacity: 0.8;
        transform: scale(1.2);
        box-shadow: 0 0 30px currentColor;
      }
      100% {
        opacity: 0;
        transform: scale(0.3);
        box-shadow: 0 0 10px currentColor;
      }
    }
    
    /* شرارات ثانوية */
    .secondary-spark {
      position: fixed;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      z-index: 9995;
      pointer-events: none;
      animation: spark-twinkle linear forwards;
    }
    
    @keyframes spark-twinkle {
      0% {
        opacity: 1;
        transform: scale(1) rotate(0deg);
        box-shadow: 0 0 15px currentColor;
      }
      100% {
        opacity: 0;
        transform: scale(0.2) rotate(180deg);
        box-shadow: 0 0 5px currentColor;
      }
    }
    
    /* رسالة الاحتفال الكبيرة */
    .mega-celebration {
      position: fixed;
      top: 25%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10000;
      font-size: clamp(2rem, 8vw, 4rem);
      font-weight: bold;
      color: #fff;
      text-shadow: 
        0 0 20px #ff1493,
        0 0 40px #ff69b4,
        0 0 60px #ffc0cb,
        4px 4px 8px rgba(0,0,0,0.8);
      animation: mega-glow 2s ease-in-out infinite;
      pointer-events: none;
      text-align: center;
      font-family: Arial, sans-serif;
      text-stroke: 2px #ff1493;
      -webkit-text-stroke: 2px #ff1493;
    }
    
    @keyframes mega-glow {
      0%, 100% {
        text-shadow: 
          0 0 20px #ff1493,
          0 0 40px #ff69b4,
          0 0 60px #ffc0cb,
          4px 4px 8px rgba(0,0,0,0.8);
        transform: translateX(-50%) scale(1);
      }
      50% {
        text-shadow: 
          0 0 40px #ff1493,
          0 0 80px #ff69b4,
          0 0 120px #ffc0cb,
          0 0 160px #ff1493,
          4px 4px 8px rgba(0,0,0,0.8);
        transform: translateX(-50%) scale(1.1);
      }
    }
    
    /* مطر الذهب الكثيف */
    .golden-shower {
      position: fixed;
      width: 8px;
      height: 8px;
      background: radial-gradient(circle, gold, #ffd700, #ffed4e);
      border-radius: 50%;
      z-index: 9994;
      pointer-events: none;
      animation: heavy-gold-fall linear forwards;
      box-shadow: 0 0 15px gold, 0 0 30px #ffd700;
    }
    
    @keyframes heavy-gold-fall {
      0% {
        opacity: 1;
        transform: translateY(-20px) rotate(0deg) scale(1);
      }
      100% {
        opacity: 0;
        transform: translateY(100vh) rotate(720deg) scale(0.5);
      }
    }
    
    /* خلفية الاحتفال */
    .celebration-bg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at center, 
        rgba(255, 20, 147, 0.1) 0%, 
        rgba(255, 105, 180, 0.05) 50%, 
        transparent 100%);
      z-index: 9990;
      pointer-events: none;
      animation: bg-pulse 4s ease-in-out infinite;
    }
    
    @keyframes bg-pulse {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.6; }
    }
    
    @media (max-width: 768px) {
      .mega-celebration {
        font-size: 2.5rem;
        top: 20%;
      }
      
      .large-particle {
        width: 10px;
        height: 10px;
      }
      
      .big-explosion {
        width: 150px;
        height: 150px;
      }
    }
  </style>
`).appendTo("head");

$(() => {
  let fireworksActive = false;
  
  function startMegaFireworks() {
    if (fireworksActive) return;
    
    fireworksActive = true;
    console.log('🎆 MEGA FIREWORKS SHOW STARTING! 🎆');
    
    // إضافة الخلفية والرسالة
    $('body').append(`
      <div class="celebration-bg"></div>
      <div class="mega-celebration">
        🎆 أهلاً وسهلاً 🎆<br>
        <span style="font-size: 0.5em; color: #ffb3d9; text-shadow: 0 0 20px #ffb3d9;">
          مرحباً بك في عالم الاحتفال الكبير
        </span>
      </div>
    `);
    
    // بدء العروض المختلفة
    startMegaRockets();
    startGoldenShower();
    startContinuousExplosions();
    
    // إيقاف بعد 12 ثانية
    setTimeout(() => {
      stopMegaFireworks();
    }, 12000);
  }
  
  function startMegaRockets() {
    const vibrantColors = [
      '#ff0040', '#ff1493', '#ff69b4', '#00ffff', '#0080ff', 
      '#8000ff', '#ff8000', '#ffff00', '#00ff00', '#ff4080',
      '#40ff80', '#8040ff', '#ff8040', '#40ff40'
    ];
    
    window._megaRocketTimer = setInterval(() => {
      if (!fireworksActive) return;
      
      // إطلاق صاروخين في نفس الوقت أحياناً
      const rocketCount = Math.random() > 0.6 ? 2 : 1;
      
      for (let i = 0; i < rocketCount; i++) {
        setTimeout(() => {
          launchMegaRocket(vibrantColors);
        }, i * 300);
      }
      
    }, 1500);
  }
  
  function launchMegaRocket(colors) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const startX = Math.random() * (window.innerWidth - 200) + 100;
    const explodeHeight = Math.random() * 300 + 150;
    const flightTime = Math.random() * 1000 + 1500;
    
    // إنشاء الصاروخ الكبير
    const rocket = $(`<div class="firework-rocket"></div>`);
    rocket.css({
      left: startX + 'px',
      bottom: '0px',
      background: `linear-gradient(to top, ${color}, transparent)`,
      color: color,
      animationDuration: (flightTime / 1000) + 's'
    });
    
    // إضافة مسار الصاروخ
    const trail = $(`<div class="rocket-trail"></div>`);
    trail.css({
      left: (startX + 2) + 'px',
      bottom: '0px',
      background: `linear-gradient(to top, ${color}80, transparent)`,
      animationDuration: (flightTime / 1000 + 0.5) + 's'
    });
    
    $('body').append(rocket);
    $('body').append(trail);
    
    // انفجار كبير
    setTimeout(() => {
      createMegaExplosion(startX, window.innerHeight - explodeHeight, color);
      rocket.remove();
      setTimeout(() => trail.remove(), 500);
    }, flightTime);
  }
  
  function createMegaExplosion(x, y, color) {
    console.log(`💥 MEGA EXPLOSION at (${x}, ${y}) - Color: ${color}`);
    
    // الانفجار الرئيسي الكبير
    const bigBoom = $(`<div class="big-explosion"></div>`);
    bigBoom.css({
      left: (x - 100) + 'px',
      top: (y - 100) + 'px',
      color: color,
      background: `radial-gradient(circle, ${color}40, transparent)`
    });
    $('body').append(bigBoom);
    setTimeout(() => bigBoom.remove(), 800);
    
    // الجسيمات الكبيرة الرئيسية
    for (let i = 0; i < 30; i++) {
      createLargeParticle(x, y, color, i);
    }
    
    // الشرارات الثانوية
    setTimeout(() => {
      for (let i = 0; i < 50; i++) {
        createSecondarySparkle(x, y, color, i);
      }
    }, 200);
  }
  
  function createLargeParticle(centerX, centerY, color, index) {
    const particle = $(`<div class="large-particle"></div>`);
    const angle = (360 / 30) * index + Math.random() * 12;
    const distance = Math.random() * 200 + 100;
    const duration = Math.random() * 3 + 2;
    const gravity = Math.random() * 50 + 30;
    
    const radians = angle * Math.PI / 180;
    const endX = centerX + Math.cos(radians) * distance;
    const endY = centerY + Math.sin(radians) * distance + gravity;
    
    particle.css({
      left: centerX + 'px',
      top: centerY + 'px',
      background: `radial-gradient(circle, ${color}, ${color}80)`,
      color: color,
      animationDuration: duration + 's',
      boxShadow: `0 0 20px ${color}`
    });
    
    $('body').append(particle);
    
    // حركة الجسيم مع الجاذبية
    particle.css({
      transition: `all ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      left: endX + 'px',
      top: endY + 'px'
    });
    
    setTimeout(() => particle.remove(), duration * 1000);
  }
  
  function createSecondarySparkle(centerX, centerY, color, index) {
    const spark = $(`<div class="secondary-spark"></div>`);
    const angle = Math.random() * 360;
    const distance = Math.random() * 150 + 50;
    const duration = Math.random() * 2 + 1;
    
    const radians = angle * Math.PI / 180;
    const endX = centerX + Math.cos(radians) * distance;
    const endY = centerY + Math.sin(radians) * distance;
    
    spark.css({
      left: centerX + 'px',
      top: centerY + 'px',
      background: color,
      color: color,
      animationDuration: duration + 's'
    });
    
    $('body').append(spark);
    
    spark.css({
      transition: `all ${duration}s ease-out`,
      left: endX + 'px',
      top: endY + 'px'
    });
    
    setTimeout(() => spark.remove(), duration * 1000);
  }
  
  function startGoldenShower() {
    window._goldenTimer = setInterval(() => {
      if (!fireworksActive) return;
      
      // مطر ذهبي كثيف
      for (let i = 0; i < 8; i++) {
        const gold = $(`<div class="golden-shower"></div>`);
        const startX = Math.random() * window.innerWidth;
        const duration = Math.random() * 4 + 3;
        const delay = Math.random() * 500;
        
        setTimeout(() => {
          gold.css({
            left: startX + 'px',
            top: '-20px',
            animationDuration: duration + 's'
          });
          
          $('body').append(gold);
          
          setTimeout(() => gold.remove(), duration * 1000);
        }, delay);
      }
    }, 400);
  }
  
  function startContinuousExplosions() {
    // انفجارات عشوائية إضافية
    window._explosionTimer = setInterval(() => {
      if (!fireworksActive) return;
      
      if (Math.random() > 0.7) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight * 0.6) + 100;
        const colors = ['#ff0040', '#00ffff', '#ffff00', '#00ff00', '#ff8000'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        createMegaExplosion(x, y, color);
      }
    }, 2000);
  }
  
  function stopMegaFireworks() {
    fireworksActive = false;
    
    // إيقاف جميع المؤقتات
    clearInterval(window._megaRocketTimer);
    clearInterval(window._goldenTimer);
    clearInterval(window._explosionTimer);
    
    // إزالة جميع العناصر
    $('.firework-rocket, .rocket-trail, .big-explosion, .large-particle, .secondary-spark, .golden-shower, .mega-celebration, .celebration-bg').remove();
    
    console.log('🎆 MEGA FIREWORKS SHOW ENDED! 🎆');
  }
  
  // دوال التحكم
  window.startMegaFireworks = function() {
    stopMegaFireworks();
    setTimeout(() => {
      startMegaFireworks();
    }, 500);
  };
  
  window.stopMegaFireworks = function() {
    stopMegaFireworks();
  };
  
  // تشغيل تلقائي
  setTimeout(() => {
    startMegaFireworks();
  }, 1000);
  
  // إعادة تشغيل بالضغط على M
  $(document).keydown(function(e) {
    if (e.key.toLowerCase() === 'm' && !fireworksActive) {
      startMegaFireworks();
    }
  });
});
