
$(document).ready(function () {
  const badWords = [
    "كس", "كسمك", "كسختك", "قحبة", "القحبة", "شرموط", "شرموطة", "زوبي", "زبي", "زب", "زبك",
    "عيري", "عير", "طيز", "طيزي", "طيزك", "بزك", "بز", "صدر", "عكسك", "بكسك", "نايك", "نيك",
    "دعارة", "عاهر", "عاهرة", "قواد", "كواد", "سكس", "عيورة", "عيوره",
    "كسي", "كسك", "خصاوي", "خصية", "بيضات"
  ];

  const warningMsg = "هذا المستخدم يقوم بإرسال كلمات نابية";

  function normalizeText(text) {
    return text
      .normalize("NFD").replace(/[\u064B-\u065F\u0610-\u061A\u06D6-\u06ED\u0300-\u036f]/g, "") // إزالة التشكيل
      .replace(/[^ء-يa-zA-Z0-9\s]/g, "") // إزالة الزخرفة
      .replace(/(.)\1{2,}/g, "$1") // إزالة تكرار الحروف الزائد
      .toLowerCase();
  }

  function filterBadWords() {
    $(".u-msg").each(function () {
      let text = $(this).text();
      let cleaned = normalizeText(text);

      for (let word of badWords) {
        let pattern = new RegExp("\\b" + word + "\\b", "i"); // يطابق الكلمة فقط
        if (pattern.test(cleaned)) {
          $(this).html(warningMsg);
          break;
        }
      }
    });
  }

  filterBadWords();
  setInterval(filterBadWords, 1000);
});
