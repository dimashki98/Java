$(document).ready(function() {
    $("<label title='GAMES' aria-expanded='true' href='#' onclick=\"if (!window.__cfRLUnblockHandlers) return false; $('.pnhead').text($(this).attr('title'));$('.dpnl').show();\" style='background-color: ghostwhite;color: black;margin:1px 4px; padding:6px;width:98%;' data-toggle='tab' data-target='#newoption2' class='label tc border btn fl'><span class='fa fa-star fl'></span> GAMES</label>")
        .insertAfter("label[title='الإظافات']");

    $("<div id='newoption2' style='height: 100%; width: 100%;' class='light break border tab-pane'>" +
      "<p></p>" +
      "<button class='btn btn-success' data-toggle='tab' data-target='#settings'>العودة إلى الإعدادات</button>" +
      "<div class='game-buttons'>" +
        "<label class='label tc border btn label-info fl' style='background-color: lightgreen; color: black; margin: 1px 4px; padding: 6px; width: 98%;'><span class='fl fa fa-gamepad'></span> لعبة بلياردو</label>" +
        "<label class='label tc border btn label-info fl' style='background-color: lightcoral; color: black; margin: 1px 4px; padding: 6px; width: 98%;'><span class='fl fa fa-gamepad'></span> لعبة مطاردة القطارات</label>" +
        "<label class='label tc border btn label-info fl' style='background-color: lightblue; color: black; margin: 1px 4px; padding: 6px; width: 98%;'><span class='fl fa fa-gamepad'></span> لعبة سوليتير</label>" +
        "<label class='label tc border btn label-info fl' style='background-color: orange; color: black; margin: 1px 4px; padding: 6px; width: 98%;'><span class='fl fa fa-gamepad'></span> لعبة بولينغ</label>" +
        "<label class='label tc border btn label-info fl' style='background-color: purple; color: black; margin: 1px 4px; padding: 6px; width: 98%;'><span class='fl fa fa-gamepad'></span> لعبة بلياردو ٢</label>" +
        "<label class='label tc border btn label-info fl' style='background-color: gold; color: black; margin: 1px 4px; padding: 6px; width: 98%;'><span class='fl fa fa-gamepad'></span> لعبة الشطرنج</label>" +
        "<label class='label tc border btn label-info fl' style='background-color: pink; color: black; margin: 1px 4px; padding: 6px; width: 98%;'><span class='fl fa fa-gamepad'></span> لعبة كاندي بابل</label>" +
        "<label class='label tc border btn label-info fl' style='background-color: cyan; color: black; margin: 1px 4px; padding: 6px; width: 98%;'><span class='fl fa fa-gamepad'></span> لعبة جويل</label>" +
        "<label class='label tc border btn label-info fl' style='background-color: brown; color: white; margin: 1px 4px; padding: 6px; width: 98%;'><span class='fl fa fa-search'></span> لعبة اوجد الفرق</label>" +
        "<label class='label tc border btn label-info fl' style='background-color: darkgreen; color: white; margin: 1px 4px; padding: 6px; width: 98%;'><span class='fl fa fa-dice'></span> لعبة لودو</label>" +
      "</div>" +
      "<div id='gameContainer' style='width: 100%; height: 500px;'></div>" +
      "</div>").appendTo(".tab-content");

    $(".game-buttons label").click(function() {
        var gameName = $(this).text().trim();
        var iframeSrc = "";

        if (gameName === "لعبة بلياردو") {
            iframeSrc = "https://games.cdn.famobi.com/html5games/0/8-ball-billiards-classic/v250/?fg_domain=play.famobi.com";
        } else if (gameName === "لعبة مطاردة القطارات") {
            iframeSrc = "https://ubg77.github.io/updatefaqs/subway-surfers-winter-holiday/";
        } else if (gameName === "لعبة الحبار") {
            iframeSrc = "https://www.onlinegames.io/games/2021/unity3/squid-race-simulator/index.html";
        } else if (gameName === "لعبة بولينغ") {
            iframeSrc = "https://zv1y2i8p.play.gamezop.com/g/BkdJhTX50B";
        } else if (gameName === "لعبة بلياردو ٢") {
            iframeSrc = "https://zv1y2i8p.play.gamezop.com/g/hgempP8Sc";
        } else if (gameName === "لعبة الشطرنج") {
            iframeSrc = "https://zv1y2i8p.play.gamezop.com/g/rkAXTzkD5kX";
        } else if (gameName === "لعبة كاندي بابل") {
            iframeSrc = "https://gamesnacks.com/games/candybubbles";
        } else if (gameName === "لعبة جويل") {
            iframeSrc = "https://gamesnacks.com/games/jewelacademy";
        } else if (gameName === "لعبة اوجد الفرق") {
            iframeSrc = "https://gamesnacks.com/games/findthedifference";
        } else if (gameName === "لعبة لودو") {
            iframeSrc = "https://gamesnacks.com/games/ludolegend";
        }

        $("#gameContainer").html(`
          <iframe src="${iframeSrc}" scrolling="no" frameborder="no" allowfullscreen="" sandbox="allow-scripts allow-same-origin" style="width: 100%; height: 100%;"></iframe>
          <div onclick="$('#gameContainer').html('');" style="position: relative; color: #fff; width: 100%; text-align: center; background: red; cursor: pointer;">
            <i style="font-size: 25px !important;" class="fa fa-close"></i> إغلاق اللعبة
          </div>
        `);
    });
});
