
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

    // إضافة زر اختيار صورة أقصى اليسار
    const uploadBtn = $(`
        <a class="fl openGallery"
           style="padding: 0px 7px;
                  width: 26px;
                  height: 30px !important;
                  position: absolute;
                  left: 20px;
                  top: 30%;
                  transform: translateY(-50%);
                  cursor: pointer;">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
                 style="width:30px;height:30px;">
        </a>
    `);

    $('div[width="99.5%"]').append(uploadBtn);

    // input مخفي
    const fileInput = $('<input type="file" accept="image/*" style="display:none;">');
    $('body').append(fileInput);

    // فتح الاستديو
    $('.openGallery').on('click', function() {
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

