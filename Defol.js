(function () {
  const allowedDomain = "madahost.online";
  const currentDomain = location.hostname;

  if (!currentDomain.endsWith(allowedDomain)) {
    location.href = "https://madahost.online";
  }
})();
