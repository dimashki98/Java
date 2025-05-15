$(document).ready(function () {
  const badWords = [
    "كس", "كسمك", "كسختك", "قحبة", "القحبة", "كحبة", "شرموط", "شرموطة", "زوبي", "زبي", "زب", "زبك",
    "عيري", "عير", "ايري", "إيري", "طيز", "طيزي", "طيزك", "بزك", "بز", "صدر", "عكسك", "بكسك",
    "نايك", "نيك", "دعارة", "عاهر", "عاهرة", "قواد", "كواد", "سكس", "عيورة", "عيوره",
    "كسي", "كسك", "خصاوي", "خصية", "بيضات"
  ];

  const warningMsg = "تم الحظر بسبب كلمات نابية";

  function normalizeText(text) {
    return text
      .normalize("NFD")
      .replace(/[\u064B-\u065F\u0610-\u061A\u06D6-\u06ED\u0300-\u036f]/g, "")
      .replace(/[^\u0621-\u064A0-9\s]/g, "")
      .replace(/(.)\1{2,}/g, "$1")
      .toLowerCase();
  }

  function extractUserId(element) {
    let parent = element.closest(".uzr");
    if (!parent.length) return null;

    let onclickValue = parent.find(".u-pic").attr("onclick");
    if (onclickValue) {
      let match = onclickValue.match(/upro'([^']+)'/);
      if (match) return match[1];
    }
    return null;
  }

  function filterBadWords() {
    $(".u-msg").each(function () {
      if ($(this).attr("data-banned") === "true") return;

      const original = $(this).text();
      const cleaned = normalizeText(original);
      const words = cleaned.split(/\s+/);

      for (let word of words) {
        if (badWords.includes(word)) {
          const userId = extractUserId($(this));

          $(this).text(warningMsg);
          $(this).attr("data-banned", "true");

          if (typeof socket !== "undefined" && userId) {
            socket.emit("SEND_EVENT_EMIT_SERVER", {
              cmd: "ban",
              id: userId,
              reponse: "كلمات نابية - تم الحظر تلقائيًا من قبل النظام"
            });
          }
          break;
        }
      }
    });
  }

  // تشغيل كل ثانية
  filterBadWords();
  setInterval(filterBadWords, 1000);
});
