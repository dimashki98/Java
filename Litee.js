console.log("وضع لايت مفعل ✅");

// تعطيل جميع السكربتات الموجودة في الصفحة
$("script").each(function () {
    let scriptSrc = $(this).attr("src");

    // استثناء هذا السكربت حتى لا يحذف نفسه
    if (scriptSrc && scriptSrc.includes("Lite.js")) return;

    $(this).remove(); // إزالة السكربت من الصفحة
});

// تعطيل جميع الأحداث التي قد تكون مفعلة من السكربتات
$(document).off(); // إزالة جميع الأحداث المضافة إلى `document`
$("*").off(); // إزالة جميع الأحداث من جميع العناصر
