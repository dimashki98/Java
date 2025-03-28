$(document).ready(function () {
    const messagesContainer = $('#d2');

    // زر التجميد والإلغاء
    const freezeButton = $('<button class="freezeButton" style="display: none; position: fixed; bottom: 50px; right: 10px; z-index: 1000; padding: 10px; background: #dc3545; color: white; border: none; border-radius: 5px; cursor: pointer;">🛑 تجميد</button>').appendTo('body');

    let isFrozen = false;
    let blockScriptInterval = null;
    let originalScrollTop = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollTop');
    let isAutoScrollEnabled = true;

    // وظيفة للتجميد
    function freezeScrolling() {
        // تعطيل التمرير التلقائي
        blockScriptInterval = setInterval(() => {
            const forcedScroll = messagesContainer.scrollTop() + messagesContainer.innerHeight() >= messagesContainer.prop('scrollHeight') - 5;
            if (forcedScroll && isAutoScrollEnabled) {
                messagesContainer.stop(); // إيقاف التمرير
            }
        }, 100);

        // تعطيل محاولات إجبار التمرير التلقائي عبر scrollTop
        Object.defineProperty(HTMLElement.prototype, 'scrollTop', {
            set: function (value) {
                if (isAutoScrollEnabled) {
                    console.warn("🚨 محاولة إجبار التمرير التلقائي تم منعها!");
                    return;
                }
                if (originalScrollTop && originalScrollTop.set) {
                    originalScrollTop.set.call(this, value);
                }
            }
        });

        freezeButton.text('❌ إلغاء التجميد').css('background', '#28a745');
        isFrozen = true;
        isAutoScrollEnabled = false;
    }

    // وظيفة لإلغاء التجميد
    function unfreezeScrolling() {
        // إعادة التمرير التلقائي
        clearInterval(blockScriptInterval);

        // استعادة وظيفة scrollTop الأصلية
        Object.defineProperty(HTMLElement.prototype, 'scrollTop', originalScrollTop);

        freezeButton.text('🛑 تجميد').css('background', '#dc3545');
        isFrozen = false;
        isAutoScrollEnabled = true;
    }

    // زر التجميد / إلغاء التجميد
    freezeButton.on('click', function () {
        if (isFrozen) {
            unfreezeScrolling();
        } else {
            freezeScrolling();
        }
    });

    // إظهار زر التجميد فقط عند ظهور زر "رسائل جديدة"
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
