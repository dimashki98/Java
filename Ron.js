$(function () {

  const style = `
  <style>
    /* ===== العناصر المتساقطة ===== */
    .birthday-item {
      position: fixed;
      top: -50px;
      pointer-events: none;
      z-index: 999999;
      animation: fall linear forwards;
      filter: drop-shadow(0 0 6px rgba(255, 200, 0, 0.5));
    }

    @keyframes fall {
      0% {
        transform: translateY(0) scale(1) rotate(0deg) translateX(0);
        opacity: 1;
      }
      100% {
        transform: translateY(110vh) scale(1.4) rotate(360deg);
        opacity: 0;
      }
    }

    /* ===== انفجار عند النقر ===== */
    .burst {
      position: fixed;
      pointer-events: none;
      z-index: 9999999;
      animation: burst ease-out forwards;
    }

    @keyframes burst {
      0% { transform: translate(0,0) scale(1); opacity:1; }
      100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity:0; }
    }

    /* ===== البانر الرئيسي ===== */
    .mada-overlay {
      position: fixed;
      inset: 0;
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      perspective: 1000px;
    }

    .mada-card {
      text-align: center;
      padding: 40px 55px;
      border-radius: 24px;
      background: radial-gradient(ellipse at center, rgba(255,215,0,0.15), rgba(0,0,0,0));
      border: 1px solid rgba(255,215,0,0.2);
      opacity: 0;
      transform: scale(0.5) rotateY(90deg);
      animation: cardReveal 1.5s cubic-bezier(0.34,1.56,0.64,1) 0.8s forwards;
    }

    @keyframes cardReveal {
      0% { opacity:0; transform:scale(0.5) rotateY(90deg); }
      60% { transform:scale(1.05) rotateY(-5deg); }
      100% { opacity:1; transform:scale(1) rotateY(0deg); }
    }

    .mada-card h1 {
      font-size: 3em;
      color: #ffcc00;
      margin: 10px 0;
      text-shadow: 0 0 30px rgba(255,200,0,0.6);
      animation: glow 2s infinite alternate;
    }

    @keyframes glow {
      from { text-shadow:0 0 20px rgba(255,200,0,0.4); }
      to { text-shadow:0 0 40px rgba(255,200,0,0.9); }
    }

    .mada-card h2 {
      font-size: 2em;
      color: #ff4da6;
      margin: 10px 0;
    }

    .mada-card p {
      font-size: 1.2em;
      color: #fff;
      margin: 8px 0;
      line-height: 1.8;
      opacity: 0;
      animation: fadeUp 0.8s ease forwards;
    }

    .mada-card p:nth-child(3){animation-delay:1.5s;}
    .mada-card p:nth-child(4){animation-delay:2s;}
    .mada-card p:nth-child(5){animation-delay:2.5s;}
    .mada-card p:nth-child(6){animation-delay:3s;}

    @keyframes fadeUp {
      from { opacity:0; transform:translateY(20px); }
      to { opacity:1; transform:translateY(0); }
    }

    .big-cake {
      position: fixed;
      z-index: 999990;
      pointer-events: none;
      font-size: 100px;
      left:50%;
      top:16%;
      transform: translate(-50%, -50%);
      animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
      0%,100%{ transform:translate(-50%,-50%) scale(1);}
      50%{ transform:translate(-50%,-50%) scale(1.15);}
    }

    .birthday-close-btn {
      position: fixed;
      top:14px;
      left:14px;
      z-index:99999999;
      width:38px;
      height:38px;
      border-radius:50%;
      border:none;
      background:rgba(0,0,0,0.6);
      color:#fff;
      font-size:18px;
      cursor:pointer;
    }

    .fadeout { opacity:0 !important; transition:0.8s ease !important; }
  </style>
  `;

  $("head").append(style);

  var activeIntervals = [];
  var celebrationActive = true;

  var closeBtn = $('<button class="birthday-close-btn">&times;</button>');
  $("body").append(closeBtn);

  closeBtn.on("click", function(){
    celebrationActive=false;
    activeIntervals.forEach(clearInterval);
    $(".birthday-item,.burst").remove();
    $(".mada-overlay,.big-cake").addClass("fadeout");
    setTimeout(function(){
      $(".mada-overlay,.big-cake").remove();
      closeBtn.remove();
    },800);
  });

  var items = ["🎉","🎂","🎈","✨","🥳","🎊"];

  function createItem(){
    if(!celebrationActive) return;
    var emoji = items[Math.floor(Math.random()*items.length)];
    var el = $("<div class='birthday-item'>"+emoji+"</div>");
    el.css({
      left: Math.random()*100+"vw",
      fontSize:(Math.random()*25+15)+"px",
      animationDuration:(Math.random()*3+3)+"s"
    });
    $("body").append(el);
    setTimeout(function(){ el.remove(); },6000);
  }

  var intervalFast = setInterval(createItem,150);
  activeIntervals.push(intervalFast);

  $(document).on("click.birthday", function(e){
    if(!celebrationActive) return;
    if($(e.target).hasClass("birthday-close-btn")) return;

    for(var i=0;i<12;i++){
      var angle=(360/12)*i;
      var dist=Math.random()*100+60;
      var tx=Math.cos(angle*Math.PI/180)*dist;
      var ty=Math.sin(angle*Math.PI/180)*dist;
      var emoji=items[Math.floor(Math.random()*items.length)];

      var particle=$("<div class='burst'>"+emoji+"</div>");
      particle.css({
        left:e.clientX+"px",
        top:e.clientY+"px",
        fontSize:(Math.random()*15+15)+"px",
        "--tx":tx+"px",
        "--ty":ty+"px",
        animationDuration:"0.8s"
      });

      $("body").append(particle);
      setTimeout(function(){ particle.remove(); },800);
    }
  });

  var card=$(`
    <div class="mada-overlay">
      <div class="mada-card">
        <h1>Happy Birthday 🎂</h1>
        <h2>روندا</h2>
        <p>اليوم القمر احتفل لأنه عيد ميلادك</p>
        <p>كل عام وأنتِ القلب النابض وروح الموقع</p>
        <p>كل عام وأحلامك تكبر وتتحقق</p>
        <p>من كل أعضاء الموقع… العمر كله بالسعادة والنجاح ✨</p>
      </div>
    </div>
  `);

  $("body").append(card);

  var cake=$("<div class='big-cake'>🎂</div>");
  $("body").append(cake);

});
