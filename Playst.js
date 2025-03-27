$(document).ready(function () {
    // زر التمرير للأسفل
    const scrollToBottomButton = $('<button class="scrollToBottom">⬇️</button>').appendTo('body');

    // مراقبة التمرير داخل حاوية الرسائل
    const messagesContainer = $('#messages-container'); // تأكد من أن هذا هو الـ ID الصحيح لحاوية الرسائل

    messagesContainer.on('scroll', function () {
        const isAtBottom = messagesContainer.scrollTop() + messagesContainer.height() >= messagesContainer[0].scrollHeight;
        if (isAtBottom) {
            scrollToBottomButton.fadeOut();
        } else {
            scrollToBottomButton.fadeIn();
        }
    });

    // عند الضغط على زر التمرير للأسفل
    scrollToBottomButton.on('click', function () {
        messagesContainer.scrollTop(messagesContainer[0].scrollHeight);
    });

    // استخدام MutationObserver لمراقبة إضافة رسائل جديدة
    const observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                // التحقق إذا كانت الرسالة جديدة
                $(mutation.addedNodes).each(function () {
                    if ($(this).hasClass('message')) { // تأكد من أن الرسالة لها الكلاس المناسب
                        // إذا كانت الرسالة جديدة، نقوم بالتمرير للأسفل تلقائيًا
                        messagesContainer.scrollTop(messagesContainer[0].scrollHeight);
                    }
                });
            }
        });
    });

    // مراقبة تغييرات DOM في حاوية الرسائل
    observer.observe(messagesContainer[0], { childList: true, subtree: true });
});
