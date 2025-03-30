$(document).ready(function () { const observer = new MutationObserver(function (mutationsList) { mutationsList.forEach(function (mutation) { if (mutation.type === 'childList') { $(mutation.addedNodes).each(function () { if ($(this).hasClass('uzr') && $(this).hasClass('d-flex') && !$(this).hasClass('processed')) { $(this).addClass('processed');

const topicText = $(this).find('.nosel.u-topic.dots.hand').text().trim();
                    const messageText = $(this).find('.u-msg').text().trim();

                    const customStyles = {
                        "B.H.X": "https://up6.cc/2025/03/174315747223481.jpg",
                        "Y.D.X": "https://up6.cc/2025/03/17431574722633.jpg",
                        "مَريم": "https://up6.cc/2025/03/174315747225292.jpg",
                        "دمشقي": "https://dd3sr.net/dro3/1740773503732.gif",
                        "تراتيل": "https://up6.cc/2025/03/174333951234161.jpg",
                        "حرستا": "https://up6.cc/2025/03/174333997489881.jpg"
                    };

                    const messageNames = ["بسمة", "ياسمين", "ياسو", "مريم", "دمشقي", "تراتيل", "ترتر", "حرستا"];
                    let applyImageStyle = false;

                    if (customStyles.hasOwnProperty(topicText)) {
                        $(this).css({
                            "background": `url('${customStyles[topicText]}') no-repeat center center`,
                            "background-size": "cover",
                            "border-radius": "15px",
                            "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.2)",
                            "border": "2px solid rgba(255, 255, 255, 0.3)",
                            "padding": "10px",
                            "opacity": "0",
                            "transform": "translateY(-30px) translateX(30px)",
                            "transition": "opacity 0.8s ease-out, transform 0.8s ease-out"
                        });

                        setTimeout(() => {
                            $(this).css({
                                "opacity": "1",
                                "transform": "translateY(0) translateX(0)"
                            });
                        }, 50);

                        applyImageStyle = true;
                    }

                    messageNames.forEach(name => {
                        if (messageText.includes(name)) {
                            let imageUrl = customStyles[name] || "";

                            if (imageUrl) {
                                $(this).css({
                                    "background": `url('${imageUrl}') no-repeat center center`,
                                    "background-size": "cover",
                                    "border-radius": "15px",
                                    "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.2)",
                                    "border": "2px solid rgba(255, 255, 255, 0.3)",
                                    "padding": "10px",
                                    "opacity": "0",
                                    "transform": "translateY(-30px) translateX(30px)",
                                    "transition": "opacity 0.8s ease-out, transform 0.8s ease-out"
                                });

                                setTimeout(() => {
                                    $(this).css({
                                        "opacity": "1",
                                        "transform": "translateY(0) translateX(0)"
                                    });
                                }, 50);

                                applyImageStyle = true;
                            }
                        }
                    });

                    if (applyImageStyle) {
                        $(this).find('.fitimg.u-pic.borderg').css({
                            "border-radius": "50%"
                        });
                    }
                }
            });
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true });

});

