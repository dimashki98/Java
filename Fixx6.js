$(document).ready(function () {
    const messagesContainer = $('#d2');

    // وظيفة لضمان التمرير للأسفل عند إضافة رسائل جديدة
    function scrollToBottom() {
        messagesContainer.scrollTop(messagesContainer.prop('scrollHeight'));
    }

    // وظيفة لإضافة الرسالة الجديدة
    function addNewMessage(messageContent) {
        const newMessage = $('<div class="uzr d-flex mm mipaiogculee processed" style="border: 2px solid rgba(255, 255, 255, 0.3); margin: 0px; width: 100%; padding: 10px; opacity: 1; transform: translateY(0px) translateX(0px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; border-radius: 15px; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px; transform-origin: center center; color: rgb(128, 128, 128); background-color: #f0f0f0;">');
        newMessage.append('<div class="u-msg break" style="white-space: pre-wrap; word-wrap: break-word; white-space: pre-line;">' + messageContent + '</div>');
        messagesContainer.append(newMessage);
    }

    // مراقبة تغييرات الحاوية باستخدام setInterval
    let lastScrollHeight = messagesContainer.prop('scrollHeight');
    setInterval(function() {
        const currentScrollHeight = messagesContainer.prop('scrollHeight');
        if (currentScrollHeight !== lastScrollHeight) {
            scrollToBottom(); // التمرير للأسفل عند حدوث تغيير
            lastScrollHeight = currentScrollHeight; // تحديث قيمة آخر ارتفاع للمحتوى
        }
    }, 100); // مراقبة التغييرات كل 100 ميلي ثانية

    // مثال على إضافة رسالة جديدة عبر الزر
    $('#addMessageButton').on('click', function() {
        const userMessage = $('#messageInput').val(); // الحصول على النص من مدخل المستخدم
        if (userMessage) {
            addNewMessage(userMessage); // إضافة الرسالة المدخلة
            $('#messageInput').val(''); // مسح الحقل بعد إرسال الرسالة
        }
    });
});
