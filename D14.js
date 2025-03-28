$(document).ready(function () {
    const messagesContainer = $('#d2');

    // زر رسائل جديدة
    const scrollToBottomButton = $('<button class="scrollToBottom" style="display: none; position: fixed; bottom: 10px; right: 10px; z-index: 1000; padding: 10px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">⬇️ رسائل جديدة</button>').appendTo('body');

    // زر التجميد
    const freezeButton = $('<button class="freezeButton" style="display: none; position: fixed; bottom: 50px; right: 10px; z-index: 1000; padding: 10px; background: #dc3545; color: white; border: none; border-radius: 5px; cursor: pointer;">🛑 تجميد</button>').appendTo('body');

    let userAtBottom = true;
    let isScrollLocked = false;
    let isFrozen = false;
    let blockScriptInterval = null;

    function checkIfUserAtBottom() {
        const scrollPosition = messagesContainer.scrollTop() + messagesContainer.innerHeight();
        const scrollHeight = messagesContainer.prop('scrollHeight');
        return scrollPosition >= scrollHeight - 5;
    }

    function scrollToBottom() {
        if (!isFrozen) {
            messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 300);
        }
        scrollToBottomButton.fadeOut();
    }

    function stopAutoScroll() {
        isScrollLocked = true;
        scrollToBottomButton.fadeIn();
        freezeButton.fadeIn();
    }

    function resumeAutoScroll() {
        isScrollLocked = false;
        scrollToBottom();
        freezeButton.fadeOut();
    }

    messagesContainer.on('scroll', function () {
        userAtBottom = checkIfUserAtBottom();
        if (userAtBottom) {
            scrollToBottomButton.fadeOut();
            freezeButton.fadeOut();
        } else {
            scrollToBottomButton.fadeIn();
            freezeButton.fadeIn();
        }
    });

    scrollToBottomButton.on('click', function () {
        resumeAutoScroll();
    });

    // تعطيل وإعادة تمكين التمرير التلقائي
    freezeButton.on('click', function () {
        if (!isFrozen) {
            // **تفعيل التجميد**
            blockScriptInterval = setInterval(() => {
                messagesContainer.stop(); // إيقاف أي عمليات تمرير تلقائي
            }, 50);

            freezeButton.text('❌ إلغاء التجميد').css('background', '#28a745');
            isFrozen = true;
        } else {
            // **إلغاء التجميد**
            clearInterval(blockScriptInterval);
            scrollToBottom(); // التمرير للأسفل مرة واحدة بعد إلغاء التجميد
            freezeButton.text('🛑 تجميد').css('background', '#dc3545');
            isFrozen = false;
        }
    });

    const observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                $(mutation.addedNodes).each(function () {
                    if ($(this).hasClass('uzr')) {
                        if (!userAtBottom && !isScrollLocked && !isFrozen) {
                            stopAutoScroll();
                        }
                    }
                });
            }
        });
    });

    observer.observe(messagesContainer[0], { childList: true, subtree: true });
});
