$(document).ready(function () {
    function blockScreenshot() {
        $("body").prepend("<div id='screenshot-block' style='position:fixed;top:0;left:0;width:100%;height:100%;background:black;opacity:0.9;z-index:9999;'></div>");
        setTimeout(() => {
            $("#screenshot-block").fadeOut(500, function () {
                $(this).remove();
            });
        }, 500);
    }

    // 🔹 منع Print Screen و Ctrl + Shift + S
    $(document).on("keydown", function (event) {
        if (event.key === "PrintScreen" || (event.ctrlKey && event.shiftKey && event.key === "S")) {
            event.preventDefault();
            blockScreenshot();
            alert("🚫 ممنوع تصوير الشاشة!");
        }
    });

    // 🔹 منع التصوير عبر تغيير حالة التبويب (يُستخدم على الجوالات)
    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            blockScreenshot();
        }
    });

    // 🔹 إضافة تأثير وميض مستمر لجعل التصوير غير واضح
    setInterval(function () {
        $("body").css("opacity", "0.7");
        setTimeout(() => {
            $("body").css("opacity", "1");
        }, 200);
    }, 3000);

    // 🔹 تعطيل خاصية النسخ واللصق وسحب المحتوى
    $(document).on("copy paste cut drag drop", function (event) {
        event.preventDefault();
        alert("🚫 لا يمكنك نسخ أو قص أو سحب المحتوى!");
    });

    // 🔹 حماية العناصر الحساسة باستخدام CSS
    $("body").append(`
        <style>
            * {
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>
    `);
});
