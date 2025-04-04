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
</script>

<style>
  /* CSS لضبط صورة الإطار */
  .itarr_Mdx {
    position: absolute;
    bottom: 0; /* تحديد الصورة أسفل العنصر */
    left: 50%;
    transform: translateX(-50%); /* لضبط الصورة في المنتصف */
    width: 30px; /* ضبط العرض ليناسب نفس حجم hhq1 */
    height: 30px; /* ضبط الارتفاع ليناسب نفس حجم hhq1 */
    border-radius: 50%; /* جعل الصورة دائرية */
    z-index: 10; /* التأكد من أن الصورة تكون فوق العناصر الأخرى */
  }
