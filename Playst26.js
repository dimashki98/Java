$(document).ready(function () {
    const messagesContainer = $('#d2'); // الحاوية التي تحتوي على الرسائل
    const scrollToBottomButton = $('<button class="scrollToBottom" style="display: none; position: fixed; bottom: 10px; right: 10px; z-index: 1000; padding: 10px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">⬇️ رسائل جديدة</button>').appendTo('body');
    
    let userAtTop = false; // حالة المستخدم إذا كان في الأعلى أم لا
    let newMessages = []; // قائمة لتخزين الرسائل الجديدة التي لم يتم عرضها

    // التحقق مما إذا كان المستخدم في الأعلى
    function checkIfUserAtTop() {
        const scrollPosition = messagesContainer.scrollTop();
        return scrollPosition <= 10; // هامش بسيط للتأكد من أن المستخدم في الأعلى
    }

    // التمرير للأسفل
    function scrollToBottom() {
        messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 300);
        scrollToBottomButton.fadeOut(); // إخفاء الزر عند التمرير للأسفل
    }

    // عند الضغط على الزر، يعرض الرسائل الجديدة المخفية
    scrollToBottomButton.on('click', function () {
        // إضافة الرسائل المخفية إلى الحاوية
        if (newMessages.length > 0) {
            newMessages.forEach(function (message) {
                messagesContainer.append(message); // إضافة الرسائل المخفية
            });
            newMessages = []; // تفريغ قائمة الرسائل المخفية بعد عرضها
            scrollToBottom(); // التمرير للأسفل بعد عرض الرسائل
        }
        scrollToBottomButton.fadeOut(); // إخفاء الزر بعد العرض
    });

    // مراقبة إضافة رسائل جديدة
    const observer = new MutationObserver(function (mutationsList) {
        let newMessageAdded = false;

        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                $(mutation.addedNodes).each(function () {
                    if ($(this).hasClass('uzr')) { // تحقق من كون العنصر هو رسالة جديدة
                        newMessageAdded = true;
                    }
                });
            }
        });

        if (newMessageAdded) {
            if (checkIfUserAtTop()) {
                // إذا كان المستخدم في الأعلى، نخفي الرسائل الجديدة مؤقتاً
                $(mutation.addedNodes).each(function () {
                    newMessages.push($(this)); // تخزين الرسائل الجديدة
                });
                scrollToBottomButton.fadeIn(); // إظهار زر "رسائل جديدة"
            } else {
                scrollToBottom(); // إذا كان المستخدم في الأسفل، نقوم بالتمرير للأسفل مباشرةً
            }
        }
    });

    observer.observe(messagesContainer[0], { childList: true, subtree: true });

    // التحقق عند التمرير
    messagesContainer.on('scroll', function () {
        userAtTop = checkIfUserAtTop();
    });
});
