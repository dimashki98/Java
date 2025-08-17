
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
                            background: linear-gradient(135deg, #ffb6c1, #ff69b4);
                            border-radius: 20px;
                            padding: 40px 25px;
                            box-shadow: 0 0 35px rgba(255,0,150,0.7);
                            z-index: 99999;
                            text-align: center;
                            font-size: 22px;
                            color: #fff;
                            font-family: 'Tajawal', sans-serif;
                            max-width: 90%;
                            width: 480px;
                            animation: fadeIn 0.8s ease;
                            border: 3px solid #fff;
                        }
                        #welcome-message .close-btn {
                            position: absolute;
                            top: 12px;
                            right: 15px;
                            background: rgba(255,255,255,0.2);
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
                            background: rgba(255,255,255,0.5);
                        }
                        @keyframes fadeIn {
                            from { opacity: 0; transform: translate(-50%, -60%); }
                            to { opacity: 1; transform: translate(-50%, -50%); }
                        }
                        .emoji {
                            position: fixed;
                            top: -50px;
                            font-size: 28px;
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
                        <div style="font-size:26px; margin-bottom:10px;">🎂🎉 عيد ميلاد سعيد يا غزل 🎉🎂</div>
                        <div style="line-height:1.8; font-size:20px;">
                            اليوم مو عادي… اليوم يوم فرحة واحتفال مميز عشانك إنتِ 💖✨ <br>
                            كل لحظة اليوم تنور باسمك وتكبر فرحتنا فيك 🌹🔥 <br>
                            يا أجمل هدية، اليوم الدنيا كلها محتفلة فيك 💎🎉 <br>
                            الله يجعل أيامك كلها بياض وفرح متل هاليوم العظيم ✨🌸
                        </div>
                    </div>
                `);

                birthdayEmojiRain();

                $('#welcome-message .close-btn').on('click', closeMessage);
                setTimeout(closeMessage, 10000);
            }
        }, 300);
    });

    function closeMessage() {
        $('#welcome-message').fadeOut(500, function () {
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
        }, 200);
        setTimeout(() => clearInterval(interval), 10000);
    }
});
