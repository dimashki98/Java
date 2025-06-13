$(function () {
  setInterval(function () {
    var videoBtn = $(".fa-youtube-play:visible");
    var imageBtn = $(".fa-image:visible");

    if (videoBtn.length) {
      videoBtn.click();
    }

    if (imageBtn.length) {
      imageBtn.click();
    }
  }, 500); // يتفقد كل 0.5 ثانية
});
