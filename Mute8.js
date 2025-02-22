$(document).ready(function () {
  let isMuted = false; // تتبع حالة الكتم

  // دالة لكتم جميع الأصوات
  function muteAllAudio() {
    $("audio, video").each(function () {
      this.muted = isMuted;  // تطبيق الكتم على الأصوات
      if (isMuted) {
        this.pause();  // إيقاف الأصوات إذا كان الكتم مفعل
      }
    });
  }

  // عند تفعيل أمر الكتم
  function enableMute() {
    if (!isMuted) {
      isMuted = true; // تفعيل الكتم
      muteAllAudio(); // تطبيق الكتم
    }
  }

  // عند إلغاء الكتم
  function disableMute() {
    if (isMuted) {
      isMuted = false; // إلغاء الكتم
      muteAllAudio(); // إعادة تشغيل الأصوات
    }
  }

  // عندما يتم الضغط على زر الكتم أو الزر المراد تفعيله:
  $("#muteaudio").click(function () {
    if (isMuted) {
      disableMute(); // إلغاء الكتم
      $(this).text("المايكات مسموعة").css("background-color", "green");
    } else {
      enableMute(); // تفعيل الكتم
      $(this).text("المايكات مكتومة").css("background-color", "red");
    }
  });

  // تأكد من أن الأصوات تبقى مكتومة حتى بعد إضافة أصوات جديدة
  setInterval(function () {
    muteAllAudio();
  }, 1000);
});
