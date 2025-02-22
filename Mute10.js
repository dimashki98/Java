$(document).ready(function () {
  let isMuted = false; // تتبع حالة الكتم

  function muteAllAudio() {
    $("audio, video").each(function () {
      this.muted = isMuted; // كتم أو إلغاء كتم جميع الأصوات
    });
  }

  // عند الضغط على الزر
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

  // ضمان بقاء الكتم مفعّلًا على أي أصوات جديدة تُضاف لاحقًا
  setInterval(muteAllAudio, 1000);
});
