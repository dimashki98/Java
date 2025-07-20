$(function () {
  if (typeof Recontect === "function") {
    Recontect(); // تشغيل مرة عند فتح الصفحة
    setInterval(Recontect, 3000); // كل 30 ثانية
  } else {
    console.log("❌ الدالة Recontect غير معرفة.");
  }
});
