$(document).ready(function() {
    // استبدال الرابط داخل الإدخال أثناء الكتابة
    $(document).on('input', '#messageInput', function() {
        let text = $(this).val();
        $(this).val(text.replace(/vt\.tiktok\.com/g, 'vm.tiktok.com'));
    });

    // تعديل النص قبل الإرسال
    $(document).on('submit', '#chatForm', function(e) {
        let inputField = $('#messageInput');
        let text = inputField.val();
        inputField.val(text.replace(/vt\.tiktok\.com/g, 'vm.tiktok.com'));
    });
});
