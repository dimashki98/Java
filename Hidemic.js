$(document).ready(function() {
    // إخفاء العنصر عند تحميل الصفحة
    $('span.fitimg.prod[data="6"]').hide();

    // إخفاء العنصر إذا تمت إضافته لاحقًا
    $(document).on('DOMNodeInserted', function() {
        $('span.fitimg.prod[data="6"]').hide();
    });

    // إخفاء العنصر بشكل دوري
    setInterval(function() {
        $('span.fitimg.prod[data="6"]').hide();
    }, 500);
});
