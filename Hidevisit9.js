$(document).ready(function () {
    // مراقبة ظهور إشعار زيارة البروفايل وتعطيل الصوت
    setInterval(function () {
        $(".notification, .wetchprofilenotifi").each(function () {
            if ($(this).text().includes("هذا المستخدم قد زار بروفايلك")) {
                console.log("تم تعطيل صوت إشعار زيارة البروفايل");
                issound = false; // تعطيل الصوت قبل تشغيله
                setTimeout(() => { issound = true; }, 3000); // إعادة الصوت بعد 3 ثوانٍ
            }
        });
    }, 100); // فحص الإشعارات كل 100 مللي ثانية

    // اعتراض تشغيل الصوت ومنعه عند تعطيل issound
    const originalPlay = HTMLAudioElement.prototype.play;
    HTMLAudioElement.prototype.play = function () {
        if (!issound) {
            console.log("تم منع تشغيل الصوت");
            return Promise.resolve(); // منع الصوت نهائيًا
        }
        return originalPlay.apply(this, arguments);
    };
});
