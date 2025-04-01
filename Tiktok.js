$(document).ready(function() {
    function replaceTiktokLinks() {
        $('.u-msg').each(function() {
            let text = $(this).html();
            let updatedText = text.replace(/vt\.tiktok\.com/g, 'vm.tiktok.com');
            if (text !== updatedText) {
                $(this).html(updatedText);
            }
        });
    }

    replaceTiktokLinks(); // استبدال الروابط عند تحميل الصفحة

    const observer = new MutationObserver(() => replaceTiktokLinks());
    observer.observe(document.body, { childList: true, subtree: true });
});
