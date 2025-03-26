$(document).on("click", ".sndfilechat", function () {
    if (!window.__cfRLUnblockHandlers) return false;

    // التحقق من وجود UserInfo و socket.id
    if (typeof UserInfo === 'undefined' || typeof socket === 'undefined' || !UserInfo[socket.id]) {
        console.log("UserInfo أو socket غير متوفر!");
        return;
    }

    // جلب عدد اللايكات للمستخدم
    let userLikes = UserInfo[socket.id]['rep'] || 0; // إذا لم يكن لديه لايكات، نعتبرها 0

    console.log("عدد اللايكات:", userLikes);

    // التحقق من أن عدد اللايكات لا يقل عن 500
    if (userLikes < 500) {
        SendNotification({
            state: 'me',
            topic: "",
            force: 1,
            msg: "يجب أن يكون لديك 500 لايك على الأقل لاستخدام هذا الزر.",
            user: ""
        });
        return;
    }

    // تنفيذ الإجراء إذا كان لديه 500 لايك أو أكثر
    Tsend(true);
});
