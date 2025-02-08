$(document).ready(function () {
    // اعتراض طلبات WebSocket أو AJAX التي تحتوي على إشعارات زيارة البروفايل
    const originalSend = WebSocket.prototype.send;
    WebSocket.prototype.send = function (data) {
        if (typeof data === "string" && data.includes("هذا المستخدم قد زار بروفايلك")) {
            console.log("تم حظر إشعار زيارة البروفايل");
            return; // منع إرسال البيانات
        }
        return originalSend.apply(this, arguments);
    };

    $(document).on("DOMNodeInserted", function (e) {
        let target = $(e.target);
        if (target.text().includes("هذا المستخدم قد زار بروفايلك")) {
            console.log("تم إلغاء إشعار زيارة البروفايل قبل إضافته");
            target.remove();
        }
    });
});
