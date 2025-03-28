$(document).ready(function () {
    const observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                $(mutation.addedNodes).each(function () {
                    // التحقق من أن العنصر هو الرسالة ولم يتم معالجتها من قبل
                    if ($(this).hasClass('uzr') && $(this).hasClass('d-flex') && !$(this).hasClass('processed')) {
                        $(this).addClass('processed'); // لمنع التأثير المتكرر

                        const topicText = $(this).find('.nosel.u-topic.dots.hand').text(); // نص الموضوع
                        const messageText = $(this).find('.u-msg').text(); // نص الرسالة

                        // التحقق إذا كانت الرسالة تحتوي على "دمشقي" أم لا
                        if (!topicText.includes("دمشقي") && !messageText.includes("دمشقي")) {
                            // تطبيق الأنماط الخاصة بـ "B.H.X" إذا كان الموضوع أو الرسالة تحتوي على B.H.X
                            if (topicText.includes("B.H.X") || messageText.includes("B.H.X")) {
                                $(this).css({
                                    "background": "url('https://up6.cc/2025/03/174315747223481.jpg') no-repeat center center",
                                    "background-size": "cover",
                                    "border-radius": "15px",
                                    "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.2)",
                                    "border": "2px solid rgba(255, 255, 255, 0.3)",
                                    "padding": "10px",
                                    "opacity": "0",
                                    "transform": "translateY(-30px) translateX(30px)",
                                    "transition": "opacity 0.8s ease-out, transform 0.8s ease-out"
                                });

                                setTimeout(() => {
                                    $(this).css({
                                        "opacity": "1",
                                        "transform": "translateY(0) translateX(0)"
                                    });
                                }, 50);
                            }

                            // تطبيق الأنماط الخاصة بـ "Y.D.X" إذا كان الموضوع أو الرسالة تحتوي على Y.D.X
                            if (topicText.includes("Y.D.X") || messageText.includes("Y.D.X")) {
                                $(this).css({
                                    "background": "url('https://up6.cc/2025/03/17431574722633.jpg') no-repeat center center",
                                    "background-size": "cover",
                                    "border-radius": "15px",
                                    "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.2)",
                                    "border": "2px solid rgba(255, 255, 255, 0.3)",
                                    "padding": "10px",
                                    "opacity": "0",
                                    "transform": "translateY(-30px) translateX(30px)",
                                    "transition": "opacity 0.8s ease-out, transform 0.8s ease-out"
                                });

                                setTimeout(() => {
                                    $(this).css({
                                        "opacity": "1",
                                        "transform": "translateY(0) translateX(0)"
                                    });
                                }, 50);
                            }

                            // تطبيق الأنماط الخاصة بـ "مَريم" إذا كان الموضوع أو الرسالة تحتوي على مَريم
                            if (topicText.includes("مَريم") || messageText.includes("مَريم")) {
                                $(this).css({
                                    "background": "url('https://up6.cc/2025/03/174315747225292.jpg') no-repeat center center",
                                    "background-size": "cover",
                                    "border-radius": "15px",
                                    "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.2)",
                                    "border": "2px solid rgba(255, 255, 255, 0.3)",
                                    "padding": "10px",
                                    "opacity": "0",
                                    "transform": "translateY(-30px) translateX(30px)",
                                    "transition": "opacity 0.8s ease-out, transform 0.8s ease-out"
                                });

                                setTimeout(() => {
                                    $(this).css({
                                        "opacity": "1",
                                        "transform": "translateY(0) translateX(0)"
                                    });
                                }, 50);
                            }
                        }
                    }
                });
            }
        });
    });

    // مراقبة تغييرات في DOM للكشف عن إضافة رسائل جديدة
    observer.observe(document.body, { childList: true, subtree: true });
});
