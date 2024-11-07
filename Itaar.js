$('style').last().append("\n\n\n\n\n\n\n#users .uzr.Ddd img.co {\n  width: 1px !important;\n    height: 1px !important;\n  margin-right: 1px;\n}\n\n#users .uzr.Ddd span.uhash{\n    -webkit-text-fill-color: transparent;\nwidth: 1px !important;\n    height: 1px !important;\n  margin-right: 1px;}\n\n\n#users .uzr.Ddd img.u-ico {\nmargin-left: 9px;\n\n\n     \n\n      \n    }\n\n#users .uzr.Ddd img.ustat {\n      width: 54px !important;\n  border-radius: 0px 50px 50px 50px !important;\n  height: 52px !important;\n  margin-top: 5px !important;\n  min-height: 0% !important;\n  margin-left: 14px;\n  z-index: 0 !important;\n  display: none;\n      \n    }\n\n#users .uzr.Ddd .fitimg.u-pic {\n  border-radius: 100px !important;\n  margin-top: 6px !important;\n  height: 52px !important;\n  margin-left: 14px!important;\n  z-index: 0 !important;\nmargin-bottom: 8px !important;\npadding: 28px !important;\nborder:1px solid #2e2e2e;margin-top:3px;border-radius:100px;\n\nbox-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 6px #000;\nfilter: hue-rotate(360deg);\nbox-shadow: 0 0 0px rgb(0 0 0), inset 0 0 4px rgb(0 0 0), 0 0 0 0px #000;\n}\n\n#users .uzr.Ddd .u-msg {\n-webkit-background-clip: text;\n  \n  font-size: 93% !important;\n  -webkit-text-fill-color: #0000;\n background-image: url(https://up6.cc/2024/05/171571547944381.gif);\n  padding: 0px !important;\n\tmargin-bottom: 7px !important;\n\nmargin-left: 2px;\nbackground-size: cover;\nmargin-top: 7px !important;\n\n}\n\n\n\n\n\n#users .uzr.Ddd {\n  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;\n  margin-bottom: 3px !important;\n  margin-top: 2px !important;\n  border-radius: 0px!important;\n   \n  \n  border: 1px solid #fff;\n background-image: url(https://up6.cc/2023/03/16783998552941.png);\nbackground-size: 100%;\n\n    \n}\n\n\n\n#users .uzr.Ddd .d-flex.fl {\n  padding-right: 0px !important;\n}\n\n#users .uzr.Ddd .u-topic {\n -webkit-text-fill-color: transparent;\n  margin-left: 5px ;\n\n}\n\n#users .uzr.Ddd .itarr_Ddd {\n width: 92px;\nheight: 92px;\nmargin-top: -45px;\ncursor: pointer;\nmargin-left: -47px;\n}\n\n\n\n#users .uzr.lost .u-topic {\n  -webkit-text-fill-color: transparent;\n-webkit-background-clip: text;\n\n\n  -webkit-text-fill-color: #0000;\n  background-image: url(https://up6.cc/2024/08/1722545373831.gif);\n  color: transparent !important;\n}\n#users .uzr.lost span.uhash{\n    -webkit-text-fill-color: #000 !important;\n}\n#users .uzr.lost .u-msg {\nmargin-left: 0px;\n\n  -webkit-text-fill-color: #090909;\n\n\n\n}\n#users .uzr.lost {\n  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;\n  margin-bottom: 3px !important;\n  margin-top: 2px !important;\n  border-radius: 0px!important;\n  background-image: \n  background-size: cover;\n  border: 1px solid #fff;\nbackground-image: linear-gradient(-225deg, rgb(202, 202, 202) 0%, rgba(255, 0, 143, 0) 29%, rgba(151, 101, 127, 0.04) 67%, rgb(198, 198, 198) 100%);  \n}\n#users .uzr.lost .d-flex.fl {\n  padding-right: 0px !important;\n}\n#users .uzr.lost .u-topic {\n  margin-left: 5px;\n}\n\n\n#users .uzr.lost .itarr_Slost {\n width: 0px;\nmargin-top: -45px;\ncursor: pointer;\nmargin-left: -47px;\n}\n\n\n\n\n\n");
const _ma56zznz2 = [{
  'name': 'Ddd',
  'deco': "Ddd",
  'cls': "Ddd",
  'icon': "https://up6.cc/2023/03/167839668797841.gif"
}, {
  'name': 'Slost',
  'deco': "lost",
  'cls': 'lost',
  'icon': 'https://up6.cc/2023/04/168141949862121.png'
}];
setInterval(() => {
  if (myid != null) {
    _ma56zznz2.forEach(_0x11373f => {
      const _0x143f36 = $(users).find(".uzr:contains('" + _0x11373f.deco + "')");
      if (_0x143f36 && !_0x143f36.hasClass(_0x11373f.cls)) {
        $(users).find(".uzr:contains('" + _0x11373f.deco + "')").addClass(_0x11373f.cls);
        $(users).find(".uzr." + _0x11373f.cls + " .fitimg.u-pic").append("<img class=\"itarr_" + _0x11373f.name + "\" title=\"اطاري\" src=\"" + _0x11373f.icon + "\">");
      }
    });
  }
}, 6000);
