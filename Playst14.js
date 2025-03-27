$(document).ready(function () {
    const messagesContainer = $('#d2');
    const scrollToBottomButton = $('<button class="scrollToBottom" style="display: none; position: fixed; bottom: 10px; right: 10px; z-index: 1000; padding: 10px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">⬇️ رسائل جديدة</button>').appendTo('body');
    
    let userAtBottom = true;
    let isScrollLocked = false; // لمنع التمرير التلقائي

    // وظيفة لفحص إذا كان المستخدم في الأسفل
    function checkIfUserAtBottom() {
        const scrollPosition = messagesContainer.scrollTop() + messagesContainer.innerHeight();
        const scrollHeight = messagesContainer.prop('scrollHeight');
        return scrollPosition >= scrollHeight - 5;
    }

    // وظيفة للتمرير للأسفل
    function scrollToBottom() {
        messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 300);
        scrollToBottomButton.fadeOut();
    }

    // إيقاف التمرير التلقائي
    function stopAutoScroll() {
        isScrollLocked = true;  // قفل التمرير التلقائي
        scrollToBottomButton.fadeIn(); // إظهار زر التمرير للأسفل
    }

    // استئناف التمرير التلقائي
    function resumeAutoScroll() {
        isScrollLocked = false; // فتح التمرير التلقائي
        scrollToBottom(); // التمرير للأسفل
    }

    // استئناف التمرير تلقائيًا إذا كان المستخدم في الأسفل عند إضافة رسالة جديدة
    function autoScrollIfNeeded() {
        if (userAtBottom && !isScrollLocked) {
            scrollToBottom();
        }
    }

    // مراقبة التمرير داخل الحاوية
    messagesContainer.on('scroll', function () {
        userAtBottom = checkIfUserAtBottom();
        if (userAtBottom) {
            scrollToBottomButton.fadeOut(); // إخفاء الزر إذا كان المستخدم في الأسفل
        } else {
            scrollToBottomButton.fadeIn(); // إظهار الزر إذا كان المستخدم في الأعلى
        }
    });

    // حدث عند الضغط على زر التمرير للأسفل
    scrollToBottomButton.on('click', function () {
        resumeAutoScroll();  // استئناف التمرير التلقائي عند الضغط
    });

    // مراقبة التغييرات في DOM
    const observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                $(mutation.addedNodes).each(function () {
                    if ($(this).hasClass('uzr')) { // تحقق من إضافة رسالة جديدة
                        if (!userAtBottom && !isScrollLocked) {
                            stopAutoScroll(); // إذا لم يكن المستخدم في الأسفل، إيقاف التمرير التلقائي
                        }
                    }
                });
                // بعد إضافة رسالة جديدة، التمرير إذا كان المستخدم في الأسفل
                autoScrollIfNeeded();
            }
        });
    });

    observer.observe(messagesContainer[0], { childList: true, subtree: true });
});
