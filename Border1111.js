setInterval(function() {
  $('.fitimg.prod').each(function() {
    $(this).css('border', '3px solid blue');

    setTimeout(() => {
      $(this).css('border', '3px solid red');
    }, 200);

    setTimeout(() => {
      $(this).css('border', '3px solid yellow');
    }, 400);
  });
}, 600);
