$(document).ready(function () {
    const messagesContainer = $('#d2');
    const scrollButton = $('<button class="scrollBtn" style="position: fixed; bottom: 50px; right: 10px; z-index: 1000; padding: 10px; background: blue; color: white; border: none; border-radius: 5px; cursor: pointer; display: none;">⬇️</button>').appendTo('body');

    let isUserScrolling = false;
    
    // التحقق مما إذا كان المستخدم في الأسفل
    function checkIfUserAtBottom() {
        const scrollPosition = messagesContainer.scrollTop() + messagesContainer.innerHeight();
        const scrollHeight = messagesContainer.prop('scrollHeight');
        return scrollPosition >= scrollHeight - 5;
    }

    // النزول للأسفل بسرعة عادية
    function normalScrollToBottom() {
        messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 500); // سرعة عادية
    }

    // النزول للأسفل ببطء شديد
    function slowScrollToBottom() {
        messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 4000); // بطيء جدًا
    }

    // عند الضغط على زر السهم، ينزل فورًا
    scrollButton.on('click', function () {
        normalScrollToBottom();
        scrollButton.hide();
    });

    // مراقبة التمرير اليدوي للمستخدم
    messagesContainer.on('scroll', function () {
        if (checkIfUserAtBottom()) {
            scrollButton.hide();
            isUserScrolling = false;
        } else {
            scrollButton.show();
            isUserScrolling = true;
        }
    });

    // مراقبة أي تغيير في حجم الدردشة (مثل إضافة رسائل جديدة)
    const resizeObserver = new ResizeObserver(() => {
        if (checkIfUserAtBottom()) {
            normalScrollToBottom(); // إذا كان المستخدم في الأسفل، ينزل بسرعة عادية
        } else {
            slowScrollToBottom(); // إذا كان المستخدم فوق، ينزل ببطء شديد
        }
    });

    resizeObserver.observe(messagesContainer[0]);
});
