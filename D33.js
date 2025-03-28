$(document).ready(function () {
    const messagesContainer = $('#d2');
    const scrollDownButton = $('<button class="scrollDownBtn" style="position: fixed; bottom: 50px; right: 10px; z-index: 1000; padding: 10px; background: #00bfff; color: white; border: none; border-radius: 5px; cursor: pointer; display: none;">↓</button>').appendTo('body');
    
    let userAtBottom = true;
    
    // وظيفة لفحص إذا كان المستخدم في الأسفل
    function checkIfUserAtBottom() {
        const scrollPosition = messagesContainer.scrollTop() + messagesContainer.innerHeight();
        const scrollHeight = messagesContainer.prop('scrollHeight');
        return scrollPosition >= scrollHeight - 5;
    }

    // وظيفة للتمرير للأسفل ببطء
    function scrollToBottomSlowly() {
        messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 1000); // حركة بطيئة
    }

    // وظيفة للتمرير للأسفل بسرعة (عند الضغط على السهم)
    function scrollToBottomQuickly() {
        messagesContainer.stop().scrollTop(messagesContainer.prop('scrollHeight')); // التمرير الفوري
    }

    // وظيفة لمراقبة التمرير
    function monitorScroll() {
        const isAtBottom = checkIfUserAtBottom();

        if (isAtBottom) {
            scrollDownButton.hide();  // إخفاء الزر عند الأسفل
        } else {
            scrollDownButton.show();  // إظهار الزر عند التمرير للأعلى
        }
    }

    // مراقبة التمرير
    monitorScroll();

    // عند الضغط على زر التمرير للأسفل (بسرعة)
    scrollDownButton.on('click', function () {
        scrollToBottomQuickly(); // التمرير للأسفل بسرعة عند الضغط على الزر
    });

    // حدث عند التمرير للأسفل
    messagesContainer.on('scroll', function () {
        monitorScroll();  // تحديث حالة الزر عند التمرير
    });

    // عندما يصل المستخدم للأسفل، لا يحتاج إلى حركة بطيئة إضافية
    if (checkIfUserAtBottom()) {
        scrollDownButton.hide();
    }

    // إذا لم يكن في الأسفل، نضيف الحركة البطيئة عند التمرير للأسفل
    messagesContainer.on('mouseenter', function () {
        if (!checkIfUserAtBottom()) {
            scrollToBottomSlowly(); // التمرير ببطء فقط إذا لم يكن المستخدم في الأسفل
        }
    });
});
