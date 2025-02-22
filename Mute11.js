$(document).ready(function () {
  let isMuted = false; // تتبع حالة الكتم

  function muteAllAudio() {
    $("audio, video").each(function () {
      this.muted = isMuted; // تطبيق حالة الكتم أو إلغاء الكتم
    });
  }

  // عند الضغط على زر الكتم
  $("#muteaudio").click(function () {
    isMuted = !isMuted; // تبديل حالة الكتم
    muteAllAudio(); // تطبيق التغيير فورًا

    // تحديث النص واللون بناءً على الحالة
    if (isMuted) {
      $(this).text("المايكات مكتومة").css("background-color", "red");
    } else {
      $(this).text("المايكات مسموعة").css("background-color", "green");
    }
  });

  // مراقبة DOM لكتم أي صوت جديد يتم إضافته للصفحة
  const observer = new MutationObserver(() => {
    if (isMuted) {
      muteAllAudio();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // التأكد من تحديث الكتم كل ثانية
  setInterval(() => {
    if (isMuted) {
      muteAllAudio();
    }
  }, 1000);
});
