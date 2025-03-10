$(document).ready(function() {
    // تفعيل الكود الخاص بإضافة الخلفية عند الضغط على الزر "yjjwy0f4n7"
    $(document).on('click', '[onclick^="Send_Rjoin(\'yjjwy0f4n7\')"]', function() {
        // إضافة الخلفية عند الضغط على الزر
        $('.flex-grow-1.break.light').css({
            'background-image': 'url(https://dd3sr.net/dro3/1741634126670.jpg)',
            'background-size': '100% 100%',
            'background-position': 'center',
            'background-repeat': 'no-repeat',
            'height': '100%',
            'width': '100%'
        });

        // تعيين الخلفية للعنصر #chats أيضًا
        $('#chats').css({
            'background-image': 'url(https://dd3sr.net/dro3/1741634124118.jpg)',
            'background-size': '100% 100%',
            'background-position': 'center',
            'background-repeat': 'no-repeat',
            'height': '100%',
            'width': '100%'
        });
    });
});
