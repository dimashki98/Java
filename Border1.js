setInterval(function() {
  $('.fitimg.prod').css('border', '3px solid blue').fadeOut(200, function() {
    $(this).css('border', '3px solid red').fadeIn(200, function() {
      $(this).css('border', '3px solid yellow');
    });
  });
}, 600);
