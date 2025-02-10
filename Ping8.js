$(document).ready(function() {
    // إنشاء الزر الجديد
    let pingButton = $('<button class="border btn mini hand fl" ' +
        'style="padding: 6px; width: 98%; margin-left: 3px; margin-top: 2px; margin-bottom: 4px; font-family: Aref Ruqaa, sans-serif; background-color: white; color: black;">' +
        '<span class="fl fa fa-wifi" id="wifi-icon" style="font-family: FontAwesome, sans-serif;"></span> ' +
        '<span id="ping" style="font-weight: bold; color: black;">160ms</span>' +
        '</button>');

    // إضافة الزر فوق زر "حفظ"
    $("button:contains('حـفـظ')").before(pingButton);

    // تحديث قيمة البينغ بشكل تفاعلي كل 5 ثوانٍ
    setInterval(function() {
        var pingValue = Math.floor(Math.random() * 300) + 50; // توليد قيمة بينغ عشوائية (من 50ms إلى 350ms)
        var pingText = pingValue + "ms";

        // تغيير النص
        $("#ping").text(pingText);

        // تغيير اللون بناءً على قيمة البينغ
        if (pingValue < 100) {
            $("#ping").css("color", "green"); // سريع
            $("#wifi-icon").css("color", "green"); // تغيير إشارة الواي فاي إلى الأخضر
        } else if (pingValue >= 100 && pingValue <= 200) {
            $("#ping").css("color", "orange"); // متوسط
            $("#wifi-icon").css("color", "orange"); // تغيير إشارة الواي فاي إلى البرتقالي
        } else {
            $("#ping").css("color", "red"); // بطيء
            $("#wifi-icon").css("color", "red"); // تغيير إشارة الواي فاي إلى الأحمر
        }
    }, 5000); // تحديث كل 5 ثوانٍ
});
