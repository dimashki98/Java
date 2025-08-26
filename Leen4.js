;(($) => {
  // تحسين الأداء بتخزين العناصر المستخدمة بكثرة
  const cache = {
    $head: $("head"),
    $body: $("body"),
    IMG: (window.CUSTOM_IMAGE_URL || "").trim(),
  }

  // دالة لإنشاء الستايلات المحسنة والمتطورة
  function createAdvancedStyles() {
    if (!cache.IMG) {
      console.warn("❌ CUSTOM_IMAGE_URL not found")
      return
    }

    const advancedCSS = `
      /* إصلاح وتحسين الأزرار والعناصر الأساسية */
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
      div.btn-primary.mini.fl, button.btn.btn-primary,
      /* إضافة العناصر المفقودة */
      .fr.label-primary.fa.fa-image.sndfilechat.fl,
      button.fr.label-primary.fa.fa-image.sndfilechat.fl {
        border-radius: 15px 5px 15px 5px !important;
        border: 2px solid rgba(255,255,255,0.3) !important;
        background: linear-gradient(135deg, 
          rgba(255,255,255,0.15) 0%, 
          rgba(255,255,255,0.08) 30%, 
          rgba(0,0,0,0.1) 70%,
          rgba(0,0,0,0.2) 100%), 
          url('${cache.IMG}') !important;
        background-size: cover !important;
        background-blend-mode: overlay !important;
        color: #ffffff !important;
        text-shadow: 0 2px 4px rgba(0,0,0,0.7) !important;
        font-weight: 600 !important;
        box-shadow: 
          0 6px 20px rgba(0,0,0,0.25),
          inset 0 1px 0 rgba(255,255,255,0.3),
          inset 0 -1px 0 rgba(0,0,0,0.2) !important;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
        backdrop-filter: blur(3px) saturate(1.2) !important;
        position: relative !important;
        overflow: hidden !important;
        min-height: 28px !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
      }

      /* تأثير الإضاءة المتحركة */
      #room .btn-primary::before, .btn-primary::before, .label-primary::before,
      .fr.label-primary.fa.fa-image.sndfilechat.fl::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(45deg, 
          transparent 30%, 
          rgba(255,255,255,0.1) 50%, 
          transparent 70%);
        transform: rotate(45deg);
        transition: all 0.6s ease;
        opacity: 0;
      }

      /* تأثيرات التفاعل المحسنة */
      #room .btn-primary:hover, .btn-primary:hover, .label-primary:hover,
      .fr.label-primary.fa.fa-image.sndfilechat.fl:hover {
        transform: translateY(-3px) scale(1.02) !important;
        box-shadow: 
          0 12px 30px rgba(0,0,0,0.35),
          inset 0 1px 0 rgba(255,255,255,0.4),
          inset 0 -1px 0 rgba(0,0,0,0.3) !important;
        border-color: rgba(255,255,255,0.5) !important;
        text-shadow: 0 2px 6px rgba(0,0,0,0.8) !important;
      }

      #room .btn-primary:hover::before, .btn-primary:hover::before, 
      .label-primary:hover::before,
      .fr.label-primary.fa.fa-image.sndfilechat.fl:hover::before {
        opacity: 1;
        animation: shimmer 1.5s ease-in-out infinite;
      }

      @keyframes shimmer {
        0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
        100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
      }

      #room .btn-primary:active, .btn-primary:active, .label-primary:active {
        transform: translateY(-1px) scale(0.98) !important;
        box-shadow: 
          0 4px 12px rgba(0,0,0,0.3),
          inset 0 1px 0 rgba(255,255,255,0.2) !important;
      }

      /* تحسين زر الإعجاب */
      .blike.corner.btn.minix.btn-danger.fa.fa-heart,
      button.blike.corner.btn.minix.btn-danger.fa.fa-heart {
        padding: 6px !important;
        width: 32px !important;
        height: 32px !important;
        text-align: center !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        border-radius: 50% !important;
        border: 2px solid #ff4757 !important;
        background: linear-gradient(135deg, 
          #ff6b7a 0%, 
          #ff4757 50%, 
          #ff3742 100%) !important;
        color: #ffffff !important;
        font-size: 14px !important;
        text-shadow: 0 1px 3px rgba(0,0,0,0.5) !important;
        box-shadow: 
          0 4px 15px rgba(255,71,87,0.4),
          inset 0 1px 0 rgba(255,255,255,0.3),
          inset 0 -1px 0 rgba(0,0,0,0.2) !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        cursor: pointer !important;
        position: relative !important;
        overflow: hidden !important;
      }

      .blike.corner.btn.minix.btn-danger.fa.fa-heart::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(255,255,255,0.3);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.3s ease;
      }

      .blike.corner.btn.minix.btn-danger.fa.fa-heart:hover {
        transform: scale(1.1) !important;
        box-shadow: 
          0 8px 25px rgba(255,71,87,0.6),
          inset 0 1px 0 rgba(255,255,255,0.4) !important;
        animation: heartbeat 1s ease-in-out infinite;
      }

      .blike.corner.btn.minix.btn-danger.fa.fa-heart:hover::before {
        width: 100%;
        height: 100%;
      }

      @keyframes heartbeat {
        0%, 100% { transform: scale(1.1); }
        50% { transform: scale(1.15); }
      }

      .blike.corner.btn.minix.btn-danger.fa.fa-heart:active {
        transform: scale(1.05) !important;
        animation: none;
      }

      /* تحسين الميكروفون */
      #room #mic {
        background: linear-gradient(135deg, 
          rgba(255,255,255,0.15), 
          rgba(0,0,0,0.1)), 
          url('${cache.IMG}') !important;
        background-size: cover !important;
        border-radius: 12px 16px 16px 16px !important;
        box-shadow: 0 8px 25px rgba(0,0,0,0.3) !important;
        transition: all 0.4s ease !important;
        border: 2px solid rgba(255,255,255,0.2) !important;
      }

      #mic .mic {
        text-align: center !important;
        width: 58px !important;
        height: 49px !important;
        background: linear-gradient(145deg, #ffffff, #f0f2f5) !important;
        border: 3px solid rgba(175,191,194,0.6) !important;
        border-radius: 60% 15% 60% 15% !important;
        margin: 2px !important;
        box-shadow: 
          inset 0 3px 6px rgba(255,255,255,0.9),
          inset 0 -3px 6px rgba(0,0,0,0.1),
          0 6px 15px rgba(0,0,0,0.2) !important;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
        position: relative !important;
        overflow: hidden !important;
      }

      #mic .mic::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(45deg, 
          transparent, 
          rgba(255,255,255,0.3), 
          transparent);
        transform: rotate(45deg);
        transition: all 0.6s ease;
        opacity: 0;
      }

      #mic .mic:hover {
        transform: scale(1.08) rotate(5deg) !important;
        box-shadow: 
          inset 0 3px 8px rgba(255,255,255,1),
          inset 0 -3px 8px rgba(0,0,0,0.15),
          0 10px 20px rgba(0,0,0,0.3) !important;
        border-color: rgba(175,191,194,0.8) !important;
      }

      #mic .mic:hover::before {
        opacity: 1;
        animation: micShine 2s ease-in-out infinite;
      }

      @keyframes micShine {
        0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
        100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
      }

      /* تحسين العناصر الأخرى */
      #d2bc {
        background: transparent !important;
      }

      #upro .modal-header.label-primary, #d0, .broadcasters,
      #rooms .label-primary, #users .nosel.ninr.fl.uzr.label.bg {
        border-radius: 15px 5px 15px 5px !important;
        border: 2px solid rgba(255,255,255,0.25) !important;
        background: linear-gradient(135deg, 
          rgba(255,255,255,0.12), 
          rgba(0,0,0,0.08)), 
          url('${cache.IMG}') !important;
        background-size: cover !important;
        color: #ffffff !important;
        text-shadow: 0 2px 4px rgba(0,0,0,0.6) !important;
        box-shadow: 0 6px 20px rgba(0,0,0,0.25) !important;
        backdrop-filter: blur(4px) !important;
      }

      #users img.co {
        border-radius: 15px 5px 15px 5px !important;
        transform: rotate(12deg) !important;
        margin-top: 3px !important;
        box-shadow: 0 6px 18px rgba(0,0,0,0.35) !important;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
        border: 2px solid rgba(255,255,255,0.3) !important;
      }

      #users img.co:hover {
        transform: rotate(0deg) scale(1.15) !important;
        box-shadow: 0 12px 30px rgba(0,0,0,0.5) !important;
        border-color: rgba(255,255,255,0.6) !important;
      }

      #dpnl {
        background: linear-gradient(135deg, 
          rgba(255,255,255,0.1), 
          rgba(0,0,0,0.1)), 
          url('${cache.IMG}') !important;
        background-size: cover !important;
        background-attachment: fixed !important;
        backdrop-filter: blur(2px) !important;
      }
    `

    // إزالة الستايلات القديمة وإضافة الجديدة
    $("#custom-extra-styles").remove()
    cache.$head.append(`<style id="custom-extra-styles" type="text/css">${advancedCSS}</style>`)
  }

  // تحسين دالة تحديث حقوق النشر
  function enhanceCopyright() {
    const copyrightEl = document.querySelector(".fr.borderg.minix.cop")
    const sourceEl = document.querySelector(".btn.btn-primary, .label-primary")

    if (!copyrightEl || !sourceEl) {
      return setTimeout(enhanceCopyright, 100)
    }

    const currentYear = new Date().getFullYear()
    copyrightEl.innerHTML = copyrightEl.innerHTML.replace(/©\s*\d{4}/, `© ${currentYear}`)

    const parentStyle = copyrightEl.parentElement.style
    parentStyle.cssText += `
      background: linear-gradient(135deg, #ffffff, #f8f9fa) !important;
      height: 26px !important;
      overflow: hidden !important;
      border-radius: 10px !important;
      box-shadow: 
        inset 0 1px 3px rgba(0,0,0,0.1),
        0 2px 8px rgba(0,0,0,0.05) !important;
      border: 1px solid rgba(0,0,0,0.08) !important;
    `

    const mainColor = getComputedStyle(sourceEl).backgroundColor
    copyrightEl.style.cssText += `
      border: none !important;
      background: transparent !important;
      height: 26px !important;
      padding: 0 18px !important;
      text-align: center !important;
      font: 600 12px/26px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
      color: ${mainColor} !important;
      text-shadow: 0 1px 2px rgba(255,255,255,0.8) !important;
      transition: all 0.3s ease !important;
    `

    copyrightEl.querySelectorAll("*").forEach((child) => {
      child.style.color = mainColor
      child.style.textShadow = "0 1px 2px rgba(255,255,255,0.8)"
    })
  }

  // إصلاح وتحسين حقول الإدخال
  function fixAndEnhanceInputFields() {
    const sourceBtn = document.querySelector(".btn.btn-primary, .label-primary")
    if (!sourceBtn) return setTimeout(fixAndEnhanceInputFields, 100)

    const mainColor = getComputedStyle(sourceBtn).backgroundColor

    $("#dynamic-input-frame").remove()

    const fixedInputCSS = `
      /* إصلاح حقول الإدخال لتكون واضحة */
      input[placeholder*="اكتب رسالتك هنا"],
      textarea[placeholder*="اكتب رسالتك هنا"],
      input[placeholder*="بحث"],
      textarea[placeholder*="بحث"],
      #tbox, #tbox1, #tbox2,
      .msgbox, .tbox,
      input[type="text"], input[type="password"], 
      textarea, .form-control {
        border: 3px solid ${mainColor} !important;
        border-radius: 20px !important;
        background: linear-gradient(145deg, #ffffff, #f8f9fa) !important;
        color: #2c3e50 !important;
        padding: 10px 18px !important;
        outline: none !important;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
        font-size: 14px !important;
        font-weight: 500 !important;
        line-height: 1.4 !important;
        box-shadow: 
          0 6px 15px rgba(0,0,0,0.1),
          inset 0 1px 0 rgba(255,255,255,0.9),
          inset 0 -1px 0 rgba(0,0,0,0.05) !important;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
        min-height: 40px !important;
      }

      /* تأثيرات التركيز المحسنة */
      input:focus, textarea:focus,
      #tbox:focus, #tbox1:focus, #tbox2:focus,
      .msgbox:focus, .tbox:focus,
      input[type="text"]:focus, input[type="password"]:focus,
      .form-control:focus {
        transform: translateY(-2px) !important;
        box-shadow: 
          0 12px 25px rgba(0,0,0,0.15),
          0 0 0 4px ${mainColor}44,
          inset 0 1px 0 rgba(255,255,255,1),
          inset 0 -1px 0 rgba(0,0,0,0.08) !important;
        border-color: ${mainColor} !important;
        background: linear-gradient(145deg, #ffffff, #fafbfc) !important;
      }

      /* تحسين النصوص التوضيحية */
      input::placeholder, textarea::placeholder {
        color: ${mainColor}aa !important;
        opacity: 1 !important;
        font-weight: 400 !important;
        font-style: italic !important;
      }

      /* إصلاح النصوص داخل الحقول */
      input, textarea, #tbox, #tbox1, #tbox2, .msgbox, .tbox {
        -webkit-text-fill-color: #2c3e50 !important;
        text-fill-color: #2c3e50 !important;
      }
    `

    cache.$head.append(`<style id="dynamic-input-frame">${fixedInputCSS}</style>`)
  }

  // تحسين إطارات الصور
  function enhanceImageFrames() {
    const siteColor = getComputedStyle(
      document.querySelector("header") || document.querySelector("#dpnl") || document.body,
    ).backgroundColor

    $("#custom-pic-frame").remove()

    const imageCSS = `
      img.fitimg.u-pic {
        border: 4px solid ${siteColor} !important;
        border-radius: 15px 5px 15px 5px !important;
        box-shadow: 
          0 8px 20px rgba(0,0,0,0.25),
          inset 0 1px 0 rgba(255,255,255,0.3) !important;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
        filter: brightness(1.05) contrast(1.1) saturate(1.1) !important;
      }

      img.fitimg.u-pic:hover {
        transform: scale(1.08) rotate(2deg) !important;
        box-shadow: 
          0 15px 35px rgba(0,0,0,0.35),
          inset 0 1px 0 rgba(255,255,255,0.4) !important;
        filter: brightness(1.1) contrast(1.15) saturate(1.2) !important;
        border-width: 5px !important;
      }
    `

    cache.$head.append(`<style id="custom-pic-frame">${imageCSS}</style>`)
  }

  // تحسين صفحة تسجيل الدخول
  function enhanceLoginPage() {
    const loginElements = $("#l1, #l2, #l3")
    if (!loginElements.length) return

    function getOptimizedMainColor() {
      const color =
        $(".btn-primary").css("background-color") || $('meta[name="theme-color"]').attr("content") || "#5A7372"

      if (color.startsWith("rgb")) {
        const rgb = color.match(/\d+/g)
        return `#${rgb.map((x) => (+x).toString(16).padStart(2, "0")).join("")}`
      }
      return color
    }

    const MAIN = getOptimizedMainColor()
    const WHITE = "#FFFFFF"
    const SHADOW = "rgba(0,0,0,0.15)"

    cache.$body.addClass("login-page-enhanced")

    const placeholders = {
      "#l1 #u1, #l2 #u2, #l3 #u3": "اكتب اسمك هنا",
      "#l2 #pass1, #l3 #pass2": "اكتب كلمة المرور هنا",
    }

    Object.entries(placeholders).forEach(([selector, text]) => {
      $(selector).attr("placeholder", text)
    })

    const enhancedLoginCSS = `
      .login-page-enhanced ul.nav.nav-tabs.fl {
        background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,249,250,0.95)) !important;
        border: 2px solid rgba(0,0,0,0.1) !important;
        border-radius: 16px !important;
        height: 50px !important;
        padding: 5px !important;
        margin-top: 3px !important;
        float: right !important;
        box-shadow: 0 6px 20px rgba(0,0,0,0.1) !important;
        backdrop-filter: blur(15px) !important;
      }

      .login-page-enhanced ul.nav.nav-tabs.fl > li {
        width: 33.333% !important;
        margin: 0 3px 0 0 !important;
      }

      .login-page-enhanced ul.nav.nav-tabs.fl > li > a {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 10px !important;
        height: 38px !important;
        line-height: 38px !important;
        padding: 0 15px !important;
        border: none !important;
        border-radius: 12px !important;
        background: linear-gradient(135deg, ${MAIN}, ${MAIN}ee) !important;
        color: ${WHITE} !important;
        font-weight: 700 !important;
        font-size: 14px !important;
        text-align: center !important;
        text-shadow: 0 2px 4px rgba(0,0,0,0.3) !important;
        box-shadow: 
          0 6px 15px ${MAIN}50,
          inset 0 1px 0 rgba(255,255,255,0.3) !important;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
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
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
        transition: left 0.6s ease;
      }

      .login-page-enhanced ul.nav.nav-tabs.fl > li > a:hover {
        transform: translateY(-3px) scale(1.02) !important;
        box-shadow: 
          0 12px 25px ${MAIN}60,
          inset 0 1px 0 rgba(255,255,255,0.4) !important;
      }

      .login-page-enhanced ul.nav.nav-tabs.fl > li > a:hover::before {
        left: 100%;
      }

      .login-page-enhanced #l1 #u1, .login-page-enhanced #l2 #u2, .login-page-enhanced #l3 #u3,
      .login-page-enhanced #l2 #pass1, .login-page-enhanced #l3 #pass2 {
        width: 75% !important;
        height: 40px !important;
        line-height: 40px !important;
        padding: 0 20px !important;
        text-align: center !important;
        background: linear-gradient(145deg, #fff, #f8f9fa) !important;
        color: #2c3e50 !important;
        border: 3px solid ${MAIN}77 !important;
        border-radius: 22px !important;
        outline: none !important;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
        font-size: 15px !important;
        font-weight: 600 !important;
        box-shadow: 
          0 6px 15px rgba(0,0,0,0.1),
          inset 0 1px 0 rgba(255,255,255,0.9) !important;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
        -webkit-text-fill-color: #2c3e50 !important;
      }

      .login-page-enhanced #l1 #u1:focus, .login-page-enhanced #l2 #u2:focus, .login-page-enhanced #l3 #u3:focus,
      .login-page-enhanced #l2 #pass1:focus, .login-page-enhanced #l3 #pass2:focus {
        transform: translateY(-3px) !important;
        border-color: ${MAIN} !important;
        box-shadow: 
          0 12px 25px rgba(0,0,0,0.15),
          0 0 0 4px ${MAIN}44,
          inset 0 1px 0 rgba(255,255,255,1) !important;
        background: linear-gradient(145deg, #ffffff, #fafbfc) !important;
      }

      .login-page-enhanced #l1 #u1::placeholder, .login-page-enhanced #l2 #u2::placeholder, .login-page-enhanced #l3 #u3::placeholder,
      .login-page-enhanced #l2 #pass1::placeholder, .login-page-enhanced #l3 #pass2::placeholder {
        color: ${MAIN}bb !important;
        opacity: 1 !important;
        font-weight: 500 !important;
        font-style: italic !important;
      }
    `

    $("#login-enhanced-styles").remove()
    cache.$head.append(`<style id="login-enhanced-styles">${enhancedLoginCSS}</style>`)
  }

  // تشغيل جميع التحسينات
  $(() => {
    requestAnimationFrame(() => {
      createAdvancedStyles()
      enhanceCopyright()
      fixAndEnhanceInputFields()
      enhanceImageFrames()
      enhanceLoginPage()
    })
  })
})(window.jQuery)
