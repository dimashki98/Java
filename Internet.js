$(document).ready(function () {
  function checkConnection() {
    $.ajax({
      url: "/ping",
      method: "GET",
      timeout: 5000,
      cache: false,
      success: function () {
        console.log("الاتصال مستقر ✅");
        setTimeout(checkConnection, 5000); // إعادة الفحص بشكل دوري
      },
      error: function () {
        console.warn("فقد الاتصال - إعادة المحاولة...");
        setTimeout(checkConnection, 2000); // إعادة المحاولة بشكل أسرع في حال فشل الاتصال
      }
    });
  }

  checkConnection();

  window.addEventListener("offline", function (e) {
    e.stopPropagation();
    console.warn("تم منع إشعار انقطاع الاتصال");
  });

  window.addEventListener("online", function () {
    console.log("الاتصال عاد!");
  });

  // حماية من تجميد الصفحة عند انقطاع الانترنت
  setInterval(function () {
    $.get("/ping").fail(function () {
      console.warn("محاولة استعادة الاتصال...");
    });
  }, 10000);
});
