$('style').last().append(`
  #users .uzr.mdx img.co {
    width: 1px !important;
    height: 1px !important;
    margin-right: 1px;
  }
  
  #users .uzr.mdx span.uhash {
    -webkit-text-fill-color: transparent;
    width: 1px !important;
    height: 1px !important;
    margin-right: 1px;
  }
  
  #users .uzr.mdx img.u-ico {
    margin-left: -2px;
    border-radius: 0px 8px 0px 8px;
  }

  #users .uzr.mdx img.ustat {
    width: 54px !important;
    border-radius: 0px 50px 50px 50px !important;
    height: 52px !important;
    margin-top: 5px !important;
    min-height: 0% !important;
    margin-left: 14px;
    z-index: 0 !important;
    display: none;
  }

  #users .uzr.mdx .fitimg.u-pic {
    border-radius: 100px !important;
    margin-top: 22px !important;
    height: 52px !important;
    margin-left: 23px !important;
    z-index: 0 !important;
    margin-bottom: 0px !important;
    padding: 28px !important;
    border: 2px solid #9f9f9f;
    margin-top: 3px;
    border-radius: 100px;
    filter: hue-rotate(360deg);
    box-shadow: 0 0 0px rgb(0 0 0), inset 0 0 4px rgb(0 0 0), 0 0 0 0px #000;
  }

  #users .uzr.mdx .u-msg {
    text-align: center;
    -webkit-background-clip: text;
    font-size: 89% !important;
    -webkit-text-fill-color: #0000;
    background-image: url(https://up6.cc/2023/01/167459183804791.gif);
    padding: 0px !important;
    margin-bottom: 56px !important;
    margin-left: -13px;
    background-size: cover;
    margin-top: 5px !important;
  }

  #users .uzr.mdx {
    box-shadow: inset 0 0 0 rgba(0,0,0,.08), 0 0 2px #000;
    margin-bottom: 3px !important;
    margin-top: 2px !important;
    border-radius: 0px 11px 0px 11px;
    border: 1px solid #fff;
    background-image: url(https://up6.cc/2025/02/174033788754541.png);
    background-size: 100%;
  }

  #users .uzr.mdx .d-flex.fl {
    padding-right: 0px !important;
  }

  #users .uzr.mdx .u-topic {
    -webkit-text-fill-color: transparent;
    margin-left: 4px;
    margin-bottom: 33px !important;
  }

  #users .uzr.mdx .itarr_mdx {
    width: 109px;
    height: 109px;
    margin-top: -50px;
    cursor: pointer;
    margin-left: -55px;
  }
`);

const _mdxhz = [{
  'name': 'mdx',
  'deco': "◟ M.D.X ◝",
  'cls': 'mdx',
  'icon': "https://up6.cc/2023/03/16780297543541.png"
}];

setInterval(() => {
  if (myid != null) {
    _mdxhz.forEach(user => {
      const userElement = $("#users .uzr:contains('" + user.deco + "')");
      if (userElement && !userElement.hasClass(user.cls)) {
        userElement.addClass(user.cls);
        $("#users .uzr." + user.cls + " .fitimg.u-pic").append("<img class=\"itarr_" + user.name + "\" title=\"اطاري\" src=\"" + user.icon + "\">");
      }
    });
  }
}, 3000);
