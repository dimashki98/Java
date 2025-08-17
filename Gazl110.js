$(() => {
  let celebrationActive = false
  let animationIntervals = []

  $("head").append(`
        <style>
            .celebration-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.4);
                backdrop-filter: blur(8px);
                z-index: 9998;
                animation: fadeIn 0.6s ease;
            }
            
            #birthday-message {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #ff6b9d, #c44569, #f8b500, #ff6348, #ff9ff3);
                border-radius: 30px;
                padding: 60px 40px;
                box-shadow: 0 0 60px rgba(255,107,157,0.9), 0 0 120px rgba(196,69,105,0.7), 0 0 180px rgba(248,181,0,0.5);
                z-index: 99999;
                text-align: center;
                color: #fff;
                font-family: 'Tajawal', 'Arial', sans-serif;
                max-width: 90%;
                width: 600px;
                animation: bounceIn 1.2s ease;
                border: 5px solid rgba(255,255,255,0.4);
                backdrop-filter: blur(15px);
                position: relative;
                overflow: hidden;
            }
            
            #birthday-message::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
                animation: shimmer 3s infinite;
            }
            
            .birthday-title {
                font-size: 32px;
                font-weight: bold;
                margin-bottom: 25px;
                text-shadow: 3px 3px 6px rgba(0,0,0,0.4);
                animation: glow 2s ease-in-out infinite alternate, pulse 1.5s infinite;
                position: relative;
                z-index: 1;
            }
            
            .birthday-content {
                font-size: 20px;
                line-height: 1.9;
                margin-bottom: 25px;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
                position: relative;
                z-index: 1;
                animation: pulse 2s infinite;
            }
            
            .birthday-signature {
                font-size: 18px;
                font-style: italic;
                opacity: 0.95;
                margin-top: 20px;
                position: relative;
                z-index: 1;
            }
            
            .close-btn {
                position: absolute;
                top: 20px;
                right: 25px;
                background: rgba(255,255,255,0.25);
                border: none;
                border-radius: 50%;
                color: #fff;
                font-size: 28px;
                width: 45px;
                height: 45px;
                cursor: pointer;
                transition: all 0.3s ease;
                backdrop-filter: blur(10px);
                z-index: 2;
                font-weight: bold;
            }
            
            .close-btn:hover {
                background: rgba(255,255,255,0.5);
                transform: scale(1.15) rotate(90deg);
            }
            
            .firework {
                position: fixed;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                z-index: 9999;
                pointer-events: none;
                animation: explode 1.5s ease-out forwards;
                box-shadow: 0 0 10px currentColor;
            }
            
            .confetti {
                position: fixed;
                width: 12px;
                height: 12px;
                top: -15px;
                z-index: 9999;
                pointer-events: none;
                animation: confettiFall linear forwards;
                border-radius: 2px;
            }
            
            .floating-element {
                position: fixed;
                top: 100vh;
                font-size: 35px;
                z-index: 9999;
                pointer-events: none;
                animation: floatUp linear forwards;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            }
            
            .heart {
                position: fixed;
                font-size: 30px;
                z-index: 9999;
                pointer-events: none;
                animation: heartFloat 5s ease-out forwards;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            }
            
            .sparkle {
                position: fixed;
                width: 4px;
                height: 4px;
                background: #fff;
                border-radius: 50%;
                z-index: 9999;
                pointer-events: none;
                animation: sparkle 2s ease-out forwards;
                box-shadow: 0 0 6px #fff;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes bounceIn {
                0% { transform: translate(-50%, -50%) scale(0.2) rotate(-180deg); opacity: 0; }
                50% { transform: translate(-50%, -50%) scale(1.1) rotate(-90deg); }
                70% { transform: translate(-50%, -50%) scale(0.95) rotate(-45deg); }
                100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; }
            }
            
            @keyframes shimmer {
                0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
                100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
            }
            
            @keyframes glow {
                from { 
                    text-shadow: 3px 3px 6px rgba(0,0,0,0.4), 0 0 15px rgba(255,255,255,0.6); 
                }
                to { 
                    text-shadow: 3px 3px 6px rgba(0,0,0,0.4), 0 0 25px rgba(255,255,255,0.9), 0 0 35px rgba(255,107,157,0.7), 0 0 45px rgba(248,181,0,0.5); 
                }
            }

            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.08); }
                100% { transform: scale(1); }
            }
            
            @keyframes explode {
                0% { transform: scale(0); opacity: 1; }
                100% { transform: scale(25); opacity: 0; }
            }
            
            @keyframes confettiFall {
                to { transform: translateY(100vh) rotate(1080deg); opacity: 0; }
            }
            
            @keyframes floatUp {
                to { transform: translateY(-120vh) rotate(720deg) scale(1.5); opacity: 0; }
            }
            
            @keyframes heartFloat {
                0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 1; }
                100% { transform: translateY(-120vh) scale(2) rotate(360deg); opacity: 0; }
            }
            
            @keyframes sparkle {
                0% { transform: scale(0) rotate(0deg); opacity: 1; }
                50% { transform: scale(1) rotate(180deg); opacity: 1; }
                100% { transform: scale(0) rotate(360deg); opacity: 0; }
            }
        </style>
    `)

  $("button.btn.btn-primary, #startCelebration, .birthday-trigger").on("click", () => {
    if (celebrationActive) return
    startCelebration()
  })

  const checkForTrigger = setInterval(() => {
    if ($("#d2").length && !celebrationActive) {
      startCelebration()
      clearInterval(checkForTrigger)
    }
  }, 300)

  function startCelebration() {
    celebrationActive = true

    $("body").append('<div class="celebration-overlay"></div>')
    showBirthdayMessage()
    startFireworks()
    startConfetti()
    startFloatingElements()
    startHeartAnimation()
    startSparkles()
  }

  function showBirthdayMessage() {
    const messageHTML = `
            <div id="birthday-message">
                <button class="close-btn">×</button>
                <div class="birthday-title">🎂✨ عيد ميلاد سعيد يا غزل ✨🎂</div>
                <div class="birthday-content">
                    اليوم مو عادي… اليوم يوم فرحة واحتفال مميز عشانك إنتِ 💖✨<br>
                    كل لحظة اليوم تنور باسمك وتكبر فرحتنا فيك 🌹🔥<br>
                    يا أجمل هدية، اليوم الدنيا كلها محتفلة فيك 💎🎉<br>
                    الله يجعل أيامك كلها بياض وفرح متل هاليوم العظيم ✨🌸
                </div>
                <div class="birthday-signature">
                    مع أجمل التمنيات وأحلى الأمنيات 💕🎈
                </div>
            </div>
        `

    $("body").append(messageHTML)
    $("#birthday-message .close-btn").on("click", closeCelebration)
  }

  function startFireworks() {
    const colors = ["#ff6b6b", "#feca57", "#48dbfb", "#ff9ff3", "#54a0ff", "#5f27cd", "#ff9f43", "#10ac84"]

    const fireworkInterval = setInterval(() => {
      for (let i = 0; i < 6; i++) {
        setTimeout(() => {
          const firework = $('<div class="firework"></div>')
          firework.css({
            left: Math.random() * window.innerWidth + "px",
            top: Math.random() * window.innerHeight + "px",
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
          })
          $("body").append(firework)
          setTimeout(() => firework.remove(), 1500)
        }, i * 100)
      }
    }, 800)

    animationIntervals.push(fireworkInterval)
  }

  function startConfetti() {
    const colors = [
      "#ff6b6b",
      "#feca57",
      "#48dbfb",
      "#ff9ff3",
      "#54a0ff",
      "#5f27cd",
      "#ff9f43",
      "#10ac84",
      "#ee5a24",
      "#0abde3",
    ]

    const confettiInterval = setInterval(() => {
      for (let i = 0; i < 12; i++) {
        const confetti = $('<div class="confetti"></div>')
        confetti.css({
          left: Math.random() * window.innerWidth + "px",
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
          animationDuration: Math.random() * 3 + 2 + "s",
          animationDelay: Math.random() * 1 + "s",
        })
        $("body").append(confetti)
        setTimeout(() => confetti.remove(), 6000)
      }
    }, 150)

    animationIntervals.push(confettiInterval)
  }

  function startFloatingElements() {
    const emojis = [
      "🎂","🎉","🎈","🎊","🎁","💖","✨","🌸","🎀","💝","🌟","🦋","💐","🌺","🎵","🌈","💫","🎪"
    ]

    const floatingInterval = setInterval(() => {
      const element = $('<div class="floating-element">' + emojis[Math.floor(Math.random() * emojis.length)] + "</div>")
      element.css({
        left: Math.random() * window.innerWidth + "px",
        animationDuration: Math.random() * 4 + 5 + "s",
      })
      $("body").append(element)
      setTimeout(() => element.remove(), 10000)
    }, 200)

    animationIntervals.push(floatingInterval)
  }

  function startHeartAnimation() {
    const hearts = ["💖", "💕", "💗", "💓", "💝", "💘", "💞", "💟"]

    const heartInterval = setInterval(() => {
      const heart = $('<div class="heart">' + hearts[Math.floor(Math.random() * hearts.length)] + "</div>")
      heart.css({
        left: Math.random() * window.innerWidth + "px",
        bottom: "0px",
      })
      $("body").append(heart)
      setTimeout(() => heart.remove(), 5000)
    }, 400)

    animationIntervals.push(heartInterval)
  }

  function startSparkles() {
    const sparkleInterval = setInterval(() => {
      for (let i = 0; i < 8; i++) {
        const sparkle = $('<div class="sparkle"></div>')
        sparkle.css({
          left: Math.random() * window.innerWidth + "px",
          top: Math.random() * window.innerHeight + "px",
        })
        $("body").append(sparkle)
        setTimeout(() => sparkle.remove(), 2000)
      }
    }, 500)

    animationIntervals.push(sparkleInterval)
  }

  function closeCelebration() {
    $("#birthday-message").fadeOut(600, function () {
      $(this).remove()
    })

    $(".celebration-overlay").fadeOut(600, function () {
      $(this).remove()
    })

    animationIntervals.forEach((interval) => clearInterval(interval))
    animationIntervals = []

    $(".floating-element, .firework, .confetti, .heart, .sparkle").remove()

    celebrationActive = false
  }

  window.closeCelebration = closeCelebration
});
