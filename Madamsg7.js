$(document).ready(function () {
    const observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                $(mutation.addedNodes).each(function () {
                    // التحقق من أن العنصر هو الرسالة
                    if ($(this).hasClass('uzr') && $(this).hasClass('d-flex') && !$(this).hasClass('processed')) {
                        $(this).addClass('processed'); // لمنع التأثير المتكرر

                        // استخراج نصوص الموضوع والرسالة
                        const topicText = $(this).find('.nosel.u-topic.dots.hand').text();
                        const messageText = $(this).find('.u-msg').text();

                        // إزالة الحركات من النصوص لمقارنة دقيقة
                        const normalizedTopicText = topicText.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                        const normalizedMessageText = messageText.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

                        // تعريف العناصر المستهدفة مع صورهم
                        const customStyles = {
                            "B.H.X": "https://up6.cc/2025/03/174315747223481.jpg",
                            "Y.D.X": "https://up6.cc/2025/03/17431574722633.jpg",  // مريم الآن
                            "مَريم": "https://up6.cc/2025/03/174315747225292.jpg",  // Y.D.X الآن
                            "مريم": "https://up6.cc/2025/03/174315747225292.jpg"  // نفس صورة مَريم
                        };

                        // التحقق مما إذا كانت الرسالة تحتوي على أحد الأسماء المستهدفة
                        Object.keys(customStyles).forEach(name => {
                            if (normalizedTopicText.includes(name) || normalizedMessageText.includes(name)) {
                                // تطبيق الصورة المحددة للخلفية
                                $(this).css({
                                    "background": `url('${customStyles[name]}') no-repeat center center`,
                                    "background-size": "cover",
                                    "border-radius": "15px",
                                    "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.2)",
                                    "border": "2px solid rgb(255, 105, 180)", // وردي بناتي
                                    "padding": "10px",
                                    "opacity": "0",
                                    "transform": "translateY(-30px) translateX(30px)",
                                    "transition": "opacity 0.8s ease-out, transform 0.8s ease-out"
                                });

                                // بعد 50 ميلي ثانية تبدأ التغييرات تدريجياً
                                setTimeout(() => {
                                    $(this).css({
                                        "opacity": "1",
                                        "transform": "translateY(0) translateX(0)"
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
