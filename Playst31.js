$(document).ready(function () {
    const messagesContainer = $('#d2'); // الحاوية التي تحتوي على الرسائل
    const scrollToBottomButton = $('<button class="scrollToBottom" style="display: none; position: fixed; bottom: 10px; right: 10px; z-index: 1000; padding: 10px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">⬇️ رسائل جديدة</button>').appendTo('body');

    let userAtBottom = true; // حالة المستخدم إذا كان في الأسفل أم لا
    let preventScroll = false; // منع التمرير التلقائي

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
                scrollToBottomButton.fadeIn(); // إظهار الزر إذا كان المستخدم في الأعلى
            }
        }
    });

    observer.observe(messagesContainer[0], { childList: true, subtree: true });

    // **🚨 إجبار التمرير اليدوي فقط، وإيقاف أي كود آخر يجبر التمرير التلقائي**
    setInterval(() => {
        // إذا كان المستخدم في الأعلى ومنع التمرير التلقائي
        if (!userAtBottom) {
            preventScroll = true; // منع التمرير
            messagesContainer.stop(); // إيقاف التمرير التلقائي
        } else {
            preventScroll = false; // السماح بالتمرير التلقائي
        }
    }, 100);

    // **❌ تعطيل أي محاولات إجبار التمرير عبر `scrollTop`**
    let originalScrollTop = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollTop');
    Object.defineProperty(HTMLElement.prototype, 'scrollTop', {
        set: function(value) {
            if (preventScroll) {
                console.warn("🚨 محاولة إجبار التمرير التلقائي تم منعها!");
                return;
            }
            if (originalScrollTop && originalScrollTop.set) {
                originalScrollTop.set.call(this, value);
            }
        }
    });
});
