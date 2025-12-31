$(function(){
    'use strict';
    
    // ⚙️ Configuration
    const CONFIG = {
        emojis: ["🎉", "✨", "🎊", "🌟", "🥳", "🎆", "🎈", "💫"],
        emojiInterval: 150,
        fallSpeed: 3,
        rotationSpeed: 2,
        maxEmojis: 50,
        popupDelay: 800
    };
    
    // 🎨 Inject Professional Styles
    $("<style>").text(`
        @keyframes fadeInScale {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes shimmer {
            0%, 100% { filter: brightness(1); }
            50% { filter: brightness(1.3); }
        }
        
        .falling-emoji {
            position: fixed;
            pointer-events: none;
            z-index: 999999;
            user-select: none;
            will-change: transform, opacity;
            animation: fadeInScale 0.3s ease-out;
        }
        
        .ny-popup {
            border-radius: 24px !important;
            box-shadow: 0 0 40px rgba(255, 215, 0, 0.5), 
                        0 0 80px rgba(255, 215, 0, 0.3) !important;
            border: 2px solid rgba(255, 215, 0, 0.4) !important;
            padding: 24px !important;
            animation: fadeInScale 0.5s ease-out !important;
            backdrop-filter: blur(10px);
        }
        
        .ny-content {
            font-size: 18px;
            line-height: 1.8;
            color: #fff;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .ny-highlight {
            color: #FFD700;
            font-weight: 700;
            animation: shimmer 2s infinite;
        }
        
        .ny-image {
            width: 100%;
            max-width: 500px;
            border-radius: 16px;
            margin-bottom: 20px;
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
            transition: transform 0.3s ease;
        }
        
        .ny-image:hover {
            transform: scale(1.02);
        }
        
        .ny-btn {
            background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%) !important;
            color: #000 !important;
            padding: 14px 32px !important;
            font-size: 18px !important;
            border-radius: 30px !important;
            font-weight: 700 !important;
            box-shadow: 0 4px 15px rgba(255, 215, 0, 0.6),
                        0 0 30px rgba(255, 215, 0, 0.4) !important;
            cursor: pointer !important;
            border: none !important;
            transition: all 0.3s ease !important;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .ny-btn:hover {
            transform: translateY(-2px) scale(1.05) !important;
            box-shadow: 0 6px 20px rgba(255, 215, 0, 0.8),
                        0 0 40px rgba(255, 215, 0, 0.6) !important;
        }
        
        .ny-btn:active {
            transform: translateY(0) scale(1.02) !important;
        }
    `).appendTo("head");
    
    // 🎭 Emoji Manager Class
    class EmojiManager {
        constructor() {
            this.interval = null;
            this.activeEmojis = [];
        }
        
        start() {
            this.interval = setInterval(() => {
                if (this.activeEmojis.length < CONFIG.maxEmojis) {
                    this.createEmoji();
                }
            }, CONFIG.emojiInterval);
        }
        
        stop() {
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
            // Clean up all emojis
            this.activeEmojis.forEach(emoji => emoji.remove());
            this.activeEmojis = [];
        }
        
        createEmoji() {
            const $emoji = $("<div>")
                .addClass("falling-emoji")
                .text(CONFIG.emojis[Math.floor(Math.random() * CONFIG.emojis.length)]);
            
            // Random properties
            const startX = Math.random() * $(window).width();
            const fontSize = 20 + Math.random() * 30;
            const rotation = Math.random() * 360;
            
            $emoji.css({
                left: startX + "px",
                top: "-50px",
                fontSize: fontSize + "px",
                opacity: 0.7 + Math.random() * 0.3,
                transform: `rotate(${rotation}deg)`
            });
            
            $("body").append($emoji);
            this.activeEmojis.push($emoji[0]);
            
            this.animateEmoji($emoji[0], startX);
        }
        
        animateEmoji(emoji, startX) {
            let posY = -50;
            let rotation = 0;
            const maxHeight = $(window).height() + 50;
            
            const animate = () => {
                if (!document.body.contains(emoji)) {
                    const index = this.activeEmojis.indexOf(emoji);
                    if (index > -1) this.activeEmojis.splice(index, 1);
                    return;
                }
                
                posY += CONFIG.fallSpeed;
                rotation += CONFIG.rotationSpeed;
                const driftX = Math.sin(posY / 50) * 2;
                
                emoji.style.transform = `translate(${driftX}px, ${posY}px) rotate(${rotation}deg)`;
                
                if (posY < maxHeight) {
                    requestAnimationFrame(animate);
                } else {
                    $(emoji).remove();
                    const index = this.activeEmojis.indexOf(emoji);
                    if (index > -1) this.activeEmojis.splice(index, 1);
                }
            };
            
            requestAnimationFrame(animate);
        }
    }
    
    // 🎊 Initialize Celebration
    const emojiManager = new EmojiManager();
    
    setTimeout(() => {
        emojiManager.start();
        
        Swal.fire({
            title: "✨🎆 عام 2026 سعيد 🎆✨",
            html: `
                <img src="https://www.eventstodayz.com/wp-content/uploads/2025/11/happy-new-year-2026-animates-image.gif"
                     class="ny-image"
                     alt="Happy New Year 2026">
                
                <div class="ny-content">
                    <p>شات هواك يتقدّم بأجمل التهاني والتبريكات بمناسبة قدوم العام الجديد،</p>
                    <p>راجين من الله أن يجعله عامًا عامرًا بالخير والبركات 🌙✨</p>
                    <p>ونسأله تعالى أن يرزق أعضاءنا الكرام السعادة والتوفيق،</p>
                    <p>وأن يحقق لهم ما يتمنّون 🤍</p>
                    <br>
                    <p class="ny-highlight">وكل عام وأنتم بخير 🌟</p>
                </div>
            `,
            confirmButtonText: "🎇 احتفل معنا",
            buttonsStyling: false,
            allowOutsideClick: false,
            customClass: {
                popup: "ny-popup",
                confirmButton: "ny-btn"
            },
            background: "rgba(10, 10, 30, 0.95)",
            color: "#fff",
            showClass: {
                popup: 'animate__animated animate__zoomIn animate__faster'
            },
            hideClass: {
                popup: 'animate__animated animate__zoomOut animate__faster'
            }
        }).then(() => {
            emojiManager.stop();
        });
        
    }, CONFIG.popupDelay);
    
});
