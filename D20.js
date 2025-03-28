$(document).ready(function () {
    const messagesContainer = $('#d2');

    // زر التجميد
    const freezeButton = $('<button class="freezeButton" style="display: none; position: fixed; bottom: 50px; right: 10px; z-index: 1000; padding: 10px; background: #dc3545; color: white; border: none; border-radius: 5px; cursor: pointer;">🛑 تجميد</button>').appendTo('body');

    // زر إلغاء التجميد
    const unfreezeButton = $('<button class="unfreezeButton" style="display: none; position: fixed; bottom: 100px; right: 10px; z-index: 1000; padding: 10px; background: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer;">❌ إلغاء التجميد</button>').appendTo('body');

    let isFrozen = false;
    let blockScriptInterval = null;
    let originalScrollTop = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollTop');
    let isAutoScrollEnabled = true;

    // وظيفة للتجميد
    function freezeScrolling() {
        if (isFrozen) return; // تجنب التكرار إذا كان التجميد مفعلًا بالفعل

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

        freezeButton.fadeOut();
        unfreezeButton.fadeIn();
        isFrozen = true;
        isAutoScrollEnabled = false;
    }

    // وظيفة لإلغاء التجميد
    function unfreezeScrolling() {
        if (!isFrozen) return; // تجنب التكرار إذا لم يكن التجميد مفعلًا

        // إعادة التمرير التلقائي
        clearInterval(blockScriptInterval);

        // استعادة وظيفة scrollTop الأصلية
        Object.defineProperty(HTMLElement.prototype, 'scrollTop', originalScrollTop);

        unfreezeButton.fadeOut();
        freezeButton.fadeIn();
        isFrozen = false;
        isAutoScrollEnabled = true;
    }

    // زر التجميد
    freezeButton.on('click', function () {
        freezeScrolling();
    });

    // زر إلغاء التجميد
    unfreezeButton.on('click', function () {
        unfreezeScrolling();
    });

    // إظهار زر التجميد فقط عند ظهور رسالة جديدة
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

    // تحقق إذا كان التجميد قد تم تفعيله أو إلغاءه
    console.log("زر التجميد مفعل: ", freezeButton.is(':visible'));
    console.log("زر إلغاء التجميد مفعل: ", unfreezeButton.is(':visible'));
});
