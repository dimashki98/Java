$(document).ready(function() {
    $('#d').css({
        'background-image': 'url(https://madahost.online/dro3/1740760884856.jpg)',
        'background-size': 'cover',
        'background-position': 'center',
        'background-repeat': 'no-repeat'
    });
});

$("<style>\n\
#color-picker-icon {\n\
    position: fixed;\n\
    top: 80%; \n\
    right: 20px;\n\
    transform: translateY(-50%); \n\
    width: 80px;\n\
    height: 80px;\n\
    z-index: 10000;\n\
    cursor: pointer;\n\
    display: flex;\n\
    justify-content: center;\n\
    align-items: center;\n\
    background-color: white;\n\
    border-radius: 50%;\n\
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);\n\
    transition: all 0.4s ease-in-out;\n\
}\n\
#color-picker-icon img {\n\
    width: 90%;\n\
    height: 90%;\n\
    border-radius: 50%;\n\
}\n\
#color-picker-icon:hover {\n\
    transform: scale(1.1);\n\
}\n\
</style>").appendTo("head");

$("<div id='color-picker-icon'>\n\
    <img src='https://madahost.online/dro3/1740762943693.gif' alt='رمضان مبارك'>\n\
</div>").appendTo("body");

if (typeof Swal === 'undefined') {
    $.getScript("https://cdn.jsdelivr.net/npm/sweetalert2@11");
}

$("#color-picker-icon").on("click", function () {
    Swal.fire({
        title: "رمضان مبارك! 🌙",
        text: "اللهم بلغنا رمضان وأعنا على صيامه وقيامه، وتقبله منا يا رب العالمين 💖🌙",
        imageUrl: "https://madahost.online/dro3/1740762943693.gif",
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: "رمضان كريم",
        background: "#fef3c7",
        confirmButtonText: "🌙 كل عام وأنتم بخير 🌙",
        confirmButtonColor: "#d97706"
    });
});

$(".btn.btn-primary").on("click", function () {
    $("#color-picker-icon").remove();
    $("#color-picker-icon").off("click");
});

$.getScript("https://raw.githack.com/dimashki98/Java/refs/heads/main/Ramazan12.js");


$("<style>\n\
#radio-button {\n\
    position: fixed;\n\
    bottom: 210px;\n\ /* تعديل هذه القيمة لرفع الزر لأعلى \*/\n\
    right: 25px;\n\ /* تعديل هذه القيمة لتحريك الزر قليلاً لليمين \*/\n\
    background: linear-gradient(135deg, #4CAF50, #4F745B);\n\
    color: white;\n\
    font-size: 18px;\n\
    font-weight: bold;\n\
    padding: 12px 20px;\n\
    border: none;\n\
    border-radius: 25px;\n\
    cursor: pointer;\n\
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n\
    transition: all 0.3s ease-in-out;\n\
}\n\
#radio-button:hover {\n\
    background: linear-gradient(135deg, #43A047, #4F745B);\n\
    transform: scale(1.1);\n\
}\n\
</style>").appendTo("head");

$("<button id='radio-button'>📻 تشغيل الإذاعة القرآنية</button>").appendTo("#chats");

let radioPlaying = false;
let iframe = $("<iframe width='100%' height='150' src='https://thenonstopradio.com/embedded/quran-for-the-heart-القرآن-للقلب' frameborder='0'></iframe>").hide();

$("#radio-button").on("click", function () {
    if (!radioPlaying) {
        iframe.show();
        $(this).text("⏹️ إيقاف الإذاعة");
        radioPlaying = true;
    } else {
        iframe.hide();
        $(this).text("📻 تشغيل الإذاعة القرآنية");
        radioPlaying = false;
    }
    $("#chats").append(iframe);
});









$(function() {
    $(".co.ico").after('<img class="lantern" alt="فانوس" src="https://madahost.online/dro3/1740762943693.gif" style="width: 30px; height: 30px;">');
});






