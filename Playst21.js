$(document).ready(function () {
    const messagesContainer = $('#d2'); // الحاوية التي تحتوي على الرسائل
    const scrollToBottomButton = $('<button class="scrollToBottom" style="display: none; position: fixed; bottom: 10px; right: 10px; z-index: 1000; padding: 10px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">⬇️ رسائل جديدة</button>').appendTo('body');
    
    let userAtTop = false; // حالة المستخدم إذا كان في الأعلى أم لا
    let newMessages = []; // تخزين الرسائل الجديدة التي لم تعرض بعد

    // التحقق مما إذا كان المستخدم في الأعلى
    function checkIfUserAtTop() {
        const scrollPosition = messagesContainer.scrollTop();
        return scrollPosition === 0; // إذا كان التمرير في البداية
    }

    // التمرير للأسفل
    function scrollToBottom() {
        messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 300);
        scrollToBottomButton.fadeOut();
    }

    // تحديث حالة المستخدم عند التمرير
    messagesContainer.on('scroll', function () {
        userAtTop = checkIfUserAtTop();
        if (userAtTop) {
            // إخفاء الرسائل الجديدة عندما يكون المستخدم في الأعلى
            scrollToBottomButton.fadeIn();
        }
    });

    // عند الضغط على الزر، ينزل المستخدم إلى أحدث الرسائل
    scrollToBottomButton.on('click', function () {
        scrollToBottom();
        // إظهار الرسائل الجديدة المخفية بعد الضغط على الزر
        displayNewMessages();
        scrollToBottomButton.fadeOut(); // إخفاء الزر بعد الضغط عليه
    });

    // مراقبة إضافة رسائل جديدة
    const observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                $(mutation.addedNodes).each(function () {
                    if ($(this).hasClass('uzr')) { 
                        if (userAtTop) {
                            // إخفاء الرسائل الجديدة عندما يكون المستخدم في الأعلى
                            newMessages.push($(this)); // تخزين الرسالة الجديدة
                        } else {
                            // عرض الرسالة مباشرة إذا كان المستخدم في الأسفل
                            $(this).show();
                        }
                    }
                });
            }
        });
    });

    observer.observe(messagesContainer[0], { childList: true, subtree: true });

    // دالة لعرض الرسائل الجديدة بعد الضغط على زر "رسائل جديدة"
    function displayNewMessages() {
        newMessages.forEach(function (message) {
            message.show(); // عرض الرسائل المخفية
        });
        newMessages = []; // تفريغ قائمة الرسائل الجديدة بعد عرضها
    }
});
