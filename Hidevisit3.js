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

    // تعطيل تشغيل صوت الإشعار عند زيارة البروفايل
    const originalAudio = window.Audio;
    window.Audio = function (src) {
        if (src === "/imgs/beep.mp3" && document.body.innerHTML.includes("هذا المستخدم قد زار بروفايلك")) {
            console.log("تم منع تشغيل صوت إشعار زيارة البروفايل");
            return { play: function () {} }; // تعطيل تشغيل الصوت
        }
        return new originalAudio(src);
    };
});
