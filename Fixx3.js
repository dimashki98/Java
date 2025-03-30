$(document).ready(function () {
    const messagesContainer = $('#d2'); // تأكد أن هذا هو العنصر الذي يحتوي على الرسائل

    // وظيفة لضمان التمرير للأسفل عند إضافة رسائل جديدة
    function scrollToBottom() {
        messagesContainer.scrollTop(messagesContainer[0].scrollHeight);
    }

    // التمرير للأسفل عند تحميل الصفحة
    scrollToBottom();

    // إضافة رسالة جديدة (مثال على كيفية إضافة رسائل جديدة)
    $('#addMessageButton').on('click', function () {
        const userMessage = $('#messageInput').val(); // الحصول على النص من مدخل المستخدم
        if (userMessage) {
            const newMessage = $('<div class="uzr d-flex processed"></div>').text(userMessage);
            messagesContainer.append(newMessage); // إضافة الرسالة الجديدة إلى الحاوية
            $('#messageInput').val(''); // مسح المدخل بعد إرسال الرسالة
            scrollToBottom(); // التمرير للأسفل بعد إضافة الرسالة
        }
    });
});
