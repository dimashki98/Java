$(document).ready(function () {
    function blockScreenshot() {
        $("body").prepend("<div id='screenshot-block' style='position:fixed;top:0;left:0;width:100%;height:100%;background:black;z-index:9999;'></div>");
        setTimeout(() => {
            $("#screenshot-block").remove();
        }, 2000);
    }

    // 🔹 منع تصوير الشاشة بزر PrintScreen
    $(document).on("keydown", function (event) {
        if (event.key === "PrintScreen") {
            event.preventDefault();
            blockScreenshot();
            alert("🚫 ممنوع تصوير الشاشة!");
        }
    });

    // 🔹 منع التصوير عبر اختصار Ctrl + Shift + S
    $(document).on("keydown", function (event) {
        if (event.ctrlKey && event.shiftKey && event.key === "S") {
            event.preventDefault();
            blockScreenshot();
            alert("🚫 ممنوع تصوير الشاشة!");
        }
    });

    // 🔹 كشف محاولة التصوير على الجوال والكمبيوتر عبر تغيير الرؤية
    document.addEventListener("visibilitychange", function() {
        if (document.hidden) {
            blockScreenshot();
        }
    });

    // 🔹 كشف تسجيل الشاشة وإخفاء المحتوى فورًا
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

    // 🔹 التحقق الذكي من تصوير الشاشة
    function detectScreenshot() {
        let testDiv = document.createElement("div");
        testDiv.style.position = "absolute";
        testDiv.style.left = "-9999px";
        testDiv.style.width = "100px";
        testDiv.style.height = "100px";
        testDiv.style.background = "rgba(255,0,0,0.5)"; // لون شفاف مميز
        document.body.appendChild(testDiv);

        setTimeout(() => {
            let computedStyle = window.getComputedStyle(testDiv);
            if (computedStyle.backgroundColor === "rgba(0, 0, 0, 0)") { 
                // 📌 إذا تغير اللون أو أصبح شفافًا بالكامل، فهذا يعني أنه تم التقاط لقطة شاشة!
                blockScreenshot();
                alert("🚫 تم اكتشاف لقطة شاشة!");
            }
            document.body.removeChild(testDiv);
        }, 1000);
    }

    setInterval(detectScreenshot, 5000); // التحقق كل 5 ثوانٍ لتقليل التنبيهات الخاطئة
});
