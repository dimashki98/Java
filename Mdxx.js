$(function () {
    const observer = new MutationObserver(function () {
        $('.d-flex.fl.di1').each(function () {
            const topic = $(this).find('.u-topic').text().trim();
            if (topic === 'MDX') {
                const container = $(this);

                const ustat = container.find('.ustat').clone();
                const uico = container.find('.u-ico').clone();
                const upic = container.find('.u-pic').clone();

                container.css({
                    "position": "relative",
                    "overflow": "hidden",
                    "min-height": "100px",
                    "padding": "0"
                }).html(`
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 99%;
                        height: 99%;
                        margin: auto;
                        right: 0;
                        bottom: 0;
                        border-radius: 14px;
                        overflow: hidden;
                        box-shadow: 0 0 40px 20px rgba(0, 255, 255, 0.7);
                        animation: neonPulse 1.5s infinite alternate;
                        z-index: 10;
                    ">
                        <img src="https://up6.cc/2025/04/174456165430071.jpg" style="
                            width: 100%;
                            height: 100%;
                            display: block;
                            border-radius: 14px;
                            object-fit: cover;
                            z-index: 10;
                        ">
                    </div>
                `);

                // ustat
                container.append(ustat.css({
                    "position": "absolute",
                    "top": "5px",
                    "left": "5px",
                    "width": "12px",
                    "height": "12px",
                    "border-radius": "50%",
                    "z-index": "99",
                    "object-fit": "contain"
                }));

                // uico
                container.append(uico.css({
                    "position": "absolute",
                    "top": "10px",
                    "right": "10px",
                    "z-index": "1000"
                }));

                // upic
                upic.css({
                    "position": "absolute",
                    "top": "0",
                    "left": "0",
                    "width": "100%",
                    "height": "100%",
                    "border-radius": "14px",
                    "z-index": "999",
                    "object-fit": "cover",
                    "transition": "opacity 1s",
                    "opacity": "1"
                });
                container.append(upic);

                // إخفاء co ico
                container.find('.co.ico').hide();

                // تأثير تدريجي على upic (تكرار كل ثانيتين)
                setInterval(() => {
                    upic.fadeOut(1000, function () {
                        upic.fadeIn(1000);
                    });
                }, 2000);
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// تأثير النيون
const style = document.createElement('style');
style.innerHTML = `
@keyframes neonPulse {
    0%   { box-shadow: 0 0 25px 10px rgba(255, 0, 0, 0.6); }
    25%  { box-shadow: 0 0 25px 10px rgba(255, 255, 0, 0.6); }
    50%  { box-shadow: 0 0 25px 10px rgba(0, 255, 0, 0.6); }
    75%  { box-shadow: 0 0 25px 10px rgba(0, 255, 255, 0.6); }
    100% { box-shadow: 0 0 25px 10px rgba(255, 0, 255, 0.6); }
}
`;
document.head.appendChild(style);
