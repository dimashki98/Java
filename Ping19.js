<script>
$(document).ready(function() {
    let pingWithWiFi = $('<div id="ping-container" style="padding: 10px; width: 98%; margin-left: 3px; margin-top: 2px; margin-bottom: 4px; font-family: Aref Ruqaa, sans-serif; border-radius: 8px; background-color: #f9f9f9; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">' +
        '<div id="ping-info" style="font-size: 18px; font-weight: bold; display: flex; align-items: center;">' +
        '<span id="ping" style="font-weight: bold; color: black; font-size: 20px;">...</span>' +
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
    function updatePing() {
        let startTime = new Date().getTime();

        $.get("https://www.google.com", function() {
            let endTime = new Date().getTime();
            let pingValue = endTime - startTime;
            let pingText = pingValue + "ms";
            let pingPercentage = (pingValue / 300) * 100;

            // تحديث القيم في الـ DOM
            $("#ping").text(pingText);
            $("#ping-bar").css("width", pingPercentage + "%");

            if (pingValue < 100) {
                $("#ping").css("color", "green");
                $("#ping-bar").css("background-color", "green");
                $("#wifi-icon").css("color", "green");
                $("#ping-status").text("حالة الشبكة: ممتازة").css("color", "green");
            } else if (pingValue >= 100 && pingValue <= 200) {
                $("#ping").css("color", "orange");
                $("#ping-bar").css("background-color", "orange");
                $("#wifi-icon").css("color", "orange");
                $("#ping-status").text("حالة الشبكة: متوسطة").css("color", "orange");
            } else {
                $("#ping").css("color", "red");
                $("#ping-bar").css("background-color", "red");
                $("#wifi-icon").css("color", "red");
                $("#ping-status").text("حالة الشبكة: رديئة").css("color", "red");
            }
        }).fail(function() {
            $("#ping").text("تعذر الاتصال");
            $("#ping").css("color", "red");
            $("#ping-bar").css("width", "100%").css("background-color", "red");
            $("#wifi-icon").css("color", "red");
            $("#ping-status").text("حالة الشبكة: رديئة").css("color", "red");
        });
    }

    setInterval(updatePing, 5000);
    updatePing(); // استدعاء أولي عند تحميل الصفحة
});
</script>
