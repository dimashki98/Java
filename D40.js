$(document).ready(function () {
    const messagesContainer = $('#d2');

    // زر التجميد وإلغاء التجميد
    const freezeButton = $('<button class="freezeBtn" style="position: fixed; bottom: 100px; right: 10px; z-index: 1000; padding: 10px; background: red; color: white; border: none; border-radius: 5px; cursor: pointer;">تجميد</button>')
        .appendTo('body');

    // زر النزول السريع
    const scrollButton = $('<button class="scrollBtn" style="position: fixed; bottom: 50px; right: 10px; z-index: 1000; padding: 10px; background: blue; color: white; border: none; border-radius: 5px; cursor: pointer; display: none;">⬇️</button>')
        .appendTo('body');

    let isFrozen = false;
    let userAtBottom = true;

    // التحقق مما إذا كان المستخدم في الأسفل
    function checkIfUserAtBottom() {
        const scrollPosition = messagesContainer.scrollTop() + messagesContainer.innerHeight();
        const scrollHeight = messagesContainer.prop('scrollHeight');
        return scrollPosition >= scrollHeight - 5;
    }

    // التمرير للأسفل ببطء شديد عند وصول رسائل جديدة
    function slowScrollToBottom() {
        if (!isFrozen) {
            messagesContainer.stop().animate(
                { scrollTop: messagesContainer.prop('scrollHeight') }, 
                5000  // حركة بطيئة جدًا (5 ثوانٍ)
            );
        }
    }

    // التمرير الفوري عند الضغط على زر السهم
    scrollButton.on('click', function () {
        messagesContainer.stop().animate(
            { scrollTop: messagesContainer.prop('scrollHeight') }, 
            300  // التمرير السريع خلال 0.3 ثانية
        );
    });

    // مراقبة التمرير وإظهار زر السهم عند التوقف عن النزول
    messagesContainer.on('scroll', function () {
        userAtBottom = checkIfUserAtBottom();

        if (userAtBottom) {
            scrollButton.hide();
        } else {
            scrollButton.show();
        }
    });

    // زر التجميد / إلغاء التجميد
    freezeButton.on('click', function () {
        isFrozen = !isFrozen; // تبديل الحالة بين التجميد وعدم التجميد
        freezeButton.text(isFrozen ? 'إلغاء التجميد' : 'تجميد');
    });

    // محاكاة استقبال رسائل جديدة مع التمرير البطيء
    setInterval(() => {
        if (userAtBottom && !isFrozen) {
            slowScrollToBottom();
        }
    }, 2000); // محاكاة وصول الرسائل كل ثانيتين
});
