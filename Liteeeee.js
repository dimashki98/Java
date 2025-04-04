console.log("وضع لايت مفعل ✅");

// تعطيل جميع السكربتات الموجودة في الصفحة
$("script").each(function () {
    let scriptSrc = $(this).attr("src");

    // استثناء هذا السكربت حتى لا يحذف نفسه
    if (scriptSrc && scriptSrc.includes("Lite.js")) return;

    // إيقاف السكربتات عبر إزالته من DOM
    $(this).remove();
});

// تعطيل جميع الأحداث المرتبطة بالعناصر
$(document).off(); // تعطيل جميع الأحداث على document
$("*").off(); // تعطيل جميع الأحداث على جميع العناصر

// تعطيل الأنماط المتحركة والانتقالات
$("*").css({
    "animation": "none",
    "transition": "none"
});
