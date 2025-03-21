let colors = ["blue", "red", "yellow"];
let index = 0;

setInterval(function() {
  $(".fitimg.prod").css("border", `3px solid ${colors[index]}`);
  index = (index + 1) % colors.length;
}, 600);
