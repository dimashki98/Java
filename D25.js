$(document).ready(function () {
    const messagesContainer = $('#d2');
    const freezeButton = $('<button class="freezeBtn" style="position: fixed; bottom: 50px; right: 10px; z-index: 1000; padding: 10px; background: #ff0000; color: white; border: none; border-radius: 5px; cursor: pointer;">تجميد</button>').appendTo('body');
    const unfreezeButton = $('<button class="unfreezeBtn" style="position: fixed; bottom: 100px; right: 10px; z-index: 1000; padding: 10px; background: #00ff00; color: white; border: none; border-radius: 5px; cursor: pointer; display: none;">إلغاء التجميد</button>').appendTo('body');
    
    let userAtBottom = true;
    let isScrollLocked = false; // لمنع التمرير التلقائي
    let isFrozen = false; // للتأكد من أن التجميد مفعل أو لا

    // وظيفة لفحص إذا كان المستخدم في الأسفل
    function checkIfUserAtBottom() {
        const scrollPosition = messagesContainer.scrollTop() + messagesContainer.innerHeight();
        const scrollHeight = messagesContainer.prop('scrollHeight');
        return scrollPosition >= scrollHeight - 5;
    }

    // وظيفة للتمرير للأسفل
    function scrollToBottom() {
        messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 300);
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

    // مراقبة التمرير داخل الحاوية
    messagesContainer.on('scroll', function () {
        userAtBottom = checkIfUserAtBottom();
    });

    // مراقبة التغييرات في DOM
    const observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                $(mutation.addedNodes).each(function () {
                    if ($(this).hasClass('uzr')) { // تحقق من إضافة رسالة جديدة
                        if (!userAtBottom && !isScrollLocked) {
                            stopAutoScroll(); // إذا لم يكن المستخدم في الأسفل، إيقاف التمرير التلقائي
                        }
                    }
                });
            }
        });
    });

    observer.observe(messagesContainer[0], { childList: true, subtree: true });

    // زر تجميد
    freezeButton.on('click', function () {
        isFrozen = true;
        isScrollLocked = true;  // تعطيل التمرير التلقائي
        freezeButton.hide(); // إخفاء زر التجميد
        unfreezeButton.show(); // إظهار زر إلغاء التجميد
    });

    // زر إلغاء التجميد
    unfreezeButton.on('click', function () {
        isFrozen = false;
        isScrollLocked = false;  // استئناف التمرير التلقائي
        unfreezeButton.hide(); // إخفاء زر إلغاء التجميد
        freezeButton.show(); // إظهار زر التجميد
        scrollToBottom(); // التمرير للأسفل عند إلغاء التجميد
    });

    // منع التمرير التلقائي عندما يكون التجميد مفعل
    setInterval(() => {
        if (isFrozen) {
            const forcedScroll = messagesContainer.scrollTop() + messagesContainer.innerHeight() >= messagesContainer.prop('scrollHeight') - 5;
            if (forcedScroll && !userAtBottom) {
                messagesContainer.stop();
            }
        }
    }, 100);

    // تعطيل محاولات إجبار التمرير التلقائي
    let originalScrollTop = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollTop');
    Object.defineProperty(HTMLElement.prototype, 'scrollTop', {
        set: function(value) {
            if (isFrozen && !userAtBottom) {
                console.warn("🚨 محاولة إجبار التمرير التلقائي تم منعها!");
                return;
            }
            if (originalScrollTop && originalScrollTop.set) {
                originalScrollTop.set.call(this, value);
            }
        }
    });
});
