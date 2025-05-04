$(document).ready(function () {
    // عنصر البنغ الكامل مع التأثيرات اللونية
    let pingWithWiFi = $(`
        <div id="ping-container" style="font-family: 'Tajawal', sans-serif; background: #fff; border-radius: 12px; padding: 16px; margin: 10px 0; box-shadow: 0 2px 6px rgba(0,0,0,0.1); width: 100%; max-width: 400px;">
            <div id="ping-header" style="display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span id="wifi-icon" class="fa fa-wifi" style="font-size: 24px; color: #4a5568;"></span>
                    <span id="ping-title" style="font-weight: 700; font-size: 18px;">سرعة الاتصال</span>
                </div>
                <div id="ping-value-container" style="display: flex; align-items: baseline;">
                    <span id="ping" style="font-weight: bold; font-size: 20px;">--</span>
                    <span id="ping-unit" style="font-size: 14px; margin-right: 4px;">ms</span>
                </div>
            </div>
            <div id="ping-bar-wrapper" style="margin: 16px 0 4px 0; height: 10px; background: #e2e8f0; border-radius: 8px; overflow: hidden;">
                <div id="ping-bar" style="height: 100%; width: 0%; background: #48bb78; transition: width 0.5s;"></div>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 12px; color: #718096;">
                <span>ممتاز</span>
                <span>متوسط</span>
                <span>ضعيف</span>
            </div>
            <div id="ping-status" style="margin-top: 10px; font-size: 14px; font-weight: 500;">جاري فحص حالة الشبكة...</div>
            <div id="status-indicator" style="width: 12px; height: 12px; border-radius: 50%; background-color: #a0aec0; margin-top: 8px;"></div>
        </div>
    `);

    // إدراج العنصر قبل زر "حـفـظ"
    $("button:contains('حـفـظ')").before(pingWithWiFi);

    // تحميل خط Tajawal إن لم يكن موجودًا
    if (!$('link[href*="Tajawal"]').length) {
        $('head').append('<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet">');
    }

    // تحديث أولي بعد ثانية
    setTimeout(() => updatePingMeter(Math.floor(Math.random() * 300) + 50), 1000);

    // تحديث كل 5 ثوانٍ
    setInterval(() => {
        let ping = Math.floor(Math.random() * 300) + 50;
        updatePingMeter(ping);
    }, 5000);

    function updatePingMeter(pingValue) {
        let percentage = Math.min((pingValue / 350) * 100, 100);
        animateCounter($("#ping"), pingValue);
        $("#ping-bar").css("width", percentage + "%");

        if (pingValue < 100) {
            updateColors("#48bb78", "ممتازة", "linear-gradient(90deg, #48bb78, #68d391)");
        } else if (pingValue <= 200) {
            updateColors("#4299e1", "جيدة", "linear-gradient(90deg, #4299e1, #63b3ed)");
        } else if (pingValue <= 250) {
            updateColors("#ed8936", "متوسطة", "linear-gradient(90deg, #ed8936, #f6ad55)");
        } else {
            updateColors("#e53e3e", "ضعيفة", "linear-gradient(90deg, #e53e3e, #fc8181)");
        }
    }

    function animateCounter($el, newValue) {
        $({ Counter: parseInt($el.text()) || 0 }).animate({ Counter: newValue }, {
            duration: 500,
            easing: 'swing',
            step: function (now) {
                $el.text(Math.ceil(now));
            }
        });
    }

    function updateColors(color, text, gradient) {
        $("#status-indicator").css("background-color", color);
        $("#ping-status").text("الحالة: " + text).css("color", color);
        $("#ping-bar").css("background", gradient);
        $("#ping").css("color", color);
        $("#ping-unit").css("color", color);
        $("#ping-title").css("color", color);
    }
});
