$(document).ready(function () {
    const observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                $(mutation.addedNodes).each(function () {
                    if ($(this).hasClass('uzr') && $(this).hasClass('d-flex') && $(this).hasClass('pmsgc') && $(this).hasClass('mm')) {
                        $(this).css({
                            "border-radius": "12px", // حواف دائرية
                            "padding": "10px",
                            "margin": "8px 0",
                            "background": "url('https://up6.cc/2025/03/174130012490121.gif') no-repeat center center", // الخلفية الجديدة (GIF)
                            "background-size": "cover", // تكبير الصورة لتغطية العنصر بالكامل
                            "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.2)",
                            "transition": "all 0.3s"
                        });

                        $(this).hover(
                            function () {
                                $(this).css({
                                    "transform": "scale(1.03)",
                                    "box-shadow": "0 6px 12px rgba(0, 0, 0, 0.3)"
                                });
                            },
                            function () {
                                $(this).css({
                                    "transform": "scale(1)",
                                    "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.2)"
                                });
                            }
                        );

                        // إضافة لمعان لجميع النصوص داخل الرسالة
                        $(this).find(".u-msg, .u-topic, *").each(function () {
                            if ($(this).text()) {
                                $(this).css({
                                    "text-shadow": "0 0 6px rgba(255, 255, 255, 0.6), 0 0 8px rgba(0, 0, 255, 0.6)"
                                });
                            }
                        });
                    }
                });
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    $(".uzr.d-flex.pmsgc.mm").each(function () {
        $(this).css({
            "border-radius": "12px",
            "padding": "10px",
            "margin": "8px 0",
            "background": "url('https://up6.cc/2025/03/174130012490121.gif') no-repeat center center", // الخلفية الجديدة (GIF)
            "background-size": "cover", // تكبير الصورة لتغطية العنصر بالكامل
            "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.2)",
            "transition": "all 0.3s"
        });

        $(this).hover(
            function () {
                $(this).css({
                    "transform": "scale(1.03)",
                    "box-shadow": "0 6px 12px rgba(0, 0, 0, 0.3)"
                });
            },
            function () {
                $(this).css({
                    "transform": "scale(1)",
                    "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.2)"
                });
            }
        );

        $(this).find(".u-msg, .u-topic, *").each(function () {
            if ($(this).text()) {
                $(this).css({
                    "text-shadow": "0 0 6px rgba(255, 255, 255, 0.6), 0 0 8px rgba(0, 0, 255, 0.6)"
                });
            }
        });
    });
});
