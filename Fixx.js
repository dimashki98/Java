$(document).ready(function () {
    const messagesContainer = $('#d2');

    // وظيفة لضمان التمرير للأسفل عند إضافة رسائل جديدة
    function scrollToBottom() {
        messagesContainer.scrollTop(messagesContainer[0].scrollHeight);
    }

    // مراقبة الحاوية كل 500 مللي ثانية لمراقبة إضافة رسائل جديدة
    let lastHeight = messagesContainer[0].scrollHeight;  // حفظ الطول الحالي

    setInterval(function () {
        const currentHeight = messagesContainer[0].scrollHeight;
        if (currentHeight > lastHeight) {  // إذا تم إضافة رسالة جديدة
            scrollToBottom();  // التمرير للأسفل
            lastHeight = currentHeight;  // تحديث الطول
        }
    }, 500);  // تحقق كل 500 مللي ثانية
});
