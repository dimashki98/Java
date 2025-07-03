$(document).ready(function () {
    let welcomeShown = false;

    const welcomeImage = new Image();
    welcomeImage.src = 'https://up6.cc/2025/01/173628778204351.jpg';

    welcomeImage.onload = function () {
        $('button.btn.btn-primary').on('click', function () {
            // ننتظر تنفيذ Login_(2) وظهور العنصر #d2
            const checkExist = setInterval(function () {
                if ($('#d2').length && !welcomeShown) {
                    welcomeShown = true;
                    clearInterval(checkExist);

                    $('body').append(`
                        <div id="welcome-message" style="position: fixed; top: 20%; left: 50%; transform: translateX(-50%); background: #fff; border-radius: 10px; padding: 20px; box-shadow: 0 0 15px rgba(0,0,0,0.3); z-index: 99999; text-align: center; font-family: 'Aref Ruqaa', sans-serif;">
                            <button class="close-btn" style="position:absolute;top:5px;right:10px;background:none;border:none;font-size:20px;">×</button>
                            ☀️ أهلاً وسهلاً بكم زوارنا وأعضائنا الأعزاء ☀️ <br>
                            نتمنى لكم أوقاتًا سعيدة ومليئة بالنجاح والتوفيق ❤️ <br>
                            ✨ مرحبًا بكم في شاتكم، المكان الذي يجمعكم ✨
                        </div>
                    `);

                    if (typeof launchBlueRain === "function") launchBlueRain();
                    if (typeof launchMoonRain === "function") launchMoonRain();

                    $('#welcome-message .close-btn').on('click', closeMessage);
                    setTimeout(closeMessage, 8000);
                }
            }, 300); // تحقق كل 300ms
        });
    };

    function closeMessage() {
        $('#welcome-message').fadeOut(500, function () {
            $(this).remove();
        });
    }
});
