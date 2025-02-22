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

    // التأكد من إيقاف جميع المخرجات الصوتية القادمة من الميكروفون
    navigator.mediaDevices.enumerateDevices().then(devices => {
      devices.forEach(device => {
        if (device.kind === "audiooutput") {
          let audioElement = document.querySelector(`audio[data-device-id="${device.deviceId}"]`);
          if (audioElement) {
            audioElement.muted = isMuted;
          }
        }
      });
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

  // منع تشغيل الصوت القادم من الميكروفون
  navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    const audioTracks = stream.getAudioTracks();
    audioTracks.forEach(track => {
      track.enabled = false; // تعطيل الميكروفون مؤقتًا
    });
  }).catch(error => {
    console.error("لم يتمكن من الوصول إلى الميكروفون:", error);
  });

  // ضمان بقاء المايكات مكتومة عند إضافة أصوات جديدة
  setInterval(muteAllAudio, 1000);
});