$(document).ready(function() {
    $('.flex-grow-1.break.light').css({
        'background-image': 'url(https://dd3sr.net/dro3/1740760884856.jpg)',
        'background-size': '100% 100%', // تمديد الصورة لتملأ العنصر بالكامل
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'height': '100%',
        'width': '100%'
    });
});













$(function() {
    // إضافة الأنماط باستخدام jQuery
    $("<style>\n\
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap');\n\
        #ramadan-date-icon {\n\
            position: fixed;\n\
            top: calc(80% + 90px);\n\
            right: 20px;\n\
            min-width: 100px;\n\
            height: 40px;\n\
            z-index: 10000;\n\
            cursor: pointer;\n\
            display: flex;\n\
            justify-content: center;\n\
            align-items: center;\n\
            background: #4F745B;\n\
            border-radius: 20px;\n\
            border: 1.5px solid #3A5A40;\n\
            box-shadow: 0 3px 10px rgba(63, 94, 77, 0.5);\n\
            font-size: 16px;\n\
            font-weight: bold;\n\
            font-family: 'Amiri', serif;\n\
            color: #FFF;\n\
            text-align: center;\n\
            padding: 5px 12px;\n\
            text-transform: uppercase;\n\
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\n\
        }\n\
        #ramadan-date-icon:hover {\n\
            transform: scale(1.05);\n\
            box-shadow: 0 5px 15px rgba(63, 94, 77, 0.7);\n\
        }\n\
    </style>").appendTo("head");

    $("<div id='ramadan-date-icon'>\n\
        <span id='moon-icon'>🌑</span>\n\
        <span id='ramadan-text'>جاري الحساب...</span>\n\
    </div>").appendTo("body");

    // خريطة مراحل القمر بناءً على أيام رمضان
    const moonPhases = {
        "1-3": "🌑", // هلال بداية الشهر
        "4-6": "🌒", // القمر في بداية النمو
        "7-10": "🌕", // البدر (القمر الكامل)
        "11-14": "🌕", // اكتمال البدر
        "15-18": "🌖", // القمر في التناقص
        "19-22": "🌖", // القمر في التناقص
        "23-26": "🌘", // الهلال المتناقص
        "27-30": "🌘" // آخر الشهر
    };

    // جلب اليوم الهجري الحالي
    async function getHijriDate() {
        try {
            let today = new Date();
            let day = today.getDate();
            let month = today.getMonth() + 1;
            let year = today.getFullYear();
            
            let response = await fetch(`https://api.aladhan.com/v1/gToH?date=${day}-${month}-${year}`);
            let data = await response.json();

            if (data.code === 200 && data.data && data.data.hijri) {
                let hijriDay = parseInt(data.data.hijri.day);
                $("#ramadan-text").text(`${hijriDay} رمضان`);

                // تحديد إيموجي القمر بناءً على اليوم
                for (let range in moonPhases) {
                    let [start, end] = range.split("-").map(Number);
                    if (hijriDay >= start && hijriDay <= end) {
                        $("#moon-icon").text(moonPhases[range]);
                        break;
                    }
                }
            } else {
                $("#ramadan-text").text("خطأ في الحساب");
            }
        } catch (error) {
            console.error("خطأ في جلب التاريخ:", error);
            $("#ramadan-text").text("خطأ في الحساب");
        }
    }

    // تشغيل الدالة عند تحميل الصفحة
    getHijriDate();

    // تفعيل الحدث عند الضغط على الزر
    $('#ramadan-date-icon').on('click', function() {
        // عند الضغط على الزر، سيتم عرض نافذة منبثقة مع الفيديو والنصيحة الرمضانية باستخدام SweetAlert2
        Swal.fire({
            title: 'نصيحة رمضانية',
            html: `
                <p style="font-size: 18px;">اتبع الصيام في هذا الشهر الكريم واحرص على صلواتك وزكاتك.</p>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/SVbrASSUrX0?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            `,
            showCloseButton: true,
            showCancelButton: false,
            confirmButtonText: 'إغلاق',
            confirmButtonColor: '#4F745B',
        });
    });
});






