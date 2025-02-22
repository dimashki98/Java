$(document).ready(function () {
  // عند الضغط على زر "تفعيل كتم المايكات"
  $("#muteButton").click(function () {
    // عرض نافذة SweetAlert مع زر "المايكات مسموعة"
    Swal.fire({
      title: "إعدادات الصوت",
      html: '<label id="muteStatus" class="label tc border btn label-info fl" style="background-color: green; color: white; margin: 1px 4px; padding: 6px; width: 98%; cursor: pointer; display: block; font-weight: bold;">' +
            '<span class="fl fa fa-microphone" style="font-family: FontAwesome, sans-serif; margin-right: 5px;"></span> المايكات مسموعة' +
            '</label>',
      showCloseButton: true,
      showConfirmButton: false,
      allowOutsideClick: true // السماح بالنقر خارج النافذة لإغلاقها
    });

    let isMuted = false; // تتبع حالة كتم المايكات

    // دالة لكتم جميع الأصوات
    function muteAllAudio() {
      $("audio, video").each(function () {
        this.muted = isMuted;
      });
    }

    // بعد فتح نافذة SweetAlert، تفعيل الكود عند الضغط على الزر
    setTimeout(() => {
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
    }, 100);
  });
});
