$(document).ready(function () {
    const messagesContainer = $('#d2'); // تأكد أن هذا هو العنصر الذي يحتوي على الرسائل
    let isUserScrolling = false; // متغير للتحقق مما إذا كان المستخدم قد قام بالتمرير يدويًا

    // وظيفة لضمان التمرير للأسفل عند إضافة رسائل جديدة
    function scrollToBottom() {
        // إذا لم يكن المستخدم قد قام بالتمرير يدويًا، يتم التمرير للأسفل
        if (!isUserScrolling) {
            messagesContainer.scrollTop(messagesContainer[0].scrollHeight);
        }
    }

    // مراقبة التمرير اليدوي
    messagesContainer.on('scroll', function () {
        // التحقق إذا كان المستخدم قد قام بالتمرير للأعلى، وإذا كان كذلك
        if (messagesContainer.scrollTop() + messagesContainer.height() < messagesContainer[0].scrollHeight) {
            isUserScrolling = true; // المستخدم قام بالتمرير يدويًا
        } else {
            isUserScrolling = false; // المستخدم في أسفل الصفحة
        }
    });

    // التمرير للأسفل عند تحميل الصفحة
    scrollToBottom();

    // التمرير التلقائي للأسفل باستخدام setInterval
    setInterval(function () {
        scrollToBottom();
    }, 100); // يتم التمرير كل 100 مللي ثانية

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
