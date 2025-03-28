$(document).ready(function () {
    const messagesContainer = $('#d2');
    const scrollButton = $('<button class="scrollBtn" style="position: fixed; bottom: 50px; right: 10px; z-index: 1000; padding: 10px; background: blue; color: white; border: none; border-radius: 5px; cursor: pointer; display: none;">⬇️</button>').appendTo('body');

    let isUserScrolling = false;
    
    function checkIfUserAtBottom() {
        const scrollPosition = messagesContainer.scrollTop() + messagesContainer.innerHeight();
        const scrollHeight = messagesContainer.prop('scrollHeight');
        return scrollPosition >= scrollHeight - 5;
    }

    // النزول للأسفل بسرعة بطيئة جدًا
    function slowScrollToBottom() {
        messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 5000); // وقت التمرير: 5000 مللي ثانية (5 ثوانٍ)
    }

    // منع النزول تمامًا عندما يكون المستخدم في الأعلى
    function stopScroll() {
        messagesContainer.stop(); // إيقاف الحركة
    }

    scrollButton.on('click', function () {
        slowScrollToBottom();
        scrollButton.hide();
    });

    messagesContainer.on('scroll', function () {
        if (checkIfUserAtBottom()) {
            scrollButton.hide();
            isUserScrolling = false;
            stopScroll();  // إيقاف الحركة عندما يكون في الأسفل
        } else {
            scrollButton.show();
            isUserScrolling = true;
            stopScroll();  // إيقاف الحركة عندما يصعد المستخدم للأعلى
        }
    });

    const resizeObserver = new ResizeObserver(() => {
        if (checkIfUserAtBottom()) {
            slowScrollToBottom();
        } else {
            stopScroll(); // التوقف عندما لا يكون في الأسفل
        }
    });

    resizeObserver.observe(messagesContainer[0]);
});
