$(document).on("click", ".sndfilechat", function () {
    if (!window.__cfRLUnblockHandlers) return false;

    // التأكد من أن UserInfo و socket.id موجودان
    if (typeof UserInfo === 'undefined' || typeof socket === 'undefined' || !UserInfo[socket.id]) {
        console.log("UserInfo أو socket.id غير متوفر!");
        return;
    }

    // التأكد من أن عدد اللايكات موجود ومحدث
    if (typeof UserInfo[socket.id]["rep"] === 'undefined') {
        console.log("عدد اللايكات (rep) غير متاح بعد، يرجى المحاولة لاحقًا.");
        return;
    }

    // جلب عدد اللايكات من rep (الذي يمثل عدد اللايكات)
    let userLikes = parseInt(UserInfo[socket.id]["rep"]) || 0;

    console.log("عدد لايكات المستخدم (rep):", userLikes);

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
    console.log("تم استقبال setLikes:", data);

    if (data["data"] && typeof data["data"]["likes"] === "number" && UserInfo[socket.id]) {
        UserInfo[socket.id]["rep"] = data["data"]["likes"]; // تحديث عدد اللايكات في rep
        console.log("تم تحديث عدد اللايكات إلى:", UserInfo[socket.id]["rep"]);
    } else {
        console.log("لم يتمكن من تحديث عدد اللايكات!");
    }
});
