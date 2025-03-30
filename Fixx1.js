$(document).ready(function () {
    const messagesContainer = $('#d2');

    // وظيفة لضمان التمرير للأسفل عند إضافة رسائل جديدة
    function scrollToBottom() {
        // التمرير للأسفل بسرعة مع التحقق من الطول الجديد
        messagesContainer.scrollTop(messagesContainer[0].scrollHeight);
    }

    // مراقبة الحاوية باستخدام setInterval فقط عند الحاجة
    let lastHeight = messagesContainer[0].scrollHeight;

    function checkForNewMessages() {
        const currentHeight = messagesContainer[0].scrollHeight;
        if (currentHeight > lastHeight) {
            scrollToBottom(); // التمرير للأسفل عند إضافة رسالة جديدة
            lastHeight = currentHeight; // تحديث الطول
        }
    }

    // استخدم MutationObserver لمراقبة إضافة رسائل جديدة
    const observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                checkForNewMessages(); // التمرير بعد إضافة رسالة
            }
        });
    });

    // إعداد مراقبة التغييرات داخل الحاوية
    observer.observe(messagesContainer[0], {
        childList: true, // مراقبة إضافة عناصر جديدة
        subtree: true // مراقبة كافة التغييرات داخل الحاوية
    });
});
