let streamRef;

$('#startCam').on('click', function () {
  Swal.fire({
    title: 'تشغيل البث',
    input: 'text',
    inputLabel: 'هل تريد تشغيل الكاميرا بـ "صوت" أم "بدون صوت"؟',
    inputPlaceholder: 'اكتب: صوت أو بدون صوت',
    showCancelButton: true,
    confirmButtonText: 'ابدأ',
    cancelButtonText: 'إلغاء',
    inputValidator: (value) => {
      if (!value || (value !== 'صوت' && value !== 'بدون صوت')) {
        return 'الرجاء كتابة "صوت" أو "بدون صوت" فقط';
      }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      const withAudio = result.value === 'صوت';

      navigator.mediaDevices.getUserMedia({
        video: true,
        audio: withAudio ? { noiseSuppression: false } : false
      })
      .then((stream) => {
        streamRef = stream;

        // عرض الفيديو في صفحة HTML (مثلاً داخل <video>)
        const video = document.createElement('video');
        video.srcObject = stream;
        video.autoplay = true;
        video.muted = true;
        video.style.width = '100%';
        document.body.appendChild(video);

        // يمكنك إرسال البث للسيرفر هنا socket.emit أو غيره
        console.log("تم تشغيل البث", withAudio ? "بصوت" : "بدون صوت");

      })
      .catch((err) => {
        Swal.fire('فشل التشغيل', err.message, 'error');
      });
    }
  });
});
