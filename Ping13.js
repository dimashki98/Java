$(document).ready(function() {
    // إضافة مقياس البينغ مع إشارة الواي فاي
    let pingWithWiFi = $('<div id="ping-container" style="padding: 6px; width: 98%; margin-left: 3px; margin-top: 2px; margin-bottom: 4px; font-family: Aref Ruqaa, sans-serif;">' +
        '<span id="ping" style="font-weight: bold; color: black;">160ms</span>' +
        '<div id="ping-meter" style="width: 100%; height: 8px; background-color: lightgrey; border-radius: 5px; margin-top: 8px;">' +
        '<div id="ping-bar" style="height: 100%; width: 0%; background-color: green; border-radius: 5px;"></div>' +
        '</div>' +
        '<span id="wifi-icon" class="fa fa-wifi" style="margin-left: 8px; font-size: 24px; color: gray;"></span>' +
        '</div>');

    // إضافة العنصر قبل زر "حـفـظ"
    $("button:contains('حـفـظ')").before(pingWithWiFi);

    // تحديث قيمة البينغ بشكل تفاعلي كل 5 ثوانٍ
    setInterval(function() {
        var pingValue = Math.floor(Math.random() * 300) + 50; // توليد قيمة بينغ عشوائية (من 50ms إلى 350ms)
        var pingText = pingValue + "ms";
        var pingPercentage = (pingValue / 350) * 100; // حساب نسبة البينغ بناءً على القيمة

        // تغيير النص
        $("#ping").text(pingText);

        // تحديث شريط المقياس
        $("#ping-bar").css("width", pingPercentage + "%");

        // تغيير اللون بناءً على قيمة البينغ
        if (pingValue < 100) {
            $("#ping").css("color", "green"); // سريع
            $("#ping-bar").css("background-color", "green"); // تغيير شريط المقياس إلى الأخضر
            $("#wifi-icon").css("color", "green"); // تغيير إشارة الواي فاي إلى الأخضر
        } else if (pingValue >= 100 && pingValue <= 200) {
            $("#ping").css("color", "orange"); // متوسط
            $("#ping-bar").css("background-color", "orange"); // تغيير شريط المقياس إلى البرتقالي
            $("#wifi-icon").css("color", "orange"); // تغيير إشارة الواي فاي إلى البرتقالي
        } else {
            $("#ping").css("color", "red"); // بطيء
            $("#ping-bar").css("background-color", "red"); // تغيير شريط المقياس إلى الأحمر
            $("#wifi-icon").css("color", "red"); // تغيير إشارة الواي فاي إلى الأحمر
        }
    }, 5000); // تحديث كل 5 ثوانٍ
});
