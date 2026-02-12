$(function () {

  if (window.__DUAL_GIF_ACTIVE__) return;
  window.__DUAL_GIF_ACTIVE__ = true;

  const TENOR_KEY = "LIVDSRZULELA";

  /* ============================= */
  /* ===== إنشاء نظام GIF ===== */
  /* ============================= */

  function createGifSystem(config) {

    if (!$(config.buttonAnchor).length || !$(config.tbox).length) return;

    if ($('.gifbtn-' + config.id).length) return;

    /* ===== زر ===== */
    const gifBtn = $('<img>', {
      src: 'imgs/emoii.gif',
      class: 'fl nosel gifbtn-' + config.id,
      css: {
        padding: '5px',
        width: '34px',
        cursor: 'pointer',
        marginLeft: '2px'
      },
      title: 'GIF'
    });

    $(config.buttonAnchor).after(gifBtn);

    /* ===== بوكس ===== */
    const gifBox = $(`
      <div class="gif-box-${config.id}" style="
        position:fixed;
        width:320px;
        max-width:95vw;
        background:#fff;
        border:1px solid #ddd;
        border-radius:8px;
        padding:8px;
        display:none;
        z-index:99999;
        box-shadow:0 10px 25px rgba(0,0,0,.15)">
        
        <input class="gif-search-${config.id}" placeholder="ابحث عن GIF..."
          style="width:100%;padding:6px;border:1px solid #ccc;border-radius:4px">

        <div class="gif-results-${config.id}" style="
          margin-top:6px;
          max-height:220px;
          overflow:auto;
          display:flex;
          flex-wrap:wrap;
          gap:5px"></div>
      </div>
    `);

    $('body').append(gifBox);

    /* ===== تمركز ===== */
    function positionBox() {

      const tbox = $(config.tbox);
      const offset = tbox.offset();
      const windowWidth = $(window).width();
      const boxWidth = gifBox.outerWidth();

      let leftPos = offset.left;

      if (leftPos + boxWidth > windowWidth - 10) {
        leftPos = windowWidth - boxWidth - 10;
      }

      if (leftPos < 10) leftPos = 10;

      gifBox.css({
        left: leftPos,
        bottom: $(window).height() - offset.top + 8
      });
    }

    gifBtn.on('click', function (e) {
      e.stopPropagation();
      positionBox();
      gifBox.toggle();
      loadTrending();
    });

    gifBox.on('click', e => e.stopPropagation());
    $(document).on('click', () => gifBox.hide());

    /* ===== تحميل ترند ===== */
    function loadTrending() {
      $('.gif-results-' + config.id).html('⏳');

      $.ajax({
        url: 'https://g.tenor.com/v1/trending',
        dataType: 'jsonp',
        data: { key: TENOR_KEY, limit: 20 },
        success: renderGifs
      });
    }

    /* ===== بحث ===== */
    let timer = null;

    $(document).on('input', '.gif-search-' + config.id, function () {

      clearTimeout(timer);
      const q = $(this).val().trim();

      if (q.length < 2) {
        loadTrending();
        return;
      }

      timer = setTimeout(() => {
        $.ajax({
          url: 'https://g.tenor.com/v1/search',
          dataType: 'jsonp',
          data: { q: q, key: TENOR_KEY, limit: 20 },
          success: renderGifs
        });
      }, 400);

    });

    /* ===== عرض النتائج ===== */
    function renderGifs(res) {

      const container = $('.gif-results-' + config.id);
      container.empty();

      if (!res.results) return;

      res.results.forEach(gif => {

        const url = gif.media[0].tinygif.url;

        $('<img>', {
          src: url,
          css: {
            width: '90px',
            cursor: 'pointer',
            borderRadius: '6px'
          }
        })
        .on('click', function () {
          const tbox = $(config.tbox);
          tbox.val(url);
          config.send();
          gifBox.hide();
        })
        .appendTo(container);

      });
    }

  }

  /* ===== نظام BC ===== */
  createGifSystem({
    id: "bc",
    buttonAnchor: ".emobc",
    tbox: ".tboxbc",
    send: function () {
      if (typeof SEND_BC_UP === 'function') SEND_BC_UP();
    }
  });

  /* ===== نظام OLD ===== */
  createGifSystem({
    id: "old",
    buttonAnchor: ".emobox",
    tbox: "#tbox",
    send: function () {
      if (typeof Tsend === 'function') Tsend();
    }
  });

});


/* ======================================= */
/* ===== تحويل روابط Tenor لصور ===== */
/* ======================================= */

if (!window.__TENOR_RENDER_ACTIVE__) {

  window.__TENOR_RENDER_ACTIVE__ = true;

  setInterval(function () {

    $('.u-msg, .msg').each(function () {

      if ($(this).data('gifdone')) return;

      const msg = $(this);
      const textOnly = msg.clone().children().remove().end().text();

      const reg = /(https:\/\/(media|c)\.tenor\.com\/[^\s]+)/;
      const match = textOnly.match(reg);
      if (!match) return;

      const url = match[1];

      msg.contents().filter(function () {
        return this.nodeType === 3 && this.nodeValue.includes(url);
      }).each(function () {
        this.nodeValue = this.nodeValue.replace(url, '');
      });

      msg.prepend(`
        <div class="gif-only" style="margin-bottom:4px">
          <img src="${url}" style="max-width:200px;border-radius:8px">
        </div>
      `);

      msg.data('gifdone', true);

    });

  }, 400);
}
