$(document).ready(function () {  
    let lastNotification = ""; // لتخزين آخر إشعار ظهر  
    let effectActive = true;  // متغير لتفعيل أو تعطيل التأثيرات

    // استبدال أو تعديل وظيفة Tclear لتشغيل التأثير بعد مسح الرسائل
    function Tclear() {
        // تنفيذ الوظيفة الأصلية لمسح الرسائل
        SEND_EVENT_EMIT("SEND_EVENT_EMIT_CLEAR", {});

        // استخدام setInterval للتحقق إذا كانت الرسائل قد تم مسحها
        let checkClearInterval = setInterval(function() {
            // تحقق إذا كانت الرسائل تم مسحها (تأكد من أن العنصر الذي يحتوي على الرسائل تم مسحه)
            if ($("div.break.fl").length === 0) {  
                // إذا كانت الرسائل قد تم مسحها
                clearInterval(checkClearInterval); // إيقاف التحقق الدوري
                startEmojiEffect('🧼', 30);  // بدء تأثير الإيموجي الأول
                startEmojiEffect('🫧', 30);  // بدء تأثير الإيموجي الثاني
            }
        }, 200);  // التحقق كل 200 ملي ثانية
    }

    function startEmojiEffect(emoji, count) {  
        for (let i = 0; i < count; i++) {  // تنفيذ التأثير العدد المحدد
            setTimeout(() => {  
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
                    'color': 'blue',  
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
                color: blue;  
                position: fixed;  
                top: 0;  
                z-index: 9999;  
                animation: fall linear infinite;  
            }  
        `)  
        .appendTo('head');
});
