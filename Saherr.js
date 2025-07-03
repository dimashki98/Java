$(document).ready(function () {
    let welcomeShown = false;

    const welcomeImage = new Image();
    welcomeImage.src = 'https://up6.cc/2025/01/173628778204351.jpg';

    welcomeImage.onload = function () {
        $('button.btn.btn-primary').on('click', function () {
            const checkExist = setInterval(function () {
                if ($('#d2').length && !welcomeShown) {
                    welcomeShown = true;
                    clearInterval(checkExist);

                    $('body').append(`
                        <style>
                            #welcome-message {
                                position: fixed;
                                top: 20%;
                                left: 50%;
                                transform: translateX(-50%);
                                background: rgba(255,255,255,0.95);
                                border-radius: 12px;
                                padding: 25px;
                                box-shadow: 0 0 20px rgba(0,0,0,0.3);
                                z-index: 99999;
                                text-align: center;
                                font-size: 20px;
                                font-family: 'Aref Ruqaa', sans-serif;
                                animation: fadeIn 0.5s ease;
                            }
                            #welcome-message .close-btn {
                                position: absolute;
                                top: 5px;
                                right: 10px;
                                background: none;
                                border: none;
                                font-size: 24px;
                                cursor: pointer;
                                color: #000;
                            }
                            @keyframes fadeIn {
                                from { opacity: 0; transform: translate(-50%, -10%); }
                                to { opacity: 1; transform: translate(-50%, 0); }
                            }
                        </style>
                        <div id="welcome-message">
                            <button class="close-btn">×</button>
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
            }, 300);
        });
    };

    function closeMessage() {
        $('#welcome-message').fadeOut(500, function () {
            $(this).remove();
        });
    }
});
