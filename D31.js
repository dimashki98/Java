$(document).ready(function () {
    const messagesContainer = $('#d2');
    let userAtBottom = true;
    let isFrozen = false;
    
    // وظيفة لفحص إذا كان المستخدم في الأسفل
    function checkIfUserAtBottom() {
        const scrollPosition = messagesContainer.scrollTop() + messagesContainer.innerHeight();
        const scrollHeight = messagesContainer.prop('scrollHeight');
        return scrollPosition >= scrollHeight - 5;
    }

    // وظيفة للتمرير للأسفل
    function scrollToBottom() {
        if (!isFrozen) {
            messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 300);
        }
    }

    // مراقبة التمرير داخل الحاوية
    function monitorScroll() {
        const isAtBottom = checkIfUserAtBottom();
        if (isAtBottom) {
            // إذا كان في الأسفل، لا نعرض زر التجميد
            freezeButton.hide();
        } else {
            // إذا كان ليس في الأسفل، نعرض زر التجميد
            freezeButton.show();
        }

        if (!isFrozen && !isAtBottom) {
            // إذا كان التجميد غير مفعل وكان المستخدم ليس في الأسفل، نقوم بالتمرير للأسفل
            scrollToBottom();
        }
    }

    // مراقبة التمرير باستخدام setInterval
    setInterval(monitorScroll, 100);

    // **❌ تعطيل أي محاولات إجبار التمرير عبر `scrollTop`**
    let originalScrollTop = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollTop');
    Object.defineProperty(HTMLElement.prototype, 'scrollTop', {
        set: function(value) {
            if (!userAtBottom && !isFrozen) {
                console.warn("🚨 محاولة إجبار التمرير التلقائي تم منعها!");
                return; // منع التمرير التلقائي إذا لم يكن في الأسفل أو إذا كان التجميد مفعلًا
            }
            if (originalScrollTop && originalScrollTop.set) {
                originalScrollTop.set.call(this, value); // إذا كان في الأسفل أو إذا تم إلغاء التجميد، يتم السماح بالتمرير
            }
        }
    });

    // زر التجميد
    const freezeButton = $('<button class="freezeBtn" style="position: fixed; bottom: 50px; right: 10px; z-index: 1000; padding: 10px; background: #ff0000; color: white; border: none; border-radius: 5px; cursor: pointer;">تجميد</button>').appendTo('body');

    // زر إلغاء التجميد
    const unfreezeButton = $('<button class="unfreezeBtn" style="position: fixed; bottom: 100px; right: 10px; z-index: 1000; padding: 10px; background: #00ff00; color: white; border: none; border-radius: 5px; cursor: pointer; display: none;">إلغاء التجميد</button>').appendTo('body');
    
    // حدث عند الضغط على زر التجميد
    freezeButton.on('click', function () {
        isFrozen = true; // تفعيل التجميد
        freezeButton.hide();
        unfreezeButton.show(); // إظهار زر إلغاء التجميد
    });

    // حدث عند الضغط على زر إلغاء التجميد
    unfreezeButton.on('click', function () {
        isFrozen = false; // إلغاء التجميد
        unfreezeButton.hide();
        freezeButton.show(); // إظهار زر التجميد
        scrollToBottom(); // العودة للتمرير التلقائي
    });
});
