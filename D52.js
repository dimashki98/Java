$(document).ready(function () {
    const messagesContainer = $('#d2');
    const freezeButton = $('<button class="freezeBtn" style="position: fixed; bottom: 50px; right: 10px; z-index: 1000; padding: 10px; background: #ff0000; color: white; border: none; border-radius: 5px; cursor: pointer;">تجميد</button>').appendTo('body');
    const unfreezeButton = $('<button class="unfreezeBtn" style="position: fixed; bottom: 100px; right: 10px; z-index: 1000; padding: 10px; background: #00ff00; color: white; border: none; border-radius: 5px; cursor: pointer; display: none;">إلغاء التجميد</button>').appendTo('body');

    let isFrozen = false;
    let freezePosition = null; // مكان التجميد
    let isUserAtBottom = true; // التحقق إذا كان المستخدم في أسفل المحادثة
    let isUserInteracting = false; // التحقق إذا كان المستخدم يتفاعل يدويًا

    // وظيفة لفحص إذا كان المستخدم في أسفل المحتوى
    function checkIfUserAtBottom() {
        const scrollPosition = messagesContainer.scrollTop() + messagesContainer.innerHeight();
        const scrollHeight = messagesContainer.prop('scrollHeight');
        return scrollPosition >= scrollHeight - 5;
    }

    // وظيفة لتجميد التمرير في مكان معين
    function freezeAtPosition(position) {
        const barrier = $('<div class="freezeBarrier" style="position: absolute; top: ' + position + 'px; left: 0; right: 0; height: 1px; background: transparent; pointer-events: none;"></div>');
        messagesContainer.append(barrier);
    }

    // وظيفة لإزالة الحاجز
    function removeFreezeBarrier() {
        $('.freezeBarrier').remove();
    }

    // حدث عند الضغط على زر التجميد
    freezeButton.on('click', function () {
        isFrozen = true;
        freezePosition = messagesContainer.scrollTop(); // تخزين مكان التجميد الحالي
        freezeAtPosition(freezePosition); // إضافة الحاجز عند المكان المحدد
        unfreezeButton.show();
        freezeButton.hide();
    });

    // حدث عند الضغط على زر إلغاء التجميد
    unfreezeButton.on('click', function () {
        isFrozen = false;
        removeFreezeBarrier(); // إزالة الحاجز
        unfreezeButton.hide();
        freezeButton.show();
        messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 500); // العودة للأسفل بعد إلغاء التجميد
    });

    // مراقبة التمرير
    messagesContainer.on('scroll', function () {
        // التحقق إذا كان المستخدم قد تفاعل يدويًا
        if (checkIfUserAtBottom()) {
            isUserAtBottom = true;
            isUserInteracting = false; // عندما يكون في الأسفل نمنع التفاعل اليدوي
        } else {
            isUserAtBottom = false;
        }

        if (isFrozen && !isUserInteracting) {
            // إذا كان التجميد مفعلًا ولم يتفاعل المستخدم، إبقاء التمرير ثابتًا في المكان المحدد
            messagesContainer.scrollTop(freezePosition);
        }

        // إذا كان المستخدم في الأسفل والتمرير لا يزال مفعلًا، لا نمنع التمرير التلقائي
        if (isUserAtBottom && !isFrozen) {
            // يسمح بالتنقل للأسفل عند الوصول لأسفل الصفحة بشكل طبيعي
            messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 500);
        }
    });

    // إذا بدأ المستخدم في التمرير يدويًا، يمكنه التفاعل
    messagesContainer.on('mousedown', function () {
        isUserInteracting = true;
    });
});
