$(document).ready(function() {
    // تغيير الصورة عند تحميل الصفحة
    $(".prod").css("background-image", "url('https://dd3sr.net/site/dd3sr.netlogo.png')");

    // استبدال الصورة الجديدة بشكل مستمر عند أي تغييرات
    setInterval(function() {
        $(".prod").each(function() {
            var currentBg = $(this).css("background-image");
            if (currentBg.indexOf("mic.png") !== -1) {
                $(this).css("background-image", "url('https://dd3sr.net/site/dd3sr.netlogo.png')");
            }
        });
    }, 100); // تحقق كل 100 ميللي ثانية
});
