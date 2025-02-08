$(document).ready(function () {
    // تعديل issound فقط عند ظهور إشعار زيارة البروفايل
    setInterval(function () {
        let profileNotificationExists = $(".notification, .wetchprofilenotifi").filter(function () {
            return $(this).text().includes("هذا المستخدم قد زار بروفايلك");
        }).length > 0;

        if (profileNotificationExists) {
            console.log("تم تعطيل صوت إشعار زيارة البروفايل");
            issound = false; // تعطيل الصوت لهذا الإشعار فقط
            setTimeout(() => { issound = true; }, 3000); // إعادة الصوت بعد 3 ثوانٍ
        }
    }, 100); // فحص الإشعارات كل 100 مللي ثانية

    // اعتراض تشغيل الصوت ومنعه عند تعطيل issound
    const originalPlay = HTMLAudioElement.prototype.play;
    HTMLAudioElement.prototype.play = function () {
        if (!issound) {
            console.log("تم منع تشغيل الصوت لإشعار زيارة البروفايل");
            return Promise.resolve(); // منع الصوت نهائيًا فقط لهذا الإشعار
        }
        return originalPlay.apply(this, arguments);
    };
});
