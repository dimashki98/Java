$(document).ready(function () {
    function updateModal() {
        const $modal = $('#upro');
        const $label = $modal.find('label.modal-title');

        if ($label.length) {
            let fullText = $label.clone().children().remove().end().text().trim();

            if (fullText.includes("ضحكة")) {
                const $flag = $modal.find('.u-co img');
                if ($flag.length && !$flag.attr('src').includes('sy.png')) {
                    $flag.attr('src', 'flag/sy.png');
                }

                const $countryLabel = $modal.find('.u-co').contents().filter(function () {
                    return this.nodeType === 3;
                });
                if ($countryLabel.length) {
                    $countryLabel[0].nodeValue = 'سوريا';
                }
            }
        }
    }

    setInterval(updateModal, 1500); // كرر كل 1.5 ثانية
});
