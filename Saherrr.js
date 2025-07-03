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
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                                background: url('https://up6.cc/2025/01/173628778204351.jpg') no-repeat center center;
                                background-size: cover;
                                border-radius: 15px;
                                padding: 30px;
                                box-shadow: 0 0 25px rgba(0,0,0,0.5);
                                z-index: 99999;
                                text-align: center;
                                font-size: 22px;
                                color: #fff;
                                font-family: 'Aref Ruqaa', sans-serif;
                                max-width: 90%;
                                width: 450px;
                                animation: fadeIn 0.5s ease;
                            }
                            #welcome-message .close-btn {
                                position: absolute;
                                top: 10px;
                                right: 15px;
                                background: rgba(0,0,0,0.5);
                                border: none;
                                border-radius: 50%;
                                color: #fff;
                                font-size: 22px;
                                width: 35px;
                                height: 35px;
                                cursor: pointer;
                            }
                            @keyframes fadeIn {
                                from { opacity: 0; transform: translate(-50%, -60%); }
                                to { opacity: 1; transform: translate(-50%, -50%); }
                            }
                            .emoji {
                                position: fixed;
                                top: -50px;
                                font-size: 24px;
                                z-index: 9999;
                                pointer-events: none;
                                animation: fall linear forwards;
                            }
                            @keyframes fall {
                                to {
                                    transform: translateY(100vh) rotate(360deg);
                                    opacity: 0;
                                }
                            }
                        </style>

                        <div id="welcome-message">
                            <button class="close-btn">×</button>
                            ☀️ أهلاً وسهلاً بكم زوارنا وأعضائنا الأعزاء ☀️ <br>
                            نتمنى لكم أوقاتًا سعيدة ومليئة بالنجاح والتوفيق ❤️ <br>
                            ✨ مرحبًا بكم في شاتكم، المكان الذي يجمعكم ✨
                        </div>
                    `);

                    snowEmojiRain();
                    colorfulBalls();

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

    function snowEmojiRain() {
        const emojis = ['❄️', '☃️', '⛄'];
        const interval = setInterval(() => {
            const emoji = $('<div class="emoji">' + emojis[Math.floor(Math.random() * emojis.length)] + '</div>');
            emoji.css({
                left: Math.random() * window.innerWidth + 'px',
                animationDuration: (Math.random() * 3 + 3) + 's',
            });
            $('body').append(emoji);
            setTimeout(() => emoji.remove(), 7000);
        }, 300);
        setTimeout(() => clearInterval(interval), 8000);
    }

    function colorfulBalls() {
        const colors = ['#ff3e3e', '#00c4ff', '#ffe600', '#00ff7b', '#ff00e6'];
        const interval = setInterval(() => {
            const ball = $('<div></div>');
            ball.css({
                position: 'fixed',
                top: '-20px',
                left: Math.random() * window.innerWidth + 'px',
                width: '15px',
                height: '15px',
                'border-radius': '50%',
                'background-color': colors[Math.floor(Math.random() * colors.length)],
                'z-index': 9999,
                animation: 'fall linear',
                'animation-duration': (Math.random() * 3 + 3) + 's',
            });
            $('body').append(ball);
            setTimeout(() => ball.remove(), 7000);
        }, 150);
        setTimeout(() => clearInterval(interval), 8000);
    }
});
