$(document).ready(function () {
  let pingInterval = setInterval(sendPing, 15000); // تأكد أنه معرف هنا
  const targetNode = document.getElementById('newoption');
  const config = { childList: true, subtree: true };

  const observer = new MutationObserver(function (mutationsList) {
    mutationsList.forEach(mutation => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(node => {
          if ($(node).attr('id') === 'stopPingBtn') {
            clearInterval(pingInterval);
            console.log("تم إيقاف إرسال البينغ مؤقتًا بسبب ظهور الزر.");

            setTimeout(() => {
              pingInterval = setInterval(sendPing, 15000);
              console.log("تم تفعيل إرسال البينغ مجددًا بعد 5 دقائق.");
            }, 300000);
          }
        });
      }
    });
  });

  observer.observe(targetNode, config);

  // مثال: إنشاء الزر وإضافته ليتفاعل مع المراقب
  const btn = $('<button id="stopPingBtn">إيقاف البينغ 5 دقائق</button>')
    .css({ padding: '6px 12px', margin: '10px', cursor: 'pointer' });
  
  $('#newoption').append(btn);
});