$(".btn.btn-primary").on("click", function () {
    // إزالة الزر #ramadan-date-icon عند الضغط على زر .btn.btn-primary
    $("#ramadan-date-icon").remove();
});


















$(document).ready(function() {
    $("<label title='GAMES' aria-expanded='true' href='#' onclick=\"if (!window.__cfRLUnblockHandlers) return false; $('.pnhead').text($(this).attr('title'));$('.dpnl').show();\" style='background-color: ghostwhite;color: black;margin:1px 4px; padding:6px;width:98%;' data-toggle='tab' data-target='#newoption2' class='label tc border btn fl'><span class='fa fa-star fl'></span> GAMES</label>")
        .insertAfter("label[title='الإظافات']");

    $("<div id='newoption2' style='height: 100%; width: 100%;' class='light break border tab-pane'>" +
      "<p></p>" +
      "<button class='btn btn-success' data-toggle='tab' data-target='#settings'>العودة إلى الإعدادات</button>" +
      "<div class='game-buttons'>" +
        "<label class='label tc border btn label-info fl' style='background-color: lightgreen; color: black; margin: 1px 4px; padding: 6px; width: 98%;'><span class='fl fa fa-gamepad'></span> لعبة بلياردو</label>" +
        "<label class='label tc border btn label-info fl' style='background-color: lightcoral; color: black; margin: 1px 4px; padding: 6px; width: 98%;'><span class='fl fa fa-gamepad'></span> لعبة مطاردة القطارات</label>" +
        "<label class='label tc border btn label-info fl' style='background-color: lightblue; color: black; margin: 1px 4px; padding: 6px; width: 98%;'><span class='fl fa fa-gamepad'></span> لعبة سوليتير</label>" +
        "<label class='label tc border btn label-info fl' style='background-color: orange; color: black; margin: 1px 4px; padding: 6px; width: 98%;'><span class='fl fa fa-gamepad'></span> لعبة بولينغ</label>" +
        "<label class='label tc border btn label-info fl' style='background-color: purple; color: black; margin: 1px 4px; padding: 6px; width: 98%;'><span class='fl fa fa-gamepad'></span> لعبة بلياردو ٢</label>" +
        "<label class='label tc border btn label-info fl' style='background-color: gold; color: black; margin: 1px 4px; padding: 6px; width: 98%;'><span class='fl fa fa-gamepad'></span> لعبة الشطرنج</label>" +
        "<label class='label tc border btn label-info fl' style='background-color: pink; color: black; margin: 1px 4px; padding: 6px; width: 98%;'><span class='fl fa fa-gamepad'></span> لعبة كاندي بابل</label>" +
        "<label class='label tc border btn label-info fl' style='background-color: cyan; color: black; margin: 1px 4px; padding: 6px; width: 98%;'><span class='fl fa fa-gamepad'></span> لعبة جويل</label>" +
        "<label class='label tc border btn label-info fl' style='background-color: brown; color: white; margin: 1px 4px; padding: 6px; width: 98%;'><span class='fl fa fa-search'></span> لعبة اوجد الفرق</label>" +
        "<label class='label tc border btn label-info fl' style='background-color: darkgreen; color: white; margin: 1px 4px; padding: 6px; width: 98%;'><span class='fl fa fa-dice'></span> لعبة لودو</label>" +
      "</div>" +
      "<div id='gameContainer' style='width: 100%; height: 500px;'></div>" +
      "</div>").appendTo(".tab-content");

    $(".game-buttons label").click(function() {
        var gameName = $(this).text().trim();
        var iframeSrc = "";

        if (gameName === "لعبة بلياردو") {
            iframeSrc = "https://games.cdn.famobi.com/html5games/0/8-ball-billiards-classic/v250/?fg_domain=play.famobi.com";
        } else if (gameName === "لعبة مطاردة القطارات") {
            iframeSrc = "https://ubg77.github.io/updatefaqs/subway-surfers-winter-holiday/";
        } else if (gameName === "لعبة الحبار") {
            iframeSrc = "https://www.onlinegames.io/games/2021/unity3/squid-race-simulator/index.html";
        } else if (gameName === "لعبة بولينغ") {
            iframeSrc = "https://zv1y2i8p.play.gamezop.com/g/BkdJhTX50B";
        } else if (gameName === "لعبة بلياردو ٢") {
            iframeSrc = "https://zv1y2i8p.play.gamezop.com/g/hgempP8Sc";
        } else if (gameName === "لعبة الشطرنج") {
            iframeSrc = "https://zv1y2i8p.play.gamezop.com/g/rkAXTzkD5kX";
        } else if (gameName === "لعبة كاندي بابل") {
            iframeSrc = "https://gamesnacks.com/games/candybubbles";
        } else if (gameName === "لعبة جويل") {
            iframeSrc = "https://gamesnacks.com/games/jewelacademy";
        } else if (gameName === "لعبة اوجد الفرق") {
            iframeSrc = "https://gamesnacks.com/games/findthedifference";
        } else if (gameName === "لعبة لودو") {
            iframeSrc = "https://gamesnacks.com/games/ludolegend";
        }

        $("#gameContainer").html(`
          <iframe src="${iframeSrc}" scrolling="no" frameborder="no" allowfullscreen="" sandbox="allow-scripts allow-same-origin" style="width: 100%; height: 100%;"></iframe>
          <div onclick="$('#gameContainer').html('');" style="position: relative; color: #fff; width: 100%; text-align: center; background: red; cursor: pointer;">
            <i style="font-size: 25px !important;" class="fa fa-close"></i> إغلاق اللعبة
          </div>
        `);
    });
});








