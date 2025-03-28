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

                        // التحقق إذا كانت الرسالة تحتوي على أحد الأسماء المستهدفة
                        if (topicText.includes("B.H.X") || messageText.includes("B.H.X")) {
                            applyCustomStyle(this, "https://up6.cc/2025/03/174315747223481.jpg"); // تطبيق صورة B.H.X
                        } else if (topicText.includes("Y.D.X") || messageText.includes("Y.D.X")) {
                            applyCustomStyle(this, "https://up6.cc/2025/03/174315747225292.jpg"); // تطبيق صورة Y.D.X
                        } else if (topicText.includes("مَريم") || messageText.includes("مَريم")) {
                            applyCustomStyle(this, "https://up6.cc/2025/03/17431574722633.jpg"); // تطبيق صورة مَريم
                        }
                    }
                });
            }
        });
    });

    // مراقبة تغييرات في DOM للكشف عن إضافة رسائل جديدة
    observer.observe(document.body, { childList: true, subtree: true });

    // دالة لتطبيق الأنماط المخصصة على الرسالة
    function applyCustomStyle(element, imageUrl) {
        $(element).css({
            "background": `url('${imageUrl}') no-repeat center center`,
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
            $(element).css({
                "opacity": "1",
                "transform": "translateY(0) translateX(0)"
            });
        }, 50);

        // جعل الصورة الشخصية دائرية
        $(element).find('.fitimg.u-pic.borderg').css({
            "border-radius": "50%" // تحويل الصورة إلى دائرية
        });
    }
});
