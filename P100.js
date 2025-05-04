$(document).ready(function() {
    // عنصر البنغ الرقمي
    let pingWithWiFi = $(`
        <div id="ping-container" style="font-family: 'Tajawal', sans-serif; background: #0f172a; border-radius: 16px; padding: 20px; margin: 20px auto; box-shadow: 0 0 15px #0ea5e9; width: 100%; max-width: 420px; color: #f8fafc; border: 1px solid #1e293b;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <span class="fa fa-wifi" style="font-size: 24px; color: #0ea5e9;"></span>
                    <span style="font-size: 20px; font-weight: bold;">سرعة الاتصال</span>
                </div>
                <div style="display: flex; align-items: baseline;">
                    <span id="ping" style="font-size: 24px; font-weight: bold; color: #facc15;">--</span>
                    <span style="font-size: 14px; margin-right: 5px;">ms</span>
                </div>
            </div>
            <div style="margin: 20px 0 10px; height: 12px; background: #1e293b; border-radius: 10px; overflow: hidden;">
                <div id="ping-bar" style="height: 100%; width: 0%; background: linear-gradient(90deg, #0ea5e9, #38bdf8); transition: width 0.5s;"></div>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 12px; color: #94a3b8;">
                <span>ممتاز</span>
                <span>متوسطة</span>
                <span>ضعيفة</span>
            </div>
            <div id="ping-status" style="margin-top: 16px; font-size: 14px; font-weight: 500; color: #38bdf8;">
                جاري فحص الشبكة...
            </div>
            <div id="status-indicator" style="width: 14px; height: 14px; border-radius: 50%; background-color: #64748b; margin-top: 10px; box-shadow: 0 0 6px #64748b;"></div>
        </div>
    `);

    // إدراج العنصر قبل زر "حـفـظ"
    $("button:contains('حـفـظ')").before(pingWithWiFi);

    // تحميل خط Tajawal
    if (!$('link[href*="Tajawal"]').length) {
        $('head').append('<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet">');
    }

    // بدء التحديث
    setTimeout(() => updatePingMeter(Math.floor(Math.random() * 300) + 50), 1000);
    setInterval(() => updatePingMeter(Math.floor(Math.random() * 300) + 50), 5000);

    function updatePingMeter(pingValue) {
        let percentage = Math.min((pingValue / 350) * 100, 100);
        animateCounter($("#ping"), pingValue);
        $("#ping-bar").css("width", percentage + "%");

        if (pingValue < 100) {
            updateColors("#22c55e", "ممتازة", "linear-gradient(90deg, #22c55e, #86efac)");
        } else if (pingValue <= 200) {
            updateColors("#f59e0b", "جيدة", "linear-gradient(90deg, #f59e0b, #fcd34d)");
        } else if (pingValue <= 250) {
            updateColors("#f97316", "متوسطة", "linear-gradient(90deg, #f97316, #fdba74)");
        } else {
            updateColors("#ef4444", "ضعيفة", "linear-gradient(90deg, #ef4444, #f87171)");
        }
    }

    function animateCounter($el, newValue) {
        $({ Counter: parseInt($el.text()) || 0 }).animate({ Counter: newValue }, {
            duration: 500,
            easing: 'swing',
            step: function(now) {
                $el.text(Math.ceil(now));
            }
        });
    }

    function updateColors(color, statusText, gradient) {
        $("#status-indicator").css({
            "background-color": color,
            "box-shadow": "0 0 6px " + color
        });
        $("#ping-status").text("الحالة: " + statusText).css("color", color);
        $("#ping-bar").css("background", gradient);
        $("#ping").css("color", color);
    }
});
