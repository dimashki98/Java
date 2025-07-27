$(`
  <style>
    .firework {
      position: fixed;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      z-index: 9999;
      pointer-events: none;
    }
    
    .firework-particle {
      position: fixed;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      z-index: 9998;
      pointer-events: none;
      animation: particle-explode linear forwards;
    }
    
    @keyframes particle-explode {
      0% {
        opacity: 1;
        transform: scale(1);
      }
      100% {
        opacity: 0;
        transform: scale(0.2);
      }
    }
    
    .firework-rocket {
      position: fixed;
      width: 3px;
      height: 20px;
      border-radius: 3px;
      z-index: 9997;
      pointer-events: none;
      animation: rocket-fly linear forwards;
    }
    
    @keyframes rocket-fly {
      0% {
        opacity: 1;
        transform: translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateY(-400px);
      }
    }
    
    .celebration-message {
      position: fixed;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10000;
      font-size: 2rem;
      font-weight: bold;
      color: #fff;
      text-shadow: 
        0 0 10px #ff1493,
        0 0 20px #ff69b4,
        2px 2px 4px rgba(0,0,0,0.5);
      animation: message-glow 2s ease-in-out infinite;
      pointer-events: none;
      text-align: center;
      font-family: Arial, sans-serif;
    }
    
    @keyframes message-glow {
      0%, 100% {
        text-shadow: 
          0 0 10px #ff1493,
          0 0 20px #ff69b4,
          2px 2px 4px rgba(0,0,0,0.5);
      }
      50% {
        text-shadow: 
          0 0 20px #ff1493,
          0 0 40px #ff69b4,
          0 0 60px #ffc0cb,
          2px 2px 4px rgba(0,0,0,0.5);
      }
    }
    
    .sparkle-rain {
      position: fixed;
      width: 3px;
      height: 3px;
      background: gold;
      border-radius: 50%;
      z-index: 9996;
      pointer-events: none;
      animation: sparkle-fall linear forwards;
      box-shadow: 0 0 6px gold;
    }
    
    @keyframes sparkle-fall {
      0% {
        opacity: 1;
        transform: translateY(0) rotate(0deg);
      }
      100% {
        opacity: 0;
        transform: translateY(100vh) rotate(360deg);
      }
    }
    
    @media (max-width: 768px) {
      .celebration-message {
        font-size: 1.5rem;
        top: 15%;
      }
    }
  </style>
`).appendTo("head");

$(() => {
  let fireworksRunning = false;
  
  function startFireworksShow() {
    if (fireworksRunning) return;
    
    fireworksRunning = true;
    console.log('🎆 Starting fireworks show!');
    
    // إضافة رسالة الترحيب
    $('body').append(`
      <div class="celebration-message">
        🎆 أهلاً وسهلاً 🎆<br>
        <span style="font-size: 0.6em; color: #ffb3d9;">مرحباً بك في عالم الاحتفال</span>
      </div>
    `);
    
    // بدء المفرقعات
    startFireworkLaunches();
    startSparkleRain();
    
    // إيقاف العرض بعد 10 ثوان
    setTimeout(() => {
      stopFireworksShow();
    }, 10000);
  }
  
  function startFireworkLaunches() {
    const colors = ['#ff1493', '#ff69b4', '#4ecdc4', '#45b7d1', '#feca57', '#ff6b6b', '#96ceb4', '#ff9ff3'];
    
    window._fireworkTimer = setInterval(() => {
      if (!fireworksRunning) return;
      
      // إطلاق صاروخ
      launchRocket(colors);
      
    }, 1200);
  }
  
  function launchRocket(colors) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const startX = Math.random() * (window.innerWidth - 100) + 50;
    const explodeY = Math.random() * 200 + 100;
    
    // إنشاء الصاروخ
    const rocket = $(`<div class="firework-rocket"></div>`);
    rocket.css({
      left: startX + 'px',
      bottom: '0px',
      background: `linear-gradient(to top, ${color}, transparent)`,
      animationDuration: '1.5s'
    });
    
    $('body').append(rocket);
    
    // انفجار بعد 1.5 ثانية
    setTimeout(() => {
      explodeFirework(startX, window.innerHeight - explodeY, color);
      rocket.remove();
    }, 1500);
  }
  
  function explodeFirework(x, y, color) {
    console.log(`💥 Firework exploding at ${x}, ${y}`);
    
    // إنشاء الجسيمات المتفجرة
    for (let i = 0; i < 20; i++) {
      createParticle(x, y, color, i);
    }
  }
  
  function createParticle(centerX, centerY, color, index) {
    const particle = $(`<div class="firework-particle"></div>`);
    const angle = (360 / 20) * index;
    const distance = Math.random() * 100 + 50;
    const duration = Math.random() * 2 + 1;
    
    // حساب الموقع النهائي
    const radians = angle * Math.PI / 180;
    const endX = centerX + Math.cos(radians) * distance;
    const endY = centerY + Math.sin(radians) * distance;
    
    particle.css({
      left: centerX + 'px',
      top: centerY + 'px',
      background: color,
      boxShadow: `0 0 8px ${color}`,
      animationDuration: duration + 's'
    });
    
    $('body').append(particle);
    
    // تحريك الجسيم
    particle.css({
      transition: `all ${duration}s ease-out`,
      left: endX + 'px',
      top: endY + 'px'
    });
    
    // إزالة الجسيم
    setTimeout(() => {
      particle.remove();
    }, duration * 1000);
  }
  
  function startSparkleRain() {
    window._sparkleTimer = setInterval(() => {
      if (!fireworksRunning) return;
      
      // إنشاء نجوم متساقطة
      for (let i = 0; i < 3; i++) {
        const sparkle = $(`<div class="sparkle-rain"></div>`);
        const startX = Math.random() * window.innerWidth;
        const duration = Math.random() * 3 + 2;
        
        sparkle.css({
          left: startX + 'px',
          top: '-10px',
          animationDuration: duration + 's'
        });
        
        $('body').append(sparkle);
        
        setTimeout(() => {
          sparkle.remove();
        }, duration * 1000);
      }
    }, 300);
  }
  
  function stopFireworksShow() {
    fireworksRunning = false;
    
    // إيقاف المؤقتات
    clearInterval(window._fireworkTimer);
    clearInterval(window._sparkleTimer);
    
    // إزالة جميع العناصر
    $('.firework, .firework-particle, .firework-rocket, .celebration-message, .sparkle-rain').remove();
    
    console.log('🎆 Fireworks show ended!');
  }
  
  // دوال التحكم العامة
  window.startCelebrationFireworks = function() {
    stopFireworksShow();
    setTimeout(() => {
      startFireworksShow();
    }, 500);
  };
  
  window.stopCelebrationFireworks = function() {
    stopFireworksShow();
  };
  
  // تشغيل تلقائي عند تحميل الصفحة
  setTimeout(() => {
    startFireworksShow();
  }, 1500);
  
  // إعادة تشغيل بالضغط على F للاختبار
  $(document).keydown(function(e) {
    if (e.key.toLowerCase() === 'f' && !fireworksRunning) {
      startCelebrationFireworks();
    }
  });
});
