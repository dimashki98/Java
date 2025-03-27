$(document).ready(function () {
    const messagesContainer = $('#d2');
    const scrollToBottomButton = $('<button class="scrollToBottom" style="display: none; position: fixed; bottom: 10px; right: 10px; z-index: 1000; padding: 10px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">⬇️ رسائل جديدة</button>').appendTo('body');
    
    let userAtBottom = true;
    let isScrollLocked = false;
    let blockScriptActivated = false; // لتتبع حالة السكربت

    // وظيفة لفحص إذا كان المستخدم في الأسفل
    function checkIfUserAtBottom() {
        const scrollPosition = messagesContainer.scrollTop() + messagesContainer.innerHeight();
        const scrollHeight = messagesContainer.prop('scrollHeight');
        return scrollPosition >= scrollHeight - 5;
    }

    // وظيفة للتمرير للأسفل
    function scrollToBottom() {
        messagesContainer.stop().animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 300);
        scrollToBottomButton.fadeOut();
    }

    // إيقاف التمرير التلقائي
    function stopAutoScroll() {
        isScrollLocked = true;
        scrollToBottomButton.fadeIn();
    }

    // استئناف التمرير التلقائي
    function resumeAutoScroll() {
        isScrollLocked = false;
        scrollToBottom();
    }

    // مراقبة التمرير داخل الحاوية
    messagesContainer.on('scroll', function () {
        userAtBottom = checkIfUserAtBottom();
        if (userAtBottom) {
            scrollToBottomButton.fadeOut();
        } else {
            scrollToBottomButton.fadeIn();
        }
    });

    // حدث عند الضغط على زر التمرير للأسفل
    scrollToBottomButton.on('click', function () {
        resumeAutoScroll();
    });

    // مراقبة التغييرات في DOM
    const observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                $(mutation.addedNodes).each(function () {
                    if ($(this).hasClass('uzr')) {
                        if (!userAtBottom && !isScrollLocked) {
                            stopAutoScroll();
                        }
                    }
                });
            }
        });
    });

    observer.observe(messagesContainer[0], { childList: true, subtree: true });

    // إضافة زر التجميد
    const freezeButton = $('<button class="freezeButton" style="display: none; position: fixed; bottom: 50px; right: 10px; z-index: 1000; padding: 10px; background: #ff5733; color: white; border: none; border-radius: 5px; cursor: pointer;">تجميد</button>').appendTo('body');
    
    // مراقبة ظهور رسائل جديدة
    const newMessagesObserver = new MutationObserver(function (mutationsList) {
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
            freezeButton.fadeIn(); // إظهار الزر عند إضافة رسائل جديدة
        } else {
            freezeButton.fadeOut(); // إخفاء الزر إذا لم تكن هناك رسائل جديدة
        }
    });

    // مراقبة التغييرات في الرسائل
    newMessagesObserver.observe(messagesContainer[0], { childList: true, subtree: true });

    // دالة لتعطيل السكربت عند إلغاء التجميد
    function deactivateBlockScript() {
        blockScriptActivated = false;
        freezeButton.text("تجميد");
        // إذا كان السكربت يحتوي على دالة لتوقفه، يمكن استدعاؤها هنا لتعطيله.
        // ولكن إذا كان السكربت لا يحتوي على هذه الدالة، يمكن أن نحتاج لحلول إضافية مثل حذف السكربت
        $('script[src="https://cdn.jsdelivr.net/gh/dimashki98/Java@refs/heads/main/Block.js"]').remove();
    }

    // حدث عند الضغط على زر التجميد
    freezeButton.on('click', function () {
        if (!blockScriptActivated) {
            $.getScript("https://cdn.jsdelivr.net/gh/dimashki98/Java@refs/heads/main/Block.js", function() {
                console.log("تم تحميل السكربت بنجاح");
                blockScriptActivated = true;
                freezeButton.text("إلغاء التجميد"); // تغيير نص الزر
            }).fail(function() {
                console.error("فشل تحميل السكربت");
            });
        } else {
            deactivateBlockScript(); // إلغاء السكربت عند الضغط على "إلغاء التجميد"
        }
    });
});
