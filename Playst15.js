$(document).ready(function () {
    const messagesContainer = $('#d2'); // الحاوية التي تحتوي على الرسائل
    const scrollToBottomButton = $('<button class="scrollToBottom" style="display: none; position: fixed; bottom: 10px; right: 10px; z-index: 1000; padding: 10px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">⬇️ رسائل جديدة</button>').appendTo('body');
    const freezeScrollButton = $('<button class="freezeScroll" style="display: none; position: fixed; bottom: 50px; right: 10px; z-index: 1000; padding: 10px; background: #ff4500; color: white; border: none; border-radius: 5px; cursor: pointer;">تجميد التمرير</button>').appendTo('body'); // زر تجميد التمرير

    let userAtBottom = true; // حالة المستخدم إذا كان في الأسفل أم لا
    let isScrollFrozen = false; // لتحديد إذا كان التمرير مجمدًا أم لا

    // التحقق مما إذا كان المستخدم في الأسفل
    function checkIfUserAtBottom() {
        const scrollPosition = messagesContainer.scrollTop() + messagesContainer.innerHeight();
        const scrollHeight = messagesContainer.prop('scrollHeight');
        return scrollPosition >= scrollHeight - 10; // هامش بسيط
    }

    // التمرير للأسفل
    function scrollToBottom() {
        messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 300);
        scrollToBottomButton.fadeOut();
    }

    // تحديث حالة المستخدم عند التمرير
    messagesContainer.on('scroll', function () {
        userAtBottom = checkIfUserAtBottom();
        
        if (userAtBottom) {
            scrollToBottomButton.fadeOut(); // إخفاء الزر إذا كان في الأسفل
        } else {
            if (!isScrollFrozen) {
                scrollToBottomButton.fadeIn(); // إظهار الزر إذا كان في الأعلى ولم يتم تجميد التمرير
            }
        }

        // إظهار زر تجميد التمرير إذا كنت في الجزء العلوي
        if (messagesContainer.scrollTop() > 10 && !isScrollFrozen) {
            freezeScrollButton.fadeIn(); // إظهار الزر عندما تبدأ بالتمرير للأعلى
        } else {
            freezeScrollButton.fadeOut(); // إخفاء الزر إذا كنت في الأسفل
        }
    });

    // عند الضغط على الزر، ينزل المستخدم إلى أحدث الرسائل
    scrollToBottomButton.on('click', function () {
        scrollToBottom();
    });

    // عند الضغط على زر "تجميد التمرير"
    freezeScrollButton.on('click', function () {
        isScrollFrozen = !isScrollFrozen; // عكس الحالة
        if (isScrollFrozen) {
            freezeScrollButton.text('إلغاء تجميد التمرير'); // تغيير النص
        } else {
            freezeScrollButton.text('تجميد التمرير'); // إعادة النص
        }
    });

    // مراقبة إضافة رسائل جديدة
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
            if (userAtBottom && !isScrollFrozen) {
                scrollToBottom(); // فقط إذا كان المستخدم في الأسفل ولم يتم تجميد التمرير
            } else if (!userAtBottom && !isScrollFrozen) {
                scrollToBottomButton.fadeIn(); // إظهار الزر إذا كان المستخدم في الأعلى ولم يتم تجميد التمرير
            }
        }
    });

    observer.observe(messagesContainer[0], { childList: true, subtree: true });
});
