$(document).ready(function () {
    function updateModal() {
        const $modal = $('#upro');
        const $label = $modal.find('label.modal-title');

        if ($label.length) {
            let fullText = $label.clone().children().remove().end().text().trim();

            // التحقق من وجود 𝓽𝓪𝓵𝓪
            if (fullText.includes("𝓽𝓪𝓵𝓪")) {
                const $flag = $modal.find('.u-co img');
                if ($flag.length && !$flag.attr('src').includes('sy.png')) {
                    $flag.attr('src', 'flag/sy.png');
                }

                const $countryLabel = $modal.find('.u-co').contents().filter(function () {
                    return this.nodeType === 3;
                });

                if ($countryLabel.length && $countryLabel[0].nodeValue.trim() !== 'سوريا') {
                    $countryLabel[0].nodeValue = 'سوريا';
                }
            }
        }
    }

    setInterval(updateModal, 1500);
});
