$(document).ready(function() {
    // حفظ حالة المايك عند الضغط عليه
    $(".prod").click(function() {
        var $prod = $(this);
        var isMuted = $prod.hasClass("ismute");

        // إذا كان المايك غير مفعل
        if (isMuted) {
            $prod.removeClass("ismute");
            localStorage.setItem("micStatus", "unmuted");  // حفظ الحالة
        } else {
            $prod.addClass("ismute");
            localStorage.setItem("micStatus", "muted");  // حفظ الحالة
        }
    });

    // عند تحميل الصفحة أو إعادة الاتصال
    var savedMicStatus = localStorage.getItem("micStatus");

    // إذا كانت الحالة المحفوظة "unmuted" يتم تفعيل المايك
    if (savedMicStatus === "unmuted") {
        $(".prod").each(function() {
            $(this).removeClass("ismute");
        });
    } else if (savedMicStatus === "muted") {
        $(".prod").each(function() {
            $(this).addClass("ismute");
        });
    }

    // إذا تم إعادة الاتصال تأكد من عدم فقدان حالة المايك
    $(window).on('online', function() {
        var savedMicStatus = localStorage.getItem("micStatus");
        if (savedMicStatus === "unmuted") {
            $(".prod").each(function() {
                $(this).removeClass("ismute");
            });
        } else if (savedMicStatus === "muted") {
            $(".prod").each(function() {
                $(this).addClass("ismute");
            });
        }
    });
});
