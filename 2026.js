$(function () {

    // دالة القصاصات
    function confetti() {
        const duration = 3000;
        const end = Date.now() + duration;
        (function frame() {
            const colors = ["#FFD700","#FF4500","#1E90FF","#32CD32","#FF1493","#9400D3"];
            const conf = document.createElement("div");
            conf.style.position = "fixed";
            conf.style.top = "-10px";
            conf.style.left = Math.random() * 100 + "%";
            conf.style.width = "8px";
            conf.style.height = "14px";
            conf.style.background = colors[Math.floor(Math.random()*colors.length)];
            conf.style.opacity = 0.85;
            conf.style.transform = "rotate(" + Math.random()*180 + "deg)";
            conf.style.zIndex = 999999;
            document.body.appendChild(conf);
            let fall = setInterval(()=>{
                conf.style.top = (parseInt(conf.style.top)+3) + "px";
                if(parseInt(conf.style.top) > window.innerHeight){
                    clearInterval(fall);
                    conf.remove();
                }
            }, 10);
            if(Date.now() < end) requestAnimationFrame(frame);
        }());
    }

    // المراقبة عبر Mutation Observer
    const observer = new MutationObserver((mutations, obs)=>{
        if ($("body").children().length > 0) {
            obs.disconnect();
            setTimeout(()=>{
                confetti();
                alert("🎉 شات هواك يتقدّم بأجمل التهاني والتبريكات بمناسبة قدوم العام الجديد 2026، راجين من الله أن يجعله عامًا عامرًا بالخير والبركات. 🌙✨\nونسأله تعالى أن يرزق أعضاءنا الكرام السعادة والتوفيق، وأن يحقق لهم ما يتمنّون.\nوكلُّ عامٍ وأنتم بخير 🌟");
            }, 800);
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

});
