$(function () {

  const TENOR_KEY = "LIVDSRZULELA";

  /* زر GIF جنب الإيموجي */
  const gifBtn = $('<img>', {
    src: 'imgs/emoii.gif',
    class: 'fl nosel gifbtn',
    css: { padding: '5px', width: '34px', cursor: 'pointer' },
    title: 'GIF'
  });

  $('.emobox').after(gifBtn);

  /* بوكس GIF */
  const gifBox = $(`
    <div class="gif-box" style="
      position:absolute;
      bottom:55px;
      right:5px;
      width:320px;
      background:#fff;
      border:1px solid #ddd;
      border-radius:6px;
      padding:6px;
      display:none;
      z-index:9999">
      <input class="gif-search" placeholder="ابحث عن GIF..."
        style="width:100%;padding:6px;border:1px solid #ccc;border-radius:4px">
      <div class="gif-results" style="
        margin-top:6px;
        max-height:220px;
        overflow:auto;
        display:flex;
        flex-wrap:wrap;
        gap:5px"></div>
    </div>
  `);

  $('body').append(gifBox);

  /* فتح / إغلاق */
  gifBtn.on('click', function (e) {
    e.stopPropagation();
    gifBox.toggle();
    loadTrending();
  });

  gifBox.on('click', e => e.stopPropagation());
  $(document).on('click', () => gifBox.hide());

  /* تحميل GIFs جاهزة */
  function loadTrending() {
    $('.gif-results').html('⏳');
    $.ajax({
      url: 'https://g.tenor.com/v1/trending',
      dataType: 'jsonp',
      data: {
        key: TENOR_KEY,
        limit: 20
      },
      success: renderGifs
    });
  }

  /* البحث */
  let timer = null;
  $('.gif-search').on('input', function () {
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
        data: {
          q: q,
          key: TENOR_KEY,
          limit: 20
        },
        success: renderGifs
      });
    }, 400);
  });

  /* عرض النتائج */
  function renderGifs(res) {
    $('.gif-results').empty();
    if (!res.results) return;

    res.results.forEach(gif => {
      const url = gif.media[0].tinygif.url;

      $('<img>', {
        src: url,
        css: {
          width: '90px',
          cursor: 'pointer',
          borderRadius: '4px'
        }
      }).on('click', function () {
        sendGif(url);
        gifBox.hide();
      }).appendTo('.gif-results');
    });
  }

  /* إدراج الرابط وإرسال */
  function sendGif(url) {
    const tbox = $('#tbox');
    if (!tbox.length) return;

    tbox.val(url);

    if (typeof Tsend === 'function') {
      Tsend();
    }
  }

});

/* ===== تحويل رابط Tenor داخل الرسالة إلى GIF ===== */
setInterval(function () {
  $('.u-msg').each(function () {

    if ($(this).data('gifdone')) return;

    const html = $(this).html();
    const reg = /(https:\/\/media\.tenor\.com\/[^\s]+)/g;

    if (reg.test(html)) {
      $(this)
        .html(
          html.replace(reg, url =>
            `<img src="${url}" style="max-width:180px;border-radius:6px">`
          )
        )
        .data('gifdone', true);
    }

  });
}, 500);
