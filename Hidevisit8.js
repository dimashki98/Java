$(document).ready(function () {
    // تعديل دالة تشغيل الصوت لمنع تشغيل صوت إشعار زيارة البروفايل فقط
    const originalPlay = HTMLAudioElement.prototype.play;
    HTMLAudioElement.prototype.play = function () {
        // التحقق مما إذا كان الإشعار الأخير هو "هذا المستخدم قد زار بروفايلك"
        let profileNotificationExists = $(".notification, .wetchprofilenotifi").filter(function () {
            return $(this).text().includes("هذا المستخدم قد زار بروفايلك");
        }).length > 0;

        if (profileNotificationExists) {
            console.log("تم منع تشغيل صوت إشعار زيارة البروفايل");
            issound = false; // تعطيل الصوت مؤقتًا
            setTimeout(() => { issound = true; }, 3000); // إعادة تفعيل الصوت بعد 3 ثوانٍ
            return Promise.resolve(); // منع التشغيل
        }

        return originalPlay.apply(this, arguments);
    };
});
