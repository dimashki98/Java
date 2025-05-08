
$(document).ready(function () {
  const badWords = [
    "كس", "كسمك", "كسختك", "قحبة", "القحبة", "شرموط", "شرموطة", "زوبي", "زبي", "زب", "زبك",
    "عيري", "عير", "طيز", "طيزي", "طيزك", "بزك", "بز", "صدر", "عكسك", "بكسك", "نايك", "نيك",
    "دعارة", "عاهر", "عاهرة", "قواد", "كواد", "سكس", "عيورة", "عيوره", "كسي", "كسك",
    "خصاوي", "خصية", "بيضات"
  ];

  const warningMsg = "هذا المستخدم يقوم بإرسال كلمات نابية";

  function normalizeText(text) {
    return text
      .normalize("NFD") // إزالة التشكيل والزخرفة
      .replace(/[\u064B-\u065F\u0610-\u061A\u06D6-\u06ED\u0300-\u036f]/g, "")
      .replace(/[^\u0621-\u064A0-9\s]/g, "") // حذف أي رموز غير الحروف العربية والأرقام
      .replace(/(.)\1{2,}/g, "$1") // تقليل الحروف المكررة لأكثر من 2
      .toLowerCase();
  }

  function filterBadWords() {
    $(".u-msg").each(function () {
      const original = $(this).text();
      const cleaned = normalizeText(original);

      // تقسيم النص إلى كلمات منفصلة للتحقق منها فقط
      const words = cleaned.split(/\s+/);

      for (let word of words) {
        if (badWords.includes(word)) {
          $(this).html(warningMsg);
          break;
        }
      }
    });
  }

  // فحص مبدئي وتحديث كل ثانية
  filterBadWords();
  setInterval(filterBadWords, 1000);
});