$(document).ready(function() {
    // إنشاء الزر الجديد بشكل نص + أيقونة "fa fa-user-plus" بنفس تصميم زر التجاهل
    var newButton = $('<span class="fl fa fa-user-plus btn request-person borderg" style="color: red; margin: 4px 2px 2px; width: 106px; text-align: center; font-family: FontAwesome, sans-serif; font-size: 16px; padding: 6px 20px; border-radius: 8px; display: inline-flex; justify-content: center; align-items: center; cursor: pointer;">اطلب شخص</span>');

    // إدراج الزر بعد زر التجاهل مباشرةً ليظهر على اليمين
    $(".fl.fa.fa-ban.btn.umute.borderg").after(newButton);

    // إضافة وظيفة عند الضغط على الزر الجديد
    $(document).on("click", ".request-person", function() {
        Swal.fire({
            title: "🌟 ارسل طلبك أو رسالتك لأحد الأشخاص 🌟",
            html: `
                <div style="font-size: 16px; color: #333; margin-bottom: 20px;">
                    <p style="font-weight: bold; font-size: 18px;">💬 رسالتك ستصل للشخص فورًا!</p>
                </div>
                <div style="text-align: center; font-size: 18px;">
                    <a href="https://tellonym.me/user.55749963/tbh" target="_blank" class="shine-button" style="display: inline-block; background-color: #333; color: white; padding: 12px 20px; font-size: 16px; text-decoration: none; border-radius: 5px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-bottom: 15px; transition: all 0.3s; font-weight: bold;">
                        <i class="fa fa-comment-alt"></i> دمشقي
                    </a>
                    <a href="https://tellonym.me/user.65586804" target="_blank" class="shine-button" style="display: inline-block; background-color: #444; color: white; padding: 12px 20px; font-size: 16px; text-decoration: none; border-radius: 5px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: all 0.3s; font-weight: bold;">
                        <i class="fa fa-comment-alt"></i> عراب
                    </a>
                </div>
            `,
            showCloseButton: true,
            showConfirmButton: false,
            backdrop: 'rgba(0, 0, 0, 0.75)', // جعل الخلفية أكثر وضوحًا ليكون فوق كل شيء
            allowOutsideClick: true,
            customClass: {
                popup: 'custom-swal-popup',
                title: 'custom-swal-title',
                htmlContainer: 'custom-swal-html'
            }
        });
    });
});

