$(document).ready(function() {
    // إنشاء الزر الجديد
    let pingButton = $('<button class="border btn mini hand fl" ' +
        'style="padding: 6px; width: 98%; margin-left: 3px; margin-top: 2px; margin-bottom: 4px; font-family: Aref Ruqaa, sans-serif; background-color: white; color: black;">' +
        '<span class="fl fa fa-wifi" style="font-family: FontAwesome, sans-serif; color: black;"></span> ' +
        '<span id="ping" style="font-weight: bold; color: black;">160ms</span>' +
        '</button>');

    // إضافة الزر فوق زر "حفظ"
    $("button:contains('حـفـظ')").before(pingButton);

    // تحديث قيمة البينغ كل 5 ثوانٍ
    setInterval(function() {
        var randomPing = Math.floor(Math.random() * 100) + 50 + "ms";
        $("#ping").text(randomPing);
    }, 5000);
});
