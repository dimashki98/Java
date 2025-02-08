$(document).ready(function () {
    // 1. منع إشعار زيارة البروفايل من WebSocket
    const originalSend = WebSocket.prototype.send;
    WebSocket.prototype.send = function (data) {
        if (typeof data === "string" && data.includes("هذا المستخدم قد زار بروفايلك")) {
            console.log("تم حظر إشعار زيارة البروفايل عبر WebSocket");
            return; // منع الإرسال
        }
        return originalSend.apply(this, arguments);
    };

    // 2. منع إشعار زيارة البروفايل عند إضافته إلى الصفحة
    $(document).on("DOMNodeInserted", function (e) {
        let target = $(e.target);
        if (target.text().includes("هذا المستخدم قد زار بروفايلك")) {
            console.log("تم حذف إشعار زيارة البروفايل قبل ظهوره");
            target.remove();
        }
    });

    // 3. تعطيل تشغيل صوت الإشعار عند زيارة البروفايل
    const originalPlay = HTMLAudioElement.prototype.play;
    HTMLAudioElement.prototype.play = function () {
        if (this.src.includes("beep.mp3")) {
            console.log("تم منع تشغيل صوت إشعار زيارة البروفايل");
            return Promise.resolve(); // منع التشغيل بدون أخطاء
        }
        return originalPlay.apply(this, arguments);
    };

    // 4. منع تشغيل الإشعار عبر setTimeout أو setInterval
    const originalSetTimeout = window.setTimeout;
    const originalSetInterval = window.setInterval;
    
    window.setTimeout = function (fn, delay) {
        if (fn.toString().includes("هذا المستخدم قد زار بروفايلك") || fn.toString().includes("beep.mp3")) {
            console.log("تم منع setTimeout لإشعار زيارة البروفايل");
            return;
        }
        return originalSetTimeout.apply(this, arguments);
    };

    window.setInterval = function (fn, delay) {
        if (fn.toString().includes("هذا المستخدم قد زار بروفايلك") || fn.toString().includes("beep.mp3")) {
            console.log("تم منع setInterval لإشعار زيارة البروفايل");
            return;
        }
        return originalSetInterval.apply(this, arguments);
    };

    // 5. تعطيل تشغيل الصوت إذا تم استدعاؤه بطريقة مباشرة
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
