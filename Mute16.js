$(document).ready(function () {
  // إضافة زر جديد لتشغيل النافذة المنبثقة
  $("<label>", {
    id: "showMutePopup",
    html: '<span class="fl fa fa-volume-up" style="font-family: FontAwesome, sans-serif; margin-right: 5px;"></span> التحكم بالصوت',
    class: "label tc border btn label-info fl",
    style: "background-color: blue; color: white; margin: 1px 4px; padding: 6px; width: 98%; cursor: pointer; display: block; font-weight: bold; text-align: center;"
  }).insertAfter("#mute");

  let isMuted = false; // تتبع حالة الكتم
  let muteButtonVisible = false; // تتبع حالة ظهور زر المايكات

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
      html: `
        <label id="enableMuteBtn" class="label tc border btn label-info fl" 
               style="background-color: orange; color: white; margin: 1px 4px; padding: 6px; width: 98%; cursor: pointer; display: block;">
          تفعيل زر كتم المايكات
        </label>
        <div id="muteButtonContainer" style="display: none; margin-top: 10px;"></div>
      `,
      showCloseButton: true,
      showConfirmButton: false
    });

    // عند الضغط على زر "تفعيل زر كتم المايكات"
    setTimeout(() => {
      $("#enableMuteBtn").click(function () {
        if (!muteButtonVisible) {
          $("#muteButtonContainer").html(`
            <label id="muteaudio" class="label tc border btn label-info fl" 
                   style="background-color: green; color: white; margin: 1px 4px; padding: 6px; width: 98%; cursor: pointer; display: block;">
              المايكات مسموعة
            </label>
          `).show();
          muteButtonVisible = true;

          // التعامل مع زر الكتم
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
        } else {
          $("#muteButtonContainer").hide().empty();
          muteButtonVisible = false;
        }
      });
    }, 100);
  });

  // ضمان بقاء المايكات مكتومة عند إضافة أصوات جديدة
  setInterval(muteAllAudio, 1000);
});
