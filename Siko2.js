$(document).ready(function () {
    const messagesContainer = $('#d2');
    const freezeButton = $('<button class="freezeBtn" style="position: fixed; bottom: 50px; right: 10px; z-index: 1000; padding: 10px; background: #ff0000; color: white; border: none; border-radius: 5px; cursor: pointer;">تجميد</button>').appendTo('body');
    const unfreezeButton = $('<button class="unfreezeBtn" style="position: fixed; bottom: 100px; right: 10px; z-index: 1000; padding: 10px; background: #00ff00; color: white; border: none; border-radius: 5px; cursor: pointer; display: none;">إلغاء التجميد</button>').appendTo('body');

    let isFrozen = false;
    let freezePosition = null; // موقع التجميد

    // وظيفة لفحص إذا كان المستخدم قد سحب للأعلى
    function checkIfUserNotAtBottom() {
        const scrollPosition = messagesContainer.scrollTop() + messagesContainer.innerHeight();
        const scrollHeight = messagesContainer.prop('scrollHeight');
        return scrollPosition < scrollHeight - 5;
    }

    // حدث عند الضغط على زر التجميد
    freezeButton.on('click', function () {
        isFrozen = true;
        freezePosition = messagesContainer.scrollTop(); // تخزين مكان التجميد الحالي
        unfreezeButton.show();
        freezeButton.hide();
    });

    // حدث عند الضغط على زر إلغاء التجميد
    unfreezeButton.on('click', function () {
        isFrozen = false;
        unfreezeButton.hide();
        freezeButton.show();
        messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 500); // العودة للأسفل بعد إلغاء التجميد
    });

    // مراقبة التمرير
    messagesContainer.on('scroll', function () {
        if (isFrozen) {
            // إذا حاول المستخدم التمرير للأسفل، نعيده إلى مكان التجميد
            if (messagesContainer.scrollTop() > freezePosition) {
                messagesContainer.scrollTop(freezePosition);
            }
        }

        // إظهار أو إخفاء زر التجميد بناءً على مكان التمرير
        if (checkIfUserNotAtBottom()) {
            freezeButton.show(); // إظهار زر التجميد إذا تم سحب الصفحة للأعلى
        } else {
            freezeButton.hide(); // إخفاء زر التجميد إذا كنت في الأسفل
        }
    });

    // إخفاء زر التجميد عند تحميل الصفحة إذا كنت في الأسفل
    if (!checkIfUserNotAtBottom()) {
        freezeButton.hide();
    }
});
