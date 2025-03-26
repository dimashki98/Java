$(document).on("click", ".sndfilechat", function () {
    if (!window.__cfRLUnblockHandlers) return false;

    // التحقق من وجود المتغيرات المطلوبة
    if (typeof UserInfo !== 'undefined' && typeof SiteSetting !== 'undefined' && UserInfo[socket.id]) {
        if (UserInfo[socket.id]['rep'] < SiteSetting['maxlikeyot']) {
            SendNotification({
                state: 'me',
                topic: "",
                force: 1,
                msg: SiteSetting['maxlikeyot'] + "  يجب أن يكون عدد اللايكات",
                user: ""
            });
            return; 
        }
    }

    // استدعاء الدالة الأصلية إذا تحقق الشرط
    Tsend(true);
});
