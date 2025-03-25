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
                            "transform": "translateY(-30px) translateX(30px)", // تبدأ من أعلى وأسفل ومن اليمين
                            "transition": "opacity 0.8s ease-out, transform 0.8s ease-out", // التأثير التدريجي
                            "border-radius": "15px", // جعل الحواف دايرية
                            "border": "2px solid rgb(0, 0, 0)" // إضافة حدود دايرية
                        });

                        // بعد 50 ميلي ثانية تبدأ التغييرات تدريجياً
                        setTimeout(() => {
                            $(this).css({
                                "opacity": "1", // تظهر تدريجياً
                                "transform": "translateY(0) translateX(0)", // تتحرك إلى مكانها الطبيعي
                                "border-radius": "15px" // التأثير الدايري مستمر
                            });
                        }, 50);
                    }
                });
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
});
