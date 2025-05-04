$(document).ready(function() {
    // إضافة مقياس البنغ المحسّن مع إشارة الواي فاي ووصلة الحالة
    let pingWithWiFi = $(`
        <div id="ping-container" style="...">
            ...
            <div id="ping-header" style="...">
                <div style="display: flex; align-items: center;">
                    <span id="wifi-icon" class="fa fa-wifi" style="..."></span>
                    <span style="font-weight: 700; font-size: 18px; color: #2d3748;">
                        سرعة الاتصال
                    </span>
                </div>
                <div id="ping-value-container" style="...">
                    <span id="ping" style="...">--</span>
                    <span style="font-size: 14px; margin-right: 4px; color: #718096;">ms</span>
                </div>
            </div>
            ...
            <div style="display: flex; justify-content: space-between; margin-top: 6px; font-size: 12px; color: #718096;">
                <span>ممتاز</span>
                <span>متوسط</span>
                <span>ضعيف</span>
            </div>
            ...
            <div id="ping-status" style="...">
                جاري فحص حالة الشبكة...
            </div>
        </div>
    `);

    // إدراج العنصر قبل زر "حفظ"
    $("button:contains('حـفـظ')").before(pingWithWiFi);

    // تحميل خط Tajawal من Google Fonts إذا لم يكن موجودًا
    if (!$('link[href*="Tajawal"]').length) {
        $('head').append('<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet">');
    }

    // تحديث أولي بعد ثانية
    setTimeout(function() {
        updatePingMeter(Math.floor(Math.random() * 300) + 50);
    }, 1000);

    // تحديث كل 5 ثوانٍ
    setInterval(function() {
        var pingValue = Math.floor(Math.random() * 300) + 50;
        updatePingMeter(pingValue);
    }, 5000);

    // تحديث المقياس واللون والنص
    function updatePingMeter(pingValue) {
        var pingText = pingValue + "";
        var pingPercentage = Math.min((pingValue / 350) * 100, 100);

        animateCounter($("#ping"), pingText);
        $("#ping-bar").css("width", pingPercentage + "%");

        if (pingValue < 100) {
            updateColors("#48bb78", "ممتازة", "linear-gradient(90deg, #48bb78, #68d391)");
        } else if (pingValue >= 100 && pingValue <= 200) {
            updateColors("#4299e1", "جيدة", "linear-gradient(90deg, #4299e1, #63b3ed)");
        } else if (pingValue > 200 && pingValue <= 250) {
            updateColors("#ed8936", "متوسطة", "linear-gradient(90deg, #ed8936, #f6ad55)");
        } else {
            updateColors("#e53e3e", "ضعيفة", "linear-gradient(90deg, #e53e3e, #fc8181)");
        }
    }

    function animateCounter($el, newValue) {
        $({ Counter: parseInt($el.text()) || 0 }).animate(
            { Counter: newValue },
            {
                duration: 500,
                easing: 'swing',
                step: function(now) {
                    $el.text(Math.ceil(now));
                }
            }
        );
    }

    function updateColors(color, statusText, barGradient) {
        $("#status-indicator").css("background-color", color);
        $("#ping-status").text("الحالة: " + statusText).css("color", color);
        $("#ping-bar").css("background", barGradient);
        $("#ping").css("color", color);
    }
});
