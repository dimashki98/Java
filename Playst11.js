$(document).ready(function () {
    const messagesContainer = $('#d2');

    if (messagesContainer.length === 0) {
        console.error("❌ العنصر #d2 غير موجود!");
        return;
    }

    // زر التنقل عند وجود رسائل جديدة
    const scrollToBottomButton = $('<button class="scrollToBottom" style="display: none; position: fixed; bottom: 10px; right: 10px; z-index: 1000; padding: 10px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">⬇️ رسائل جديدة</button>').appendTo('body');

    let userAtBottom = true;

    function checkIfUserAtBottom() {
        const scrollPosition = messagesContainer.scrollTop() + messagesContainer.innerHeight();
        const scrollHeight = messagesContainer.prop('scrollHeight');
        return scrollPosition >= scrollHeight - 5;
    }

    function scrollToBottom() {
        messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 300);
        scrollToBottomButton.fadeOut();
    }

    messagesContainer.on('scroll', function () {
        userAtBottom = checkIfUserAtBottom();
        if (userAtBottom) {
            scrollToBottomButton.fadeOut();
        }
    });

    scrollToBottomButton.on('click', function () {
        scrollToBottom();
    });

    const observer = new MutationObserver(function (mutationsList) {
        let newMessageAdded = false;

        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                $(mutation.addedNodes).each(function () {
                    if ($(this).hasClass('uzr')) {
                        newMessageAdded = true;
                    }
                });
            }
        });

        if (newMessageAdded) {
            if (userAtBottom) {
                scrollToBottom();
            } else {
                scrollToBottomButton.fadeIn();
            }
        }
    });

    observer.observe(messagesContainer[0], { childList: true, subtree: true });
});
