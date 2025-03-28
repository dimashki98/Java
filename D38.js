$(document).ready(function () { 
    const messagesContainer = $('#d2'); 
    const freezeButton = $('<button class="freezeBtn" style="position: fixed; bottom: 50px; right: 10px; z-index: 1000; padding: 10px; background: #ff0000; color: white; border: none; border-radius: 5px; cursor: pointer;">إلغاء التجميد</button>').appendTo('body'); 
    const unfreezeButton = $('<button class="unfreezeBtn" style="position: fixed; bottom: 100px; right: 10px; z-index: 1000; padding: 10px; background: #00ff00; color: white; border: none; border-radius: 5px; cursor: pointer; display: none;">تجميد</button>').appendTo('body');

    let isFrozen = false;

    // وظيفة لفحص إذا كان المستخدم في الأسفل
    function checkIfUserAtBottom() {
        const scrollPosition = messagesContainer.scrollTop() + messagesContainer.innerHeight();
        const scrollHeight = messagesContainer.prop('scrollHeight');
        return scrollPosition >= scrollHeight - 5;
    }

    // وظيفة للتمرير للأسفل بسلاسة
    function scrollToBottom() {
        if (!isFrozen) {
            messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 300);  
        }
    }

    // مراقبة التمرير بشكل مستمر
    function monitorScroll() {
        requestAnimationFrame(monitorScroll);
        
        const isAtBottom = checkIfUserAtBottom();
        if (isAtBottom) {
            freezeButton.hide();
        } else {
            freezeButton.show();
        }
    }
    monitorScroll();

    // عند الضغط على زر "إلغاء التجميد" (كان اسمه سابقًا "تجميد")
    freezeButton.on('click', function () {
        isFrozen = false;
        unfreezeButton.show();
        freezeButton.hide();
        messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 500);
    });

    // عند الضغط على زر "تجميد" (كان اسمه سابقًا "إلغاء التجميد")
    unfreezeButton.on('click', function () {
        isFrozen = true;
        unfreezeButton.hide();
        freezeButton.show();
    });
});
