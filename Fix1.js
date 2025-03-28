$(document).ready(function () {
    const messagesContainer = $('#d2');

    // وظيفة لتحديث التمرير إلى الأسفل وضمان ظهور الرسالة بالكامل
    function scrollToBottom() {
        messagesContainer.scrollTop(messagesContainer.prop('scrollHeight'));
    }

    // وظيفة لإضافة أي رسالة جديدة
    function addNewMessage(messageContent) {
        const newMessage = $('<div class="uzr d-flex mm mipaiogculee processed" style="border: 2px solid rgba(255, 255, 255, 0.3); margin: 0px; width: 100%; padding: 10px; background: url(&quot;https://dd3sr.net/dro3/1740773503732.gif&quot;) center center / cover no-repeat; opacity: 1; transform: translateY(0px) translateX(0px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; border-radius: 15px; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px; transform-origin: center center; color: rgb(128, 128, 128);">');
        newMessage.append('<div class="u-msg break">' + messageContent + '</div>');
        messagesContainer.append(newMessage);
        scrollToBottom(); // التمرير للأسفل بعد إضافة الرسالة
    }

    // مراقبة إضافة الرسائل بشكل مستمر وضمان التمرير للأسفل
    messagesContainer.on('DOMNodeInserted', function () {
        scrollToBottom(); // التمرير للأسفل فور إضافة أي عنصر جديد
    });

    // مثال على إضافة رسالة جديدة عبر الزر
    $('#addMessageButton').on('click', function() {
        const userMessage = $('#messageInput').val(); // الحصول على النص من مدخل المستخدم
        if (userMessage) {
            addNewMessage(userMessage); // إضافة الرسالة المدخلة
        }
    });
});
