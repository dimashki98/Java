$(document).ready(function () {
  // إنشاء نافذة منبثقة
  $("body").append(`
    <div id="mutePopup" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
        background: white; padding: 15px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3); z-index: 1000;">
      <label id="muteaudio" class="label tc border btn label-info fl"
        style="background-color: green; color: white; padding: 10px; cursor: pointer; display: block; text-align: center;">
        المايكات مسموعة
      </label>
      <button id="closePopup" style="margin-top: 10px; padding: 5px 10px; border: none; background-color: red; color: white; cursor: pointer; display: block; width: 100%;">إغلاق</button>
    </div>
    <div id="overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 999;"></div>
  `);

  let isMuted = false;

  function muteAllAudio() {
    $("audio, video").each(function () {
      this.muted = isMuted;
    });
  }

  // عند الضغط على الزر في النافذة المنبثقة
  $("#muteaudio").click(function () {
    isMuted = !isMuted;
    muteAllAudio();

    if (isMuted) {
      $(this).text("المايكات مكتومة").css("background-color", "red");
    } else {
      $(this).text("المايكات مسموعة").css("background-color", "green");
    }
  });

  // عند الضغط على أيقونة الصوت تظهر النافذة
  $(".fa-volume-up").click(function () {
    $("#mutePopup, #overlay").fadeIn();
  });

  // عند الضغط على زر الإغلاق تختفي النافذة
  $("#closePopup, #overlay").click(function () {
    $("#mutePopup, #overlay").fadeOut();
  });

  // ضمان بقاء المايكات مكتومة عند إضافة أصوات جديدة
  setInterval(muteAllAudio, 1000);
});
