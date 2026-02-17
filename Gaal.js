
$(document).ready(function() {

    const defaultBg = 'https://madahost.online/dro3/1740760884856.jpg';

    // إذا في صورة محفوظة نحطها
    const savedBg = localStorage.getItem("chatBackground");
    $('#d2').css({
        'background-image': 'url(' + (savedBg ? savedBg : defaultBg) + ')',
        'background-size': 'cover',
        'background-position': 'center',
        'background-repeat': 'no-repeat'
    });

    // نخلي كلمة شات مدى للجوال قابلة للضغط
    const title = $('div[width="99.5%"] font');

    title.css({
        'cursor': 'pointer',
        'transition': '0.3s'
    });

    // input مخفي
    const fileInput = $('<input type="file" accept="image/*" style="display:none;">');
    $('body').append(fileInput);

    // عند الضغط على العنوان
    title.on('click', function() {
        fileInput.click();
    });

    // عند اختيار صورة
    fileInput.on('change', function(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(event) {

            const imageData = event.target.result;

            // حفظ الصورة
            localStorage.setItem("chatBackground", imageData);

            // تطبيق الخلفية
            $('#d2').css({
                'background-image': 'url(' + imageData + ')',
                'background-size': 'cover',
                'background-position': 'center',
                'background-repeat': 'no-repeat'
            });
        };
        reader.readAsDataURL(file);
    });

});