// رفع مستوى z-index لنافذة SweetAlert2 لتكون فوق كل شيء
$("<style>")
    .prop("type", "text/css")
    .html(`
        .custom-swal-popup {
            z-index: 3000 !important; /* أعلى من z-index للـ modal */
            background-color: #f4f4f9 !important;
            border-radius: 12px;
            padding: 20px;
        }
        .swal2-container {
            z-index: 3000 !important; /* رفع مستوى z-index للحاوية */
        }
        .custom-swal-title {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 24px;
            color: #333;
            font-weight: bold;
            margin-bottom: 20px;
        }
        .custom-swal-html {
            font-family: 'Arial', sans-serif;
            color: #555;
            line-height: 1.8;
        }
        .swal2-popup {
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }
        .shine-button {
            animation: shine 1.5s infinite alternate;
            transition: all 0.3s;
            display: inline-flex;
            justify-content: center;
            align-items: center;
        }
        .shine-button:hover {
            background-color: #3d3d3d;
            box-shadow: 0 8px 14px rgba(0, 0, 0, 0.2);
        }
        .shine-button i {
            margin-right: 8px; /* تعديل المسافة بين الأيقونة والنص */
        }
        @keyframes shine {
            0% {
                box-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3);
                transform: translateY(0);
            }
            100% {
                box-shadow: 0 0 20px rgba(255, 255, 255, 0.9), 0 0 30px rgba(255, 255, 255, 0.6);
                transform: translateY(-3px);
            }
        }
    `)
    .appendTo("head");







$(document).ready(function() {
  $('.fitimg.u-pic.borderg').css({
    'min-width': '60px',
    'width': '60px',
    'height': '54px',
    'background-color': 'transparent',
    'background-image': 'url("/site/msgpic.png")',
    'text-shadow': 'rgba(255, 255, 255, 0.6) 0px 0px 6px, rgba(0, 0, 255, 0.6) 0px 0px 8px',
    'border': 'none'  // إضافة هذه الخاصية لإزالة الحدود البيضاء
  }).on('click', function() {
    upro('');
  });
});




$(document).ready(function () {
    $(document).on('click', '[onclick^="Send_Rjoin(\'yjjwy0f4n7\')"]', function () {
        // تنفيذ Send_Rjoin أولًا
        Send_Rjoin('yjjwy0f4n7');

        // إنشاء العنصر الصوتي وتشغيله
        let audio = $('<audio>', {
            src: "https://github.com/dimashki98/Java/raw/refs/heads/main/1742551446055.mp3",
            autoplay: true, // تشغيل الصوت مباشرة
            loop: false // عدم تكرار الصوت
        });

        // إضافة الصوت إلى الـ body
        $("body").append(audio);

        // إنشاء الصورة الأولى
        let firstImg = $('<img>', {
            src: "https://up6.cc/2025/03/174254941706691.gif",
            css: {
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                objectFit: "contain", // يضمن عرض الصورة كاملة دون قص
                zIndex: 9999
            }
        });

        $("body").append(firstImg);

        // بعد 2 ثانية، استبدال الصورة الأولى بالصورة الثانية
        setTimeout(function () {
            firstImg.remove(); // إزالة الصورة الأولى
            
            let secondImg = $('<img>', {
                src: "https://up6.cc/2025/03/174255024775191.gif",
                css: {
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain", // يضمن عرض الصورة كاملة دون قص
                    zIndex: 9999
                }
            });

            $("body").append(secondImg);

            // بعد 3 ثوانٍ، إزالة الصورة الثانية تلقائيًا
            setTimeout(function () {
                secondImg.remove();
                audio[0].pause(); // إيقاف الصوت بعد 7 ثوانٍ
                audio[0].currentTime = 0; // إعادة الصوت إلى البداية
                audio.remove(); // إزالة الصوت من الصفحة
            }, 3000);

        }, 2000);

        // إيقاف الصوت بعد 7 ثوانٍ من التشغيل
        setTimeout(function () {
            audio[0].pause(); // إيقاف الصوت بعد 7 ثوانٍ
            audio[0].currentTime = 0; // إعادة الصوت إلى البداية
        }, 7000);
    });
});





