$(function () {

  const style = `
  <style>
    .birthday-item{
      position:fixed;
      top:-50px;
      pointer-events:none;
      z-index:999999;
      animation:fall linear forwards;
      filter:drop-shadow(0 0 8px rgba(255,0,150,0.6));
    }

    @keyframes fall{
      0%{transform:translateY(0) rotate(0deg);opacity:1;}
      100%{transform:translateY(110vh) rotate(360deg);opacity:0;}
    }

    .mada-overlay{
      position:fixed;
      inset:0;
      z-index:99999;
      display:flex;
      align-items:center;
      justify-content:center;
      backdrop-filter:blur(14px);
      -webkit-backdrop-filter:blur(14px);
      background:rgba(20,0,20,0.65);
    }

    .mada-card{
      text-align:center;
      padding:40px 55px;
      border-radius:24px;
      background:rgba(150,0,120,0.9);
      border:1px solid rgba(255,0,180,0.4);
      box-shadow:0 0 40px rgba(255,0,150,0.5);
      color:#fff;
      max-width:650px;
      width:90%;
    }

    .mada-card h1{
      font-size:2.8em;
      margin:10px 0;
      text-shadow:0 0 25px rgba(255,0,200,0.8);
    }

    .mada-card h2{
      font-size:1.8em;
      color:#ff80df;
      margin-bottom:20px;
    }

    .birthday-close-btn{
      position:fixed;
      top:14px;
      left:14px;
      z-index:9999999;
      width:38px;
      height:38px;
      border-radius:50%;
      border:none;
      background:rgba(150,0,120,0.9);
      color:#fff;
      font-size:18px;
      cursor:pointer;
      box-shadow:0 0 10px rgba(255,0,180,0.6);
    }
  </style>
  `;

  $("head").append(style);

  var celebrationActive = true;

  var closeBtn = $('<button class="birthday-close-btn">&times;</button>');
  $("body").append(closeBtn);

  closeBtn.on("click", function(){
    celebrationActive=false;
    $(".birthday-item").remove();
    $(".mada-overlay").remove();
    closeBtn.remove();
  });

  var items=["🎉","🎂","🎈","✨","🥳","🎊"];

  function createItem(){
    if(!celebrationActive) return;
    var emoji=items[Math.floor(Math.random()*items.length)];
    var el=$("<div class='birthday-item'>"+emoji+"</div>");
    el.css({
      left:Math.random()*100+"vw",
      fontSize:(Math.random()*25+15)+"px",
      animationDuration:(Math.random()*3+3)+"s"
    });
    $("body").append(el);
    setTimeout(function(){el.remove();},6000);
  }

  setInterval(createItem,150);

  var card=$(`
    <div class="mada-overlay">
      <div class="mada-card">
        <h1>Happy Birthday 🎂</h1>
        <h2>روندا</h2>

        <div style="margin:20px auto; width:100%; max-width:560px;">
          <iframe
            id="bdayVideo"
            width="100%" height="315"
            src="https://www.youtube.com/embed/IsZjS1Mb7fY?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=IsZjS1Mb7fY"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen>
          </iframe>
        </div>

        <p>اليوم القمر احتفل لأنه عيد ميلادك</p>
        <p>كل عام وأنتِ القلب النابض وروح الموقع</p>
        <p>كل عام وأحلامك تكبر وتتحقق</p>
        <p>العمر كله بالسعادة والنجاح ✨</p>
      </div>
    </div>
  `);

  $("body").append(card);

  /* 🔊 يفك الميوت ويشغل الصوت أول لمسة */
  var videoStarted=false;

  $(document).one("click touchstart", function(){
    if(videoStarted) return;
    videoStarted=true;

    var iframe=document.getElementById("bdayVideo");
    iframe.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
    iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
  });

});
