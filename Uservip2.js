$(document).ready(function () {
    const observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                $(mutation.addedNodes).each(function () {
                    if ($(this).hasClass('uzr') && $(this).hasClass('d-flex') && !$(this).hasClass('processed')) {
                        $(this).addClass('processed');

                        const topicText = $(this).find('.nosel.u-topic.dots.hand').text().trim();
                        const messageText = $(this).find('.u-msg').text().trim();

                        const customStyles = {
                            "B.H.X": "https://up6.cc/2025/03/174315747223481.jpg",
                            "Y.D.X": "https://up6.cc/2025/03/17431574722633.jpg",
                            "مَريم": "https://up6.cc/2025/03/174315747225292.jpg",
                            "دمشقي": "https://dd3sr.net/dro3/1740773503732.gif",
                            "تراتيل": "https://up6.cc/2025/03/174333951234161.jpg",
                            "حرستا": "https://up6.cc/2025/03/174333997489881.jpg"
                        };

                        const messageStyles = {
                            "بسمة": "https://up6.cc/2025/03/174315747223481.jpg",
                            "ياسمين": "https://up6.cc/2025/03/17431574722633.jpg",
                            "ياسو": "https://up6.cc/2025/03/17431574722633.jpg",
                            "مريم": "https://up6.cc/2025/03/174315747225292.jpg",
                            "دمشقي": "https://dd3sr.net/dro3/1740773503732.gif",
                            "تراتيل": "https://up6.cc/2025/03/174333951234161.jpg",
                            "ترتر": "https://up6.cc/2025/03/174333951234161.jpg",
                            "حرستا": "https://up6.cc/2025/03/174333997489881.jpg"
                        };

                        let applyImageStyle = false;
                        let backgroundImage = "";

                        if (customStyles.hasOwnProperty(topicText)) {
                            backgroundImage = customStyles[topicText];
                            applyImageStyle = true;
                        } else {
                            Object.keys(messageStyles).forEach(name => {
                                if (messageText.includes(name)) {
                                    backgroundImage = messageStyles[name];
                                    applyImageStyle = true;
                                }
                            });
                        }

                        if (applyImageStyle && backgroundImage) {
                            $(this).css({
                                "background": `url('${backgroundImage}') no-repeat center center`,
                                "background-size": "cover",
                                "border-radius": "15px", // حواف دائرية
                                "box-shadow": "0 4px 10px rgba(0, 0, 0, 0.3)", // الظل المحيط
                                "border": "2px solid rgba(255, 255, 255, 0.5)", // حدود شفافة
                                "padding": "15px", // مسافة داخلية أكبر
                                "transition": "all 0.3s ease", // تأثير الانتقال
                                "opacity": "0", // تبدأ الشفافية صفر
                                "transform": "translateY(-30px) translateX(30px)" // تبدأ من أعلى إلى أسفل ومن اليمين إلى اليسار
                            });

                            // بعد 50 ميلي ثانية يبدأ التحريك تدريجياً
                            setTimeout(() => {
                                $(this).css({
                                    "opacity": "1", // تظهر تدريجياً
                                    "transform": "translateY(0) translateX(0)" // تتحرك إلى مكانها الطبيعي
                                });
                            }, 50);
                        }

                        // جعل الصورة الشخصية دائرية فقط إذا تم تطبيق التصميم
                        if (applyImageStyle) {
                            $(this).find('.fitimg.u-pic.borderg').css({
                                "border-radius": "50%" // تحويل الصورة إلى دائرية
                            });
                        }
                    }
                });
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
});
