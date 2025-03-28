$(document).ready(function () {
    const messagesContainer = $('#d2');
    const scrollToBottomButton = $('<button class="scrollToBottomBtn" style="position: fixed; bottom: 50px; right: 10px; z-index: 1000; padding: 10px; background: #00ff00; color: white; border: none; border-radius: 5px; cursor: pointer; display: none;">⬇️</button>').appendTo('body');
    
    let userAtBottom = true;
    let isFrozen = false;

    // وظيفة لفحص إذا كان المستخدم في الأسفل
    function checkIfUserAtBottom() {
        const scrollPosition = messagesContainer.scrollTop() + messagesContainer.innerHeight();
        const scrollHeight = messagesContainer.prop('scrollHeight');
        return scrollPosition >= scrollHeight - 5;
    }

    // وظيفة للتمرير للأسفل
    function scrollToBottom() {
        messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 300);  // حركة سلسة للتمرير للأسفل
    }

    // مراقبة التمرير
    function monitorScroll() {
        const isAtBottom = checkIfUserAtBottom();
        userAtBottom = isAtBottom;

        // إذا كان المستخدم في الأسفل، يتم إخفاء زر التمرير للأسفل
        if (isAtBottom) {
            scrollToBottomButton.hide();
        } else {
            scrollToBottomButton.show();
        }

        // إذا لم يكن المستخدم في الأسفل، يتم منع التمرير التلقائي
        if (!isAtBottom && !isFrozen) {
            messagesContainer.stop(); // إيقاف التمرير التلقائي
        }
    }

    // مراقبة التمرير باستخدام requestAnimationFrame
    function startMonitoring() {
        requestAnimationFrame(startMonitoring);
        monitorScroll();
    }
    startMonitoring();

    // حدث عند الضغط على زر التنقل للأسفل
    scrollToBottomButton.on('click', function () {
        scrollToBottom();
    });
    
    // وظيفة إلغاء التجميد والتأثير السلس عند التمرير للأسفل
    function enableAutoScroll() {
        if (userAtBottom) {
            scrollToBottom();
        }
    }

    // عند إضافة رسائل جديدة
    function newMessageAdded() {
        // إذا كان المستخدم في الأسفل، استمر في التمرير
        if (userAtBottom) {
            enableAutoScroll();
        }
    }

    // محاكاة لإضافة رسالة جديدة (يجب استبدالها بمحتوى الرسائل الفعلي لديك)
    setInterval(newMessageAdded, 5000); // لإضافة رسالة جديدة كل 5 ثواني كمثال
});
