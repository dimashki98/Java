$(document).ready(function () {
    // فحص ما إذا كان العنصر الذي يحتوي على رسالة "رمضان مبارك!" ظهر
    const checkForPopup = setInterval(function () {
        if ($('div.swal2-popup.swal2-show').length > 0) {
            startEmojiEffect(); // إذا ظهر العنصر، أطلق التأثير
        }
    }, 1000); // تحقق كل ثانية

    function startEmojiEffect() {
        const emojis = ['🌙', '🕌', '🌙', '🥰', '✨', '🌜', '🕋', '🎉', '🍽️', '🍵', '🧃', '🤲', '🌿', '🍞', '🥖', '🍇', '🍉', '🍊', '🍏', '🍒', '🍓', '🍬', '🍡', '🍪', '🕌', '🌙']; // مجموعة إيموجيات رمضانية

        for (let i = 0; i < 30; i++) {  // زيادة العدد إلى 30
            setTimeout(() => {
                // اختر إيموجي عشوائي من المصفوفة
                let emoji = emojis[Math.floor(Math.random() * emojis.length)];

                let confetti = $("<div class='confetti'>" + emoji + "</div>");
                $("body").append(confetti);

                let leftPosition = Math.random() * 100 + 'vw';
                let animationDuration = Math.random() * 3 + 2 + 's';

                confetti.css({
                    'left': leftPosition,
                    'animation-duration': animationDuration,
                    'animation-timing-function': 'linear',
                    'animation-name': 'fall',
                    'font-size': '24px',
                    'color': 'blue', // يمكنك تغيير اللون هنا
                    'position': 'fixed',
                    'top': '0',
                    'z-index': '9999'
                });

                setTimeout(() => {
                    confetti.remove();
                }, parseFloat(animationDuration) * 1000);
            }, i * 100);
        }

        // إيقاف التأثير بعد ثانيتين
        setTimeout(() => {
            $(".confetti").remove(); // إزالة جميع الإيموجيات
        }, 2000);
    }

    // إضافة تأثير CSS للأشياء المتساقطة
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            @keyframes fall {
                0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
                100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
            }
            .confetti {
                font-size: 24px;
                color: blue; /* اللون الأزرق أو يمكنك تغييره */
                position: fixed;
                top: 0;
                z-index: 9999;
                animation: fall linear infinite;
            }
        `)
        .appendTo('head');
});
