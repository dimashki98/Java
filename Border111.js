setInterval(function() {
  $('.fitimg.prod').css('border', '3px solid blue');
  
  setTimeout(function() {
    $('.fitimg.prod').css('border', '3px solid red');
  }, 200);
  
  setTimeout(function() {
    $('.fitimg.prod').css('border', '3px solid yellow');
  }, 400);
  
}, 600);
