$(function(){

    // 🍾 دالة سقوط الإيموجي
    let emojiInterval;

    function fallingEmojis() {
        const emojis = ["🎉","✨","🎊","🌟","🥳","🎆"];
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
            title: "✨🎆 عام 2026 سعيد 🎆✨",
            html: `
                <img src="https://www.eventstodayz.com/wp-content/uploads/2025/11/happy-new-year-2026-animates-image.gif"
                     style="width:100%;border-radius:16px;margin-bottom:18px;box-shadow:0 0 12px rgba(255,215,0,0.55);">

                <div style='font-size:18px;line-height:1.7;color:#fff;'>
                شات هواك يتقدّم بأجمل التهاني والتبريكات بمناسبة قدوم العام الجديد،<br>
                راجين من الله أن يجعله عامًا عامرًا بالخير والبركات 🌙✨ <br>
                ونسأله تعالى أن يرزق أعضاءنا الكرام السعادة والتوفيق،<br>
                وأن يحقق لهم ما يتمنّون 🤍<br><br>
                <b style="color:#FFD700;">وكل عام وأنتم بخير 🌟</b>
                </div>
            `,
            confirmButtonText: "🎇 احتفل معنا",
            buttonsStyling: false,
            customClass:{
                popup: "ny-popup",
                confirmButton: "ny-btn"
            },
            background: "rgba(0,0,0,0.9)",  // ← خلفية عادية بدون صور
            color: "#fff"
        }).then(()=>{
            clearInterval(emojiInterval); // إيقاف الإيموجي عند الإغلاق
        });

    }, 800);

    // 🎨 تنسيق زر النافذة والستايل فقط — بدون صور خارجية
    $("<style>")
    .text(`
        .ny-popup{
            border-radius:22px !important;
            box-shadow:0 0 25px rgba(255,215,0,0.4) !important;
            border:2px solid rgba(255,215,0,0.35) !important;
            padding:16px !important;
        }
        .ny-btn{
            background: linear-gradient(90deg,#FFD700,#FFB700) !important;
            color:#000 !important;
            padding:12px 24px !important;
            font-size:17px !important;
            border-radius:25px !important;
            font-weight:600 !important;
            box-shadow:0 0 10px rgba(255,215,0,0.7) !important;
            cursor:pointer;
        }
        .ny-btn:hover{
            filter:brightness(1.15);
            transform:scale(1.05);
        }
    `)
    .appendTo("head");

});
