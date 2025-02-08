$(document).ready(function () {
    // مراقبة التغييرات في قائمة الإشعارات وحذف إشعارات زيارة البروفايل
    new MutationObserver(function (mutations) {
        $(".notification, .wetchprofilenotifi").each(function () {
            if ($(this).text().includes("هذا المستخدم قد زار بروفايلك")) {
                $(this).remove();
            }
        });
    }).observe(document.getElementById("notification"), { childList: true, subtree: true });

    new MutationObserver(function (mutations) {
        $(".wetchprofilenotifi").each(function () {
            if ($(this).text().includes("هذا المستخدم قد زار بروفايلك")) {
                $(this).remove();
            }
        });
    }).observe(document.getElementById("wetchprofilenotifi"), { childList: true, subtree: true });
});
