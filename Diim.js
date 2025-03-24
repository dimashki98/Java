$("style").last().append("\n\n#users .uzr.Dim img.co {\n  width: 1px !important;\n    height: 1px !important;\n  margin-right: 1px;\n}\n\n#users .uzr.Dim span.uhash{\n  -webkit-text-fill-color: transparent;\nwidth: 1px !important;\n    height: 1px !important;\n  margin-right: 1px;}\n\n\n#users .uzr.Dim img.u-ico {\nmargin-left: -2px;\n    border-radius: 0px 8px 0px 8px;\n     \n\n      \n    }\n\n#users .uzr.Dim img.ustat {\n      width: 54px !important;\n  border-radius: 0px 50px 50px 50px !important;\n  height: 52px !important;\n  margin-top: 5px !important;\n  min-height: 0% !important;\n  margin-left: 14px;\n  z-index: 0 !important;\n  display: none;\n      \n    }\n\n#users .uzr.Dim .fitimg.u-pic {\n  border-radius: 100px !important;\n  margin-top: 22px !important;\n  height: 52px !important;\n  margin-left: 23px!important;\n  z-index: 0 !important;\nmargin-bottom: 0px !important;\npadding: 28px !important;\nborder:2px solid #9f9f9f;margin-top:3px;border-radius:100px;\n\nfilter: hue-rotate(360deg);\nbox-shadow: 0 0 0px rgb(0 0 0), inset 0 0 4px rgb(0 0 0), 0 0 0 0px #000;\n}\n\n#users .uzr.Dim .u-msg {\n\ttext-align: center;\n  -webkit-background-clip: text;\n  \n  font-size: 89% !important;\n  -webkit-text-fill-color: #0000;\n background-image: url(https://up6.cc/2023/01/167459183804791.gif);\n  padding: 0px !important;\n\tmargin-bottom: 56px !important;\nmargin-left: -13px;\nbackground-size: cover;\nmargin-top: 5px !important;\n\n}\n\n\n\n\n\n#users .uzr.Dim {\n  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;\n  margin-bottom: 3px !important;\n  margin-top: 2px !important;\n  border-radius: 0px 11px 0px 11px;\n   \n  \n  border: 1px solid #fff;\n background-image: url(https://up6.cc/2025/02/174033788754541.png);\nbackground-size: 100%;\n    \n}\n\n\n\n#users .uzr.Dim .d-flex.fl {\n  padding-right: 0px !important;\n}\n\n#users .uzr.Dim .u-topic {\n-webkit-text-fill-color: transparent;\n  margin-left: 4px;\nmargin-bottom: 33px !important;\n}\n\n#users .uzr.Dim .itarr_Dim1 {\n width: 109px;\nheight: 109px;\nmargin-top: -50px;\ncursor: pointer;\nmargin-left: -55px;\n}\n\n\n\n\n");
const _Dim = [{
  'name': 'Dim',
  'deco': "Dim",
  'cls': 'Dim',
  'icon': "https://up6.cc/2023/03/16780297543541.png"
}];

setInterval(() => {
  if (myid != null) {
    _Dim.forEach(_0x323d45 => {
      const _0x210b59 = $("#users .uzr:contains('" + _0x323d45.deco + "')");
      if (_0x210b59 && !_0x210b59.hasClass(_0x323d45.cls)) {
        $("#users .uzr:contains('" + _0x323d45.deco + "')").addClass(_0x323d45.cls);
        $("#users .uzr." + _0x323d45.cls + " .fitimg.u-pic").append("<img class=\"itarr_" + _0x323d45.name + "\" title=\"اطاري\" src=\"" + _0x323d45.icon + "\">");
      }
    });
  }
}, 3000);
