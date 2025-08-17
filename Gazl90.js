
$(document).ready(function () {
    let welcomeShown = false;
    let emojiInterval; // لحفظ الـ interval حتى نوقفه

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
                            background: linear-gradient(135deg, #ff9ecb, #ff66a3, #ff1a75);
                            border-radius: 25px;
                            padding: 40px 25px;
                            box-shadow: 0 0 50px rgba(255, 0, 150, 0.9);
                            z-index: 1; /* الرسالة أسفل الإيموجي */
                            text-align: center;
                            font-size: 22px;
                            color: #fff;
                            font-family: 'Tajawal', sans-serif;
                            max-width: 90%;
                            width: 500px;
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
                            background: rgba(255,255,255,0.6);
                            transform: scale(1.2);
                        }
                        @keyframes fadeIn {
                            from { opacity: 0; transform: translate(-50%, -60%); }
                            to { opacity: 1; transform: translate(-50%, -50%); }
                        }

                        /* عنوان فخم نابض */
                        .pulse-title {
                            font-weight: bold;
                            font-size: 32px;
                            background: linear-gradient(90deg, #fffacd, #ffd700, #ff69b4);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            animation: pulseTitle 1.8s infinite;
                            text-shadow: 0 0 8px #fff, 0 0 15px #ff69b4;
                        }
                        @keyframes pulseTitle {
                            0%,100% { transform: scale(1); text-shadow: 0 0 8px #fff, 0 0 15px #ff69b4; }
                            50% { transform: scale(1.1); text-shadow: 0 0 20px #fff, 0 0 35px #ffd700; }
                        }

                        /* النصوص نابضة وواضحة */
                        .pulse-text span {
                            display: inline-block;
                            font-weight: bold;
                            font-size: 20px;
                            color: #fff;
                            text-shadow: 0 0 5px #ffb6c1, 0 0 10px #ff69b4;
                            animation: pulseText 2s infinite;
                        }
                        @keyframes pulseText {
                            0%,100% { transform: scale(1); opacity: 1; }
                            50% { transform: scale(1.05); opacity: 0.9; }
                        }

                        /* ايموجي فوق الرسالة */
                        .emoji {
                            position: fixed;
                            top: -50px;
                            font-size: 32px;
                            z-index: 2; /* فوق الرسالة */
                            pointer-events: none;
                            animation: fall linear forwards;
                            text-shadow: 0 0 5px #fff, 0 0 10px #ff69b4;
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
                        <div style="line-height:1.8; margin-top:15px;" class="pulse-text">
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
        clearInterval(emojiInterval); // ايقاف تساقط الإيموجي فور الإغلاق
    }

    function birthdayEmojiRain() {
        const emojis = ['🎂','🎉','🎈','🎊','🎁','💖','✨','🌸'];
        emojiInterval = setInterval(() => {
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
