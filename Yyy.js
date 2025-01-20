$(document).ready(function () {
    var allowReload = false; // افتراضيًا، منع إعادة التحميل

    // اتصال Socket.IO (تأكد من أن Socket.IO مضبوط على الخادم)
    var socket = io();

    // الاستماع لحدث "kick" (طرد) أو "ban" (حظر) أو "logout" (تسجيل خروج)
    socket.on("kick", function () {
        allowReload = true; // السماح بإعادة التحميل
        console.log("تم طردك من الغرفة.");
        location.reload(); // إعادة تحميل الصفحة
    });

    socket.on("ban", function () {
        allowReload = true; // السماح بإعادة التحميل
        console.log("تم حظرك من الغرفة.");
        location.reload(); // إعادة تحميل الصفحة
    });

    socket.on("logout", function () {
        allowReload = true; // السماح بإعادة التحميل
        console.log("تم تسجيل الخروج.");
        location.reload(); // إعادة تحميل الصفحة
    });

    // منع إعادة التحميل في الحالات العادية
    $(window).on("beforeunload", function (event) {
        if (!allowReload) {
            event.preventDefault();
            event.returnValue = ""; // منع التحميل
            console.log("تم منع إعادة تحميل الصفحة.");
        }
    });
});
