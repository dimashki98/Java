$(document).ready(function () {
  // استبدال الأيقونة القديمة بزر جديد مع نفس التصميم والوظيفة
  $(".fa-volume-up").replaceWith(
    $("<button>", {
      id: "muteaudio",
      class: "fa fa-volume-up", // الاحتفاظ بنفس الأيقونة
      style: "margin-left: 10%; margin-top: -2px; font-size: 38px !important; font-family: FontAwesome, sans-serif; background: none; border: none; cursor: pointer; color: black;"
    })
  );

  let isMuted = false; // تتبع حالة الكتم

  // دالة لكتم جميع الأصوات
  function muteAllAudio() {
    $("audio, video").each(function () {
      this.muted = isMuted;
    });
  }

  // عند الضغط على الزر
  $("#muteaudio").click(function () {
    isMuted = !isMuted; // تبديل حالة الكتم
    muteAllAudio(); // تطبيق الكتم فورًا

    // تغيير الأيقونة بناءً على حالة الكتم
    $(this).toggleClass("fa-volume-up fa-volume-mute");

    // تغيير لون الأيقونة بناءً على حالة الكتم
    $(this).css("color", isMuted ? "red" : "black");
  });

  // مراقبة أي أصوات جديدة يتم إضافتها للصفحة وضمان كتمها تلقائيًا
  setInterval(muteAllAudio, 1000);
});
