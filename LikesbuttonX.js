$(document).ready(function () {  
    let lastNotification = ""; // لتخزين آخر إشعار ظهر  
    let effectActive = true;  // متغير لتفعيل أو تعطيل التأثيرات

    // التحقق من الإشعارات بشكل دوري
    const checkForNotifications = setInterval(function () {  
        if (!effectActive) return; // إذا كانت التأثيرات غير مفعلة، لا نكمل التحقق

        $('div.break.fl').each(function () {  
            const text = $(this).text().trim();  

            if (text !== lastNotification && (  
                text.includes('حصلت على إعجاب') ||  
                text.includes('💋 أأأمـمـمـمـمـمـوأأااااحـح 💋') ||  
                text.includes('❤️ أنـا أحٍـبَڪ') ||  
                text.includes('💦 اااااخخخختتتتتتفففففففففوووووووووووووووووووووو') ||  
                text.includes('ههههههههههههههههههههههههههههههههههههههههههههههههه')  
            )) {  
                lastNotification = text; // تحديث الإشعار الحالي  
                startEmojiEffect(text);  
            }  
        });  
    }, 1000); // التحقق كل ثانية  

    function startEmojiEffect(text) {  
        let emoji = '';  

        if (text.includes('حصلت على إعجاب')) emoji = '❤️';  
        else if (text.includes('💋 أأأمـمـمـمـمـمـوأأااااحـح 💋')) emoji = '💋';  
        else if (text.includes('❤️ أنـا أحٍـبَڪ')) emoji = '😍';  
        else if (text.includes('💦 اااااخخخختتتتتتفففففففففوووووووووووووووووووووو')) emoji = '💦';  
        else if (text.includes('ههههههههههههههههههههههههههههههههههههههههههههههههه')) emoji = '🤣';  

        for (let i = 0; i < 25; i++) {  // تعديل العدد إلى 25
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
                    'color': 'red',  
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
                color: red;  
                position: fixed;  
                top: 0;  
                z-index: 9999;  
                animation: fall linear infinite;  
            }  
        `)  
        .appendTo('head');  

    // إضافة زر لإيقاف التأثيرات
    const stopButton = $('<button>إيقاف التأثيرات</button>')
        .addClass('label tc border btn label-info fl')
        .css({
            'background-color': 'ghostwhite',
            'color': 'black',
            'margin': '1px 4px',
            'padding': '6px',
            'width': '98%'
        })
        .click(function () {
            effectActive = false;  // إيقاف التأثيرات
            alert('تم إيقاف التأثيرات');
        });

    // إضافة الزر إلى العنصر الموجود
    $('#newoption .not_geri').append(stopButton);
});
