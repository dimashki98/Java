$(document).ready(function () {
    const messagesContainer = $('#d2');
    const scrollButton = $('<button class="scrollBtn" style="position: fixed; bottom: 50px; right: 10px; z-index: 1000; padding: 10px; background: blue; color: white; border: none; border-radius: 5px; cursor: pointer; display: none;">⬇️</button>').appendTo('body');

    let isUserManuallyScrolling = false;

    // وظيفة لفحص إذا كان المستخدم في الأسفل
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
        messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 5000); // 5 ثواني
    }

    // الزر الخاص بالنزول التلقائي
    scrollButton.on('click', function () {
        normalScrollToBottom();
        scrollButton.hide();
    });

    // مراقبة التمرير بشكل يدوي
    messagesContainer.on('scroll', function () {
        const currentScrollTop = messagesContainer.scrollTop();
        if (currentScrollTop > messagesContainer.prop('scrollHeight') - messagesContainer.innerHeight()) {
            scrollButton.hide();
            isUserManuallyScrolling = false;
        } else {
            scrollButton.show();
            isUserManuallyScrolling = true;
        }
    });

    // استخدام IntersectionObserver لمراقبة آخر رسالة
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isUserManuallyScrolling) {
                // التمرير البطيء فقط إذا لم يكن المستخدم يمرر يدوياً
                ultraSlowScrollToBottom();
            } else if (entry.isIntersecting && isUserManuallyScrolling) {
                normalScrollToBottom();  // إذا كان المستخدم يمرر يدوياً نمرر بشكل طبيعي
            }
        });
    }, { threshold: 1.0 });

    // تحديد العنصر الذي نراقبه (آخر رسالة في القائمة)
    observer.observe($('#lastMessage')[0]);

    // التمرير إلى الأسفل عندما يكون في الأسفل
    const resizeObserver = new ResizeObserver(() => {
        if (checkIfUserAtBottom()) {
            normalScrollToBottom();
        } else {
            ultraSlowScrollToBottom();
        }
    });

    resizeObserver.observe(messagesContainer[0]);
});
