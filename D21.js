$(document).ready(function () {
    const messagesContainer = $('#d2');
    // زر التجميد
    const freezeButton = $('<button class="freezeButton" style="display: none; position: fixed; bottom: 50px; right: 10px; z-index: 1000; padding: 10px; background: #dc3545; color: white; border: none; border-radius: 5px; cursor: pointer;">🛑 تجميد</button>').appendTo('body');

    // زر إلغاء التجميد
    const unfreezeButton = $('<button class="unfreezeButton" style="display: none; position: fixed; bottom: 100px; right: 10px; z-index: 1000; padding: 10px; background: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer;">❌ إلغاء التجميد</button>').appendTo('body');

    let isFrozen = false;

    // وظيفة للتجميد
    function freezeScrolling() {
        if (isFrozen) return; // تجنب التكرار إذا كان التجميد مفعلًا بالفعل

        console.log("تجميد التمرير...");

        // تعطيل التمرير عن طريق overflow: hidden
        messagesContainer.css('overflow', 'hidden');
        messagesContainer.css('pointer-events', 'none'); // تعطيل أي تفاعل مع الرسائل أثناء التجميد

        freezeButton.fadeOut();
        unfreezeButton.fadeIn();
        isFrozen = true;
    }

    // وظيفة لإلغاء التجميد
    function unfreezeScrolling() {
        if (!isFrozen) return; // تجنب التكرار إذا لم يكن التجميد مفعلًا

        console.log("إلغاء التجميد...");

        // إعادة تمكين التمرير عن طريق overflow: auto
        messagesContainer.css('overflow', 'auto');
        messagesContainer.css('pointer-events', 'auto'); // تمكين التفاعل مع الرسائل

        unfreezeButton.fadeOut();
        freezeButton.fadeIn();
        isFrozen = false;
    }

    // زر التجميد
    freezeButton.on('click', function () {
        console.log("تم الضغط على زر التجميد");
        freezeScrolling();
    });

    // زر إلغاء التجميد
    unfreezeButton.on('click', function () {
        console.log("تم الضغط على زر إلغاء التجميد");
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
