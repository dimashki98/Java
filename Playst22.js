$(document).ready(function () {
    const messagesContainer = $('#d2'); // الحاوية التي تحتوي على الرسائل
    const scrollToBottomButton = $('<button class="scrollToBottom" style="display: none; position: fixed; bottom: 10px; right: 10px; z-index: 1000; padding: 10px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">⬇️ رسائل جديدة</button>').appendTo('body');

    let userAtBottom = true; // حالة المستخدم إذا كان في الأسفل أم لا
    let newMessages = []; // قائمة لتخزين الرسائل الجديدة التي لم يتم عرضها

    // التحقق مما إذا كان المستخدم في الأسفل
    function checkIfUserAtBottom() {
        const scrollPosition = messagesContainer.scrollTop() + messagesContainer.innerHeight();
        const scrollHeight = messagesContainer.prop('scrollHeight');
        return scrollPosition >= scrollHeight - 10; // هامش بسيط
    }

    // التمرير للأسفل
    function scrollToBottom() {
        messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 300);
        scrollToBottomButton.fadeOut();
    }

    // تحديث حالة المستخدم عند التمرير
    messagesContainer.on('scroll', function () {
        userAtBottom = checkIfUserAtBottom();
        if (userAtBottom) {
            scrollToBottomButton.fadeOut(); // إخفاء الزر إذا كان في الأسفل
        }
    });

    // عند الضغط على الزر، ينزل المستخدم إلى أحدث الرسائل
    scrollToBottomButton.on('click', function () {
        scrollToBottom();
    });

    // مراقبة إضافة رسائل جديدة
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
            if (userAtBottom) {
                scrollToBottom(); // فقط إذا كان المستخدم بالفعل في الأسفل
            } else {
                newMessages.push($(mutation.addedNodes)); // تخزين الرسائل الجديدة
                scrollToBottomButton.fadeIn(); // إظهار الزر إذا كان المستخدم في الأعلى
            }
        }
    });

    observer.observe(messagesContainer[0], { childList: true, subtree: true });

    // عند الضغط على زر "رسائل جديدة"، يعرض الرسائل المخفية
    scrollToBottomButton.on('click', function () {
        newMessages.forEach(function (message) {
            messagesContainer.append(message); // إضافة الرسائل المخفية
        });
        newMessages = []; // تفريغ القائمة بعد عرض الرسائل
        scrollToBottom();
    });
});
