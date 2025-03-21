$(document).ready(function() {
  setInterval(function() {
    // تطبيق التغيير على كل عنصر .fitimg.prod
    $('.fitimg.prod').each(function() {
      // تغيير حدود العنصر إلى اللون الأزرق
      $(this).css('border', '3px solid blue');

      // تأثير fadeOut ثم fadeIn مع تغيير اللون
      $(this).fadeOut(200, function() {
        $(this).css('border', '3px solid red').fadeIn(200, function() {
          $(this).css('border', '3px solid yellow');
        });
      });
    });
  }, 600);
});
