$(document).ready(function () {
  // إضافة زر Mute Audio أسفل الزر "إيقاف التأثيرات"
  $("<button>", {
    id: "muteaudio",
    text: "Mute Audio",
    style: "width: 98%; height: 50px; background-color: green; color: white; font-size: 16px; border-radius: 10px; margin-top: 10px;"
  }).insertAfter("button.label-info");

  let isMuted = false; // تتبع حالة الكتم

  // دالة لكتم جميع الأصوات
  function muteAllAudio() {
    $("audio, video").each(function () {
      this.muted = isMuted;
    });
  }

  // عند الضغط على الزر "Mute Audio"
  $("#muteaudio").click(function () {
    isMuted = !isMuted; // تبديل حالة الكتم
    muteAllAudio(); // تطبيق الكتم فورًا

    // تغيير مظهر الزر بناءً على حالة الكتم
    $(this).css({
      "background-color": isMuted ? "red" : "green",
      "color": isMuted ? "white" : "black"
    });
  });

  // مراقبة أي أصوات جديدة يتم إضافتها للصفحة وضمان كتمها تلقائيًا
  setInterval(muteAllAudio, 1000);
});
