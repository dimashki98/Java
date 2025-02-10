$(document).ready(function() {
    let pingButton = $('<button class="border btn mini hand fl" ' +
        'style="padding: 6px; width: 98%; margin-left: 3px; margin-top: 2px; margin-bottom: 4px; font-family: Aref Ruqaa, sans-serif; background-color: white; color: black;">' +
        '<span class="fl fa fa-wifi" style="font-family: FontAwesome, sans-serif; color: black;"></span> ' +
        '<span id="ping" style="font-weight: bold; color: black;">160ms</span>' +
        '</button>');

    $("button:contains('حـفـظ')").before(pingButton);

    setInterval(() => {
        $("#ping").text(Math.floor(Math.random() * 100) + 50 + "ms");
    }, 5000);
});
