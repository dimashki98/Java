setInterval(function() {
  $('.fitimg.prod').css('border', '3px solid blue').delay(200).queue(function(next) {
    $(this).css('border', '3px solid red');
    next();
  }).delay(200).queue(function(next) {
    $(this).css('border', '3px solid yellow');
    next();
  });
}, 600);
