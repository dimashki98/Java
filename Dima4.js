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

                        // التحقق مما إذا كانت الرسالة تحتوي على كلمة "دمشقي"
                        if (topicText.includes("دمشقي") || messageText.includes("دمشقي")) {
                            // تطبيق التأثير على الرسالة التي تحتوي على كلمة "دمشقي"
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

                        // تعريف العناصر المستهدفة مع الصور
                        const customStyles = {
                            "B.H.X": "https://up6.cc/2025/03/174315747223481.jpg", // تصميم B.H.X
                            "Y.D.X": "https://up6.cc/2025/03/17431574722633.jpg",  // تصميم Y.D.X
                            "مَريم": "https://up6.cc/2025/03/174315747225292.jpg",   // تصميم مَريم
                        };

                        // الأسماء التي يجب أن تظهر في الرسالة لتطبيق التصميم
                        const messageNames = ["بسمة", "ياسمين", "ياسو", "مريم"];

                        // التحقق مما إذا كان الموضوع يحتوي على اسم معين (B.H.X, Y.D.X, مَريم)
                        if (["B.H.X", "Y.D.X", "مَريم"].includes(topicText)) {
                            // إذا كان الموضوع يحتوي على أحد الأسماء المحددة
                            $(this).css({
                                "background": `url('${customStyles[topicText]}') no-repeat center center`,
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

                        // التحقق مما إذا كانت الرسالة تحتوي على اسم من الأسماء (بسمة، ياسمين، ياسو، مريم)
                        messageNames.forEach(name => {
                            if (messageText.includes(name)) {
                                // تطبيق التصميم بناءً على الاسم في الرسالة
                                let imageUrl = "";
                                if (name === "مريم") {
                                    imageUrl = "https://up6.cc/2025/03/174315747225292.jpg";
                                } else if (name === "ياسو" || name === "ياسمين") {
                                    imageUrl = "https://up6.cc/2025/03/17431574722633.jpg";
                                } else if (name === "بسمة") {
                                    imageUrl = "https://up6.cc/2025/03/174315747223481.jpg";
                                }

                                $(this).css({
                                    "background": `url('${imageUrl}') no-repeat center center`,
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
