$(function(){

    // 🍾 دالة سقوط الإيموجي
    let emojiInterval;

    function fallingEmojis() {
        const emojis = ["🎉","✨","🎊","🌟","🥳","🎆","💛"];
        emojiInterval = setInterval(()=>{
            const em = document.createElement("div");
            em.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            em.style.position = "fixed";
            em.style.left = Math.random() * 100 + "%";
            em.style.top = "-30px";
            em.style.fontSize = (20 + Math.random()*25) + "px";
            em.style.zIndex = 999999;
            em.style.opacity = 0.9;
            document.body.appendChild(em);

            let fall = setInterval(()=>{
                em.style.top = (parseInt(em.style.top) + 2) + "px";
                if(parseInt(em.style.top) > window.innerHeight){
                    clearInterval(fall);
                    em.remove();
                }
            },10);
        }, 200);
    }

    // 🎆 نافذة SweetAlert رأس السنة
    setTimeout(()=>{

        fallingEmojis();

        Swal.fire({
            title: "✨🎆 أهلاً بالعام الجديد 2026 🎆✨",
            html: `
                <img src="https://www.eventstodayz.com/wp-content/uploads/2025/11/happy-new-year-2026-animates-image.gif"
                     style="width:100%;border-radius:14px;margin-bottom:18px;box-shadow:0 0 12px rgba(255,215,0,0.6);">
                     
                <div style='font-size:18px;line-height:1.7;color:#fff;'>
                شات هواك يتقدّم بأجمل التهاني والتبريكات <br>
                بمناسبة قدوم العام الجديد 🎉🌙✨ <br>
                نسأل الله أن يكون عامًا مليئًا بالخير والبركات <br>
                وأن يحقّق لكل عضو ما يتمنّى 🤍 <br><br>
                <b style="color:#FFD700;font-size:20px;">وكل عام وأنتم بخير 🌟🥂</b>
                </div>
            `,
            confirmButtonText: "🎇 بدء الاحتفال",
            buttonsStyling: false,
            customClass:{
                popup: "ny-popup",
                confirmButton: "ny-btn"
            },
            background: "rgba(0,0,0,0.9)",
            backdrop: `
                rgba(0,0,0,0.4)
                url("https://i.imgur.com/8RKXAIV.gif")
                center center
                repeat
            `,
            showClass: {
                popup: `
                animate__animated
                animate__zoomIn
                animate__faster
                `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__zoomOut
                animate__faster
                `
            }
        }).then(()=>{
            // 🛑 عند إغلاق النافذة → أوقف هطول الإيموجي
            clearInterval(emojiInterval);
        });

    }, 800);

    // ✨ إضافة CSS للزر والنافذة – بدون وسوم HTML
    $("<style>")
    .text(`
        .ny-popup{
            border-radius:22px !important;
            box-shadow:0 0 30px rgba(255,215,0,0.45) !important;
            border:2px solid rgba(255,215,0,0.35);
            padding:18px !important;
            animation-duration:0.5s !important;
        }
        .ny-btn{
            background: linear-gradient(90deg,#FFD700,#FFB700) !important;
            color:#000 !important;
            padding:12px 25px !important;
            font-size:18px !important;
            border-radius:25px !important;
            font-weight:600 !important;
            box-shadow:0 0 10px rgba(255,215,0,0.7) !important;
            border:none !important;
            cursor:pointer;
        }
        .ny-btn:hover{
            filter:brightness(1.15);
            transform:scale(1.05);
        }
    `)
    .appendTo("head");

});
