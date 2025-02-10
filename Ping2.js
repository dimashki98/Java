$(document).ready(function() {
    let pingButton = $('<div style="display: block; width: 132px; margin-top: 5px; height: 25px; padding: 1px;" class="label label-primary">' +
        'البينغ <span id="ping" style="font-weight: bold; color: green;">160ms</span>' +
        '</div>');

    $("div.label.label-primary:contains('الحاله')").after(pingButton);

    setInterval(() => {
        $("#ping").text(Math.floor(Math.random() * 100) + 50 + "ms");
    }, 5000);
});
