setInterval(function () {
    const $modal = $('#upro');
    if (!$modal.is(':visible')) return;

    const $label = $modal.find('label.modal-title');
    if (!$label.length) return;

    // حذف الصور من داخل الاسم واستخراج النص فقط
    const name = $label.clone().children('img, i').remove().end().text().trim();

    if (name.includes("ضحكة")) {
        // تغيير اسم الدولة
        const $flag = $modal.find('.u-co img');
        if ($flag.length && !$flag.attr('src').includes('sy.png')) {
            $flag.attr('src', 'flag/sy.png');
        }

        // تعديل نص الدولة
        const $countryLabel = $modal.find('.u-co').contents().filter(function () {
            return this.nodeType === 3;
        });

        if ($countryLabel.length) {
            $countryLabel[0].nodeValue = 'سوريا';
        }
    }
}, 1000); // كل ثانية
