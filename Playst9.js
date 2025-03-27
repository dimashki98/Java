$(document).ready(function () {
    const messagesContainer = $('#d2'); // حاوية الرسائل

    if (messagesContainer.length === 0) {
        console.error("❌ العنصر #d2 غير موجود! تحقق من العنصر الصحيح.");
        return;
    }

    // تعطيل سلوك التمرير الافتراضي القسري
    messagesContainer.css({
        'overflow-anchor': 'none', // تعطيل التمرير التلقائي عند إضافة عناصر جديدة
        'scroll-behavior': 'auto'  // منع التأثير السلس التلقائي الذي قد يسبب المشكلة
    });

    // زر التنقل إلى الرسائل الجديدة
    const scrollToBottomButton = $('<button class="scrollToBottom" style="display: none; position: fixed; bottom: 10px; right: 10px; z-index: 1000; padding: 10px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">⬇️ رسائل جديدة</button>').appendTo('body');

    let userAtBottom = true; // متغير لمعرفة إن كان المستخدم بالأسفل

    function checkIfUserAtBottom() {
        const scrollPosition = messagesContainer.scrollTop() + messagesContainer.innerHeight();
        const scrollHeight = messagesContainer.prop('scrollHeight');
        return scrollPosition >= scrollHeight - 5; // هامش صغير لمنع أخطاء الحساب
    }

    function scrollToBottom() {
        messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 300);
        scrollToBottomButton.fadeOut();
    }

    // مراقبة تمرير المستخدم يدويًا
    messagesContainer.on('scroll', function () {
        userAtBottom = checkIfUserAtBottom();
        if (userAtBottom) {
            scrollToBottomButton.fadeOut();
        }
    });

    // عند الضغط على زر "رسائل جديدة"
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
                scrollToBottom(); // إذا كان المستخدم بالأسفل، انزل تلقائيًا
            } else {
                scrollToBottomButton.fadeIn(); // إذا كان المستخدم يقرأ رسائل قديمة، أظهر الزر فقط
            }
        }
    });

    observer.observe(messagesContainer[0], { childList: true, subtree: true });

    // **🚨 تعطيل أي أكواد أخرى تجبر التمرير للأسفل**
    setInterval(() => {
        const forcedScroll = messagesContainer.scrollTop() + messagesContainer.innerHeight() >= messagesContainer.prop('scrollHeight') - 5;
        if (forcedScroll && !userAtBottom) {
            messagesContainer.stop(); // إيقاف أي تأثير تلقائي
        }
    }, 100); // فحص كل 100ms لمنع التمرير القسري
});
