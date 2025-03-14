$(document).ready(function () {
    function blockScreenshot() {
        $("body").html("<h1 style='color:red;text-align:center;'>🚫 لا يمكنك التقاط لقطة شاشة لهذا الموقع!</h1>");
    }

    // 🔹 منع زر Print Screen مباشرة
    $(document).on("keydown", function (event) {
        if (event.key === "PrintScreen") {
            event.preventDefault();
            blockScreenshot();
            alert("🚫 ممنوع تصوير الشاشة!");
        }
    });

    // 🔹 كشف تغيير حالة التبويب (قد يشير إلى التصوير)
    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            blockScreenshot();
        }
    });

    // 🔹 كشف أزرار الصوت والطاقة
    $(document).on("keydown", function (event) {
        // أزرار الصوت (رفع وخفض الصوت)
        if (event.key === "VolumeUp" || event.key === "VolumeDown" || event.key === "Power") {
            event.preventDefault();
            blockScreenshot();
            alert("🚫 ممنوع تصوير الشاشة! حاولت استخدام زر الطاقة أو الصوت.");
        }
    });

    // 🔹 تعطيل النسخ واللصق والسحب
    $(document).on("copy paste cut drag drop", function (event) {
        event.preventDefault();
        alert("🚫 لا يمكنك نسخ أو سحب المحتوى!");
    });

    // 🔹 تشويش المحتوى عند محاولة التصوير
    setInterval(function () {
        $("body").css("opacity", "0.7");
        setTimeout(() => {
            $("body").css("opacity", "1");
        }, 200);
    }, 3000);

    // 🔹 منع تحديد النصوص
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

    // 🔹 تعطيل WebGL لمنع تصوير الشاشة
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl) {
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        if (ext) {
            gl.disable(ext.UNMASKED_RENDERER_WEBGL);
        }
    }
});
