$(document).ready(function() {
    $("<label title='GAMES' aria-expanded='true' href='#' onclick=\"if (!window.__cfRLUnblockHandlers) return false; $('.pnhead').text($(this).attr('title'));$('.dpnl').show();\" style='background-color: ghostwhite;color: black;margin:1px 4px; padding:6px;width:98%;' data-toggle='tab' data-target='#newoption2' class='label tc border btn fl'><span class='fa fa-star fl' style='font-family: FontAwesome, sans-serif;'></span>GAMES</label>")
        .insertAfter("label[title='الإظافات']");

    $("<div id='newoption2' style='height: 100%; width: 100%;' class='light break border tab-pane'>" +
      "<p></p>" +
      "<button class='btn btn-success' data-toggle='tab' data-target='#settings'>العودة إلى الإعدادات</button>" +
      "<div class='game-buttons'>" +
        "<label class='label tc border btn label-info fl' style='background-color: lightgreen; color: rgb(0, 0, 0); margin: 1px 4px; padding: 6px; width: 98%;'><span class='fl fa fa-gamepad' style='font-family: FontAwesome, sans-serif;'></span> لعبة بلياردو</label>" +
        "<label class='label tc border btn label-info fl' style='background-color: lightcoral; color: rgb(0, 0, 0); margin: 1px 4px; padding: 6px; width: 98%;'><span class='fl fa fa-gamepad' style='font-family: FontAwesome, sans-serif;'></span> لعبة مطاردة القطارات</label>" +
        "<label class='label tc border btn label-info fl' style='background-color: lightblue; color: rgb(0, 0, 0); margin: 1px 4px; padding: 6px; width: 98%;'><span class='fl fa fa-gamepad' style='font-family: FontAwesome, sans-serif;'></span> لعبة سوليتير</label>" +
      "</div>" +
      "<div id='gameContainer' style='width: 100%; height: 500px;'></div>" +
      "</div>").appendTo(".tab-content");

    $(".game-buttons label").click(function() {
        var gameName = $(this).text().trim();
        var iframeSrc = "";

        if (gameName === "لعبة بلياردو") {
            iframeSrc = "https://games.cdn.famobi.com/html5games/0/8-ball-billiards-classic/v250/?fg_domain=play.famobi.com&fg_aid=A-FAMOBI-COM&fg_uid=82038e98-d4e1-46dd-8de9-1460d1395eab&fg_pid=96ab9c2f-6013-4b31-96dc-ccb5c7a89329&fg_beat=976&original_ref=https%3A%2F%2Ffamobi.com%2F";
        } else if (gameName === "لعبة مطاردة القطارات") {
            iframeSrc = "https://ubg77.github.io/updatefaqs/subway-surfers-winter-holiday/";
        } else if (gameName === "لعبة سوليتير") {
            iframeSrc = "https://games.cdn.famobi.com/html5games/s/solitaire-klondike/3239a0d6/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=5b597140-77c2-4f7c-9abf-4f149d6dcbac&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=679&original_ref=https%3A%2F%2Fgames.famobi.com%2F";
        }

        $("#gameContainer").html(`
          <iframe src="${iframeSrc}" scrolling="no" frameborder="no" allowfullscreen="" sandbox="allow-scripts allow-same-origin" style="width: 100%; height: 100%;"></iframe>
          <div onclick="$('#gameContainer').html('');" style="position: relative; color: #fff; width: 100%; text-align: center; background: red; cursor: pointer;">
            <i style="font-size: 25px !important;" class="fa fa-close"></i> إغلاق اللعبة
          </div>
        `);
    });
});
