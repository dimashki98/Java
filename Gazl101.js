
$(document).ready(function () {
    let welcomeShown = false;

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
                            background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
                            border-radius: 25px;
                            padding: 40px 25px;
                            box-shadow: 0 0 40px rgba(255, 0, 100, 0.8);
                            z-index: 99999;
                            text-align: center;
                            font-size: 22px;
                            color: #fff;
                            font-family: 'Tajawal', sans-serif;
                            max-width: 90%;
                            width: 500px;
                            animation: fadeIn 0.8s ease;
                            border: 2px solid #ff0066;
                        }
                        #welcome-message .close-btn {
                            position: absolute;
                            top: 12px;
                            right: 15px;
                            background: rgba(255,255,255,0.1);
                            border: none;
                            border-radius: 50%;
                            color: #fff;
                            font-size: 22px;
                            width: 35px;
                            height: 35px;
                            cursor: pointer;
                            transition: 0.3s;
                        }
                        #welcome-message .close-btn:hover {
                            background: rgba(255,0,100,0.6);
                            transform: scale(1.2);
                        }
                        @keyframes fadeIn {
                            from { opacity: 0; transform: translate(-50%, -60%); }
                            to { opacity: 1; transform: translate(-50%, -50%); }
                        }

                        /* عنوان فخم ينبض */
                        .pulse-title {
                            font-weight: bold;
                            font-size: 30px;
                            background: linear-gradient(45deg, #ffd700, #ff8c00, #ff0066);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            animation: pulseTitle 2s infinite;
                        }

                        @keyframes pulseTitle {
                            0%, 100% { text-shadow: 0 0 8px #ff0080, 0 0 15px #ff6600; transform: scale(1); }
                            50% { text-shadow: 0 0 20px #ffd700, 0 0 35px #ff0066; transform: scale(1.1); }
                        }

                        /* النصوص تنبض */
                        .pulse-text span {
                            display: inline-block;
                            animation: pulseText 2s infinite;
                        }

                        @keyframes pulseText {
                            0%, 100% { transform: scale(1); opacity: 1; }
                            50% { transform: scale(1.05); opacity: 0.85; }
                        }

                        /* ايموجي المطر */
                        .emoji {
                            position: fixed;
                            top: -50px;
                            font-size: 32px;
                            z-index: 9999;
                            pointer-events: none;
                            animation: fall linear forwards;
                            text-shadow: 0 0 5px #fff;
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
                        <div class="pulse-title">
                            🎉 عيد ميلاد سعيد يا غزل 💖
                        </div>
                        <div style="line-height:1.8; font-size:20px; margin-top:15px;" class="pulse-text">
                            <span>اليوم مو عادي… اليوم يوم فرحة واحتفال مميز عشانك إنتِ ✨</span><br>
                            <span>كل لحظة اليوم تنور باسمك وتكبر فرحتنا فيك 🌹🔥</span><br>
                            <span>يا أجمل هدية، اليوم الدنيا كلها محتفلة فيك 🎂🎊</span><br>
                            <span>الله يجعل أيامك كلها بياض وفرح متل هاليوم العظيم 🌸💎</span>
                        </div>
                    </div>
                `);

                birthdayEmojiRain();

                $('#welcome-message .close-btn').on('click', closeMessage);
            }
        }, 300);
    });

    function closeMessage() {
        $('#welcome-message').fadeOut(600, function () {
            $(this).remove();
        });
    }

    function birthdayEmojiRain() {
        const emojis = ['🎂','🎉','🎈','🎊','🎁','💖','✨','🌸'];
        const interval = setInterval(() => {
            const emoji = $('<div class="emoji">' + emojis[Math.floor(Math.random() * emojis.length)] + '</div>');
            emoji.css({
                left: Math.random() * window.innerWidth + 'px',
                animationDuration: (Math.random() * 4 + 3) + 's',
            });
            $('body').append(emoji);
            setTimeout(() => emoji.remove(), 8000);
        }, 250);
    }
});
