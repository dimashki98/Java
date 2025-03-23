var Config = {
  Finished: localStorage.getItem("Finished") === "true"
};

$(function() {
  Config.Finished = true;
  localStorage.setItem("Finished", "true"); // حفظ القيمة بحيث تبقى حتى بعد إعادة تحميل الصفحة
  console.log(Config.Finished);
});
