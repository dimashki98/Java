$(document).ready(function () {
    const scrollToBottomButton = $('<button class="scrollToBottom" style="display: none; position: fixed; bottom: 10px; right: 10px; z-index: 1000; padding: 10px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">⬇️ رسائل جديدة</button>').appendTo('body');

    const messagesContainer = $('#d2'); // استخدام #d2 لأنه يحتوي على الرسائل
    let isAtBottom = true;

    // وظيفة التمرير للأسفل
    const scrollToBottom = function () {
        messagesContainer.scrollTop(messagesContainer[0].scrollHeight);
        isAtBottom = true;
        scrollToBottomButton.fadeOut();
    };

    // التحقق عند التمرير إذا كان المستخدم في الأسفل أم لا
    messagesContainer.on('scroll', function () {
        const scrollPosition = messagesContainer.scrollTop();
        const scrollHeight = messagesContainer[0].scrollHeight;
        const containerHeight = messagesContainer.height();

        if (scrollPosition + containerHeight >= scrollHeight - 10) {
            isAtBottom = true;
            scrollToBottomButton.fadeOut();
        } else {
            isAtBottom = false;
            scrollToBottomButton.fadeIn();
        }
    });

    // عند الضغط على الزر، ينزل المستخدم إلى أحدث الرسائل
    scrollToBottomButton.on('click', function () {
        scrollToBottom();
    });

    // مراقبة الإضافات الجديدة داخل الحاوية #d2
    const observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                $(mutation.addedNodes).each(function () {
                    // التحقق إذا كان العنصر الجديد رسالة جديدة
                    if ($(this).hasClass('uzr')) { 
                        if (!isAtBottom) {
                            scrollToBottomButton.fadeIn(); // إظهار الزر فقط إذا كان المستخدم ليس في الأسفل
                        }
                    }
                });
            }
        });
    });

    observer.observe(messagesContainer[0], { childList: true, subtree: true });
});
