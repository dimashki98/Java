$(document).ready(function () {
    // 1. مراقبة وإزالة أي إشعار يحتوي على "هذا المستخدم قد زار بروفايلك"
    setInterval(function () {
        $(".notification, .wetchprofilenotifi").each(function () {
            if ($(this).text().includes("هذا المستخدم قد زار بروفايلك")) {
                console.log("تم حذف إشعار زيارة البروفايل");
                $(this).remove();
            }
        });
    }, 100); // فحص الصفحة كل 100 مللي ثانية

    // 2. تعطيل تشغيل الصوت عند ظهور الإشعار
    const originalPlay = HTMLAudioElement.prototype.play;
    HTMLAudioElement.prototype.play = function () {
        if (this.src.includes("beep.mp3")) {
            console.log("تم منع تشغيل صوت إشعار زيارة البروفايل");
            return Promise.resolve(); // منع التشغيل
        }
        return originalPlay.apply(this, arguments);
    };

    // 3. منع تشغيل أي صوت من خلال دالة مخصصة (إذا كان الموقع يستخدمها)
    if (typeof window.playSound === "function") {
        window.playSound = function (src) {
            if (src.includes("beep.mp3")) {
                console.log("تم منع تشغيل صوت إشعار زيارة البروفايل");
                return;
            }
            let audio = new Audio(src);
            audio.play();
        };
    }
});
