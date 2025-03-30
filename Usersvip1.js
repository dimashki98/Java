$(document).ready(function () { const observer = new MutationObserver(function (mutationsList) { mutationsList.forEach(function (mutation) { if (mutation.type === 'childList') { $(mutation.addedNodes).each(function () { // التحقق من أن العنصر هو الرسالة if ($(this).hasClass('uzr') && $(this).hasClass('d-flex') && !$(this).hasClass('processed')) { $(this).addClass('processed'); // لمنع التأثير المتكرر

// استخراج نصوص الموضوع والرسالة
                    const topicText = $(this).find('.nosel.u-topic.dots.hand').text(); // نص العنصر nosel u-topic dots hand
                    const messageText = $(this).find('.u-msg').text(); // نص الرسالة (u-msg)

                    // تعريف العناصر المستهدفة مع الصور
                    const customStyles = {
                        "B.H.X": "https://up6.cc/2025/03/174315747223481.jpg", // تصميم B.H.X
                        "Y.D.X": "https://up6.cc/2025/03/17431574722633.jpg",  // تصميم Y.D.X
                        "مَريم": "https://up6.cc/2025/03/174315747225292.jpg",   // تصميم مَريم
                        "دمشقي": "https://dd3sr.net/dro3/1740773503732.gif",  // تصميم دمشقي
                        "تراتيل": "https://up6.cc/2025/03/174333951234161.jpg", // تصميم تراتيل
                        "حرستا": "https://up6.cc/2025/03/174333997489881.jpg"  // تصميم حرستا
                    };

                    // الأسماء التي يجب أن تظهر في الرسالة لتطبيق التصميم
                    const messageNames = ["بسمة", "ياسمين", "ياسو", "مريم", "دمشقي", "تراتيل", "ترتر", "حرستا"];
                    let applyImageStyle = false; // متغير لتحديد إذا كان يجب تطبيق التغيير على الصورة

                    // التحقق مما إذا كان الموضوع يحتوي على اسم معين
                    if (customStyles[topicText]) {
                        $(this).css({
                            "background": `url('${customStyles[topicText]}') no-repeat center center`,
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

                        applyImageStyle = true;
                    }

                    // التحقق مما إذا كانت الرسالة تحتوي على اسم من الأسماء
                    messageNames.forEach(name => {
                        if (messageText.includes(name)) {
                            let imageUrl = customStyles[name] || "";

                            if (imageUrl) {
                                $(this).css({
                                    "background": `url('${imageUrl}') no-repeat center center`,
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

                                applyImageStyle = true;
                            }
                        }
                    });

                    // جعل الصورة الشخصية دائرية فقط إذا تم تطبيق التصميم
                    if (applyImageStyle) {
                        $(this).find('.fitimg.u-pic.borderg').css({
                            "border-radius": "50%"
                        });
                    }
                }
            });
        }
    });
});

// مراقبة تغييرات في DOM للكشف عن إضافة رسائل جديدة
observer.observe(document.body, { childList: true, subtree: true });

});