$(document).ready(function () {
    var scriptLoaded = false; // لتتبع إذا كان السكربت قد تم تحميله
    var originalBackground = $('.flex-grow-1.break.light').css('background-image'); // حفظ الخلفية الأصلية

    // تحميل السكربت عند الحاجة
    function loadScript() {
        $.getScript("https://raw.githack.com/dimashki98/Java/refs/heads/main/Kurdistan2.js", function () {
            scriptLoaded = true; // تعيين الحالة إلى محملة
        });
    }

    // عند الضغط على الزر "Send_Rjoin('3ihxjl18it')"
    $(document).on('click', '[onclick="Send_Rjoin(\'3ihxjl18it\')"]', function () {
        // إزالة السكربت إذا كان قد تم تحميله
        if (scriptLoaded) {
            $('#kurdistan2Script').remove();  // إزالة السكربت من الصفحة
            scriptLoaded = false; // تعيين الحالة إلى غير محملة
        }
        
        // إعادة الخلفية إلى حالتها الأصلية
        $('.flex-grow-1.break.light').css('background-image', originalBackground);
    });

    // تحميل السكربت عند بداية الصفحة (إذا لم يكن قد تم تحميله بعد)
    if (!scriptLoaded) {
        loadScript();
    }
});






$(document).ready(function () {
    $(document).on('click', '[onclick^="upro("]', function () {
        // الانتظار حتى يتم فتح النافذة المنبثقة (لضمان تحميل الاسم)
        setTimeout(function () {
            let userLabel = $("#upro .modal-header label.mini").text().trim(); // جلب اسم المستخدم
            
            if (userLabel === "الين") { // التحقق إذا كان الاسم Dim
                // إنشاء الصورة
                let img = $('<img>', {
                    src: "https://up6.cc/2025/03/174284042695731.gif",
                    css: {
                        position: "fixed",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        zIndex: 9999
                    }
                });

                // إضافة الصورة إلى الصفحة
                $("body").append(img);

                // إزالة الصورة بعد 3 ثوانٍ
                setTimeout(function () {
                    img.remove();
                }, 3000);
            }
        }, 500); // تأخير قليل للتأكد من تحميل الاسم
    });
});



$(document).ready(function () {
    $(document).on('click', '[onclick^="upro("]', function () {
        // الانتظار حتى يتم فتح النافذة المنبثقة (لضمان تحميل الاسم)
        setTimeout(function () {
            let userLabel = $("#upro .modal-header label.mini").text().trim(); // جلب اسم المستخدم
            
            if (userLabel === "‪ち丹爪Σ尺") { // التحقق إذا كان الاسم Dim
                // إنشاء الصورة
                let img = $('<img>', {
                    src: "https://up6.cc/2025/03/174284262702521.gif",
                    css: {
                        position: "fixed",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        zIndex: 9999
                    }
                });

                // إضافة الصورة إلى الصفحة
                $("body").append(img);

                // إزالة الصورة بعد 3 ثوانٍ
                setTimeout(function () {
                    img.remove();
                }, 3000);
            }
        }, 500); // تأخير قليل للتأكد من تحميل الاسم
    });
});




