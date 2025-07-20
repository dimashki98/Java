$(function () {
  var allowed = ["tawhn.com", "08999676.xyz"];
  var host = location.hostname.replace("www.", "");

  if (allowed.includes(host) && typeof Recontect === "function") {
    Recontect();
    setInterval(Recontect, 30000);
  }
});
