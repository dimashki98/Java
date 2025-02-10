$(document).ready(function() {
    let pingElement = $('<div id="ping-container" style="margin-top: 10px; text-align: center;">' +
        '<span class="fa fa-wifi" style="color: green; font-size: 16px;"></span> ' +
        '<span id="ping" style="font-weight: bold; color: green;">160ms</span>' +
        '</div>');

    $("#newoption").append(pingElement);

    setInterval(() => {
        $("#ping").text(Math.floor(Math.random() * 100) + 50 + "ms");
    }, 5000);
});
