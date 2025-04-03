$(document).ready(function () {
    // إضافة أنماط CSS للزر
    $("<style>\n\
    #light-mode-btn {\n\
        position: fixed;\n\
        bottom: 20px;\n\
        right: 20px;\n\
        width: 100px;\n\
        height: 40px;\n\
        background: white;\n\
        text-align: center;\n\
        line-height: 40px;\n\
        cursor: pointer;\n\
        border-radius: 10px;\n\
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);\n\
        font-weight: bold;\n\
        font-size: 16px;\n\
        color: black;\n\
    }\n\
    #light-mode-btn:hover {\n\
        background: #f3f3f3;\n\
    }\n\
    </style>").appendTo("head");

    // التحقق مما إذا كان وضع "لايت" مفعلًا
    let isLiteMode = localStorage.getItem("isLiteMode") === "true";

    // إنشاء الزر وتغيير النص بناءً على الوضع الحالي
    $("<div id='light-mode-btn'>" + (isLiteMode ? "عادي" : "لايت") + "</div>").appendTo("body");

    // إذا كان الوضع "لايت" مفعلًا، تحميل السكربت
    if (isLiteMode) {
        $.getScript("https://cdn.jsdelivr.net/gh/dimashki98/Java@refs/heads/main/Liteeeee.js");
    }

    // عند الضغط على الزر
    $("#light-mode-btn").on("click", function () {
        if (isLiteMode) {
            // إيقاف وضع لايت
            localStorage.removeItem("isLiteMode");
            location.reload(); // إعادة تحميل الصفحة
        } else {
            // تفعيل وضع لايت
            localStorage.setItem("isLiteMode", "true");
            location.reload(); // إعادة تحميل الصفحة لتفعيل الكود
        }
    });
});
