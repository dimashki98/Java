$(document).on("click", ".sndfilechat", function () {
    if (!window.__cfRLUnblockHandlers) return false;

    // التأكد من أن UserInfo و socket.id موجودان
    if (typeof UserInfo === 'undefined' || typeof socket === 'undefined' || !UserInfo[socket.id]) {
        console.log("UserInfo أو socket.id غير متوفر!");
        return;
    }

    // التأكد من أن عدد اللايكات موجود ومحدث
    if (typeof UserInfo[socket.id]["ulike"] === 'undefined') {
        console.log("عدد اللايكات غير متاح بعد، يرجى المحاولة لاحقًا.");
        return;
    }

    // جلب عدد اللايكات
    let userLikes = parseInt(UserInfo[socket.id]["ulike"]) || 0;

    console.log("عدد لايكات المستخدم:", userLikes);

    // التحقق من أن عدد اللايكات لا يقل عن 500
    if (userLikes < 500) {
        console.log("المستخدم لا يملك 500 لايك، منع الاستخدام!");
        SendNotification({
            state: 'me',
            topic: "",
            force: 1,
            msg: "يجب أن يكون لديك 500 لايك على الأقل لاستخدام هذا الزر.",
            user: ""
        });
        return;
    }

    console.log("المستخدم لديه 500 لايك أو أكثر، السماح باستخدام الزر.");
    
    // تنفيذ الإجراء إذا كان لديه 500 لايك أو أكثر
    Tsend(true);
});

// تحديث عدد اللايكات عند استقبال `setLikes`
socket.on("setLikes", function (data) {
    if (data["data"] && typeof data["data"]["likes"] === "number" && UserInfo[socket.id]) {
        UserInfo[socket.id]["ulike"] = data["data"]["likes"];
        console.log("تم تحديث عدد اللايكات إلى:", UserInfo[socket.id]["ulike"]);
    }
});
