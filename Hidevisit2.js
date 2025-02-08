$(document).ready(function () {
    // اعتراض WebSocket لمنع وصول إشعارات زيارة البروفايل
    const originalSend = WebSocket.prototype.send;
    WebSocket.prototype.send = function (data) {
        if (typeof data === "string" && data.includes("هذا المستخدم قد زار بروفايلك")) {
            console.log("تم حظر إشعار زيارة البروفايل");
            return; // منع إرسال الإشعار
        }
        return originalSend.apply(this, arguments);
    };

    // منع إضافة الإشعار إلى الصفحة
    $(document).on("DOMNodeInserted", function (e) {
        let target = $(e.target);
        if (target.text().includes("هذا المستخدم قد زار بروفايلك")) {
            console.log("تم إلغاء إشعار زيارة البروفايل قبل إضافته");
            target.remove();
        }
    });

    // تعطيل تشغيل الصوت عند ظهور إشعار زيارة البروفايل
    const originalAudioPlay = HTMLAudioElement.prototype.play;
    HTMLAudioElement.prototype.play = function () {
        if (document.body.innerHTML.includes("هذا المستخدم قد زار بروفايلك")) {
            console.log("تم منع تشغيل صوت الإشعار");
            return; // منع تشغيل الصوت
        }
        return originalAudioPlay.apply(this, arguments);
    };
});
