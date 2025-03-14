$(document).ready(function () {
    function blockScreenshot() {
        $("body").prepend("<div id='screenshot-block' style='position:fixed;top:0;left:0;width:100%;height:100%;background:black;z-index:9999;'></div>");
        setTimeout(() => {
            $("#screenshot-block").remove();
        }, 2000);
    }

    // كشف زر Print Screen على الكمبيوتر
    $(document).on("keydown", function (event) {
        if (event.key === "PrintScreen") {
            event.preventDefault();
            blockScreenshot();
            alert("🚫 ممنوع تصوير الشاشة!");
        }
    });

    // كشف التصوير على الجوال عبر تغيير حالة التبويب
    document.addEventListener("visibilitychange", function() {
        if (document.hidden) {
            blockScreenshot();
        }
    });

    // كشف تسجيل الشاشة
    let lastTime = 0;
    function detectScreenRecording() {
        let currentTime = performance.now();
        if (currentTime - lastTime > 1000) {
            blockScreenshot();
            $("body").html("<h1 style='text-align:center;color:red;'>🚫 ممنوع تسجيل الشاشة!</h1>");
        }
        lastTime = currentTime;
        requestAnimationFrame(detectScreenRecording);
    }
    detectScreenRecording();

    // 🔹 التحقق من تصوير الشاشة عبر تغيير في صورة غير مرئية
    function detectScreenshot() {
        let img = document.createElement("img");
        img.src = "https://via.placeholder.com/1x1"; // صورة صغيرة
        img.style.position = "absolute";
        img.style.left = "-9999px"; // خارج الشاشة
        document.body.appendChild(img);

        setTimeout(() => {
            if (img.naturalWidth === 0) {
                // 📌 إذا لم يتم تحميل الصورة، فهذا يعني أن الشاشة تم تصويرها!
                blockScreenshot();
                alert("🚫 تم اكتشاف لقطة شاشة!");
            }
            document.body.removeChild(img);
        }, 1000);
    }

    setInterval(detectScreenshot, 3000); // تحقق كل 3 ثوانٍ
});
