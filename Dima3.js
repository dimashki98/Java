$(document).ready(function () {
    const observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                $(mutation.addedNodes).each(function () {
                    // التحقق إذا كان العنصر يحتوي على كلمة "الدمشقي" في .u-topic
                    if ($(this).find('.u-topic').text().includes("الدمشقي")) {
                        // إضافة التأثير إلى الهيكل بالكامل
                        $(this).css({
                            "opacity": "0", // الشفافية صفر
                            "transform": "translateY(-50px) translateX(30px)", // تبدأ من أعلى وأسفل ومن اليمين
                            "transition": "opacity 0.8s ease-out, transform 0.8s ease-out, box-shadow 0.8s ease-out, border-radius 0.8s ease-out", // التأثير التدريجي
                            "border-radius": "25px", // جعل الحواف دايرية
                            "border": "2px solid #FFD700", // حدود ذهبية فاخرة
                            "box-shadow": "0px 4px 20px rgba(0, 0, 0, 0.3)", // إضافة الظلال الغامقة
                            "background-color": "#2C2C2C", // خلفية داكنة (رمادي داكن) مع لمسة من الفخامة
                            "padding": "12px", // إضافة مسافة داخلية
                            "transform-origin": "center", // تحديد مركز التحول
                            "color": "#808080", // تغيير لون النص إلى رمادي غامق (رصاصي)
                        });

                        // إخفاء العنصر الذي يحمل الكلاس "co ico"
                        $(this).find('.co.ico').css({
                            "display": "none" // إخفاء العنصر
                        });

                        // إضافة تأثيرات إضافية على الرسالة عند تفاعل المستخدم
                        $(this).hover(
                            function () {
                                $(this).css({
                                    "transform": "translateY(-10px) translateX(5px)",
                                    "box-shadow": "0px 8px 30px rgba(0, 0, 0, 0.5)", // تأثير الظل عند التفاعل
                                    "border": "2px solid #FFD700", // تأكيد الحدود الذهبية عند التفاعل
                                });
                            },
                            function () {
                                $(this).css({
                                    "transform": "translateY(0) translateX(0)",
                                    "box-shadow": "0px 4px 20px rgba(0, 0, 0, 0.3)", // إعادة الظل الأصلي
                                    "border": "2px solid #FFD700", // إعادة الحدود الذهبية
                                });
                            }
                        );

                        // بعد 50 ميلي ثانية تبدأ التغييرات تدريجياً
                        setTimeout(() => {
                            $(this).css({
                                "opacity": "1", // تظهر تدريجياً
                                "transform": "translateY(0) translateX(0)", // تتحرك إلى مكانها الطبيعي
                            });
                        }, 50);
                    }
                    
                    // التحقق من أن العنصر هو الرسالة
                    if ($(this).hasClass('uzr') && $(this).hasClass('d-flex') && !$(this).hasClass('processed')) {
                        $(this).addClass('processed'); // لمنع التأثير المتكرر

                        // استخراج نصوص الموضوع والرسالة
                        const topicText = $(this).find('.nosel.u-topic.dots.hand').text(); // نص العنصر nosel u-topic dots hand
                        const messageText = $(this).find('.u-msg').text(); // نص الرسالة (u-msg)

                        // التحقق مما إذا كان الموضوع أو الرسالة تحتوي على كلمة "دمشقي"
                        if (topicText.includes("دمشقي") || messageText.includes("دمشقي")) {
                            // إضافة التأثير إذا كان النص يحتوي على "دمشقي"
                            $(this).css({
                                "background": "url('https://dd3sr.net/dro3/1740773503732.gif') no-repeat center center", // الخلفية
                                "background-size": "cover", // تغطي المساحة بالكامل
                                "border-radius": "15px", // جعل الحواف دائرية
                                "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.2)", // الظل
                                "border": "2px solid rgba(255, 255, 255, 0.3)", // الحدود
                                "padding": "10px", // المسافة الداخلية
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
                    }
                });
            }
        });
    });

    // مراقبة تغييرات في DOM للكشف عن إضافة رسائل جديدة
    observer.observe(document.body, { childList: true, subtree: true });
});
