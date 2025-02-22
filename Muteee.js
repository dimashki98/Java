$(document).ready(function () {
  // إضافة زر "المايكات مسموعة" تحت زر "تشغيل كتم المايكات"
  $("<label>", {
    id: "muteStatus",
    text: "المايكات مسموعة",
    class: "label tc border btn label-info fl",
    style: "background-color: green; color: white; margin: 1px 4px; padding: 6px; width: 98%; cursor: pointer; display: block;"
  }).insertAfter("#muteaudio"); // وضع الزر بعد زر "تشغيل كتم المايكات"

  let isMuted = false; // تتبع حالة الكتم

  // دالة لكتم جميع الأصوات
  function muteAllAudio() {
    $("audio, video").each(function () {
      this.muted = isMuted;
    });
  }

  // عند الضغط على الزر
  $("#muteStatus").click(function () {
    isMuted = !isMuted; // تبديل حالة الكتم
    muteAllAudio(); // تطبيق الكتم فورًا

    // تغيير النص واللون بناءً على حالة الكتم
    if (isMuted) {
      $(this).text("المايكات مكتومة").css("background-color", "red");
    } else {
      $(this).text("المايكات مسموعة").css("background-color", "green");
    }
  });

  // عرض نافذة SweetAlert مع زر "تشغيل كتم المايكات"
  $("#showMutePopup").click(function () {
    Swal.fire({
      title: "إعدادات الصوت",
      html: '<label id="muteaudio" class="label tc border btn label-info fl" style="background-color: green; color: white; margin: 1px 4px; padding: 6px; width: 98%; cursor: pointer; display: block; font-weight: bold;">' +
            '<span class="fl fa fa-microphone" style="font-family: FontAwesome, sans-serif; margin-right: 5px;"></span> تشغيل كتم المايكات' +
            '</label>',
      showCloseButton: true,
      showConfirmButton: false,
      allowOutsideClick: true // السماح بالنقر خارج النافذة لإغلاقها
    });

    // بعد فتح نافذة SweetAlert، إضافة الزر "المايكات مسموعة"
    setTimeout(function () {
      // إضافة زر "المايكات مسموعة" بعد زر "تشغيل كتم المايكات"
      $("<label>", {
        id: "muteStatus",
        text: "المايكات مسموعة",
        class: "label tc border btn label-info fl",
        style: "background-color: green; color: white; margin: 1px 4px; padding: 6px; width: 98%; cursor: pointer; display: block;"
      }).insertAfter("#muteaudio");

      // عند الضغط على الزر "المايكات مسموعة"
      $("#muteStatus").click(function () {
        isMuted = !isMuted; // تبديل حالة الكتم
        muteAllAudio(); // تطبيق الكتم فورًا

        // تغيير النص واللون بناءً على حالة الكتم
        if (isMuted) {
          $(this).text("المايكات مكتومة").css("background-color", "red");
        } else {
          $(this).text("المايكات مسموعة").css("background-color", "green");
        }
      });
    }, 500);
  });
});
