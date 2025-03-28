$(document).ready(function () {
    const messagesContainer = $('#d2');
    const scrollButton = $('<button class="scrollBtn" style="position: fixed; bottom: 50px; right: 10px; z-index: 1000; padding: 10px; background: blue; color: white; border: none; border-radius: 5px; cursor: pointer; display: none;">⬇️</button>').appendTo('body');
    
    let isUserManuallyScrolling = false; // للتأكد من التمرير اليدوي

    // فحص إذا كان المستخدم في الأسفل
    function checkIfUserAtBottom() {
        const scrollPosition = messagesContainer.scrollTop() + messagesContainer.innerHeight();
        const scrollHeight = messagesContainer.prop('scrollHeight');
        return scrollPosition >= scrollHeight - 5;
    }

    // التمرير للأسفل بشكل عادي
    function normalScrollToBottom() {
        messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 500); // سريع طبيعي
    }

    // التمرير للأسفل ببطء شديد جداً
    function ultraSlowScrollToBottom() {
        // إذا كان المستخدم قد مرر يدويًا، لا نريد التأثير عليه
        if (!isUserManuallyScrolling) {
            messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 10000); // بطيء جدًا لمدة 10 ثوانٍ
        }
    }

    // حدث الضغط على زر التمرير
    scrollButton.on('click', function () {
        normalScrollToBottom();
        scrollButton.hide();
    });

    // مراقبة التمرير اليدوي
    messagesContainer.on('scroll', function () {
        // إذا كان المستخدم في الأسفل، لا يظهر الزر
        if (checkIfUserAtBottom()) {
            scrollButton.hide();
            isUserManuallyScrolling = false; // المستخدم لا يمرر يدويا إذا كان في الأسفل
        } else {
            scrollButton.show();
            isUserManuallyScrolling = true; // إذا كان في الأعلى، يعتبر أنه يمرر يدويا
        }
    });

    const resizeObserver = new ResizeObserver(() => {
        if (checkIfUserAtBottom()) {
            normalScrollToBottom();
        } else {
            ultraSlowScrollToBottom();
        }
    });

    resizeObserver.observe(messagesContainer[0]);
});
