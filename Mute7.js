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

  // تفعيل الكتم بشكل دائم
  function enableMute() {
    isMuted = true;
    muteAllAudio();
  }

  // تعطيل الكتم عند الحاجة
  function disableMute() {
    isMuted = false;
    muteAllAudio();
  }

  // تفعيل الكتم تلقائيًا عند تحميل الصفحة أو تحت أي شرط معين
  enableMute(); // تفعيل الكتم بشكل دائم عند بداية الجلسة أو عند تحميل الصفحة

  // منع تشغيل الأصوات الجديدة أثناء الكتم
  setInterval(function () {
    if (isMuted) {
      muteAllAudio();
    }
  }, 1000);

});
