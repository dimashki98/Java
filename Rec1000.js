$(function () {
  setInterval(function () {
    if (typeof socket !== "undefined") {
      socket.disconnect();

      setTimeout(function () {
        if (typeof socket.connect === "function") {
          socket.connect();
        } else if (typeof NEW_CONNECT === "function") {
          NEW_CONNECT();
        }
      }, 3000);
    }
  }, 30000);
});