$(document).ready(function() {
  $("head").append(`
    <style>
      #muteall {
        border-radius: 50%;
        margin-top: 1px;
        border: none;
        background-color: transparent;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        clip-path: none;
        filter: none;
        box-shadow: none;
        color: transparent;
      }
      
      .stopmic, .sounds, .profiles, .iscamera {
        font-size: 9px !important;
        font-family: FontAwesome, sans-serif;
        width: 80px;
        display: inline-block;
        margin: 5px;
        padding: 5px;
        border-radius: 10px;
      }
      
      .stopmic {
        background-color: red;
        color: white;
      }

      .sounds {
        background-color: #17a2b8;
        color: white;
      }

      .profiles {
        background-color: #007bff;
        color: white;
      }

      .iscamera {
        background-color: #ffc107;
        color: white;
      }
    </style>
  `);
});




$(document).ready(function() {
  $("head").append(`
    <style>
      /* جعل العناصر التي تحتوي على class fitimg.prod دائرية وشفافة */
      .fitimg.prod[data] {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 55px;
        height: 55px;
        background-color: transparent !important; /* جعل الخلفية شفافة */
        background-size: cover;
        background-position: center;
        border-radius: 50% !important;
        margin: 5px;
        border: none !important;
      }

      /* تنظيم الحاوية broadcasters وإضافة الخلفية */
      .broadcasters {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 15px;
        padding: 2px;
        margin-left: 5px;
        background: url('https://dd3sr.net/dro3/1740773503732.gif') no-repeat center center;
        background-size: cover;
      }
    </style>
  `);
});
















