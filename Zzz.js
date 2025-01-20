$(document).ready(function () {
    var allowReload = false; // منع إعادة التحميل افتراضيًا

    // اتصال Socket.IO (تأكد من إعداد الخادم بشكل صحيح)
    var socket = io();

    // تسجيل الخروج
    window.logout = function () {
        allowReload = true; // السماح بإعادة التحميل
        console.log("تم تسجيل الخروج.");
        location.href = "/logout"; // تعديل الرابط إذا لزم الأمر
    };

    // عند الضغط على زر الطرد أو الحظر
    $(document).on("click", ".uban, .ukick", function () {
        allowReload = true; // السماح بإعادة التحميل
        console.log("تم تنفيذ إجراء الطرد أو الحظر.");
    });

    // استلام إشعار الطرد من الخادم
    socket.on("kick", function () {
        allowReload = true; // السماح بإعادة التحميل
        console.log("تم طردك من الغرفة.");
        location.reload(); // إعادة تحميل الصفحة
    });

    // استلام إشعار الحظر من الخادم
    socket.on("ban", function () {
        allowReload = true; // السماح بإعادة التحميل
        console.log("تم حظرك من الغرفة.");
        location.reload(); // إعادة تحميل الصفحة
    });

    // منع إعادة التحميل في جميع الحالات الأخرى
    $(window).on("beforeunload", function (event) {
        if (!allowReload) {
            event.preventDefault();
            event.returnValue = ""; // منع التحميل
            console.log("تم منع إعادة تحميل الصفحة.");
        }
    });

    // إعادة ضبط الحالة عند مغادرة الصفحة
    $(window).on("unload", function () {
        allowReload = false;
    });
});
