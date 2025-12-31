$(function(){

    // 🎶 تشغيل موسيقى
    function playMusic(){
        const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
        audio.volume = 0.25;
        audio.play();
    }

    // 🎊 سقوط إيموجي
    function fallingEmojis() {
        const emojis = ["🎉","✨","🎊","🌟","🥳","🎆","💛"];
        setInterval(()=>{
            const em = document.createElement("div");
            em.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            em.style.position = "fixed";
            em.style.left = Math.random() * 100 + "%";
            em.style.top = "-30px";
            em.style.fontSize = (20 + Math.random()*30) + "px";
            em.style.zIndex = 999999;
            em.style.opacity = 0.9;
            em.style.animation = "fall 4s linear";
            document.body.appendChild(em);
            setTimeout(()=> em.remove(), 4000);
        }, 180);
    }

    // 🎇 عدّ تنازلي قبل النافذة
    function countdown(cb){
        let count = 3;
        const box = document.createElement("div");
        box.style.position = "fixed";
        box.style.top = "50%";
        box.style.left = "50%";
        box.style.transform = "translate(-50%, -50%)";
        box.style.fontSize = "65px";
        box.style.fontWeight = "bold";
        box.style.color = "#FFD700";
        box.style.zIndex = 99999999;
        box.id = "newyearCount";
        document.body.appendChild(box);

        const interval = setInterval(()=>{
            box.innerText = count;
            count--;
            if(count < 0){
                clearInterval(interval);
                box.remove();
                cb();
            }
        }, 900);
    }

    // 🥂 نافذة التهنئة الفخمة
    function showPopup(){
        fallingEmojis();
        playMusic();
        Swal.fire({
            title: "👑✨ أهلاً بالعام الجديد 2026 ✨👑",
            html: `
                <div style='font-size:18px;line-height:1.7;color:#fff'>
                شات هواك يتقدّم بأجمل التهاني والتبريكات<br>
                بمناسبة قدوم العام الجديد 🎉🌙✨<br>
                نسأل الله أن يكون عامًا مليئًا بالخير والبركات<br>
                وأن يحقّق لكل عضو ما يتمنى 🤍<br><br>
                <b style="color:#FFD700;">وكل عام وأنتم بخير 🌟🥂</b>
                </div>
            `,
            confirmButtonText: "🎇 احتفل الآن",
            background: "rgba(0,0,0,0.85)",
            color: "#fff",
            backdrop: `
                rgba(0,0,0,0.55)
                url("https://i.imgur.com/8RKXAIV.gif")
                center bottom
                repeat
            `,
            customClass:{
                popup: "rounded-3xl shadow-xl"
            }
        });
    }

    // 🚀 ابدأ – مراقبة DOM ثم العدّ ثم العرض
    const obs = new MutationObserver((m, o)=>{
        if(document.body.children.length > 0){
            o.disconnect();
            countdown(showPopup);
        }
    });
    obs.observe(document.body, {childList: true, subtree:true});

});
