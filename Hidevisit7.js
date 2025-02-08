$(document).ready(function () {
    // مراقبة ظهور الإشعارات في الصفحة
    setInterval(function () {
        $(".notification, .wetchprofilenotifi").each(function () {
            if ($(this).text().includes("هذا المستخدم قد زار بروفايلك")) {
                console.log("تم تعطيل صوت إشعار زيارة البروفايل");
                issound = false; // تعطيل الصوت مؤقتًا
                setTimeout(() => { issound = true; }, 3000); // إعادة تفعيل الصوت بعد 3 ثوانٍ
            }
        });
    }, 100); // فحص الإشعارات كل 100 مللي ثانية
});
