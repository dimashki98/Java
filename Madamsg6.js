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

                        // تعريف العناصر المستهدفة مع صورهم
                        const customStyles = {
                            "B.H.X": "https://up6.cc/2025/03/174315747223481.jpg",  // الصورة المتاحة كما هي
                            "Y.D.X": "https://up6.cc/2025/03/17431574722633.jpg",  // صورة Y.D.X
                            "مَريم": "https://up6.cc/2025/03/174315747225292.jpg"  // صورة مَريم
                        };

                        // التحقق مما إذا كانت الرسالة تحتوي على أحد الأسماء المستهدفة
                        Object.keys(customStyles).forEach(name => {
                            if (topicText.includes(name) || messageText.includes(name)) {
                                // تطبيق الصورة المحددة للخلفية
                                $(this).css({
                                    "background": `url('${customStyles[name]}') no-repeat center center`,
                                    "background-size": "cover"
                                });
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
