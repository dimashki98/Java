$(document).ready(function () {
    const messagesContainer = $('#d2');
    let userAtBottom = true;
    let isScrollLocked = false; // لمنع التمرير التلقائي

    // وظيفة لفحص إذا كان المستخدم في الأسفل
    function checkIfUserAtBottom() {
        const scrollPosition = messagesContainer.scrollTop() + messagesContainer.innerHeight();
        const scrollHeight = messagesContainer.prop('scrollHeight');
        return scrollPosition >= scrollHeight - 5;
    }

    // وظيفة للتجميد (منع التمرير التلقائي)
    function freezeScrolling() {
        console.log("تجميد التمرير...");

        let originalScrollTop = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollTop');
        Object.defineProperty(HTMLElement.prototype, 'scrollTop', {
            set: function(value) {
                console.warn("🚨 محاولة إجبار التمرير التلقائي تم منعها!");
                return; // منع التمرير التلقائي
            }
        });

        isScrollLocked = true; // قفل التمرير التلقائي
    }

    // وظيفة لإلغاء التجميد (إعادة التمرير للنظام والمستخدم)
    function unfreezeScrolling() {
        console.log("إلغاء التجميد...");

        // استعادة قدرة النظام على التمرير التلقائي
        let originalScrollTop = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollTop');
        Object.defineProperty(HTMLElement.prototype, 'scrollTop', {
            set: function(value) {
                originalScrollTop.set.call(this, value); // السماح بالتمرير التلقائي
            }
        });

        isScrollLocked = false; // فتح التمرير التلقائي
    }

    // زر التجميد
    const freezeButton = $('<button class="freezeButton" style="position: fixed; bottom: 10px; right: 10px; padding: 10px; background: #dc3545; color: white; border: none; border-radius: 5px; cursor: pointer;">🛑 تجميد</button>').appendTo('body');
    freezeButton.on('click', function () {
        freezeScrolling();  // تفعيل التجميد
    });

    // زر إلغاء التجميد
    const unfreezeButton = $('<button class="unfreezeButton" style="position: fixed; bottom: 50px; right: 10px; padding: 10px; background: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer;">❌ إلغاء التجميد</button>').appendTo('body');
    unfreezeButton.on('click', function () {
        unfreezeScrolling();  // إلغاء التجميد
    });

    // مراقبة التمرير داخل الحاوية
    messagesContainer.on('scroll', function () {
        userAtBottom = checkIfUserAtBottom();
    });

    // مراقبة التغييرات في DOM باستخدام MutationObserver
    const observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                $(mutation.addedNodes).each(function () {
                    if ($(this).hasClass('uzr')) { // تحقق من إضافة رسالة جديدة
                        if (!userAtBottom && !isScrollLocked) {
                            freezeScrolling(); // إذا لم يكن المستخدم في الأسفل، إيقاف التمرير التلقائي
                        }
                    }
                });
            }
        });
    });

    // مراقبة التغييرات في الحاوية الخاصة بالرسائل
    observer.observe(messagesContainer[0], { childList: true, subtree: true });

});
