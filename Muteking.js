$(document).ready(function () {
  setInterval(function () {
    $('audio, source').each(function () {
      const el = $(this);
      const src = el.attr('src');
      if (src && src.includes("imgs/hors.mp3")) {
        el.attr('src', 'imgs/1.mp3');
        const parentAudio = el.closest("audio")[0];
        if (parentAudio) {
          parentAudio.load();
        }
      }
    });
  }, 1000); // كل 1 ثانية يتم التحقق من وجود الصوت وتغييره
});
