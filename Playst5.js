$(document).ready(function () {
    const scrollToBottomButton = $('<button class="scrollToBottom" style="display: none; position: fixed; bottom: 10px; right: 10px; z-index: 1000; padding: 10px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">⬇️ رسائل جديدة</button>').appendTo('body');

    const messagesContainer = $('#d2'); // تحديد الحاوية التي تحتوي على الرسائل

    // دالة التحقق إذا كان المستخدم في الأسفل
    const isUserAtBottom = function () {
        const scrollPosition = messagesContainer.scrollTop() + messagesContainer.innerHeight();
        const scrollHeight = messagesContainer[0].scrollHeight;
        return scrollPosition >= scrollHeight - 10; // إذا كان المستخدم في الأسفل تقريبًا
    };

    // وظيفة التمرير للأسفل
    const scrollToBottom = function () {
        messagesContainer.stop().animate({ scrollTop: messagesContainer[0].scrollHeight }, 300);
        scrollToBottomButton.fadeOut();
    };

    // التحقق عند التمرير إذا كان المستخدم في الأسفل أم لا
    messagesContainer.on('scroll', function () {
        if (isUserAtBottom()) {
            scrollToBottomButton.fadeOut();
        }
    });

    // عند الضغط على الزر، ينزل المستخدم إلى أحدث الرسائل
    scrollToBottomButton.on('click', function () {
        scrollToBottom();
    });

    // مراقبة الإضافات الجديدة داخل الحاوية #d2
    const observer = new MutationObserver(function (mutationsList) {
        let newMessageAdded = false;
        
        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                $(mutation.addedNodes).each(function () {
                    if ($(this).hasClass('uzr')) { 
                        newMessageAdded = true;
                    }
                });
            }
        });

        if (newMessageAdded) {
            if (isUserAtBottom()) {
                scrollToBottom(); // فقط إذا كان المستخدم بالفعل في الأسفل
            } else {
                scrollToBottomButton.fadeIn(); // إظهار الزر إذا كان المستخدم في الأعلى
            }
        }
    });

    observer.observe(messagesContainer[0], { childList: true, subtree: true });
});
