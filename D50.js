$(document).ready(function () {
    const messagesContainer = $('#d2');
    const freezeButton = $('<button class="freezeBtn" style="position: fixed; bottom: 50px; right: 10px; z-index: 1000; padding: 10px; background: #ff0000; color: white; border: none; border-radius: 5px; cursor: pointer;">تجميد</button>').appendTo('body');
    const unfreezeButton = $('<button class="unfreezeBtn" style="position: fixed; bottom: 100px; right: 10px; z-index: 1000; padding: 10px; background: #00ff00; color: white; border: none; border-radius: 5px; cursor: pointer; display: none;">إلغاء التجميد</button>').appendTo('body');

    let isFrozen = false;

    // وظيفة لفحص إذا كان المستخدم في الأسفل
    function checkIfUserAtBottom() {
        const scrollPosition = messagesContainer.scrollTop() + messagesContainer.innerHeight();
        const scrollHeight = messagesContainer.prop('scrollHeight');
        return scrollPosition >= scrollHeight - 5;
    }

    // وظيفة لإضافة الحاجز
    function addFreezeBarrier() {
        const barrier = $('<div class="freezeBarrier" style="position: absolute; top: 0; left: 0; right: 0; height: 1px; background: transparent; pointer-events: none;"></div>');
        messagesContainer.append(barrier);
    }

    // وظيفة لإزالة الحاجز
    function removeFreezeBarrier() {
        $('.freezeBarrier').remove();
    }

    // حدث عند الضغط على زر التجميد
    freezeButton.on('click', function () {
        isFrozen = true;
        addFreezeBarrier(); // إضافة الحاجز
        unfreezeButton.show();
        freezeButton.hide();
    });

    // حدث عند الضغط على زر إلغاء التجميد
    unfreezeButton.on('click', function () {
        isFrozen = false;
        removeFreezeBarrier(); // إزالة الحاجز
        unfreezeButton.hide();
        freezeButton.show();
        messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 500); // العودة للأسفل بعد الإلغاء
    });

    // مراقبة التمرير
    messagesContainer.on('scroll', function () {
        if (isFrozen) {
            // إذا كان التجميد مفعلًا، يتم منع التمرير للأسفل
            messagesContainer.scrollTop(messagesContainer.prop('scrollHeight'));
        }
    });
});
