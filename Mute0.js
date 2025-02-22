$(document).ready(function () {
  // إضافة زر فتح نافذة التحكم بالصوت
  $("<label>", {
    id: "showMutePopup",
    html: '<span class="fl fa fa-volume-up" style="font-family: FontAwesome, sans-serif; margin-right: 5px;"></span> التحكم بالصوت',
    class: "label tc border btn label-info fl",
    style: "background-color: blue; color: white; margin: 1px 4px; padding: 6px; width: 98%; cursor: pointer; display: block; font-weight: bold; text-align: center;"
  }).insertAfter("#mute");

  let isMuted = false; // تتبع حالة الكتم

  // دالة لكتم جميع الأصوات
  function muteAllAudio() {
    $("audio, video").each(function () {
      this.muted = isMuted;
    });
  }

  // عند الضغط على زر فتح النافذة المنبثقة
  $("#showMutePopup").click(function () {
    Swal.fire({
      title: "إعدادات الصوت",
      html: '<label id="muteaudio" class="label tc border btn label-info fl" style="background-color: green; color: white; margin: 10px auto; padding: 10px; width: 80%; cursor: pointer; display: block; font-weight: bold; text-align: center;">' +
            '<span class="fl fa fa-microphone" style="font-family: FontAwesome, sans-serif; margin-right: 5px;"></span> المايكات مسموعة' +
            '</label>',
      showCloseButton: true,
      showConfirmButton: false,
      allowOutsideClick: false
    });

    // انتظار تحميل SweetAlert ثم ربط وظيفة الكتم بالزر
    setTimeout(() => {
      $("#muteaudio").click(function () {
        isMuted = !isMuted; // تبديل حالة الكتم
        muteAllAudio(); // تطبيق الكتم فورًا

        // تغيير النص واللون بناءً على حالة الكتم
        if (isMuted) {
          $(this).html('<span class="fl fa fa-microphone-slash" style="font-family: FontAwesome, sans-serif; margin-right: 5px;"></span> المايكات مكتومة')
                 .css("background-color", "red");
        } else {
          $(this).html('<span class="fl fa fa-microphone" style="font-family: FontAwesome, sans-serif; margin-right: 5px;"></span> المايكات مسموعة')
                 .css("background-color", "green");
        }
      });
    }, 100);
  });

  // ضمان بقاء المايكات مكتومة عند إضافة أصوات جديدة
  setInterval(muteAllAudio, 1000);
});
