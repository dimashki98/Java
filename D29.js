$(document).ready(function () {
    const messagesContainer = $('#d2');
    const freezeButton = $('<button class="freezeBtn" style="position: fixed; bottom: 50px; right: 10px; z-index: 1000; padding: 10px; background: #ff0000; color: white; border: none; border-radius: 5px; cursor: pointer;">تجميد</button>').appendTo('body');
    const unfreezeButton = $('<button class="unfreezeBtn" style="position: fixed; bottom: 100px; right: 10px; z-index: 1000; padding: 10px; background: #00ff00; color: white; border: none; border-radius: 5px; cursor: pointer; display: none;">إلغاء التجميد</button>').appendTo('body');
    
    let userAtBottom = true;
    let isFrozen = false;
    let isScrollLocked = false;

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

    // إيقاف التمرير التلقائي
    function stopAutoScroll() {
        isScrollLocked = true;
    }

    // استئناف التمرير التلقائي
    function resumeAutoScroll() {
        isScrollLocked = false;
        scrollToBottom();
    }

    // وظيفة لمراقبة التمرير بشكل مستمر باستخدام requestAnimationFrame
    function monitorScroll() {
        requestAnimationFrame(monitorScroll);
        
        const isAtBottom = checkIfUserAtBottom();
        if (isAtBottom) {
            freezeButton.hide();
        } else {
            freezeButton.show();
        }

        if (isScrollLocked) {
            return; // منع التمرير التلقائي عند التجميد
        }

        if (!isAtBottom) {
            scrollToBottom();
        }
    }

    // مراقبة التمرير باستخدام requestAnimationFrame
    monitorScroll();

    // حدث عند الضغط على زر التجميد
    freezeButton.on('click', function () {
        isFrozen = true;
        unfreezeButton.show();
        freezeButton.hide();
    });

    // حدث عند الضغط على زر إلغاء التجميد
    unfreezeButton.on('click', function () {
        isFrozen = false;
        unfreezeButton.hide();
        freezeButton.show();
        scrollToBottom();
    });
});
