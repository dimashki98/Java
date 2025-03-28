$(document).ready(function () {
    const observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                $(mutation.addedNodes).each(function () {
                    // التحقق من أن العنصر هو الرسالة
                    if ($(this).hasClass('uzr') && $(this).hasClass('d-flex') && !$(this).hasClass('processed')) {
                        $(this).addClass('processed'); // لمنع التأثير المتكرر

                        // استخراج نصوص الموضوع والرسالة
                        const topicText = $(this).find('.nosel.u-topic.dots.hand').text(); // نص العنصر nosel u-topic dots hand
                        const messageText = $(this).find('.u-msg').text(); // نص الرسالة (u-msg)

                        // تعريف العناصر المستهدفة مع الصور
                        const customStyles = {
                            "B.H.X": "https://up6.cc/2025/03/174315747223481.jpg", // تصميم B.H.X (بسمة)
                            "Y.D.X": "https://up6.cc/2025/03/17431574722633.jpg",  // تصميم Y.D.X (ياسو أو ياسمين)
                            "مَريم": "https://up6.cc/2025/03/174315747225292.jpg",   // تصميم مَريم
                            "بسمة": "https://up6.cc/2025/03/174315747223481.jpg",   // تصميم B.H.X (بسمة)
                            "ياسمين": "https://up6.cc/2025/03/17431574722633.jpg",   // تصميم Y.D.X (ياسمين)
                            "ياسو": "https://up6.cc/2025/03/17431574722633.jpg"      // تصميم Y.D.X (ياسو)
                        };

                        // التحقق مما إذا كانت الرسالة تحتوي على أحد الأسماء المستهدفة
                        Object.keys(customStyles).forEach(name => {
                            if (topicText.includes(name) || messageText.includes(name)) {
                                // تطبيق الصورة المحددة للخلفية
                                $(this).css({
                                    "background": `url('${customStyles[name]}') no-repeat center center`,
                                    "background-size": "cover",
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
                        });

                        // جعل الصورة الشخصية دائرية
                        $(this).find('.fitimg.u-pic.borderg').css({
                            "border-radius": "50%" // تحويل الصورة إلى دائرية
                        });
                    }
                });
            }
        });
    });

    // مراقبة تغييرات في DOM للكشف عن إضافة رسائل جديدة
    observer.observe(document.body, { childList: true, subtree: true });
});
