$(document).ready(function() {
    // إضافة مقياس البينغ مع إشارة الواي فاي ووصف الحالة
    let pingWithWiFi = $('<div id="ping-container" style="padding: 10px; width: 98%; margin-left: 3px; margin-top: 2px; margin-bottom: 4px; font-family: Aref Ruqaa, sans-serif; border-radius: 8px; background-color: #f9f9f9; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">' +
        '<div id="ping-info" style="font-size: 18px; font-weight: bold; display: flex; align-items: center;">' +
        '<span id="ping" style="font-weight: bold; color: black; font-size: 20px;">ms</span>' +
        '<span id="wifi-icon" class="fa fa-wifi" style="margin-left: 15px; font-size: 30px; color: gray;"></span>' +
        '</div>' +
        '<div id="ping-meter" style="width: 100%; height: 10px; background-color: #e0e0e0; border-radius: 5px; margin-top: 10px;">' +
        '<div id="ping-bar" style="height: 100%; width: 0%; background-color: green; border-radius: 5px;"></div>' +
        '</div>' +
        '<div id="ping-status" style="margin-top: 10px; font-weight: bold; font-size: 16px; color: gray;">حالة الشبكة: ...</div>' +
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
            $("#ping-status").text("حالة الشبكة: ممتازة").css("color", "green"); // وصف الحالة
        } else if (pingValue >= 100 && pingValue <= 200) {
            $("#ping").css("color", "orange"); // متوسط
            $("#ping-bar").css("background-color", "orange"); // تغيير شريط المقياس إلى البرتقالي
            $("#wifi-icon").css("color", "orange"); // تغيير إشارة الواي فاي إلى البرتقالي
            $("#ping-status").text("حالة الشبكة: متوسطة").css("color", "orange"); // وصف الحالة
        } else {
            $("#ping").css("color", "red"); // بطيء
            $("#ping-bar").css("background-color", "red"); // تغيير شريط المقياس إلى الأحمر
            $("#wifi-icon").css("color", "red"); // تغيير إشارة الواي فاي إلى الأحمر
            $("#ping-status").text("حالة الشبكة: رديئة").css("color", "red"); // وصف الحالة
        }
    }, 5000); // تحديث كل 5 ثوانٍ
});
