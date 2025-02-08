$(document).ready(function () {
    const originalPlay = HTMLAudioElement.prototype.play;
    HTMLAudioElement.prototype.play = function () {
        // البحث عن إشعار زيارة البروفايل
        let lastNotification = $(".notification, .wetchprofilenotifi").last();
        if (lastNotification.text().includes("هذا المستخدم قد زار بروفايلك")) {
            console.log("تم منع تشغيل صوت إشعار زيارة البروفايل");
            return Promise.resolve(); // منع التشغيل بدون أخطاء
        }
        return originalPlay.apply(this, arguments);
    };
});
