$(document).ready(function () {
    const messagesContainer = $('#d2');
    const scrollToBottomButton = $('<button class="scrollToBottom" style="display: none; position: fixed; bottom: 10px; right: 10px; z-index: 1000; padding: 10px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">⬇️ رسائل جديدة</button>').appendTo('body');
    
    const freezeButton = $('<button class="freezeButton" style="display: none; position: fixed; bottom: 50px; right: 10px; z-index: 1000; padding: 10px; background: #ff5733; color: white; border: none; border-radius: 5px; cursor: pointer;">تجميد</button>').appendTo('body');
    
    let userAtBottom = true;
    let isScrollLocked = false;
    let blockScriptActivated = false;

    // مراقبة التغييرات في DOM لإظهار وإخفاء زر "تجميد"
    const observer = new MutationObserver(function (mutationsList) {
        let newMessageAdded = false;
        
        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                $(mutation.addedNodes).each(function () {
                    if ($(this).hasClass('uzr')) { // تحقق من إضافة رسالة جديدة
                        newMessageAdded = true;
                    }
                });
            }
        });

        if (newMessageAdded) {
            scrollToBottomButton.fadeIn(); // إظهار زر رسائل جديدة
            freezeButton.fadeIn(); // إظهار زر تجميد عند إضافة رسائل جديدة
        } else {
            scrollToBottomButton.fadeOut(); // إخفاء زر رسائل جديدة
            freezeButton.fadeOut(); // إخفاء زر تجميد إذا لم تكن هناك رسائل جديدة
        }
    });

    // مراقبة التغييرات في الرسائل
    observer.observe(messagesContainer[0], { childList: true, subtree: true });

    // دالة لتعطيل السكربت
    function deactivateBlockScript() {
        blockScriptActivated = false;
        freezeButton.text("تجميد");

        // إزالة السكربت
        clearInterval(blockScriptInterval);
        Object.defineProperty(HTMLElement.prototype, 'scrollTop', originalScrollTop);
    }

    // دالة لتفعيل السكربت
    function activateBlockScript() {
        blockScriptActivated = true;
        freezeButton.text("إلغاء التجميد");

        // تخزين نسخة من `scrollTop` الأصلية
        originalScrollTop = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollTop');
        
        // تعطيل محاولات التمرير التلقائي
        Object.defineProperty(HTMLElement.prototype, 'scrollTop', {
            set: function(value) {
                if (!userAtBottom) {
                    console.warn("🚨 محاولة إجبار التمرير التلقائي تم منعها!");
                    return;
                }
                if (originalScrollTop && originalScrollTop.set) {
                    originalScrollTop.set.call(this, value);
                }
            }
        });

        // منع التمرير التلقائي باستخدام `setInterval`
        blockScriptInterval = setInterval(() => {
            const forcedScroll = messagesContainer.scrollTop() + messagesContainer.innerHeight() >= messagesContainer.prop('scrollHeight') - 5;
            if (forcedScroll && !userAtBottom) {
                messagesContainer.stop();
            }
        }, 100);
    }

    // حدث عند الضغط على زر "تجميد" أو "إلغاء التجميد"
    freezeButton.on('click', function () {
        if (!blockScriptActivated) {
            activateBlockScript(); // تفعيل السكربت عند الضغط على "تجميد"
        } else {
            deactivateBlockScript(); // إلغاء السكربت عند الضغط على "إلغاء التجميد"
        }
    });
});
