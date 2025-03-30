$(document).ready(function () {
    const messagesContainer = $('#d2');

    // وظيفة لضمان التمرير للأسفل عند إضافة رسائل جديدة
    function scrollToBottom() {
        messagesContainer.scrollTop(messagesContainer.prop('scrollHeight'));
    }

    // وظيفة لإضافة الرسالة الجديدة
    function addNewMessage(messageContent) {
        const newMessage = $('<div class="uzr d-flex mm mipaiogculee processed" style="border: 2px solid rgba(255, 255, 255, 0.3); margin: 0px; width: 100%; padding: 10px; opacity: 1; transform: translateY(0px) translateX(0px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; border-radius: 15px; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px; transform-origin: center center; color: rgb(128, 128, 128); background-color: #f0f0f0; overflow-wrap: break-word; word-wrap: break-word;">');
        newMessage.append('<div class="u-msg break" style="white-space: pre-wrap; word-wrap: break-word;">' + messageContent + '</div>');
        messagesContainer.append(newMessage);
    }

    // مراقبة تغييرات DOM داخل #d2 باستخدام MutationObserver
    const observer = new MutationObserver(function (mutationsList) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                scrollToBottom(); // التمرير للأسفل فور إضافة أي عنصر جديد
            }
        }
    });

    // إعداد مراقبة التغييرات داخل الحاوية
    observer.observe(messagesContainer[0], {
        childList: true, // مراقبة إضافة عناصر جديدة
        subtree: true // مراقبة كافة التغييرات داخل الحاوية
    });

    // مثال على إضافة رسالة جديدة عبر الزر
    $('#addMessageButton').on('click', function() {
        const userMessage = $('#messageInput').val(); // الحصول على النص من مدخل المستخدم
        if (userMessage) {
            addNewMessage(userMessage); // إضافة الرسالة المدخلة
            $('#messageInput').val(''); // مسح الحقل بعد إرسال الرسالة
        }
    });
});
