
let streamRef;

// راقب DOM لمراقبة ظهور زر "كاميرا"
const observer = new MutationObserver(() => {
  const camButton = document.querySelector('.swal2-confirm.swal2-styled');

  if (camButton && camButton.textContent.trim() === 'كاميرا') {
    camButton.addEventListener('click', () => {
      Swal.fire({
        title: 'هل تريد البث؟',
        text: 'اختر أحد الخيارين:',
        icon: 'question',
        showCancelButton: true,
        showDenyButton: true,
        confirmButtonText: 'بـصوت',
        denyButtonText: 'بدون صوت',
        cancelButtonText: 'إلغاء'
      }).then((result) => {
        if (result.isConfirmed || result.isDenied) {
          const withAudio = result.isConfirmed;

          navigator.mediaDevices.getUserMedia({
            video: true,
            audio: withAudio ? { noiseSuppression: false } : false
          })
          .then((stream) => {
            streamRef = stream;

            const video = document.createElement('video');
            video.srcObject = stream;
            video.autoplay = true;
            video.muted = true;
            video.style.width = '100%';
            document.body.appendChild(video);

            console.log("تم تشغيل الكاميرا " + (withAudio ? "بصوت" : "بدون صوت"));

            // يمكنك هنا استخدام socket.emit للبث مثلاً
          })
          .catch((err) => {
            Swal.fire('فشل التشغيل', err.message, 'error');
          });
        }
      });
    }, { once: true }); // تأكد من إضافته مرة واحدة فقط
  }
});

// ابدأ مراقبة الجسم بالكامل
observer.observe(document.body, {
  childList: true,
  subtree: true
});
