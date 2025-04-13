$(function(){
  var $input = $('.urluto');
  var text = 'رابط الفيديو facebook / instagram / snapchat / tiktok ';
  var pos = 0;

  setInterval(function(){
    $input.attr('placeholder', text.substring(pos) + text.substring(0, pos));
    pos = (pos + 1) % text.length;
  }, 150); // سرعة التمرير
});
