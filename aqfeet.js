$(function () {
  var css = `
  :root{
    --bg:#f7fbff;
    --card:#ffffff;
    --txt:#0b1220;
    --mut:#6b7280;
    --bd:rgba(15,23,42,.10);
    --shadow:0 14px 28px rgba(2,6,23,.10);
    --shadow2:0 10px 22px rgba(2,6,23,.08);
    --g1:#7c3aed;
    --g2:#06b6d4;
    --btn1:#22c55e;
    --btn2:#06b6d4;
    --r:14px;
  }

 #tlogins  ul.nav.nav-tabs.fl{
    width:100% !important;
    height:auto !important;
    margin:0 !important;
    padding:8px !important;
    background:rgba(255,255,255,.92) !important;
    border:1px solid var(--bd) !important;
    border-radius:16px !important;
    box-shadow:var(--shadow2) !important;
    display:flex !important;
    align-items:center !important;
    justify-content:space-between !important;
    gap:8px !important;
    flex-wrap:nowrap !important;
    overflow:hidden !important;
  }

 #tlogins  ul.nav.nav-tabs.fl > li{
    float:none !important;
    margin:0 !important;
    padding:0 !important;
    flex:1 1 0 !important;
    min-width:0 !important;
  }

 #tlogins  ul.nav.nav-tabs.fl > li > a{
    display:flex !important;
    align-items:center !important;
    justify-content:center !important;
    gap:8px !important;
    width:100% !important;
    padding:10px 10px !important;
    border-radius:12px !important;
    border:1px solid transparent !important;
    background:transparent !important;
    color:var(--mut) !important;
    font-weight:900 !important;
    font-size:13px !important;
    line-height:1 !important;
    text-decoration:none !important;
    transition:transform .12s ease, background .12s ease, box-shadow .12s ease, color .12s ease;
    white-space:nowrap !important;
  }

  #tlogins  ul.nav.nav-tabs.fl > li > a:before{
    content:"";
    width:8px;
    height:8px;
    border-radius:999px;
    background:rgba(107,114,128,.35);
    box-shadow:0 0 0 3px rgba(107,114,128,.12);
  }

  #tlogins  ul.nav.nav-tabs.fl > li.active > a,
  #tlogins ul.nav.nav-tabs.fl > li > a[aria-expanded="true"]{
    background:linear-gradient(135deg, rgba(124,58,237,.10), rgba(6,182,212,.10)) !important;
    border:1px solid rgba(124,58,237,.18) !important;
    color:var(--txt) !important;
    box-shadow:0 12px 22px rgba(124,58,237,.12) !important;
  }

 #tlogins  ul.nav.nav-tabs.fl > li.active > a:before,
 #tlogins  ul.nav.nav-tabs.fl > li > a[aria-expanded="true"]:before{
    background:linear-gradient(135deg, var(--g1), var(--g2));
    box-shadow:0 0 0 3px rgba(124,58,237,.16);
  }

 #tlogins  ul.nav.nav-tabs.fl > li > a:hover{
    background:rgba(15,23,42,.04) !important;
    transform:translateY(-1px);
  }

  #tlogins  .tab-content.fl{
    width:100% !important;
    height:auto !important;
    margin-top:10px !important;
    padding:10px !important;
    background:rgba(255,255,255,.92) !important;
    border:1px solid var(--bd) !important;
    border-radius:16px !important;
    box-shadow:var(--shadow2) !important;
  }

  #tlogins  .tab-pane{
    padding:0 !important;
    width:100% !important;
  }

 #tlogins .tab-pane.in.active, #tlogins .tab-pane.active {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 8px !important;
    align-items: center !important;
}
#u1, #u2, #u3, #pass1, #pass2{
      border: 1px solid rgba(15, 23, 42, .12) !important;
}

#tlogins   .tab-pane.hid{
    display:none !important;
  }

 #tlogins  .tab-pane input{
    height:38px !important;
    padding:0 12px !important;
    border-radius:0px !important;
    border:1px solid rgba(15,23,42,.12) !important;
    background:rgba(247,251,255,.95) !important;
    color:var(--txt) !important;
    font-weight:900 !important;
    outline:none !important;
    box-shadow:inset 0 1px 0 rgba(255,255,255,.7);
    transition:border-color .12s ease, box-shadow .12s ease, transform .12s ease;
    margin:0 !important;
  }

 #tlogins  .tab-pane input::placeholder{
    color:rgba(107,114,128,.95) !important;
    font-weight:900 !important;
  }

 #tlogins  .tab-pane input:focus{
    border-color:rgba(6,182,212,.45) !important;
    box-shadow:0 0 0 4px rgba(6,182,212,.12) !important;
    transform:translateY(-1px);
  }

#tlogins .tab-pane .btn.btn-primary {
    height: 38px !important;
    padding: 0 14px !important;
    border-radius: 3px !important;
    border: 1px solid rgba(255, 255, 255, .85) !important;
    background: var(--bg-primary);
    font-weight: 1000 !important;
    font-size: 14px !important;
    color: #ffffff !important;
    transition: transform .12s ease, filter .12s ease;
    margin: 0 !important;
}

  #tlogins  .tab-pane .btn.btn-primary:hover{
    filter:brightness(1.03);
    transform:translateY(-1px);
  }

  #tlogins  .tab-pane .btn.btn-primary:active{
    transform:translateY(0px);
  }

 #tlogins  .tab-pane .btn.fr.fa-eye{
    height:25px !important;
    width:25px !important;
    display:inline-flex !important;
    align-items:center !important;
    justify-content:center !important;
    border-radius:12px !important;
    border:1px solid rgba(15,23,42,.12) !important;
    color:var(--txt) !important;
    box-shadow:0 10px 22px rgba(2,6,23,.08) !important;
    padding:0 !important;
    margin:0 !important;
    cursor:pointer !important;
    transition:transform .12s ease, background .12s ease;
  }
  `;

  $("<style>", { id: "loginTabsLuxuryStyle", text: css }).appendTo("head");

    $(id).find("input:visible:first").focus();
  });



