$(document).ready(function () {
    const messagesContainer = $('#d2'); // تأكد أن هذا هو العنصر الذي يحتوي على الرسائل

    // وظيفة لضمان التمرير للأسفل عند إضافة رسائل جديدة
    function scrollToBottom() {
        messagesContainer.scrollTop(messagesContainer[0].scrollHeight);
    }

    // التمرير للأسفل عند تحميل الصفحة
    scrollToBottom();

    // التمرير التلقائي للأسفل باستخدام setInterval
    setInterval(function () {
        scrollToBottom();
    }, 100); // يتم التمرير كل 100 مللي ثانية
});
