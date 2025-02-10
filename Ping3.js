$(document).ready(function() {
    let pingButton = $('<button class="border btn mini btn-success hand fl" ' +
        'style="padding: 6px; width: 98%; margin-left: 3px; margin-top: 2px; margin-bottom: 4px; font-family: Aref Ruqaa, sans-serif;">' +
        '<span class="fl fa fa-wifi" style="font-family: FontAwesome, sans-serif;"></span> ' +
        'البينغ <span id="ping" style="font-weight: bold; color: green;">160ms</span>' +
        '</button>');

    $("button:contains('حـفـظ')").before(pingButton);

    setInterval(() => {
        $("#ping").text(Math.floor(Math.random() * 100) + 50 + "ms");
    }, 5000);
});
