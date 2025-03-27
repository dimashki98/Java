$(document).ready(function () {
    const scrollToBottomButton = $('<button class="scrollToBottom" style="display: none; position: fixed; bottom: 10px; right: 10px;">⬇️</button>').appendTo('body');
    const messagesContainer = $('#messages-container');  // تأكد من المعرف الصحيح

    let isAtBottom = true;  // متغير لمعرفة إذا كنت في أسفل الحاوية

    // التمرير للأسفل عند الضغط على الزر
    const scrollToBottom = function () {
        messagesContainer.scrollTop(messagesContainer[0].scrollHeight);
        isAtBottom = true; // بعد التمرير للأسفل نعلم أن المستخدم في الأسفل
    };

    // مراقبة التمرير داخل حاوية الرسائل
    messagesContainer.on('scroll', function () {
        const scrollPosition = messagesContainer.scrollTop();
        const scrollHeight = messagesContainer[0].scrollHeight;
        const containerHeight = messagesContainer.height();

        // التحقق إذا كنت في أعلى الحاوية أو في أسفلها
        if (scrollPosition + containerHeight >= scrollHeight - 10) {
            isAtBottom = true;  // في أسفل الحاوية
            scrollToBottomButton.fadeOut();  // إخفاء الزر إذا كنت في الأسفل
        } else {
            isAtBottom = false;  // في أعلى أو وسط الحاوية
            if (scrollToBottomButton.is(':hidden')) {
                scrollToBottomButton.fadeIn();  // إظهار الزر إذا كنت في الأعلى أو في وسط الصفحة
            }
        }
    });

    // عند الضغط على زر التمرير للأسفل
    scrollToBottomButton.on('click', function () {
        scrollToBottom();  // التمرير للأسفل
    });

    // استخدام MutationObserver لمراقبة إضافة رسائل جديدة
    const observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                $(mutation.addedNodes).each(function () {
                    // تحقق من أن العنصر الذي تم إضافته هو رسالة
                    if ($(this).hasClass('message')) { // تأكد من أن الرسالة تحتوي على الكلاس الصحيح
                        if (!isAtBottom) {
                            scrollToBottomButton.fadeIn(); // إظهار الزر إذا كنت في الأعلى أو في وسط الصفحة
                        }
                    }
                });
            }
        });
    });

    // مراقبة تغييرات DOM في حاوية الرسائل
    observer.observe(messagesContainer[0], { childList: true, subtree: true });
});
