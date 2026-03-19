$(document).ready(function () {

    function isTargetName(name) {
        return (
            name.includes("ضحكة") ||
            name.includes("𝓽𝓪𝓵𝓪") ||
            name.toLowerCase().includes("tala") ||
            name.includes("تالا")
        );
    }

    // ✅ تعديل قائمة المستخدمين
    function fixUsers() {
        $(".uzr").each(function () {
            const $user = $(this);
            let name = $user.find('.u-topic').text().trim();

            if (isTargetName(name)) {
                // تغيير العلم
                $user.find("img.co.ico").attr("src", "flag/sy.png");

                // تغيير النص إذا موجود
                const $country = $user.find(".u-co");
                if ($country.length) {
                    $country.html('سوريا <img class="fl" style="width:24px;height:24px;border-radius:1px;margin-top:-3px;" src="flag/sy.png">');
                }
            }
        });
    }

    // ✅ تعديل المودال
    function fixModal() {
        const $modal = $('#upro');
        const $label = $modal.find('label.modal-title');

        if (!$label.length) return;

        const name = $label.clone().children().remove().end().text().trim();

        if (isTargetName(name)) {
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

    // تشغيل أولي
    fixUsers();
    fixModal();

    // 🔥 مراقبة التغييرات
    const observer = new MutationObserver(() => {
        fixUsers();
        fixModal();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true
    });

    // 🔥 حماية ضد السكربتات المتعارضة
    setInterval(() => {
        fixUsers();
        fixModal();
    }, 1000);

});
