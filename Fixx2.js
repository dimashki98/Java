$(document).ready(function () {
    const messagesContainer = $('#d2');

    // وظيفة لضمان التمرير للأسفل عند إضافة رسائل جديدة
    function scrollToBottom() {
        // التمرير للأسفل بسرعة مع التحقق من الطول الجديد
        messagesContainer.scrollTop(messagesContainer[0].scrollHeight);
    }

    // مراقبة التغييرات داخل الحاوية باستخدام MutationObserver
    const observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
            // إذا تمت إضافة عنصر جديد (رسالة)
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                // التمرير إلى أسفل بعد إضافة رسالة جديدة
                scrollToBottom();
            }
        });
    });

    // إعداد مراقبة التغييرات داخل الحاوية
    observer.observe(messagesContainer[0], {
        childList: true, // مراقبة إضافة عناصر جديدة
        subtree: true // مراقبة كافة التغييرات داخل الحاوية
    });

    // التمرير للأسفل عندما يتم تحميل الصفحة أو تحديث الرسائل
    scrollToBottom();
});
