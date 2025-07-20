$(function () {
  Recontect(); // مرة عند فتح الموقع
  setInterval(function () {
    Recontect(); // كل 30 ثانية
  }, 3000);
});
