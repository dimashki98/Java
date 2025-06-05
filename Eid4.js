
// عند الضغط على الزر
$('#eidBtn').on('click', function () {
    // رسالة المعايدة
    Swal.fire({
        title: '🎉 عيد أضحى مبارك! 🎉',
        html: '<b>أعاده الله علينا وعليكم بالخير واليمن والبركات 🐑</b>',
        icon: 'success',
        confirmButtonText: 'شكرًا لك',
        customClass: {
            popup: 'eid-popup'
        }
    });

    // إطلاق الألعاب النارية
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = 0;
    container.style.left = 0;
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.zIndex = 9998;
    document.body.appendChild(container);

    const fireworks = new Fireworks(container, {
        speed: 2,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 80,
        traceLength: 3,
        traceSpeed: 10,
        explosion: 5,
        intensity: 25,
        flickering: 50,
        lineStyle: 'round',
        hue: { min: 0, max: 360 },
        delay: { min: 30, max: 60 },
        autoresize: true,
        brightness: { min: 50, max: 80 },
        boundaries: { top: 50, bottom: container.clientHeight, left: 50, right: container.clientWidth - 50 },
        sound: {
            enable: false,
        }
    });

    fireworks.start();

    // سقوط الإيموجيات
    const emojis = ["🎉", "🐑"];
    for (let i = 0; i < 60; i++) {
        const emoji = document.createElement("div");
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = "fixed";
        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.top = "-2em";
        emoji.style.fontSize = "2em";
        emoji.style.zIndex = 9999;
        emoji.style.pointerEvents = "none";
        document.body.appendChild(emoji);

        const fallDuration = Math.random() * 3000 + 2000;
        $(emoji).animate({
            top: "100vh"
        }, fallDuration, function () {
            emoji.remove();
        });
    }

    // إيقاف الألعاب النارية بعد 10 ثوانٍ
    setTimeout(() => {
        fireworks.stop();
        container.remove();
    }, 10000);
});
