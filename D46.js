$(document).ready(function () {
    const messagesContainer = $('#d2');
    const scrollButton = $('<button class="scrollBtn" style="position: fixed; bottom: 50px; right: 10px; z-index: 1000; padding: 10px; background: blue; color: white; border: none; border-radius: 5px; cursor: pointer; display: none;">⬇️</button>').appendTo('body');

    let isUserScrolling = false;
    let isUserManuallyScrolling = false; // للتأكد من التمرير اليدوي
    
    function checkIfUserAtBottom() {
        const scrollPosition = messagesContainer.scrollTop() + messagesContainer.innerHeight();
        const scrollHeight = messagesContainer.prop('scrollHeight');
        return scrollPosition >= scrollHeight - 5;
    }

    // النزول للأسفل بسرعة عادية
    function normalScrollToBottom() {
        messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 500);
    }

    // النزول للأسفل ببطء شديد جدًا
    function ultraSlowScrollToBottom() {
        // إذا كان المستخدم يمرر يدويًا، لا نريد التأثير عليه
        if (!isUserManuallyScrolling) {
            messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 40000); // 40 ثانية!
        }
    }

    // حدث عند الضغط على زر التمرير
    scrollButton.on('click', function () {
        normalScrollToBottom();
        scrollButton.hide();
    });

    // مراقبة التمرير اليدوي
    messagesContainer.on('scroll', function () {
        if (checkIfUserAtBottom()) {
            scrollButton.hide();
            isUserScrolling = false;
        } else {
            scrollButton.show();
            isUserScrolling = true;
        }

        // إذا كان المستخدم يمرر يدويًا، نقوم بتفعيل هذا المتغير
        isUserManuallyScrolling = true;

        // إعادة التمرير البطيء عند التوقف عن التمرير اليدوي
        clearTimeout(window.scrollTimeout);
        window.scrollTimeout = setTimeout(function () {
            isUserManuallyScrolling = false;
        }, 1000); // بعد مرور 1 ثانية من آخر تمرير يدوي، نعيد التمرير البطيء
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
