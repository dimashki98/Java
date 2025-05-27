$(document).ready(function () {
    function fixCountryForDohka() {
        const $modal = $('#upro');
        const $label = $modal.find('label.modal-title');

        if ($label.length) {
            const name = $label.clone().children().remove().end().text().trim();

            if (name.includes("ضحكة")) {
                const $flag = $modal.find('.u-co img');
                if ($flag.length && !$flag.attr('src').includes('sy.png')) {
                    $flag.attr('src', 'flag/sy.png');
                }

                const $textNode = $modal.find('.u-co').contents().filter(function () {
                    return this.nodeType === 3;
                });

                if ($textNode.length && $textNode[0].nodeValue.trim() !== 'سوريا') {
                    $textNode[0].nodeValue = 'سوريا';
                }
            }
        }
    }

    // مراقبة التغييرات
    const observer = new MutationObserver(fixCountryForDohka);
    observer.observe(document.body, { childList: true, subtree: true });

    // تأكيد التنفيذ المستمر كل ثانية (ضد التعارض)
    setInterval(fixCountryForDohka, 1000);
});
