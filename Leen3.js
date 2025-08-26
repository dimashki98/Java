(function($) {
  'use strict';
  
  // تحسين الأداء بتخزين العناصر المستخدمة بكثرة
  const cache = {
    $head: $('head'),
    $body: $('body'),
    IMG: (window.CUSTOM_IMAGE_URL || '').trim()
  };

  // دالة لإنشاء الستايلات بشكل محسن
  function createOptimizedStyles() {
    if (!cache.IMG) {
      console.warn('❌ CUSTOM_IMAGE_URL not found');
      return;
    }

    const modernCSS = `
      /* تحسين الأزرار والعناصر الأساسية */
      #room .btn-primary, #d0 .label-primary, #settings .label-primary,
      #settings .btn-primary, .corner.border.label.label-primary,
      .modal-header.label-primary, .head.d-flex.nosel.bg.fl,
      .rsave.btn.btn-primary.fr, .fa.fa-send.sndpm.fl.btn.btn-primary,
      .fr.fa.fa-share-alt.sndfile.fl.btn.btn-primary,
      .fr.fa.fa-share-alt.sndfilebc.fl.btn.btn-primary,
      .bdel.corner.btn.minix.btn-primary.fa.fa-times,
      .fa.fa-send.sndbc.fl.btn.btn-primary,
      .btn.btn-primary.u-nickc.fr.fa.fa-save,
      .label.fl.label-primary, button.rsave.btn.btn-primary.fl,
      #users .nosel.ninr.fl.uzr.label.bg,
      button.fr.uploadP.label-primary.fa.fa-th-list.fl,
      div.mic_chat, button#ytIcon.fr.fa.fa-youtube.youtubesearch.fl.btn.btn-primary,
      div.fl.btn.btn-primary.dots.roomh.border,
      button.comm.corner.btn.minix.btn-primary.fa.fa-comments,
      button#delmsg.btn.minix.btn-primary.fa.fa-times.fl,
      a.label.bg.d-flex.fl, .civ.btn-primary.mini.fl,
      div.btn-primary.mini.fl, button.btn.btn-primary {
        border-radius: 12px 4px 12px 4px !important;
        border: 2px solid rgba(0,0,0,0.15) !important;
        background: linear-gradient(135deg, 
          rgba(255,255,255,0.1) 0%, 
          rgba(255,255,255,0.05) 50%, 
          rgba(0,0,0,0.05) 100%), 
          url('${cache.IMG}') !important;
        background-size: cover !important;
        background-blend-mode: overlay !important;
        color: #fff !important;
        text-shadow: 0 1px 3px rgba(0,0,0,0.5) !important;
        box-shadow: 
          0 4px 15px rgba(0,0,0,0.2),
          inset 0 1px 0 rgba(255,255,255,0.2) !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        backdrop-filter: blur(2px) !important;
        position: relative !important;
        overflow: hidden !important;
      }

      /* تأثيرات التفاعل المحسنة */
      #room .btn-primary:hover, .btn-primary:hover,
      .label-primary:hover {
        transform: translateY(-2px) !important;
        box-shadow: 
          0 8px 25px rgba(0,0,0,0.3),
          inset 0 1px 0 rgba(255,255,255,0.3) !important;
        border-color: rgba(255,255,255,0.3) !important;
      }

      #room .btn-primary:active, .btn-primary:active {
        transform: translateY(0) !important;
        box-shadow: 
          0 2px 8px rgba(0,0,0,0.3),
          inset 0 1px 0 rgba(255,255,255,0.1) !important;
      }

      /* تحسين الميكروفون */
      #room #mic {
        background: linear-gradient(135deg, 
          rgba(255,255,255,0.1), 
          rgba(0,0,0,0.1)), 
          url('${cache.IMG}') !important;
        background-size: cover !important;
        border-radius: 8px 12px 12px 12px !important;
        box-shadow: 0 6px 20px rgba(0,0,0,0.25) !important;
        transition: all 0.3s ease !important;
      }

      #mic .mic {
        text-align: center !important;
        width: 56px !important;
        height: 47px !important;
        background: linear-gradient(145deg, #ffffff, #f0f0f0) !important;
        border: 2px solid rgba(175,191,194,0.8) !important;
        border-radius: 50% 10% 50% 10% !important;
        margin: 1px !important;
        box-shadow: 
          inset 0 2px 4px rgba(255,255,255,0.8),
          inset 0 -2px 4px rgba(0,0,0,0.1),
          0 4px 8px rgba(0,0,0,0.15) !important;
        transition: all 0.3s ease !important;
      }

      #mic .mic:hover {
        transform: scale(1.05) !important;
        box-shadow: 
          inset 0 2px 4px rgba(255,255,255,0.9),
          inset 0 -2px 4px rgba(0,0,0,0.15),
          0 6px 12px rgba(0,0,0,0.2) !important;
      }

      /* تحسين العناصر الأخرى */
      #d2bc {
        background: transparent !important;
      }

      #upro .modal-header.label-primary, #d0, .broadcasters,
      #rooms .label-primary, #users .nosel.ninr.fl.uzr.label.bg {
        border-radius: 12px 4px 12px 4px !important;
        border: 2px solid rgba(0,0,0,0.15) !important;
        background: linear-gradient(135deg, 
          rgba(255,255,255,0.1), 
          rgba(0,0,0,0.05)), 
          url('${cache.IMG}') !important;
        background-size: cover !important;
        color: #fff !important;
        text-shadow: 0 1px 2px rgba(0,0,0,0.5) !important;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;
      }

      #users img.co {
        border-radius: 12px 4px 12px 4px !important;
        transform: rotate(15deg) !important;
        margin-top: 2px !important;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
      }

      #users img.co:hover {
        transform: rotate(0deg) scale(1.1) !important;
        box-shadow: 0 8px 20px rgba(0,0,0,0.4) !important;
      }

      #dpnl {
        background: linear-gradient(135deg, 
          rgba(255,255,255,0.1), 
          rgba(0,0,0,0.1)), 
          url('${cache.IMG}') !important;
        background-size: cover !important;
        background-attachment: fixed !important;
      }
    `;

    // إزالة الستايلات القديمة وإضافة الجديدة
    $('#custom-extra-styles').remove();
    cache.$head.append(`<style id="custom-extra-styles" type="text/css">${modernCSS}</style>`);
  }

  // تحسين دالة تحديث حقوق النشر
  function enhanceCopyright() {
    const copyrightEl = document.querySelector('.fr.borderg.minix.cop');
    const sourceEl = document.querySelector('.btn.btn-primary, .label-primary');
    
    if (!copyrightEl || !sourceEl) {
      return setTimeout(enhanceCopyright, 100);
    }

    // تحديث النص بكفاءة أكبر
    const currentYear = new Date().getFullYear();
    copyrightEl.innerHTML = copyrightEl.innerHTML.replace(/©\s*\d{4}/, `© ${currentYear}`);

    // تحسين التصميم
    const parentStyle = copyrightEl.parentElement.style;
    parentStyle.cssText += `
      background: linear-gradient(135deg, #fff, #f8f9fa) !important;
      height: 24px !important;
      overflow: hidden !important;
      border-radius: 8px !important;
      box-shadow: inset 0 1px 3px rgba(0,0,0,0.1) !important;
    `;

    const mainColor = getComputedStyle(sourceEl).backgroundColor;
    copyrightEl.style.cssText += `
      border: none !important;
      background: transparent !important;
      height: 24px !important;
      padding: 0 16px !important;
      text-align: center !important;
      font: 600 11px/24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
      color: ${mainColor} !important;
      text-shadow: 0 1px 2px rgba(255,255,255,0.8) !important;
      transition: all 0.3s ease !important;
    `;

    // تطبيق اللون على العناصر الفرعية
    copyrightEl.querySelectorAll('*').forEach(child => {
      child.style.color = mainColor;
      child.style.textShadow = '0 1px 2px rgba(255,255,255,0.8)';
    });
  }

  // تحسين تصميم حقول الإدخال
  function enhanceInputFields() {
    const sourceBtn = document.querySelector('.btn.btn-primary, .label-primary');
    if (!sourceBtn) return setTimeout(enhanceInputFields, 100);

    const mainColor = getComputedStyle(sourceBtn).backgroundColor;
    
    $('#dynamic-input-frame').remove();
    
    const inputCSS = `
      input[placeholder*="اكتب رسالتك هنا"],
      textarea[placeholder*="اكتب رسالتك هنا"],
      input[placeholder*="بحث"],
      textarea[placeholder*="بحث"],
      #tbox, #tbox:focus, #tbox1, #tbox1:focus, #tbox2, #tbox2:focus,
      .msgbox, .msgbox:focus, .tbox, .tbox:focus {
        border: 2px solid ${mainColor} !important;
        border-radius: 16px !important;
        background: linear-gradient(145deg, #ffffff, #f8f9fa) !important;
        color: ${mainColor} !important;
        padding: 8px 16px !important;
        outline: none !important;
        box-shadow: 
          0 4px 12px rgba(0,0,0,0.1),
          inset 0 1px 0 rgba(255,255,255,0.8) !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
      }

      input:focus, textarea:focus,
      #tbox:focus, #tbox1:focus, #tbox2:focus,
      .msgbox:focus, .tbox:focus {
        transform: translateY(-1px) !important;
        box-shadow: 
          0 8px 20px rgba(0,0,0,0.15),
          0 0 0 3px ${mainColor}33,
          inset 0 1px 0 rgba(255,255,255,0.9) !important;
        border-color: ${mainColor} !important;
      }

      input::placeholder, textarea::placeholder {
        color: ${mainColor}99 !important;
        opacity: 1 !important;
        font-weight: 500 !important;
      }
    `;

    cache.$head.append(`<style id="dynamic-input-frame">${inputCSS}</style>`);
  }

  // تحسين إطارات الصور
  function enhanceImageFrames() {
    const siteColor = getComputedStyle(
      document.querySelector('header') || 
      document.querySelector('#dpnl') || 
      document.body
    ).backgroundColor;

    $('#custom-pic-frame').remove();
    
    const imageCSS = `
      img.fitimg.u-pic {
        border: 3px solid ${siteColor} !important;
        border-radius: 12px 4px 12px 4px !important;
        box-shadow: 
          0 6px 16px rgba(0,0,0,0.2),
          inset 0 1px 0 rgba(255,255,255,0.2) !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        filter: brightness(1.05) contrast(1.1) !important;
      }

      img.fitimg.u-pic:hover {
        transform: scale(1.05) !important;
        box-shadow: 
          0 10px 25px rgba(0,0,0,0.3),
          inset 0 1px 0 rgba(255,255,255,0.3) !important;
        filter: brightness(1.1) contrast(1.15) !important;
      }
    `;

    cache.$head.append(`<style id="custom-pic-frame">${imageCSS}</style>`);
  }

  // تحسين صفحة تسجيل الدخول
  function enhanceLoginPage() {
    const loginElements = $('#l1, #l2, #l3');
    if (!loginElements.length) return;

    function getOptimizedMainColor() {
      const color = $('.btn-primary').css('background-color') || 
                   $('meta[name="theme-color"]').attr('content') || 
                   '#5A7372';
      
      if (color.startsWith('rgb')) {
        const rgb = color.match(/\d+/g);
        return `#${rgb.map(x => (+x).toString(16).padStart(2, '0')).join('')}`;
      }
      return color;
    }

    const MAIN = getOptimizedMainColor();
    const WHITE = '#FFFFFF';
    const SHADOW = 'rgba(0,0,0,0.15)';
    const LIGHT_SHADOW = 'rgba(0,0,0,0.08)';

    cache.$body.addClass('login-page-enhanced');

    // تحسين النصوص التوضيحية
    const placeholders = {
      '#l1 #u1, #l2 #u2, #l3 #u3': 'اكتب اسمك هنا',
      '#l2 #pass1, #l3 #pass2': 'اكتب كلمة المرور هنا'
    };

    Object.entries(placeholders).forEach(([selector, text]) => {
      $(selector).attr('placeholder', text);
    });

    const enhancedLoginCSS = `
      .login-page-enhanced ul.nav.nav-tabs.fl {
        background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(248,249,250,0.9)) !important;
        border: 1px solid rgba(0,0,0,0.08) !important;
        border-radius: 12px !important;
        height: 45px !important;
        padding: 4px !important;
        margin-top: 2px !important;
        float: right !important;
        box-shadow: 0 4px 12px ${LIGHT_SHADOW} !important;
        backdrop-filter: blur(10px) !important;
      }

      .login-page-enhanced ul.nav.nav-tabs.fl > li {
        width: 33.333% !important;
        margin: 0 2px 0 0 !important;
      }

      .login-page-enhanced ul.nav.nav-tabs.fl > li > a {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 8px !important;
        height: 35px !important;
        line-height: 35px !important;
        padding: 0 12px !important;
        border: none !important;
        border-radius: 10px !important;
        background: linear-gradient(135deg, ${MAIN}, ${MAIN}dd) !important;
        color: ${WHITE} !important;
        font-weight: 600 !important;
        font-size: 13px !important;
        text-align: center !important;
        text-shadow: 0 1px 2px rgba(0,0,0,0.2) !important;
        box-shadow: 
          0 4px 12px ${MAIN}40,
          inset 0 1px 0 rgba(255,255,255,0.2) !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        position: relative !important;
        overflow: hidden !important;
      }

      .login-page-enhanced ul.nav.nav-tabs.fl > li > a::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s ease;
      }

      .login-page-enhanced ul.nav.nav-tabs.fl > li > a:hover {
        transform: translateY(-2px) !important;
        box-shadow: 
          0 8px 20px ${MAIN}50,
          inset 0 1px 0 rgba(255,255,255,0.3) !important;
      }

      .login-page-enhanced ul.nav.nav-tabs.fl > li > a:hover::before {
        left: 100%;
      }

      .login-page-enhanced ul.nav.nav-tabs.fl > li > a:active {
        transform: translateY(0) !important;
      }

      .login-page-enhanced #l1 #u1, .login-page-enhanced #l2 #u2, .login-page-enhanced #l3 #u3,
      .login-page-enhanced #l2 #pass1, .login-page-enhanced #l3 #pass2 {
        width: 70% !important;
        height: 35px !important;
        line-height: 35px !important;
        padding: 0 16px !important;
        text-align: center !important;
        background: linear-gradient(145deg, #fff, #f8f9fa) !important;
        color: #2c3e50 !important;
        border: 2px solid ${MAIN}66 !important;
        border-radius: 18px !important;
        outline: none !important;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
        font-size: 14px !important;
        font-weight: 500 !important;
        box-shadow: 
          0 4px 12px ${LIGHT_SHADOW},
          inset 0 1px 0 rgba(255,255,255,0.8) !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
      }

      .login-page-enhanced #l1 #u1:focus, .login-page-enhanced #l2 #u2:focus, .login-page-enhanced #l3 #u3:focus,
      .login-page-enhanced #l2 #pass1:focus, .login-page-enhanced #l3 #pass2:focus {
        transform: translateY(-2px) !important;
        border-color: ${MAIN} !important;
        box-shadow: 
          0 8px 20px ${LIGHT_SHADOW},
          0 0 0 3px ${MAIN}33,
          inset 0 1px 0 rgba(255,255,255,0.9) !important;
      }

      .login-page-enhanced #l1 #u1::placeholder, .login-page-enhanced #l2 #u2::placeholder, .login-page-enhanced #l3 #u3::placeholder,
      .login-page-enhanced #l2 #pass1::placeholder, .login-page-enhanced #l3 #pass2::placeholder {
        color: ${MAIN}99 !important;
        opacity: 1 !important;
        font-weight: 400 !important;
      }
    `;

    $('#login-enhanced-styles').remove();
    cache.$head.append(`<style id="login-enhanced-styles">${enhancedLoginCSS}</style>`);
  }

  // تشغيل جميع التحسينات
  $(function() {
    // استخدام requestAnimationFrame لتحسين الأداء
    requestAnimationFrame(() => {
      createOptimizedStyles();
      enhanceCopyright();
      enhanceInputFields();
      enhanceImageFrames();
      enhanceLoginPage();
    });
  });

})(jQuery);
