$(function () {

  // ستايل القلوب
  const style = `
  <style>
    .valentine-heart {
      position: fixed;
      top: -30px;
      font-size: 20px;
      pointer-events: none;
      z-index: 999999;
      animation: fall linear forwards;
    }

    @keyframes fall {
      0% {
        transform: translateY(0) scale(1) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: translateY(110vh) scale(1.8) rotate(360deg);
        opacity: 0;
      }
    }
  </style>
  `;

  $("head").append(style);

  function createHeart() {
    const heart = $("<div class='valentine-heart'>💖</div>");
    
    const left = Math.random() * 100;
    const size = Math.random() * 20 + 15;
    const duration = Math.random() * 3 + 4;

    heart.css({
      left: left + "vw",
      fontSize: size + "px",
      animationDuration: duration + "s"
    });

    $("body").append(heart);

    setTimeout(function () {
      heart.remove();
    }, duration * 1000);
  }

  // عدد القلوب عند الفتح
  for (let i = 0; i < 30; i++) {
    setTimeout(createHeart, i * 200);
  }

  // استمرار خفيف كل شوي
  setInterval(createHeart, 800);

});
