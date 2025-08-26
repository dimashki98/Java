(function($) {
  $(function() {
    const MAIN_GRADIENT = "linear-gradient(135deg, #0f2027, #203a43, #2c5364)";
    const MAIN_COLOR = "#2c5364";
    const WHITE = "#ffffff";
    const SHADOW = "rgba(0,0,0,0.25)";

    const css = `
/* ======================================== */
/* الأزرار والعناوين */
/* ======================================== */
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
button.comm.corner.btn.minix.btn.btn-primary.fa.fa-comments,
button#delmsg.btn.minix.btn.btn-primary.fa.fa-times.fl,
a.label.bg.d-flex.fl,
.civ.btn-primary.mini.fl,
div.btn-primary.mini.fl,
button.btn.btn-primary {
  border-radius: 12px !important;
  border: none !important;
  background: ${MAIN_GRADIENT} !important;
  color: ${WHITE} !important;
  font-weight: 600 !important;
  box-shadow: 0 4px 10px ${SHADOW} !important;
  transition: all 0.3s ease-in-out !important;
}
#room .btn-primary:hover,
#settings .btn-primary:hover,
button.btn.btn-primary:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 6px 14px ${SHADOW};
}

/* ======================================== */
/* صندوق المايك */
/* ======================================== */
#room #mic {
  background: ${MAIN_GRADIENT} !important;
  border-radius: 12px !important;
  box-shadow: 0 4px 8px ${SHADOW};
}
#mic .mic {
  text-align: center;
  width: 56px;
  height: 47px !important;
  background: #fff;
  border: 2px solid ${MAIN_COLOR} !important;
  border-radius: 50% !important;
  margin: 2px auto !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}

/* ======================================== */
/* خلفيات نظيفة */
/* ======================================== */
#d2bc {
  background: transparent !important;
}
#upro .modal-header.label-primary,
#d0,
.broadcasters,
#rooms .label-primary,
#users .nosel.ninr.fl.uzr.label.bg {
  border-radius: 12px !important;
  background: ${MAIN_GRADIENT} !important;
  color: ${WHITE} !important;
  box-shadow: 0 2px 6px ${SHADOW};
}

/* ======================================== */
/* صور البروفايل */
/* ======================================== */
#users img.co {
  border-radius: 12px !important;
  border: 2px solid ${MAIN_COLOR} !important;
  box-shadow: 0 2px 6px ${SHADOW};
  transform: rotate(0deg) !important;
  margin-top: 2px !important;
}

/* ======================================== */
/* صندوق الصور الرئيسية */
/* ======================================== */
#dpnl {
  background: ${MAIN_GRADIENT} !important;
  background-size: cover !important;
}

/* ======================================== */
/* صفحات الدخول */
/* ======================================== */
.login-page-only {
  background: linear-gradient(120deg, #0f2027, #203a43, #2c5364);
  color: ${WHITE};
  font-family: system-ui,-apple-system,"Segoe UI",Arial,sans-serif;
}
.login-page-only input, .login-page-only textarea {
  border-radius: 12px !important;
  border: 2px solid ${WHITE} !important;
  padding: 5px 12px !important;
  outline: none !important;
  box-shadow: 0 2px 6px ${SHADOW} !important;
  background: #fff !important;
  color: ${MAIN_COLOR} !important;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.login-page-only input:focus, .login-page-only textarea:focus {
  box-shadow: 0 0 12px ${WHITE}, 0 3px 8px ${SHADOW} !important;
  transform: scale(1.02);
}
.login-page-only ul.nav.nav-tabs.fl > li > a {
  background: ${MAIN_GRADIENT} !important;
  color: ${WHITE} !important;
  border-radius: 12px !important;
  font-weight: 600;
  box-shadow: 0 4px 8px ${SHADOW};
  transition: all 0.2s ease-in-out;
}
.login-page-only ul.nav.nav-tabs.fl > li > a:hover {
  box-shadow: 0 6px 12px ${SHADOW};
  transform: translateY(-2px);
}

/* ======================================== */
/* placeholder النصوص داخل الخانات */
/* ======================================== */
input::placeholder, textarea::placeholder {
  color: #666 !important;
  opacity: 1 !important;
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


/* ======================================== */
/* الحقوق والإطارات */
/* ======================================== */
(function () {
  const el = document.querySelector('.fr.borderg.minix.cop');
  const src = document.querySelector('.btn.btn-primary, .label-primary');
  if (!el || !src) return setTimeout(arguments.callee, 200);

  el.innerHTML = el.innerHTML.replace(/©\s*\d{4}/, '© ' + new Date().getFullYear());
  el.parentElement.style.cssText += 'background-color:#fff!important;height:20px;overflow:hidden;';
  const color = getComputedStyle(src).backgroundColor;
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
  el.querySelectorAll('*').forEach(child => child.style.color = color);
})();

/* ======================================== */
/* تحسين شكل الخانات والنصوص في الشات */
/* ======================================== */
(function applyInputFrame() {
  const btn = document.querySelector('.btn.btn-primary, .label-primary');
  if (!btn) return setTimeout(applyInputFrame, 200);
  const main = getComputedStyle(btn).backgroundColor;

  document.getElementById('dynamic-input-frame')?.remove();
  const css = `
    input[placeholder*="اكتب رسالتك هنا"],
    textarea[placeholder*="اكتب رسالتك هنا"],
    input[placeholder*="بحث"],
    textarea[placeholder*="بحث"],
    #tbox, #tbox:focus,
    #tbox1, #tbox1:focus,
    #tbox2, #tbox2:focus,
    .msgbox, .msgbox:focus,
    .tbox, .tbox:focus {
      border: 1px solid ${main} !important;
      border-radius: 12px !important;
      box-shadow: 0 0 3px ${main} !important;
      background-color: #fff !important;
      color: ${main} !important;
      padding: 5px 10px !important;
      outline: none !important;
    }
    input::placeholder, textarea::placeholder {
      color: ${main} !important;
      opacity: 1 !important;
    }
  `;
  const style = document.createElement('style');
  style.id = 'dynamic-input-frame';
  style.textContent = css;
  document.head.appendChild(style);
})();

/* ======================================== */
/* تحسين شكل صور البروفايل */
/* ======================================== */
(function () {
  const siteColor = getComputedStyle(document.querySelector('header') || document.querySelector('#dpnl') || document.body).backgroundColor;
  const css = `
  img.fitimg.u-pic {
    border: 1px solid ${siteColor} !important;
    border-radius: 12px !important;
    box-shadow: 0 0 5px ${siteColor} !important;
  }
  `;
  document.getElementById('custom-pic-frame')?.remove();
  const style = document.createElement('style');
  style.id = 'custom-pic-frame';
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
})();
