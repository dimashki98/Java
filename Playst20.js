$(document).ready(function () {
    const messagesContainer = $('#d2'); // حاوية الرسائل
    const scrollToBottomButton = $('<button class="scrollToBottom" style="display: none; position: fixed; bottom: 10px; right: 10px; z-index: 1000; padding: 10px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">⬇️ رسائل جديدة</button>').appendTo('body');
    let userAtBottom = true; // هل المستخدم في الأسفل؟
    let msgload = false; // هل هناك رسائل جديدة لم يتم رؤيتها؟
    let scrollDisabled = false; // متغير لتعطيل التمرير التلقائي
    let hiddenMessages = []; // مصفوفة لتخزين الرسائل المخفية

    // التحقق مما إذا كان المستخدم في الأسفل
    function checkIfUserAtBottom() {
        const scrollPosition = messagesContainer.scrollTop() + messagesContainer.innerHeight();
        const scrollHeight = messagesContainer.prop('scrollHeight');
        return scrollPosition >= scrollHeight - 10; // هامش بسيط
    }

    // التمرير للأسفل
    function scrollToBottom() {
        messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 300);
        scrollToBottomButton.hide(); // إخفاء زر "رسائل جديدة"
        msgload = false; // تم مشاهدة جميع الرسائل
        userAtBottom = true;
        scrollDisabled = true; // تعطيل التمرير التلقائي
    }

    // إظهار الرسائل المخفية عند الضغط على الزر
    function showHiddenMessages() {
        hiddenMessages.forEach(function (message) {
            message.show(); // إظهار الرسائل المخفية
        });
        hiddenMessages = []; // مسح الرسائل المخفية
        scrollToBottom(); // التمرير إلى الأسفل بعد إظهار الرسائل
    }

    // تحديث حالة المستخدم عند التمرير
    messagesContainer.on('scroll', function () {
        userAtBottom = checkIfUserAtBottom();
        if (userAtBottom) {
            scrollToBottomButton.hide(); // إخفاء الزر إذا كان في الأسفل
        } else {
            if (msgload) {
                scrollToBottomButton.show(); // إظهار الزر إذا كانت هناك رسائل جديدة
            }
        }
    });

    // عند الضغط على الزر، ينزل المستخدم إلى أحدث الرسائل
    scrollToBottomButton.on('click', function () {
        showHiddenMessages(); // إظهار الرسائل المخفية عند الضغط على الزر
    });

    // مراقبة إضافة رسائل جديدة
    const observer = new MutationObserver(function (mutationsList) {
        let newMessageAdded = false;

        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                $(mutation.addedNodes).each(function () {
                    if ($(this).hasClass('uzr')) { 
                        newMessageAdded = true;
                        if (userAtBottom) {
                            return; // إذا كان المستخدم في الأسفل لا نخفي الرسائل
                        } else {
                            hiddenMessages.push($(this)); // إذا كان المستخدم في الأعلى نخفي الرسالة
                            $(this).hide(); // إخفاء الرسالة
                        }
                    }
                });
            }
        });

        if (newMessageAdded) {
            msgload = true; // هناك رسائل جديدة لم يتم رؤيتها
            if (!userAtBottom && !scrollDisabled) {
                scrollToBottomButton.show(); // إظهار الزر إذا كانت هناك رسائل جديدة والمستخدم في الأعلى
            }
        }
    });

    observer.observe(messagesContainer[0], { childList: true, subtree: true });
});
