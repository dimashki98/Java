$(document).ready(function () {
    $("head").append(`
        <style>
            #closecall {
                background: linear-gradient(135deg, #075E54, #128C7E);
                border-radius: 15px;
                width: 300px;
                padding: 15px;
                box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
                color: white;
                font-family: "Arial", sans-serif;
                position: fixed;
                top: 60px;
                left: 50%;
                transform: translateX(-50%);
                text-align: center;
                display: none;
                animation: fadeIn 0.3s ease-in-out;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateX(-50%) translateY(-20px); }
                to { opacity: 1; transform: translateX(-50%) translateY(0); }
            }

            #closecall .uzer {
                display: flex;
                align-items: center;
                gap: 12px;
                justify-content: center;
                padding: 10px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            }

            #closecall .u-pic {
                border-radius: 50%;
                border: 3px solid white;
                width: 60px;
                height: 60px;
                background-size: cover;
                background-position: center;
                box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
            }

            #closecall .callstat {
                background: rgba(255, 255, 255, 0.2);
                color: white;
                font-weight: bold;
                border-radius: 8px;
                padding: 8px 12px;
                display: inline-block;
                margin-top: 5px;
                font-size: 14px;
            }

            #closecall .btn {
                width: 45px;
                height: 45px;
                text-align: center;
                border-radius: 50%;
                margin: 10px;
                font-size: 22px;
                color: white;
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease-in-out;
            }

            .callaccept { background: #25D366; }
            .calldeny { background: #D32F2F; }
            .meutee, .vulomeup { background: rgba(255, 255, 255, 0.2); }

            .btn:hover {
                transform: scale(1.1);
                box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
            }

        </style>
    `);

    $("body").append(`
        <div id="closecall">
            <div class="uzer">
                <div class="u-pic" style="background-image: url('/pic/1741464394615.jpg');"></div>
                <div>
                    <div style="font-size: 16px; font-weight: bold;">مكالمة واردة</div>
                    <span class="callstat">الاتصال قيد التنفيذ...</span>
                </div>
            </div>
            <div>
                <button class="btn callaccept fa fa-phone"></button>
                <button class="btn calldeny fa fa-phone"></button>
                <button class="btn meutee fa fa-microphone-slash"></button>
                <button class="btn vulomeup fa fa-volume-high"></button>
            </div>
        </div>
    `);

    // عرض القائمة عند الحاجة
    $("#closecall").fadeIn(300);

    // زر رفض المكالمة
    $(".calldeny").click(function () {
        $("#closecall").fadeOut(300);
    });

    // تبديل كتم الصوت
    $(".meutee").click(function () {
        $(this).toggleClass("fa-microphone-slash fa-microphone");
    });

    // تأثير رفع الصوت
    $(".vulomeup").click(function () {
        $(this).toggleClass("btn-info btn-success");
    });
});
