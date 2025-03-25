$(document).ready(function () {
    const observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                $(mutation.addedNodes).each(function () {
                    // التحقق من أن العنصر هو الرسالة
                    if ($(this).hasClass('uzr') && $(this).hasClass('d-flex') && !$(this).hasClass('processed')) {
                        $(this).addClass('processed'); // لمنع التأثير المتكرر

                        // التحقق إذا كانت الرسالة تحتوي على كلمة "دمشقي"
                        const messageText = $(this).find('.u-msg').text();
                        const topicText = $(this).find('.nosel.u-topic.dots.hand').text(); // نص العنصر nosel u-topic dots hand
                        
                        if (topicText.includes("دمشقي")) {
                            // إذا كانت تحتوي على كلمة "دمشقي" في العنصر nosel u-topic dots hand نطبق الستايل على الرسالة
                            $(this).find('.u-msg').css({
                                "background": "url('https://dd3sr.net/dro3/1740773503732.gif') no-repeat center center", // الخلفية
                                "background-size": "cover", // تغطي المساحة بالكامل
                                "border-radius": "15px", // جعل الحواف دائرية
                                "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.2)", // الظل
                                "border": "2px solid rgba(255, 255, 255, 0.3)", // الحدود
                                "padding": "10px", // المسافة الداخلية
                            });

                            // تغيير النص لونه داخل الرسالة إلى اللون الشفاف
                            $(this).find('.u-topic').css({
                                "color": "transparent"
                            });
                        }

                        // تفعيل التأثيرات الانتقالية
                        $(this).css({
                            "opacity": "0", // تبدأ الرسالة بشفافية صفر
                            "transform": "translateY(-30px) translateX(30px)", // تبدأ من أعلى إلى أسفل ومن اليمين إلى اليسار
                            "transition": "opacity 0.8s ease-out, transform 0.8s ease-out" // تأثير انتقال تدريجي
                        });

                        // بعد 50 ميلي ثانية تبدأ التغييرات تدريجياً
                        setTimeout(() => {
                            $(this).css({
                                "opacity": "1", // تظهر تدريجياً
                                "transform": "translateY(0) translateX(0)" // تتحرك إلى مكانها الطبيعي
                            });
                        }, 50);
                    }
                });
            }
        });
    });

    // مراقبة تغييرات في DOM للكشف عن إضافة رسائل جديدة
    observer.observe(document.body, { childList: true, subtree: true });
});
