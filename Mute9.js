$(document).ready(function () {
  let isMuted = false; // تتبع حالة الكتم

  // دالة لكتم جميع الأصوات
  function muteAllAudio() {
    $("audio, video").each(function () {
      this.muted = isMuted; // تطبيق الكتم على الأصوات
    });
    // التأكد من أن جميع المايكات مكتومة
    if (isMuted) {
      $("video, audio").each(function () {
        $(this).prop('muted', true); // تأكيد كتم الصوت على العناصر الجديدة
      });
    }
  }

  // عند تفعيل أمر الكتم
  function enableMute() {
    if (!isMuted) {
      isMuted = true; // تفعيل الكتم
      muteAllAudio(); // تطبيق الكتم على جميع الأصوات
    }
  }

  // عند إلغاء الكتم
  function disableMute() {
    if (isMuted) {
      isMuted = false; // إلغاء الكتم
      muteAllAudio(); // إعادة تشغيل الأصوات
    }
  }

  // عند الضغط على الزر لتبديل حالة الكتم
  $("#muteaudio").click(function () {
    if (isMuted) {
      disableMute(); // إلغاء الكتم
      $(this).text("المايكات مسموعة").css("background-color", "green");
    } else {
      enableMute(); // تفعيل الكتم
      $(this).text("المايكات مكتومة").css("background-color", "red");
    }
  });

  // عند تفعيل الكتم مباشرة عند تحميل الصفحة
  enableMute(); // الكتم سيكون مفعل منذ البداية ولن يتغير إلا يدويًا

  // تأكد من أن الأصوات تبقى مكتومة حتى بعد إضافة أصوات جديدة
  setInterval(function () {
    muteAllAudio();
  }, 1000);
});
