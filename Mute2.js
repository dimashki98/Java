$(document).ready(function () {
  // إضافة زر جديد تحت زر "تعطيل زيارة البروفايل"
  $("<label>", {
    id: "muteaudio",
    text: "كتم المايكات",
    class: "label tc border btn label-info fl",
    style: "background-color: ghostwhite; color: black; margin: 1px 4px; padding: 6px; width: 98%; cursor: pointer;"
  }).insertAfter("#mute");

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

    // تغيير النص بناءً على حالة الكتم
    $(this).text(isMuted ? "المايكات مكتومة" : "كتم المايكات");
  });

  // مراقبة أي أصوات جديدة يتم إضافتها للصفحة وضمان كتمها تلقائيًا
  setInterval(muteAllAudio, 1000);
});
