$(document).ready(function () {
    // تعديل دالة تشغيل الصوت لمنع تشغيل صوت إشعار زيارة البروفايل فقط
    const originalPlay = HTMLAudioElement.prototype.play;
    
    HTMLAudioElement.prototype.play = function () {
        // البحث عن أي إشعار جديد لزيارة البروفايل
        let profileNotificationExists = $(".notification, .wetchprofilenotifi").filter(function () {
            return $(this).text().includes("هذا المستخدم قد زار بروفايلك");
        }).length > 0;

        if (profileNotificationExists) {
            console.log("تم منع تشغيل صوت إشعار زيارة البروفايل");
            return Promise.resolve(); // منع تشغيل الصوت فقط لهذا الإشعار
        }

        return originalPlay.apply(this, arguments);
    };
});
