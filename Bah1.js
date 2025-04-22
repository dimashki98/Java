$(document).ready(function () {
    let isPausedForFiveMinutes = false;
    let audioResumeTimeout;
    let pingInterval;

    const socialButton = $('<label></label>')
        .text('مشاهدة سوشيال ميديا')
        .addClass('label tc border btn label-info fl')
        .css({
            'background-color': 'ghostwhite',
            'color': 'black',
            'margin': '1px 4px',
            'padding': '6px',
            'width': '98%'
        })
        .prepend('<span class="fl fa fa-clock-o" style="font-family: FontAwesome, sans-serif;"></span> ')
        .click(function () {
            isPausedForFiveMinutes = true;

            clearTimeout(audioResumeTimeout);
            clearInterval(pingInterval); // إيقاف Ping

            audioResumeTimeout = setTimeout(() => {
                isPausedForFiveMinutes = false;
                pingInterval = setInterval(sendPing, 15000); // استعادة Ping
                console.log("تم تفعيل الصوت وPing مجددًا بعد انتهاء المهلة.");
            }, 300000); // 5 دقائق

            alert('تم تعطيل صوت التنبيه و Ping مؤقتًا لمدة 5 دقائق');
        });

    $('#newoption .not_geri').append(socialButton);

    // تعديل على مستمع pongo
    if (typeof socket !== 'undefined') {
        socket.on("pongo", () => {
            if (isPausedForFiveMinutes) {
                console.log("تم تعطيل pongo مؤقتًا.");
                return;
            }

            if (isPageHidden && silentAudio.paused) {
                silentAudio.play().catch(err => {
                    console.warn("Autoplay blocked:", err);
                });
            }
        });
    }

    // حفظ معرف interval في متغير لتوقيفه لاحقًا
    pingInterval = setInterval(sendPing, 15000);
});
