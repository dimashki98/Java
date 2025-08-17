const $ = window.$ // Declare the $ variable
let celebrationActive = false
let animationIntervals = []

$("#startCelebration").on("click", () => {
  if (celebrationActive) return

  celebrationActive = true
  $("#d2").show()

  // Add celebration overlay
  $("body").append('<div class="celebration-overlay"></div>')

  // Show birthday message
  showBirthdayMessage()

  // Start all animations
  startFireworks()
  startConfetti()
  startFloatingElements()
  startHeartAnimation()

  // Auto close after 15 seconds
  setTimeout(() => {
    window.closeCelebration() // Use window object to access closeCelebration
  }, 15000)
})

function showBirthdayMessage() {
  const messageHTML = `
        <div id="birthday-message">
            <button class="close-btn" onclick="window.closeCelebration()">×</button>
            <div class="birthday-title">🎂✨ عيد ميلاد سعيد يا غزل ✨🎂</div>
            <div class="birthday-content">
                اليوم مو عادي… اليوم يوم فرحة واحتفال مميز عشانك إنتِ 💖✨<br>
                كل لحظة اليوم تنور باسمك وتكبر فرحتنا فيك 🌹🔥<br>
                يا أجمل هدية، اليوم الدنيا كلها محتفلة فيك 💎🎉<br>
                الله يجعل أيامك كلها بياض وفرح متل هاليوم العظيم ✨🌸
            </div>
            <div class="birthday-signature">
                مع أجمل التمنيات وأحلى الأمنيات 💕
            </div>
        </div>
    `

  $("body").append(messageHTML)

  // Add click handler for close button
  $("#birthday-message .close-btn").on("click", window.closeCelebration)
}

function startFireworks() {
  const colors = ["#ff6b6b", "#feca57", "#48dbfb", "#ff9ff3", "#54a0ff"]

  const fireworkInterval = setInterval(() => {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        const firework = $('<div class="firework"></div>')
        firework.css({
          left: Math.random() * window.innerWidth + "px",
          top: Math.random() * window.innerHeight + "px",
          color: colors[Math.floor(Math.random() * colors.length)],
        })
        $("body").append(firework)

        setTimeout(() => firework.remove(), 1000)
      }, i * 200)
    }
  }, 1500)

  animationIntervals.push(fireworkInterval)
}

function startConfetti() {
  const colors = ["#ff6b6b", "#feca57", "#48dbfb", "#ff9ff3", "#54a0ff", "#5f27cd"]

  const confettiInterval = setInterval(() => {
    for (let i = 0; i < 5; i++) {
      const confetti = $('<div class="confetti"></div>')
      confetti.css({
        left: Math.random() * window.innerWidth + "px",
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        animationDuration: Math.random() * 3 + 2 + "s",
        animationDelay: Math.random() * 2 + "s",
      })
      $("body").append(confetti)

      setTimeout(() => confetti.remove(), 5000)
    }
  }, 300)

  animationIntervals.push(confettiInterval)
}

function startFloatingElements() {
  const emojis = ["🎂", "🎉", "🎈", "🎊", "🎁", "💖", "✨", "🌸", "🎀", "💝", "🌟", "🦋"]

  const floatingInterval = setInterval(() => {
    const element = $('<div class="floating-element">' + emojis[Math.floor(Math.random() * emojis.length)] + "</div>")
    element.css({
      left: Math.random() * window.innerWidth + "px",
      animationDuration: Math.random() * 4 + 4 + "s",
    })
    $("body").append(element)

    setTimeout(() => element.remove(), 8000)
  }, 400)

  animationIntervals.push(floatingInterval)
}

function startHeartAnimation() {
  const heartInterval = setInterval(() => {
    const heart = $('<div class="heart">💖</div>')
    heart.css({
      left: Math.random() * window.innerWidth + "px",
      bottom: "0px",
    })
    $("body").append(heart)

    setTimeout(() => heart.remove(), 4000)
  }, 800)

  animationIntervals.push(heartInterval)
}

// Global function for closing celebration
window.closeCelebration = () => {
  $("#birthday-message").fadeOut(500, function () {
    $(this).remove()
  })

  $(".celebration-overlay").fadeOut(500, function () {
    $(this).remove()
  })

  // Clear all animation intervals
  animationIntervals.forEach((interval) => clearInterval(interval))
  animationIntervals = []

  // Remove any remaining animated elements
  $(".floating-element, .firework, .confetti, .heart").remove()

  celebrationActive = false
  $("#d2").hide()
}
