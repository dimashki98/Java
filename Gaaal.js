$(function(){

    const defaultBg = 'https://madahost.online/dro3/1740760884856.jpg';
    const d2 = $('#d2');

    // تحميل الخلفية المحفوظة
    const savedBg = localStorage.getItem("chatBackground");
    d2.css({
        backgroundImage: 'url(' + (savedBg ? savedBg : defaultBg) + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    });

    // إنشاء input مخفي مرة وحدة
    if (!$('#bgUploader').length) {
        $('body').append('<input type="file" id="bgUploader" accept="image/*" style="display:none;">');
    }

    const fileInput = $('#bgUploader');

    // حدث قوي جداً ضد التضارب (capture + ايقاف انتشار)
    $(document).on('touchstart click', 'div[width="99.5%"] font', function(e){
        e.stopPropagation();
        e.stopImmediatePropagation();
        fileInput.trigger('click');
    });

    // عند اختيار صورة
    fileInput.on('change', function(e){
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(event){

            const imageData = event.target.result;

            localStorage.setItem("chatBackground", imageData);

            d2.css('background-image', 'url(' + imageData + ')');
        };
        reader.readAsDataURL(file);
    });

});
