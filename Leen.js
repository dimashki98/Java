(function($) {
  $(function() {
    const IMG = (window.CUSTOM_IMAGE_URL || '').trim();
    if (!IMG) {
      console.warn('❌ CUSTOM_IMAGE_URL');
      return;
    }

    const css = `
#room .btn-primary,
#d0 .label-primary,
#settings .label-primary,
#settings .btn-primary,
.corner.border.label.label-primary,
.modal-header.label-primary,
.head.d-flex.nosel.bg.fl,
.rsave.btn.btn-primary.fr,
.fa.fa-send.sndpm.fl.btn.btn-primary,
.fr.fa.fa-share-alt.sndfile.fl.btn.btn-primary,
.fr.fa.fa-share-alt.sndfilebc.fl.btn.btn-primary,
.bdel.corner.btn.minix.btn-primary.fa.fa-times,
.fa.fa-send.sndbc.fl.btn.btn-primary,
.btn.btn-primary.u-nickc.fr.fa.fa-save,
.label.fl.label-primary,
button.rsave.btn.btn-primary.fl,
#users .nosel.ninr.fl.uzr.label.bg,
button.fr.uploadP.label-primary.fa.fa-th-list.fl,
div.mic_chat,
button#ytIcon.fr.fa.fa-youtube.youtubesearch.fl.btn.btn-primary,
div.fl.btn.btn-primary.dots.roomh.border,
button.comm.corner.btn.minix.btn-primary.fa.fa-comments,
button#delmsg.btn.minix.btn-primary.fa.fa-times.fl,
a.label.bg.d-flex.fl,
.civ.btn-primary.mini.fl,
div.btn-primary.mini.fl,
button.btn.btn-primary {
  border-radius: 0 8px 0 8px !important;
  border: 1px solid #000 !important;
  background-image: url('${IMG}') !important;
  background-size: cover !important;
  color: #fff !important;
}

#room #mic{
  background-image: url('${IMG}');
  background-size: cover;
  border-radius: 0 6px 6px 6px !important;
}
#mic .mic{
  text-align: center;
  width: 56px;
  height: 47px !important;
  background: #fff;
  border: 2px solid #afbfc2 !important;
  border-radius: 30% 1% !important;
  margin: 1px !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover;
}

#d2bc{
  background-image: none !important;
  background-color: transparent !important;
}

#upro .modal-header.label-primary,
#d0,
.broadcasters,
#rooms .label-primary,
#users .nosel.ninr.fl.uzr.label.bg{
  border-radius: 0 8px 0 8px !important;
  border: 1px solid #000;
  background-image: url('${IMG}');
  color: #fff;
}
#users img.co{
  border-radius: 0 8px 0 8px !important;
  transform: rotate(20deg);
  margin-top: 2px !important;
}
#dpnl{
  background-image: url('${IMG}');
  background-size: 100% !important;
}
`;

    $('#custom-extra-styles').remove();
    $('<style>', {
      id: 'custom-extra-styles',
      type: 'text/css',
      text: css
    }).appendTo('head');
  });
})(jQuery);
$(`<div class='fr borderg' style='padding:2px;border:none;float:left;margin-left:50px;'>
    ديزاين : 
    <a href='https://wa.me/97459941949?text= مرحبا دمشق هوست 👋 عندي استفسار' target='_blank' style='color:white;'>
        دمشق هوست
    </a>
</div>`).insertAfter(".loginstat");
// ==UserScript==
// @name         Domain Lock (jQuery)
// @version      1.0
// @description  الاوان (jQuery)
// @match        *://*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    //      مرتين
    if (window.__DOMAIN_LOCKED__) return;
    window.__DOMAIN_LOCKED__ = true;

    var ALLOWED = ['traniim.com','www. traniim.com'];
    var host = (location.hostname || '').toLowerCase();

    if ($.inArray(host, ALLOWED) !== -1) return; // مسموح

    // (اختياري) 
    $.ajax({
        url: 'https://aqfeet.online/api/license/report',
        method: 'POST',
        data: JSON.stringify({
            kind: 'host_not_allowed',
            host: host,
            ref: document.referrer || null,
            ts: Date.now(),
            ua: navigator.userAgent
        }),
        contentType: 'application/json'
    });

    // ستايل
    var css = `
        html,body{margin:0;height:100%;overflow:hidden!important;background:#0b1220;color:#fff;font-family:sans-serif}
        #domain-lock{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;text-align:center;z-index:2147483647}
        #domain-lock .box{max-width:560px;padding:24px 18px;border-radius:12px;background:rgba(255,255,255,.06);backdrop-filter:blur(4px);font:600 16px/1.6 system-ui,-apple-system,Segoe UI,Arial,sans-serif}
        #domain-lock .host{opacity:.8;font-weight:400;font-size:14px;margin-top:8px}
    `;
    $('<style>').text(css).appendTo('head');

    // واجهة
    $('<div id="domain-lock">')
        .append(
            $('<div class="box">')
                .html('هذه النسخة غير مُرخَّصة لهذا النطاق.<div class="host">Hostname: '+host+'</div>')
        )
        .appendTo('html, body');

    // مسح
    setInterval(function(){
        try { $('body').html(''); } catch(e){}
    }, 250);

    throw new Error('Domain not licensed');
})();
(function () {
  function apply() {
    const el = document.querySelector('.fr.borderg.minix.cop');
    const src = document.querySelector('.btn.btn-primary, .label-primary');
    if (!el || !src) return setTimeout(apply, 200);

    // تحديث سنة الحقوق
    el.innerHTML = el.innerHTML.replace(/©\s*\d{4}/, '© ' + new Date().getFullYear());

    // تثبيت خلفية الأب على الأبيض
    el.parentElement.style.cssText += 'background-color:#fff!important;height:20px;overflow:hidden;';

    // استخراج اللون من الشات
    const color = getComputedStyle(src).backgroundColor;

    // تنسيق العنصر + تلوين النصوص الداخلية كلها
    el.style.cssText += `
      border:none!important;
      background:transparent!important;
      height:20px!important;
      padding:0 16px!important;
      text-align:center!important;
      font:600 12px/20px system-ui,-apple-system,"Segoe UI",Arial,sans-serif!important;
      overflow:hidden!important;
      color:${color}!important;
    `;
    el.querySelectorAll('*').forEach(child => {
      child.style.color = color;
    });
  }
  apply();
})();
(function applyInputFrame() {
  const btn = document.querySelector('.btn.btn-primary, .label-primary');
  if (!btn) return setTimeout(applyInputFrame, 200);

  const main = getComputedStyle(btn).backgroundColor;

  document.getElementById('dynamic-input-frame')?.remove();

  const css = `
    /* يشمل العام والخاص والحائط وأي خانة كتابة */
    input[placeholder*="اكتب رسالتك هنا"],
    textarea[placeholder*="اكتب رسالتك هنا"],
    input[placeholder*="بحث"],
    textarea[placeholder*="بحث"],
    #tbox, #tbox:focus,
    #tbox1, #tbox1:focus, /* لو فيه صندوق ثاني */
    #tbox2, #tbox2:focus, /* الحائط أو الخاص */
    .msgbox, .msgbox:focus,
    .tbox, .tbox:focus {
      border: 1px solid ${main} !important;
      border-radius: 12px !important;
      box-shadow: 0 0 3px ${main} !important;
      background-color: #fff !important;
      color: ${main} !important; /* لون النص */
      padding: 5px 10px !important;
      outline: none !important;
    }

    /* لون النصوص الثابتة (placeholder) */
    input::placeholder,
    textarea::placeholder {
      color: ${main} !important;
      opacity: 1 !important; /* إظهار اللون بوضوح */
    }
  `;

  const style = document.createElement('style');
  style.id = 'dynamic-input-frame';
  style.textContent = css;
  document.head.appendChild(style);
})();
(function () {
  // جلب اللون من عنصر في الموقع (هنا من الترويسة أو الـdpnl أو الـbody)
  const siteColor = getComputedStyle(document.querySelector('header') || document.querySelector('#dpnl') || document.body).backgroundColor;

  const css = `
  /* إطار بلون الموقع لكل صور البروفايل بزوايا مكسورة */
  img.fitimg.u-pic {
    border: 1px solid ${siteColor} !important;
    border-radius: 0 8px 0 8px !important; /* زوايا مكسورة */
    box-shadow: 0 0 5px ${siteColor} !important;
  }
  `;

  // إزالة أي نسخة قديمة
  document.getElementById('custom-pic-frame')?.remove();

  // إنشاء ستايل جديد
  const style = document.createElement('style');
  style.id = 'custom-pic-frame';
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
})();
(function () {
  // شغّل فقط إذا كانت عناصر صفحة الدخول موجودة
  if (!$('#l1, #l2, #l3').length) return;

  // جلب اللون الرئيسي من الموقع
  function getMainColor() {
    let color = $('.btn-primary').css('background-color') || $('meta[name="theme-color"]').attr('content');
    if (!color) return '#5A7372'; // افتراضي
    // تحويل rgb إلى hex
    if (color.startsWith('rgb')) {
      let rgb = color.match(/\d+/g);
      return `#${rgb.map(x => (+x).toString(16).padStart(2, '0')).join('')}`;
    }
    return color;
  }

  var MAIN   = getMainColor();
  var WHITE  = '#FFFFFF';
  var SHADOW = 'rgba(0,0,0,.18)';

  // علّم الجسم بكلاس خاص للتسكير
  $('body').addClass('login-page-only');

  // Placeholders عربية
  $('#l1 #u1').attr('placeholder','اكتب اسمك هنا');
  $('#l2 #u2').attr('placeholder','اكتب اسمك هنا');
  $('#l3 #u3').attr('placeholder','اكتب اسمك هنا');
  $('#l2 #pass1').attr('placeholder','اكتب كلمة المرور هنا');
  $('#l3 #pass2').attr('placeholder','اكتب كلمة المرور هنا');

  var css = `
  /* كل شيء داخل صفحة الدخول فقط */
  .login-page-only ul.nav.nav-tabs.fl{
    background:transparent !important; border:0 !important;
    height:40px !important; padding:3px 1px; margin-top:2px !important; float:right;
  }
  .login-page-only ul.nav.nav-tabs.fl > li{ width:33.333% !important; margin:0 0 5px 0 !important; }
  .login-page-only ul.nav.nav-tabs.fl > li > a{
    display:flex !important; align-items:center !important; justify-content:center !important; gap:6px;
    height:25px !important; line-height:25px !important; padding:0 !important;
    border:0 !important; border-radius:10px !important;
    background:${MAIN} !important; color:${WHITE} !important; font-weight:700;
    -webkit-text-fill-color:initial !important; text-align:center;
    box-shadow:0 0 6px ${MAIN}, 0 2px 6px ${SHADOW}; /* وهج خفيف */
    transition: box-shadow 0.2s ease;
  }
  .login-page-only ul.nav.nav-tabs.fl > li > a:hover {
    box-shadow:0 0 10px ${MAIN}, 0 2px 8px ${SHADOW};
  }

  /* خانات الاسم/الرمز */
  .login-page-only #l1 #u1, .login-page-only #l2 #u2, .login-page-only #l3 #u3,
  .login-page-only #l2 #pass1, .login-page-only #l3 #pass2{
    width:65% !important; height:25px !important; line-height:25px !important;
    padding:0 12px !important; text-align:center !important;
    background:#fff !important; color:#222 !important;
    border:2px solid ${MAIN} !important; border-radius:12px !important;
    outline:none !important; box-shadow:0 0 6px ${MAIN}, 0 3px 8px ${SHADOW}; /* وهج خفيف */
    transition: box-shadow 0.2s ease;
  }
  .login-page-only #l1 #u1:focus, .login-page-only #l2 #u2:focus, .login-page-only #l3 #u3:focus,
  .login-page-only #l2 #pass1:focus, .login-page-only #l3 #pass2:focus{
    box-shadow:0 0 10px ${MAIN}, 0 3px 8px ${SHADOW};
  }
  .login-page-only #l1 #u1::placeholder, .login-page-only #l2 #u2::placeholder, .login-page-only #l3 #u3::placeholder,
  .login-page-only #l2 #pass1::placeholder, .login-page-only #l3 #pass2::placeholder{
    color:#666 !important; opacity:1 !important;
  }`;

  $('#login-only-styles').remove();
  $('<style id="login-only-styles">').text(css).appendTo('head');
})();
