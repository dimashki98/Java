$(function () {
  setInterval(function () {
    $('button.btn.fl').each(function () {
      var $btn = $(this);
      var text = $btn.text().trim();
      
      if (
        (text === "عرض الفيديو" && $btn.hasClass("fa-youtube-play")) ||
        (text === "عرض الصوره" && $btn.hasClass("fa-image"))
      ) {
        $btn.click();
      }
    });
  }, 500);
});
