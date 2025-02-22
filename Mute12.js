$(document).ready(function () {
  let isMuted = false; // حالة الكتم

  function muteAllAudio() {
    $("audio, video").each(function () {
      this.muted = isMuted; // كتم أو إلغاء كتم الصوت
    });
  }

  // عند الضغط على زر الكتم
  $("#muteaudio").click(function () {
    isMuted = !isMuted; // تبديل حالة الكتم
    muteAllAudio(); // تطبيق الكتم فورًا

    // تحديث الزر بناءً على الحالة
    if (isMuted) {
      $(this).text("المايكات مكتومة").css("background-color", "red");
    } else {
      $(this).text("المايكات مسموعة").css("background-color", "green");
    }
  });

  // إجبار أي صوت جديد على الكتم بمجرد تشغيله
  $(document).on("play", "audio, video", function () {
    if (isMuted) {
      this.muted = true; // إجبار الصوت على الكتم فورًا
    }
  });

  // كتم أي صوت جديد تتم إضافته إلى الصفحة
  const observer = new MutationObserver(() => {
    muteAllAudio();
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // التأكد من أن الكتم مستمر كل ثانية في حال حدوث أي تغيير
  setInterval(() => {
    if (isMuted) {
      muteAllAudio();
    }
  }, 1000);
});
