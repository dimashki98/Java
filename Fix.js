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

    // مراقبة التمرير لرؤية إذا كان المستخدم قد وصل للأسفل أم لا
    messagesContainer.on('scroll', function () {
        const scrollPosition = messagesContainer.scrollTop();
        const containerHeight = messagesContainer.innerHeight();
        const scrollHeight = messagesContainer.prop('scrollHeight');
        
        // إذا كان المستخدم في الأسفل، لا يتم تعديل التمرير
        if (scrollPosition + containerHeight >= scrollHeight - 5) {
            scrollToBottom();
        }
    });

    // إضافة الرسالة عند حدوث حدث معين، مثل الضغط على زر أو استلام رسالة جديدة
    // هنا مثال على إضافة رسالة بعد 1 ثانية (يمكنك استبداله بإضافة الرسائل ديناميكيًا عند الحاجة)
    setTimeout(function() {
        addNewMessage("أي رسالة جديدة هنا");
    }, 1000); // إضافة رسالة بعد 1 ثانية

    // مثال آخر، إضافة رسالة عند الضغط على زر
    $('#addMessageButton').on('click', function() {
        const userMessage = $('#messageInput').val(); // الحصول على النص من مدخل المستخدم
        if (userMessage) {
            addNewMessage(userMessage); // إضافة الرسالة المدخلة
        }
    });
});
