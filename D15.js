$(document).ready(function () {
    const messagesContainer = $('#d2');

    // زر التجميد والإلغاء
    const freezeButton = $('<button class="freezeButton" style="display: none; position: fixed; bottom: 50px; right: 10px; z-index: 1000; padding: 10px; background: #dc3545; color: white; border: none; border-radius: 5px; cursor: pointer;">🛑 تجميد</button>').appendTo('body');

    let isFrozen = false;
    let blockScriptInterval = null;
    let originalScrollTop = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollTop');

    function freezeScrolling() {
        // **تعطيل التمرير التلقائي**
        blockScriptInterval = setInterval(() => {
            const forcedScroll = messagesContainer.scrollTop() + messagesContainer.innerHeight() >= messagesContainer.prop('scrollHeight') - 5;
            if (forcedScroll) {
                messagesContainer.stop();
            }
        }, 100);

        // **منع أي محاولات إجبار التمرير عبر `scrollTop`**
        Object.defineProperty(HTMLElement.prototype, 'scrollTop', {
            set: function (value) {
                console.warn("🚨 محاولة إجبار التمرير التلقائي تم منعها!");
                return;
            }
        });

        freezeButton.text('❌ إلغاء التجميد').css('background', '#28a745');
        isFrozen = true;
    }

    function unfreezeScrolling() {
        // **إلغاء التجميد وإعادة التمرير التلقائي**
        clearInterval(blockScriptInterval);
        Object.defineProperty(HTMLElement.prototype, 'scrollTop', originalScrollTop);

        freezeButton.text('🛑 تجميد').css('background', '#dc3545');
        isFrozen = false;
    }

    // زر التجميد / إلغاء التجميد
    freezeButton.on('click', function () {
        if (isFrozen) {
            unfreezeScrolling();
        } else {
            freezeScrolling();
        }
    });

    // إظهار زر التجميد فقط عند ظهور زر رسائل جديدة
    const observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
            $(mutation.addedNodes).each(function () {
                if ($(this).hasClass('uzr')) { // عند إضافة رسالة جديدة
                    freezeButton.fadeIn(); // إظهار زر التجميد
                }
            });
        });
    });

    observer.observe(messagesContainer[0], { childList: true, subtree: true });
});
