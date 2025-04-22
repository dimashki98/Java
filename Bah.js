$(document).ready(function () {
    let isAudioPausedTemporarily = false;
    let audioResumeTimeout;

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
            isAudioPausedTemporarily = true;

            clearTimeout(audioResumeTimeout);
            audioResumeTimeout = setTimeout(() => {
                isAudioPausedTemporarily = false;
                console.log("تم تفعيل الصوت مجددًا بعد انتهاء المهلة.");
            }, 300000); // 5 دقائق

            alert('تم تعطيل صوت التنبيه مؤقتًا لمدة 5 دقائق');
        });

    $('#newoption .not_geri').append(socialButton);

    // تعديل بسيط داخل الـ pongo الأصلي
    if (typeof socket !== 'undefined') {
        socket.on("pongo", () => {
            if (!isAudioPausedTemporarily && isPageHidden && silentAudio.paused) {
                silentAudio.play().catch(err => {
                    console.warn("Autoplay blocked:", err);
                });
            }
        });
    }
});
