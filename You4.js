$(document).ready(function () {
    const observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                $(mutation.addedNodes).each(function () {
                    // التحقق من أن العنصر هو الرسالة التي تحتوي على النص "🫀🌙"
                    if ($(this).hasClass('uzr') && $(this).hasClass('d-flex') && !$(this).hasClass('processed')) {
                        // البحث داخل الرسالة عن العنصر الذي يحتوي على النص "🫀🌙"
                        $(this).find('.nosel.u-topic.dots.hand').each(function () {
                            if ($(this).text().includes("🫀🌙")) {
                                $(this).closest(".uzr").addClass('processed') // منع التأثير المتكرر
                                    .css({
                                        "opacity": "0", // تبدأ الرسالة بشفافية صفر
                                        "transform": "translateY(-30px) translateX(30px)", // تبدأ من أعلى إلى أسفل ومن اليمين إلى اليسار
                                        "transition": "opacity 0.8s ease-out, transform 0.8s ease-out" // تأثير انتقال تدريجي
                                    });

                                // بعد 50 ميلي ثانية تبدأ التغييرات تدريجياً
                                setTimeout(() => {
                                    $(this).closest(".uzr").css({
                                        "opacity": "1", // تظهر تدريجياً
                                        "transform": "translateY(0) translateX(0)" // تتحرك إلى مكانها الطبيعي
                                    });

                                    // تغيير الخلفية وتغطية المساحة بالكامل
                                    $(this).closest(".uzr").css({
                                        "background": "url('https://dd3sr.net/dro3/1740773503732.gif') no-repeat center center",
                                        "background-size": "cover", // تغطي المساحة بالكامل
                                        "border-radius": "15px", // جعل الحواف دائرية
                                        "padding": "10px",
                                        "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.2)",
                                        "border": "2px solid rgba(255, 255, 255, 0.3)"
                                    });

                                    // حذف الأيقونة الصورة في الرسالة (إخفاء .fitimg.u-pic.borderg)
                                    $(this).closest(".uzr").find('.fitimg.u-pic.borderg').hide();
                                }, 50);
                            }
                        });
                    }
                });
            }
        });
    });

    // مراقبة تغييرات في DOM للكشف عن إضافة رسائل جديدة
    observer.observe(document.body, { childList: true, subtree: true });
});
