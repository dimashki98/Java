
$(document).ready(function () {
  // راقب التغييرات في الصفحة
  const observer = new MutationObserver(() => {
    const $btn = $('button:contains("دخول")');
    if ($btn.length && !$btn.data('has-listener')) {
      $btn.data('has-listener', true).on('click', function (e) {
        e.preventDefault();
        // أوقف الأصوات والمؤثرات السابقة
        stopCelebration();

        // تشغيل الصوت
        const audio = new Audio('https://example.com/graduation.mp3'); // استبدله برابط الأغنية الحقيقي
        audio.play();
        window._celebrationAudio = audio;

        // نافذة SweetAlert
        Swal.fire({
          title: 'ألف مبروك التخرج!',
          html: `
            <h3>مبروك للدكتورة سيرين!</h3>
            <iframe width="100%" height="250" src="https://www.youtube.com/embed/nFvElOX4JjQ?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          `,
          showCloseButton: true,
          showConfirmButton: false,
          didOpen: () => startEmojis(),
          willClose: () => stopCelebration()
        });
      });
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  function startEmojis() {
    const emojis = ['🎉', '🎓', '✨', '❤️', '🥳'];
    let emojiInterval = setInterval(() => {
      const emoji = $('<div class="emoji">' + emojis[Math.floor(Math.random() * emojis.length)] + '</div>');
      emoji.css({
        left: Math.random() * 100 + 'vw',
        animationDuration: (2 + Math.random() * 3) + 's'
      });
      $('body').append(emoji);
      setTimeout(() => emoji.remove(), 5000);
    }, 300);
    window._emojiInterval = emojiInterval;
  }

  function stopCelebration() {
    clearInterval(window._emojiInterval);
    $('.emoji').remove();
    if (window._celebrationAudio) {
      window._celebrationAudio.pause();
      window._celebrationAudio.currentTime = 0;
    }
  }
});
