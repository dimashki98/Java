$(document).ready(function () {
  let isPongoPaused = false;

  // زر لإيقاف تنفيذ كود pongo مؤقتاً
  const btn = $('<button id="togglePongoBtn">إيقاف التنبيه 5 دقائق</button>')
    .css({ padding: '6px 12px', margin: '10px', cursor: 'pointer' });

  $('#newoption').append(btn);

  // حدث عند الضغط على الزر
  $('#togglePongoBtn').on('click', function () {
    if (isPongoPaused) return; // لو موقوف أصلاً، لا نفعل مجدداً

    isPongoPaused = true;
    console.log("تم إيقاف تنفيذ pongo مؤقتًا لمدة 5 دقائق");

    setTimeout(() => {
      isPongoPaused = false;
      console.log("تم إعادة تفعيل تنفيذ pongo");
    }, 300000); // 5 دقائق

  });

  // استبدال استماع pongo الأصلي بالنسخة المعدلة
  if (typeof socket !== 'undefined') {
    socket.off('pongo'); // إزالة أي مستمع مسبق

    socket.on('pongo', () => {
      if (isPongoPaused) {
        console.log("pongo متوقف مؤقتًا، تجاهل التنفيذ");
        return; // لا نفعل الصوت أثناء الإيقاف
      }

      if (isPageHidden && silentAudio.paused) {
        silentAudio.play().catch(err => {
          console.warn("Autoplay blocked:", err);
        });
      }
    });
  }
});
