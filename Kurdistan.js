$(document).ready(function() {
    // عند الضغط على الزر الخاص بالخروج
    $('button[onclick*="SEND_EVENT_EMIT(\'SEND_EVENT_EMIT_LEAVED_ROOM\'"] ').on('click', function() {
        // إلغاء تأثير الكود عند الضغط على الزر
        $('.flex-grow-1.break.light').css('background-image', 'none');
        $('#chats').css('background-image', 'none');  // إزالة الخلفية من #chats أيضًا
    });

    // تفعيل الكود الخاص بإضافة الخلفية عند الضغط على الزر "yjjwy0f4n7"
    $(document).on('click', '[onclick^="Send_Rjoin(\'yjjwy0f4n7\')"]', function() {
        $('.flex-grow-1.break.light').css({
            'background-image': 'url(https://dd3sr.net/dro3/1741634126670.jpg)',
            'background-size': '100% 100%', // تمديد الصورة لتملأ العنصر بالكامل
            'background-position': 'center',
            'background-repeat': 'no-repeat',
            'height': '100%',
            'width': '100%'
        });

        // تعيين الخلفية للعنصر #chats أيضًا
        $('#chats').css({
            'background-image': 'url(https://dd3sr.net/dro3/1741634124118.jpg)',
            'background-size': '100% 100%', // تمديد الصورة لتملأ العنصر بالكامل
            'background-position': 'center',
            'background-repeat': 'no-repeat',
            'height': '100%',
            'width': '100%'
        });
    });
});