$(function () {
  function addStyle(id, css){
    $("#" + id).remove();
    $("<style>", { id: id, text: css }).appendTo("head");
  }

  addStyle("softUhtmlStyle", `
:root{
  --bg:#f7fbff; --card:#fff; --txt:#0b1220; --mut:#6b7280;
  --bd:rgba(15,23,42,.10); --shadow2:0 10px 22px rgba(2,6,23,.08);
  --g1:#7c3aed; --g2:#06b6d4; --r:14px;
}

/* ====== التعديل الوحيد هون ====== */
#lonline .fl.hand.nosel.uzr.uhtml:not(.hid),
#users  .fl.hand.nosel.uzr.uhtml:not(.hid),
#wall   .uzr.d-flex.mm:not(.hid),
#d2     .uzr.d-flex.mm:not(.hid){
  display:flex;
  margin:4px 0 !important;
  border-radius:14px !important;
  border:1px solid var(--bd) !important;
  box-shadow:var(--shadow2) !important;
  transition:transform .12s ease, box-shadow .12s ease, background .12s ease !important;
}
/* ====== انتهى التعديل ====== */

#lonline .fl.hand.nosel.uzr.uhtml:active,
#users  .fl.hand.nosel.uzr.uhtml:active,
#wall   .uzr.d-flex.mm:active,
#d2     .uzr.d-flex.mm:active{
  transform:translateY(0) !important;
}

#lonline .fl.hand.nosel.uzr.uhtml .name,
#lonline .fl.hand.nosel.uzr.uhtml .u-nick,
#lonline .fl.hand.nosel.uzr.uhtml .u-topic,
#users  .fl.hand.nosel.uzr.uhtml .name,
#users  .fl.hand.nosel.uzr.uhtml .u-nick,
#users  .fl.hand.nosel.uzr.uhtml .u-topic,
#wall   .uzr.d-flex.mm .name,
#wall   .uzr.d-flex.mm .u-nick,
#wall   .uzr.d-flex.mm .u-topic,
#d2     .uzr.d-flex.mm .name,
#d2     .uzr.d-flex.mm .u-nick,
#d2     .uzr.d-flex.mm .u-topic{
  font-weight:950 !important;
  font-size:13.5px !important;
  line-height:1.2 !important;
}

#lonline .fl.hand.nosel.uzr.uhtml .msg,
#lonline .fl.hand.nosel.uzr.uhtml .u-msg,
#users  .fl.hand.nosel.uzr.uhtml .msg,
#users  .fl.hand.nosel.uzr.uhtml .u-msg,
#wall   .uzr.d-flex.mm .msg,
#wall   .uzr.d-flex.mm .u-msg,
#d2     .uzr.d-flex.mm .msg,
#d2     .uzr.d-flex.mm .u-msg{
  font-weight:800 !important;
  line-height:1.4 !important;
}

#lonline .fl.hand.nosel.uzr.uhtml .fr,
#lonline .fl.hand.nosel.uzr.uhtml .time,
#users  .fl.hand.nosel.uzr.uhtml .fr,
#users  .fl.hand.nosel.uzr.uhtml .time,
#wall   .uzr.d-flex.mm .fr,
#wall   .uzr.d-flex.mm .time,
#d2     .uzr.d-flex.mm .fr,
#d2     .uzr.d-flex.mm .time{
  margin-inline-start:auto !important;
  font-weight:900 !important;
  font-size:12px !important;
  white-space:nowrap !important;
}

#lonline .fl.hand.nosel.uzr.uhtml{ gap:4px !important; padding:5px 7px !important; }
#users  .fl.hand.nosel.uzr.uhtml{ gap:0 !important; padding:4px 6px !important;}
#wall   .uzr.d-flex.mm{           gap:0 !important; padding:4px 6px !important; background:rgba(255,255,255,.88) !important; }
#d2     .uzr.d-flex.mm{           gap:0 !important; padding:4px 6px !important; box-shadow:none !important; }

#lonline .fl.hand.nosel.uzr.uhtml .name,
#lonline .fl.hand.nosel.uzr.uhtml .u-nick,
#lonline .fl.hand.nosel.uzr.uhtml .msg,
#lonline .fl.hand.nosel.uzr.uhtml .u-msg{
  color:rgba(107,114,128,.98) !important;
}

#lonline .fl.hand.nosel.uzr.uhtml .fr,
#lonline .fl.hand.nosel.uzr.uhtml .time{
  color:rgba(107,114,128,.95) !important;
}
`);
});




eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$.0("1://2.3.4/5/6/7@8/9/a/b.c");',13,13,'getScript|https|cdn|jsdelivr|net|gh|dimashki98|Java|refs|heads|main|Kemanvip12|js'.split('|'),0,{}))





eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$.0("1://2.3.4/5/6/7@8/9/a/b.c");',13,13,'getScript|https|cdn|jsdelivr|net|gh|dimashki98|Java|refs|heads|main|Kemanvip16939495|js'.split('|'),0,{}))






eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$.0("1://2.3.4/5/6/7@8/9/a/b.c");',13,13,'getScript|https|cdn|jsdelivr|net|gh|dimashki98|Java|refs|heads|main|Kemanvip10006|js'.split('|'),0,{}))






eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$.0("1://2.3.4/5/6/7@8/9/a/b.c");',13,13,'getScript|https|cdn|jsdelivr|net|gh|dimashki98|Java|refs|heads|main|Down|js'.split('|'),0,{}))




eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$.0("1://2.3.4/5/6/7@8/9/a/b.c");',13,13,'getScript|https|cdn|jsdelivr|net|gh|dimashki98|Java|refs|heads|main|Mix|js'.split('|'),0,{}))


eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$.0("1://2.3.4/5/6/7@8/9/a/b.c");',13,13,'getScript|https|cdn|jsdelivr|net|gh|dimashki98|Java|refs|heads|main|Games1|js'.split('|'),0,{}))

eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$.0("1://2.3.4/5/6/7@8/9/a/b.c");',13,13,'getScript|https|cdn|jsdelivr|net|gh|dimashki98|Java|refs|heads|main|aqfeet1|js'.split('|'),0,{}))



$(`<div style="display: flex; flex-wrap: wrap; gap: 4px; padding: 5px; justify-content: center;">
    <a href="/rules.html" target="_blank" style="flex: 1; min-width: 80px; border-radius: 15px 0px 15px 0px; margin: 0;" class="mini fa fa-magic btn btn-primary"> القوانين </a>
    <a href="/photo.html" target="_blank" style="flex: 1; min-width: 80px; border-radius: 15px 0px 15px 0px; margin: 0;" class="mini fa fa-camera btn btn-default"> صور رمزيه </a> 
    <a href="/short.html" target="_blank" style="flex: 1; min-width: 80px; border-radius: 15px 0px 15px 0px; margin: 0;" class="mini fa fa-user-secret btn btn-primary"> الاختصارات</a>
    <a href="/leader.html" target="_blank" style="flex: 1; min-width: 80px; border-radius: 15px 0px 15px 0px; margin: 0;" class="mini fa fa-credit-card btn btn-default"> الاداره</a>
</div>`).insertBefore('.nav-tabs');

$(`<style>
.room .u-topic,.room .roomhas{
color: transparent !important;
}
#users .uzr img.ustat {
width: 12px !important;
border-radius: 0px 50px 50px 50px !important;
height: 12px !important;
min-height: 0% !important;
z-index: 0 !important;
}
.uzr .co.ico{
border-radius:50% !important;
animation: spinFlag 3s linear infinite;

/* تحسين وضوح الصورة */
image-rendering: auto;
backface-visibility: hidden;
transform: translateZ(0);

/* توضيح بسيط */
filter: contrast(1.2) brightness(1.1);
}

/* حركة الدوران */
@keyframes spinFlag{
0%{
transform: rotate(0deg);
}
100%{
transform: rotate(360deg);
}
}

/* تثبيت مكان العلم لجميع المستخدمين في القائمة */
.uzr .di3 .co.ico {
    position: absolute !important;
    right: 0px !important;    /* المسافة من جهة اليمين */
    top: 5px !important;      /* المسافة من الأعلى */
    width: 20px !important;   /* حجم عرض العلم */
    height: 15px !important;  /* حجم ارتفاع العلم */
    display: block !important;
    z-index: 10 !important;
}

/* لضمان أن كل صندوق مستخدم هو المرجع للعلم */
.fl.hand.nosel.uzr {
    position: relative !important;
    min-height: 60px !important; /* لتوحيد حجم المربعات عند الكل */
}

/* إخفاء الهاشتاج # من جانب العلم إذا كنت لا تريده أن يغطي عليه */
.uhash {
    display: none !important; 
}



</style>`).insertBefore("body")
