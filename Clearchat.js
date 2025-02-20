$(document).ready(function () { 
    let effectActive = true;  // متغير لتفعيل أو تعطيل التأثيرات

    // دالة التحقق من وجود رسائل
    function checkMessagesAndTriggerEffect() {
        if ($('#d2').children('.uzr').length === 0) {  // إذا لم توجد أي رسائل في الدردشة
            startEmojiEffect('🧼', 30);  // تأثير الإيموجي الأول
            startEmojiEffect('🫧', 30);  // تأثير الإيموجي الثاني
        }
    }

    // دالة بدء التأثير
    function startEmojiEffect(emoji, count) {  
        for (let i = 0; i < count; i++) {  
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
                    'position': 'fixed',  
                    'top': '0',  
                    'z-index': '9999'  
                });  

                setTimeout(() => {  
                    confetti.remove();  
                }, parseFloat(animationDuration) * 1000);  
            }, i * 100);  
        }  

        setTimeout(() => {  
            $(".confetti").remove(); 
        }, 2000);  
    }  

    // إضافة تأثير CSS للأشياء المتساقطة
    $('<style>').prop('type', 'text/css').html(`
        @keyframes fall {
            0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .confetti {
            font-size: 24px;
            position: fixed;
            top: 0;
            z-index: 9999;
            animation: fall linear infinite;
        }
    `).appendTo('head');

    // مراقبة تغييرات DOM
    let observer = new MutationObserver(() => {
        checkMessagesAndTriggerEffect();
    });

    // استهداف عنصر الدردشة للمراقبة
    observer.observe(document.querySelector('#d2'), { childList: true, subtree: true });

});
