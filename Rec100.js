$(function () {
  var tried = 0;

  setInterval(function () {
    if (typeof socket !== "undefined") {
      console.log("🛑 قطع الاتصال");
      socket.disconnect();

      // بعد 3 ثواني، إعادة الاتصال
      setTimeout(function () {
        console.log("🔁 إعادة الاتصال");
        if (typeof socket.connect === "function") {
          socket.connect();
        } else if (typeof NEW_CONNECT === "function") {
          NEW_CONNECT();
        }
      }, 3000);
    } else {
      console.log("⚠️ socket غير موجود");
    }
  }, 3000); // كل 30 ثانية
});
