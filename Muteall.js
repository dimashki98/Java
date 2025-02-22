$(document).ready(function () {
  // إضافة زر جديد تحت زر "تعطيل زيارة البروفايل"
  $("<label>", {
    id: "muteaudio",
    text: "المايكات مسموعة",
    class: "label tc border btn label-info fl",
    style: "background-color: green; color: white; margin: 1px 4px; padding: 6px; width: 98%; cursor: pointer; display: block;"
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

    // تغيير النص واللون بناءً على حالة الكتم
    if (isMuted) {
      $(this).text("المايكات مكتومة").css("background-color", "red");
    } else {
      $(this).text("المايكات مسموعة").css("background-color", "green");
    }
  });

  // ضمان بقاء المايكات مكتومة عند إضافة أصوات جديدة
  setInterval(muteAllAudio, 1000);
});
