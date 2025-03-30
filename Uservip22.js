

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
                            "دمشقي": "https://up6.cc/2025/03/174336082927841.png",
                            "تراتيل": "https://up6.cc/2025/03/174333951234161.jpg",
                            "حرستا": "https://up6.cc/2025/03/174333997489881.jpg"
                        };

                        const messageStyles = {
                            "بسمة": "https://up6.cc/2025/03/174315747223481.jpg",
                            "ياسمين": "https://up6.cc/2025/03/17431574722633.jpg",
                            "ياسو": "https://up6.cc/2025/03/17431574722633.jpg",
                            "مريم": "https://up6.cc/2025/03/174315747225292.jpg",
                            "دمشقي": "https://up6.cc/2025/03/174336082927841.png",
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
                                "border": "2px solid rgba(255, 255, 255, 0.5)", // حدود شفافة
                                "padding": "15px", // مسافة داخلية أكبر
                                "transition": "none" // إزالة تأثير الانتقال
                            });
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
$(document).ready(function () {
    const messagesContainer = $('#d2');

    // وظيفة لضمان التمرير للأسفل عند إضافة رسائل جديدة
    function scrollToBottom() {
        messagesContainer.scrollTop(messagesContainer.prop('scrollHeight'));
    }

    // وظيفة لإضافة الرسالة الجديدة
    function addNewMessage(messageContent) {
        const newMessage = $('<div class="uzr d-flex mm mipaiogculee processed" style="border: 2px solid rgba(255, 255, 255, 0.3); margin: 0px; width: 100%; padding: 10px; opacity: 1; transform: translateY(0px) translateX(0px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; border-radius: 15px; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px; transform-origin: center center; color: rgb(128, 128, 128); background-color: #f0f0f0; overflow-wrap: break-word; word-wrap: break-word;">');
        newMessage.append('<div class="u-msg break" style="white-space: pre-wrap; word-wrap: break-word;">' + messageContent + '</div>');
        messagesContainer.append(newMessage);
    }

    // مراقبة تغييرات DOM داخل #d2 باستخدام MutationObserver
    const observer = new MutationObserver(function (mutationsList) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                scrollToBottom(); // التمرير للأسفل فور إضافة أي عنصر جديد
            }
        }
    });

    // إعداد مراقبة التغييرات داخل الحاوية
    observer.observe(messagesContainer[0], {
        childList: true, // مراقبة إضافة عناصر جديدة
        subtree: true // مراقبة كافة التغييرات داخل الحاوية
    });

    // مثال على إضافة رسالة جديدة عبر الزر
    $('#addMessageButton').on('click', function() {
        const userMessage = $('#messageInput').val(); // الحصول على النص من مدخل المستخدم
        if (userMessage) {
            addNewMessage(userMessage); // إضافة الرسالة المدخلة
            $('#messageInput').val(''); // مسح الحقل بعد إرسال الرسالة
        }
    });
});
