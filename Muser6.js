$(document).ready(function () {
    // مراقبة التغيرات في الصفحة
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
                            "border": "2px solid #FF4500", // حدود ملونة بشكل جذاب
                            "box-shadow": "0px 4px 12px rgba(0, 0, 0, 0.15)", // إضافة الظلال
                            "background-color": "#FFF8E1", // خلفية دافئة
                            "padding": "10px", // إضافة مسافة داخلية
                            "transform-origin": "center", // تحديد مركز التحول
                        });

                        // إضافة تأثيرات إضافية على الرسالة عند تفاعل المستخدم
                        $(this).hover(
                            function () {
                                $(this).css({
                                    "transform": "translateY(-10px) translateX(5px)",
                                    "box-shadow": "0px 8px 20px rgba(0, 0, 0, 0.2)"
                                });
                            },
                            function () {
                                $(this).css({
                                    "transform": "translateY(0) translateX(0)",
                                    "box-shadow": "0px 4px 12px rgba(0, 0, 0, 0.15)"
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
                });
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
});
