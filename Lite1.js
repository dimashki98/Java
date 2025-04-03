$("<style>\n\
#light-mode-btn {\n\
    position: fixed;\n\
    top: 80%; \n\
    right: 20px;\n\
    transform: translateY(-50%);\n\
    width: 80px;\n\
    height: 80px;\n\
    z-index: 10000;\n\
    cursor: pointer;\n\
    display: flex;\n\
    justify-content: center;\n\
    align-items: center;\n\
    background-color: white;\n\
    border-radius: 50%;\n\
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);\n\
    transition: all 0.4s ease-in-out;\n\
    font-size: 18px;\n\
    font-weight: bold;\n\
    color: black;\n\
    text-align: center;\n\
}\n\
#light-mode-btn:hover {\n\
    transform: scale(1.1);\n\
}\n\
</style>").appendTo("head");

// التحقق مما إذا كان الوضع "لايت" مفعلًا مسبقًا
let isLiteMode = localStorage.getItem("isLiteMode") === "true";

// إنشاء الزر مع تحديد النص المناسب
$("<div id='light-mode-btn'>" + (isLiteMode ? "عادي" : "لايت") + "</div>").appendTo("body");

// إذا كان الوضع "لايت" مفعلًا، قم بتحميل السكربت مباشرة
if (isLiteMode) {
    $.getScript("https://cdn.jsdelivr.net/gh/dimashki98/Java@refs/heads/main/Lite.js");
}

// عند الضغط على الزر
$("#light-mode-btn").on("click", function () {
    if (isLiteMode) {
        localStorage.removeItem("isLiteMode"); // إلغاء وضع "لايت"
    } else {
        localStorage.setItem("isLiteMode", "true"); // تفعيل وضع "لايت"
    }
    location.reload(); // إعادة تحميل الصفحة لتطبيق التغييرات
});
