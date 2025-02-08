$(document).ready(function () {
    setInterval(function () {
        $(".notification:contains('هذا المستخدم قد زار بروفايلك')").remove();
        $(".wetchprofilenotifi:contains('هذا المستخدم قد زار بروفايلك')").remove();
    }, 500);
});
