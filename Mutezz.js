$(document).ready(function () {
  let isMuted = false; // تتبع حالة الكتم

  // دالة لكتم جميع الأصوات
  function muteAllAudio() {
    $("audio, video").each(function () {
      this.muted = isMuted;
    });
  }

  // إضافة زر "المايكات مسموعة" في النافذة المنبثقة بدون تفعيله عند تحميل الصفحة
  $("<label>", {
    id: "muteaudio",
    text: "المايكات مسموعة",
    class: "label tc border btn label-info fl",
    style: "background-color: green; color: white; margin: 1px 4px; padding: 6px; width: 98%; cursor: pointer; display: block; font-weight: bold;"
  }).insertAfter("#muteaudio").prop('disabled', true); // تعطيل الزر عند تحميل الصفحة

  // عند الضغط على زر "تشغيل كتم المايكات"
  $("#mute").click(function () {
    // تفعيل زر "المايكات مسموعة"
    $("#muteaudio").prop('disabled', false);

    // عرض نافذة SweetAlert تحتوي على زر "المايكات مسموعة"
    Swal.fire({
      title: 'التحكم في الصوت',
      html: `
        <label id="muteaudioSweet" class="label tc border btn label-info fl" 
               style="background-color: green; color: white; margin: 1px 4px; padding: 6px; width: 98%; cursor: pointer; display: block; font-weight: bold;">
          <span class="fl fa fa-microphone" style="font-family: FontAwesome, sans-serif; margin-right: 5px;"></span>
          المايكات مسموعة
        </label>
      `,
      showCloseButton: true,
      showCancelButton: true,
      cancelButtonText: 'إغلاق',
      focusCancel: true
    });

    // عند الضغط على زر "المايكات مسموعة"
    $("#muteaudioSweet").click(function () {
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
});
