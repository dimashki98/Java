$(document).ready(function () {
    // تعديل دالة تشغيل الصوت لمنع تشغيل صوت إشعار زيارة البروفايل فقط
    const originalPlay = HTMLAudioElement.prototype.play;
    
    HTMLAudioElement.prototype.play = function () {
        // البحث عن آخر إشعار تمت إضافته
        let lastNotification = $(".notification, .wetchprofilenotifi").last();

        // التحقق مما إذا كان الإشعار هو "هذا المستخدم قد زار بروفايلك"
        if (lastNotification.length && lastNotification.text().includes("هذا المستخدم قد زار بروفايلك")) {
            console.log("تم منع تشغيل صوت إشعار زيارة البروفايل");
            return Promise.resolve(); // منع الصوت نهائيًا فقط لهذا الإشعار
        }

        return originalPlay.apply(this, arguments);
    };
});