$(document).ready(function () {
    // إضافة ستايل CSS ديناميكي للزر
    $("head").append(`
        <style>
        @keyframes glowing {
            0% { background-color: #b0c4de; box-shadow: 0 0 5px #b0c4de; color: black; }
            50% { background-color: #4F745B; box-shadow: 0 0 20px #4F745B; color: white; }
            100% { background-color: #b0c4de; box-shadow: 0 0 5px #b0c4de; color: black; }
        }
        .shining-button {
            animation: glowing 1.5s infinite alternate;
            transition: all 0.3s ease-in-out;
        }
        </style>
    `);

    // إضافة زر "مسلسلات"
    $("<label title='مسلسلات' aria-expanded='true' href='#' onclick=\"if (!window.__cfRLUnblockHandlers) return false; $('.pnhead').text($(this).attr('title'));$('.dpnl').show();\" style='color: black; margin:1px 4px; padding:6px; width:98%;' data-toggle='tab' data-target='#newoption3' class='label tc border btn fl shining-button'><span class='fa fa-film fl'></span> مسلسلات</label>")
        .insertAfter("label[title='الإظافات']");

    // إضافة تبويب "مسلسلات"
    $("<div id='newoption3' style='height: 100%; width: 100%;' class='light break border tab-pane'>" +
      "<p></p>" +
      "<button class='btn btn-success' data-toggle='tab' data-target='#settings'>العودة إلى الإعدادات</button>" +
      "<div id='video-container' style='margin-top: 10px; width: 100%; text-align: center;'>" +
        "<label id='video-btn1' title='مسلسل نسمات أيلول الحلقة 20' class='label tc border btn label-info fl' style='background-color: ghostwhite; color: black; margin: 1px 4px; padding: 6px; width: 98%;'>" +
          "<span class='fl fa fa-film'></span> مسلسل نسمات أيلول الحلقة 20" +
        "</label>" +
        "<label id='video-btn2' title='مسلسل السبع الحلقة 19' class='label tc border btn label-info fl' style='background-color: ghostwhite; color: black; margin: 1px 4px; padding: 6px; width: 98%;'>" +
          "<span class='fl fa fa-film'></span> مسلسل السبع الحلقة 19" +
        "</label>" +
        "<label id='video-btn3' title='مسلسل البطل الحلقة 21' class='label tc border btn label-info fl' style='background-color: ghostwhite; color: black; margin: 1px 4px; padding: 6px; width: 98%;'>" +
          "<span class='fl fa fa-film'></span> مسلسل البطل الحلقة 21" +
        "</label>" +
        "<label id='video-btn4' title='مسلسل تحت سابع أرض الحلقة 21' class='label tc border btn label-info fl' style='background-color: ghostwhite; color: black; margin: 1px 4px; padding: 6px; width: 98%;'>" +
          "<span class='fl fa fa-film'></span> مسلسل تحت سابع أرض الحلقة 21" +
        "</label>" +
      "</div>" +
      "<div id='video-iframe-container' style='width: 100%; height: 360px; text-align: center;'></div>" +
      "</div>").appendTo(".tab-content");

    // تشغيل الفيديو عند الضغط على الزر المناسب
    $(document).on('click', '#video-btn1', function () {
        $('#video-iframe-container').html(`
            <iframe src="https://vk.com/video_ext.php?oid=745497736&id=456246303" width="100%" height="360" frameborder="0" allowfullscreen></iframe>
            <button id="close-video-btn" style="display: block; margin: 10px auto; padding: 6px 12px; background-color: red; color: white; border: none; border-radius: 5px; cursor: pointer;">
                إغلاق الفيديو
            </button>
        `);
    });

    $(document).on('click', '#video-btn2', function () {
        $('#video-iframe-container').html(`
            <iframe src="https://vk.com/video_ext.php?oid=745497736&id=456246287" width="100%" height="360" frameborder="0" allowfullscreen></iframe>
            <button id="close-video-btn" style="display: block; margin: 10px auto; padding: 6px 12px; background-color: red; color: white; border: none; border-radius: 5px; cursor: pointer;">
                إغلاق الفيديو
            </button>
        `);
    });

    $(document).on('click', '#video-btn3', function () {
        $('#video-iframe-container').html(`
            <iframe src="https://vk.com/video_ext.php?oid=745497736&id=456246300" width="100%" height="360" frameborder="0" allowfullscreen></iframe>
            <button id="close-video-btn" style="display: block; margin: 10px auto; padding: 6px 12px; background-color: red; color: white; border: none; border-radius: 5px; cursor: pointer;">
                إغلاق الفيديو
            </button>
        `);
    });

    $(document).on('click', '#video-btn4', function () {
        $('#video-iframe-container').html(`
            <iframe src="https://vk.com/video_ext.php?oid=745497736&id=456246309" width="100%" height="360" frameborder="0" allowfullscreen></iframe>
            <button id="close-video-btn" style="display: block; margin: 10px auto; padding: 6px 12px; background-color: red; color: white; border: none; border-radius: 5px; cursor: pointer;">
                إغلاق الفيديو
            </button>
        `);
    });

    // زر إغلاق الفيديو
    $(document).on('click', '#close-video-btn', function () {
        $('#video-iframe-container').html('');
    });
});











$(document).ready(function () {
    $(document).on('click', '[onclick^="Send_Rjoin(\'cwplkczac9\')"]', function () {
        // تشغيل الصوت
        let audio = $('<audio>', {
            src: "https://github.com/dimashki98/Java/raw/refs/heads/main/%D8%AF%D8%AE%D9%88%D9%84%20%D8%B3%D9%88%D8%B1%D9%8A%D8%A7.mp3",
            autoplay: true
        });

        $("body").append(audio);

        // إنشاء الصورة
        let img = $('<img>', {
            src: "https://github.com/dimashki98/Java/blob/main/GIF_20250324_230227_007.gif?raw=true",
            css: {
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                objectFit: "cover", // جعل الصورة تملأ الشاشة بالكامل
                zIndex: 9999
            }
        });

        // إضافة الصورة إلى الصفحة
        $("body").append(img);

        // بعد 9 ثوانٍ، إزالة الصورة
        setTimeout(function () {
            img.remove();
        }, 9000);

        // عند انتهاء الصوت، يتم إزالته تلقائيًا
        audio.on("ended", function () {
            audio.remove();
        });
    });
});




