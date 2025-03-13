setInterval(() => {
  $("#users .uzr").each(function() {
    let user = $(this);
    let decoText = user.find(".u-topic").text().trim(); // اجلب النص الفعلي
    if (decoText === "◟ M.D.X ◝" && !user.hasClass("Mdx")) {
      user.addClass("Mdx");
      user.find(".fitimg.u-pic").append("<img class='itarr_Mdx' title='اطاري' src='https://up6.cc/2023/03/16780297543541.png'>");
    }
  });
}, 3000);
