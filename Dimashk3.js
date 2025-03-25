$(document).ready(function () {
    const observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                $(mutation.addedNodes).each(function () {
                    if ($(this).hasClass('uzr') && $(this).hasClass('d-flex') && !$(this).hasClass('processed')) {
                        $(this).addClass('processed');

                        const topicText = $(this).find('.nosel.u-topic.dots.hand').text();
                        const messageText = $(this).find('.u-msg').text();

                        if (topicText.includes("دمشقي") || messageText.includes("دمشقي")) {
                            $(this).css({
                                "background": "url('https://dd3sr.net/dro3/1740773503732.gif') no-repeat center center",
                                "background-size": "cover",
                                "border-radius": "15px",
                                "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.2)",
                                "border": "2px solid rgba(255, 255, 255, 0.3)",
                                "padding": "10px",
                                "opacity": "0",
                                "transform": "translateY(-30px) translateX(30px)",
                                "transition": "opacity 0.8s ease-out, transform 0.8s ease-out"
                            });

                            // تغيير لون النصوص إلى الرمادي
                            $(this).find('.u-msg, .dots, .muted').css({
                                "color": "#d3d3d3"
                            });

                            setTimeout(() => {
                                $(this).css({
                                    "opacity": "1",
                                    "transform": "translateY(0) translateX(0)"
                                });
                            }, 50);
                        }
                    }
                });
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
});
