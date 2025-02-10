$(document).ready(function() {
    let pingElement = $('<div id="ping-container" style="display: inline-block; margin-left: 10px;">' +
        '<span class="fa fa-wifi" style="color: green; font-size: 16px;"></span> ' +
        '<span id="ping" style="font-weight: bold; color: green;">160ms</span>' +
        '</div>');

    $("div.label.label-primary:contains('الحاله')").after(pingElement);

    setInterval(() => {
        $("#ping").text(Math.floor(Math.random() * 100) + 50 + "ms");
    }, 5000);
});
