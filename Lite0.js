$("<div id='light-mode-btn'>لايت</div>").appendTo("body");

// التحقق مما إذا كان الوضع "لايت" مفعلًا مسبقًا
let isLiteMode = localStorage.getItem("isLiteMode") === "true";

if (isLiteMode) {
    $("#light-mode-btn").text("عادي"); // تغيير النص

    // تعطيل جميع الأحداث مثل النقر والتمرير وغيرها
    $(document).on("click keydown mousemove", function (event) {
        event.stopPropagation();
        event.preventDefault();
    });
}

// عند الضغط على الزر
$("#light-mode-btn").on("click", function () {
    if (isLiteMode) {
        localStorage.removeItem("isLiteMode"); // إيقاف وضع لايت
    } else {
        localStorage.setItem("isLiteMode", "true"); // تفعيل وضع لايت
    }
    location.reload(); // إعادة تحميل الصفحة
});
