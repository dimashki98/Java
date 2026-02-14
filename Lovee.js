$(function () {

  const style = `
  <style>
    /* ===== القلوب المتساقطة ===== */
    .valentine-heart {
      position: fixed;
      top: -50px;
      pointer-events: none;
      z-index: 999999;
      animation: fall linear forwards;
      filter: drop-shadow(0 0 6px rgba(255, 50, 100, 0.5));
    }

    @keyframes fall {
      0% {
        transform: translateY(0) scale(1) rotate(0deg) translateX(0);
        opacity: 1;
      }
      25% {
        transform: translateY(27vh) scale(1.1) rotate(90deg) translateX(30px);
      }
      50% {
        transform: translateY(55vh) scale(1.3) rotate(180deg) translateX(-20px);
      }
      75% {
        transform: translateY(82vh) scale(1.4) rotate(270deg) translateX(15px);
        opacity: 0.6;
      }
      100% {
        transform: translateY(110vh) scale(1.6) rotate(360deg) translateX(0);
        opacity: 0;
      }
    }

    /* ===== انفجار القلوب عند النقر ===== */
    .heart-burst {
      position: fixed;
      pointer-events: none;
      z-index: 9999999;
      animation: burst ease-out forwards;
    }

    @keyframes burst {
      0% {
        transform: translate(0, 0) scale(1);
        opacity: 1;
      }
      100% {
        transform: translate(var(--tx), var(--ty)) scale(0);
        opacity: 0;
      }
    }

    /* ===== الجزيئات المتلألئة ===== */
    .sparkle {
      position: fixed;
      pointer-events: none;
      z-index: 999998;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: radial-gradient(circle, #fff, #ff6b9d);
      animation: sparkleAnim ease-in-out forwards;
    }

    @keyframes sparkleAnim {
      0% {
        transform: translateY(0) scale(0);
        opacity: 0;
      }
      20% {
        transform: translateY(-10px) scale(1);
        opacity: 1;
      }
      100% {
        transform: translateY(-80px) scale(0);
        opacity: 0;
      }
    }

    /* ===== البانر الرئيسي ===== */
    .mada-overlay {
      position: fixed;
      inset: 0;
      z-index: 99999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      perspective: 1000px;
    }

    .mada-card {
      text-align: center;
      padding: 40px 55px;
      border-radius: 24px;
      background: radial-gradient(ellipse at center, rgba(180, 20, 60, 0.18), rgba(0,0,0,0));
      border: 1px solid rgba(255, 45, 85, 0.1);
      opacity: 0;
      transform: scale(0.5) rotateY(90deg);
      animation: cardReveal 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s forwards;
    }

    @keyframes cardReveal {
      0% {
        opacity: 0;
        transform: scale(0.5) rotateY(90deg);
      }
      60% {
        transform: scale(1.05) rotateY(-5deg);
      }
      100% {
        opacity: 1;
        transform: scale(1) rotateY(0deg);
      }
    }

    .mada-card .mada-logo {
      font-family: 'Georgia', serif;
      font-size: 1.1em;
      color: #ff8fa3;
      letter-spacing: 4px;
      text-transform: uppercase;
      margin-bottom: 8px;
      opacity: 0;
      animation: fadeUp 0.8s ease 1.2s forwards;
    }

    .mada-card .mada-logo span {
      color: #ff2d55;
      font-weight: bold;
    }

    .mada-card h1 {
      font-family: 'Georgia', serif;
      font-size: 3em;
      color: #ff2d55;
      margin: 10px 0;
      text-shadow: 0 0 30px rgba(255, 45, 85, 0.4), 0 0 60px rgba(255, 45, 85, 0.2);
      animation: glow 2s ease-in-out infinite alternate;
    }

    @keyframes glow {
      from { text-shadow: 0 0 20px rgba(255, 45, 85, 0.3), 0 0 40px rgba(255, 45, 85, 0.15); }
      to { text-shadow: 0 0 40px rgba(255, 45, 85, 0.6), 0 0 80px rgba(255, 45, 85, 0.3); }
    }

    .mada-card .subtitle {
      font-family: 'Georgia', serif;
      font-size: 1.5em;
      color: #ffb3c6;
      margin: 5px 0 15px 0;
      opacity: 0;
      animation: fadeUp 0.8s ease 1.5s forwards;
    }

    .mada-card p {
      font-family: 'Georgia', serif;
      font-size: 1.15em;
      color: #e8a0b4;
      margin: 6px 0;
      opacity: 0;
      animation: fadeUp 0.8s ease forwards;
      line-height: 1.8;
    }

    .mada-card p:nth-child(4) { animation-delay: 2.0s; }
    .mada-card p:nth-child(5) { animation-delay: 2.5s; }
    .mada-card p:nth-child(6) { animation-delay: 3.0s; }
    .mada-card p:nth-child(7) { animation-delay: 3.5s; }

    .mada-card .brand-tag {
      display: inline-block;
      margin-top: 20px;
      padding: 8px 22px;
      border-radius: 30px;
      border: 1px solid rgba(255, 45, 85, 0.3);
      background: rgba(255, 45, 85, 0.08);
      color: #ff6b8a;
      font-family: 'Georgia', serif;
      font-size: 0.85em;
      letter-spacing: 1px;
      opacity: 0;
      animation: fadeUp 0.8s ease 4.0s forwards;
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* ===== القلب النابض ===== */
    .big-heart {
      position: fixed;
      z-index: 999990;
      pointer-events: none;
      font-size: 100px;
      opacity: 0;
      animation: bigHeartBeat 2s ease-in-out 3.5s forwards;
      filter: drop-shadow(0 0 40px rgba(255, 45, 85, 0.6));
    }

    @keyframes bigHeartBeat {
      0% { opacity: 0; transform: translate(-50%, -50%) scale(0); }
      30% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
      40% { transform: translate(-50%, -50%) scale(0.95); }
      50% { transform: translate(-50%, -50%) scale(1.1); }
      60% { transform: translate(-50%, -50%) scale(1); }
      100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    }

    .big-heart.active {
      animation: pulse 1.2s ease-in-out infinite;
      opacity: 1;
    }

    @keyframes pulse {
      0%, 100% { transform: translate(-50%, -50%) scale(1); }
      50% { transform: translate(-50%, -50%) scale(1.15); }
    }

    /* ===== الخلفية المتحركة ===== */
    .valentine-bg-orb {
      position: fixed;
      border-radius: 50%;
      pointer-events: none;
      z-index: 999989;
      filter: blur(80px);
      animation: orbFloat 8s ease-in-out infinite alternate;
    }

    @keyframes orbFloat {
      0% { transform: translate(0, 0) scale(1); opacity: 0.15; }
      50% { transform: translate(30px, -40px) scale(1.2); opacity: 0.25; }
      100% { transform: translate(-20px, 20px) scale(0.9); opacity: 0.1; }
    }

    /* ===== شريط رسائل الحب ===== */
    .love-quotes {
      position: fixed;
      bottom: 25px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 999999;
      font-family: 'Georgia', serif;
      font-size: 1em;
      color: #ff8fa3;
      text-align: center;
      opacity: 0;
      pointer-events: none;
      text-shadow: 0 0 20px rgba(255, 45, 85, 0.3);
      transition: opacity 1s ease;
      white-space: nowrap;
    }

    .love-quotes.show {
      opacity: 1;
    }

    /* ===== أثر حركة الماوس ===== */
    .mouse-trail {
      position: fixed;
      pointer-events: none;
      z-index: 9999998;
      font-size: 14px;
      animation: trailFade 1s ease-out forwards;
    }

    @keyframes trailFade {
      0% {
        transform: scale(1) translateY(0);
        opacity: 1;
      }
      100% {
        transform: scale(0) translateY(-30px);
        opacity: 0;
      }
    }

    /* ===== شريط الأعضاء ===== */
    .members-ribbon {
      position: fixed;
      top: 12px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9999999;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 20px;
      border-radius: 30px;
      background: rgba(255, 45, 85, 0.1);
      border: 1px solid rgba(255, 45, 85, 0.2);
      backdrop-filter: blur(10px);
      font-family: 'Georgia', serif;
      color: #ffb3c6;
      font-size: 0.85em;
      opacity: 0;
      pointer-events: none;
      animation: fadeUp 0.8s ease 0.3s forwards;
    }

    .members-ribbon .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #ff2d55;
      animation: dotPulse 1.5s ease-in-out infinite;
    }

    @keyframes dotPulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.7); }
    }
  </style>
  `;

  $("head").append(style);

  // ===== شريط الأعضاء =====
  const ribbon = $(`
    <div class="members-ribbon">
      <div class="dot"></div>
      <span>شات مدى يحتفل بعيد الحب مع جميع الأعضاء</span>
      <div class="dot"></div>
    </div>
  `);
  $("body").append(ribbon);

  // ===== الخلفية المتوهجة =====
  const orbColors = ["rgba(255, 45, 85, 0.3)", "rgba(255, 107, 157, 0.2)", "rgba(200, 30, 80, 0.25)"];
  for (var i = 0; i < 3; i++) {
    var orb = $("<div class='valentine-bg-orb'></div>");
    var size = Math.random() * 300 + 200;
    orb.css({
      width: size + "px",
      height: size + "px",
      background: orbColors[i],
      left: (Math.random() * 80 + 10) + "vw",
      top: (Math.random() * 60 + 20) + "vh",
      animationDelay: (i * 2) + "s",
      animationDuration: (Math.random() * 4 + 6) + "s"
    });
    $("body").append(orb);
  }

  // ===== القلوب المتساقطة =====
  const hearts = ["💖", "💗", "💘", "❤️", "💕", "💝", "🌹", "✨"];

  function createHeart() {
    var emoji = hearts[Math.floor(Math.random() * hearts.length)];
    var heart = $("<div class='valentine-heart'>" + emoji + "</div>");

    var left = Math.random() * 100;
    var sz = Math.random() * 25 + 12;
    var duration = Math.random() * 3 + 3;

    heart.css({
      left: left + "vw",
      fontSize: sz + "px",
      animationDuration: duration + "s",
      animationDelay: (Math.random() * 0.5) + "s"
    });

    $("body").append(heart);
    setTimeout(function () { heart.remove(); }, (duration + 1) * 1000);
  }

  // ===== انفجار القلوب عند النقر =====
  $(document).on("click", function (e) {
    for (var i = 0; i < 12; i++) {
      var angle = (360 / 12) * i;
      var distance = Math.random() * 100 + 60;
      var tx = Math.cos(angle * Math.PI / 180) * distance;
      var ty = Math.sin(angle * Math.PI / 180) * distance;
      var emoji = hearts[Math.floor(Math.random() * hearts.length)];
      var sz = Math.random() * 15 + 12;
      var dur = Math.random() * 0.5 + 0.6;

      var particle = $("<div class='heart-burst'>" + emoji + "</div>");
      particle.css({
        left: e.clientX + "px",
        top: e.clientY + "px",
        fontSize: sz + "px",
        "--tx": tx + "px",
        "--ty": ty + "px",
        animationDuration: dur + "s"
      });

      $("body").append(particle);
      (function(p, d) {
        setTimeout(function () { p.remove(); }, d * 1000);
      })(particle, dur);
    }

    for (var j = 0; j < 8; j++) {
      var sparkle = $("<div class='sparkle'></div>");
      var sx = e.clientX + (Math.random() - 0.5) * 60;
      var sy = e.clientY + (Math.random() - 0.5) * 40;
      var sDur = Math.random() * 0.5 + 0.5;

      sparkle.css({
        left: sx + "px",
        top: sy + "px",
        width: (Math.random() * 4 + 2) + "px",
        height: (Math.random() * 4 + 2) + "px",
        animationDuration: sDur + "s",
        animationDelay: (Math.random() * 0.2) + "s"
      });

      $("body").append(sparkle);
      (function(s, d) {
        setTimeout(function () { s.remove(); }, (d + 0.3) * 1000);
      })(sparkle, sDur);
    }
  });

  // ===== أثر حركة الماوس =====
  var lastTrail = 0;
  $(document).on("mousemove", function (e) {
    var now = Date.now();
    if (now - lastTrail < 80) return;
    lastTrail = now;

    var miniHearts = ["💗", "✨", "💖", "💕"];
    var trail = $("<div class='mouse-trail'>" + miniHearts[Math.floor(Math.random() * miniHearts.length)] + "</div>");
    trail.css({ left: e.clientX + "px", top: e.clientY + "px" });
    $("body").append(trail);
    setTimeout(function () { trail.remove(); }, 1000);
  });

  // ===== الرسالة الرئيسية - شات مدى =====
  var card = $(`
    <div class="mada-overlay">
      <div class="mada-card">
        <div class="mada-logo"><span>MADA CHAT</span> &bull; Damascus Host</div>
        <h1>Happy Valentine's Day</h1>
        <div class="subtitle">عيد حب سعيد لكل أعضاء شات مدى</div>
        <p>كل عام وأنتم الحب والسعادة يا أجمل مجتمع</p>
        <p>شات مدى يجمعنا والحب يوحدنا</p>
        <p>من قلب دمشق هوست لكل عضو غالي علينا</p>
        <div class="brand-tag">شات مدى &hearts; برمجة دمشق هوست</div>
      </div>
    </div>
  `);
  $("body").append(card);

  // ===== القلب النابض الكبير =====
  var bigHeart = $("<div class='big-heart'>💖</div>");
  bigHeart.css({ left: "50%", top: "16%", transform: "translate(-50%, -50%)" });
  $("body").append(bigHeart);

  setTimeout(function () {
    bigHeart.addClass("active");
  }, 5500);

  // ===== اقتباسات خاصة بشات مدى =====
  var quotes = [
    "شات مدى .. حيث يجتمع القلب مع القلب",
    "كل عضو في مدى هو نبضة في قلبنا الكبير",
    "عيد الحب أحلى مع عيلة شات مدى",
    "من برمجة دمشق هوست .. كل الحب لكم",
    "مدى ليس مجرد شات .. مدى عائلة",
    "دمشق هوست تبارك لكم عيد الحب",
    "أجمل الأعياد هي التي نحتفل بها معكم",
    "Happy Valentine's Day from Mada Chat Family"
  ];

  var quoteEl = $("<div class='love-quotes'></div>");
  $("body").append(quoteEl);

  var quoteIndex = 0;
  function showQuote() {
    quoteEl.removeClass("show");
    setTimeout(function () {
      quoteEl.text(quotes[quoteIndex]);
      quoteEl.addClass("show");
      quoteIndex = (quoteIndex + 1) % quotes.length;
    }, 500);
  }

  setTimeout(function () {
    showQuote();
    setInterval(showQuote, 4000);
  }, 4000);

  // ===== تشغيل القلوب =====
  var intervalFast = setInterval(createHeart, 100);

  setTimeout(function () {
    clearInterval(intervalFast);
    var intervalMedium = setInterval(createHeart, 300);

    setTimeout(function () {
      clearInterval(intervalMedium);
      setInterval(createHeart, 800);
    }, 5000);
  }, 5000);

});
