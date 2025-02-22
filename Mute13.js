$(document).ready(function() {
  let isMuted = false; // حالة الكتم

  // دالة لتحديث حالة كتم كل عناصر الوسائط الموجودة
  function muteAllMedia() {
    $("audio, video").each(function(){
      this.muted = isMuted;
      if(isMuted){
        this.pause(); // إيقاف التشغيل إذا كان الكتم مفعلًا
      }
    });
  }

  // تجاوز دالة play لعناصر الوسائط بحيث تُمنع من التشغيل إذا كان الكتم مفعلًا
  const originalPlay = HTMLMediaElement.prototype.play;
  HTMLMediaElement.prototype.play = function() {
    if (isMuted) {
      this.pause(); // تأكيد الإيقاف
      // إرجاع وعد مرفوض لمنع تشغيل الوسائط
      return Promise.reject("تم منع التشغيل لأن الكتم مفعل.");
    }
    return originalPlay.apply(this, arguments);
  };

  // استجابة عند الضغط على زر الكتم (يفترض أن له id="muteaudio")
  $("#muteaudio").click(function(){
    isMuted = !isMuted; // تبديل حالة الكتم
    muteAllMedia();     // تحديث حالة جميع الوسائط

    // تحديث نص ولون الزر بناءً على حالة الكتم
    if (isMuted) {
      $(this).text("المايكات مكتومة").css("background-color", "red");
    } else {
      $(this).text("المايكات مسموعة").css("background-color", "green");
    }
  });

  // مراقبة DOM للتأكد من أن أي عنصر وسائط جديد يُضاف يُطبق عليه الكتم فوراً
  const observer = new MutationObserver((mutationsList, observer) => {
    muteAllMedia();
  });
  observer.observe(document.body, { childList: true, subtree: true });

  // (اختياري) يمكن إضافة مراقبة حدث play أيضًا كضمان إضافي
  $(document).on("play", "audio, video", function () {
    if (isMuted) {
      this.pause();
    }
  });
});
