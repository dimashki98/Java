$(function(){

    // 🍾 دالة سقوط الإيموجي
    let emojiInterval; // ← لحفظ الـ interval وإيقافه لاحقاً

    function fallingEmojis() {
        const emojis = ["🎉","✨","🎊","🌟","🕯️","🥳"];
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
            title: "🎉✨ عام 2026 سعيد ✨🎉",
            html: `
                <div style='font-size:18px;line-height:1.7;'>
                شات هواك يتقدّم بأجمل التهاني والتبريكات بمناسبة قدوم العام الجديد،<br>
                راجين من الله أن يجعله عامًا عامرًا بالخير والبركات 🌙✨ <br>
                ونسأله تعالى أن يرزق أعضاءنا الكرام السعادة والتوفيق،<br>
                وأن يحقق لهم ما يتمنّون 🤍<br>
                <b>وكلُّ عامٍ وأنتم بخير 🌟</b>
                </div>
            `,
            confirmButtonText: "🎆 احتفل معنا",
            backdrop: `
                rgba(0,0,0,0.7)
                url("https://www.bilalmania.com/images/cards/2025/10/happy-new-year-2026-gif-for-whatsapp.gif")
                center top
                no-repeat
            `,
            color: "#fff",
            background: "rgba(0,0,0,0.85)",
            customClass:{
                popup: "rounded-2xl"
            }
        }).then(()=>{
            // 🛑 عند إغلاق النافذة → أوقف هطول الإيموجي
            clearInterval(emojiInterval);
        });

    }, 800);
});
