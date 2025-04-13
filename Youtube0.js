$(document).ready(function(){
  let $input = $('.urluto');
  let text = $input.attr('placeholder');
  let i = 0;

  setInterval(function(){
    i = (i + 1) % text.length;
    let scrollingText = text.slice(i) + ' - ' + text.slice(0, i);
    $input.attr('placeholder', scrollingText);
  }, 200); // يمكن تعديل السرعة
});
