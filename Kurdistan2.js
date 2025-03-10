$(document).ready(function () {
    // تفعيل الكود الخاص بإضافة الخلفية عند الضغط على الزر "yjjwy0f4n7"
    $(document).on('click', '[onclick^="Send_Rjoin(\'yjjwy0f4n7\')"]', function() {
        // إضافة الخلفية عند الضغط على الزر
        $('.flex-grow-1.break.light').css({
            'background-image': 'url(https://dd3sr.net/dro3/1741634126670.jpg)',
            'background-size': '100% 100%',
            'background-position': 'center',
            'background-repeat': 'no-repeat',
            'height': '100%',
            'width': '100%'
        });

        // تعيين الخلفية للعنصر #chats أيضًا
        $('#chats').css({
            'background-image': 'url(https://dd3sr.net/dro3/1741634124118.jpg)',
            'background-size': '100% 100%',
            'background-position': 'center',
            'background-repeat': 'no-repeat',
            'height': '100%',
            'width': '100%'
        });

        // دالة الترجمة
        function translateText(text, callback) {
            let sourceLang = "ar"; // اللغة الأصلية: العربية
            let targetLang = "ckb"; // اللغة المستهدفة: الكردية البادينية بالأحرف العربية
            let url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;

            $.getJSON(url, function (data) {
                let translatedText = data[0].map(item => item[0]).join("");
                callback(translatedText);
            });
        }

        // دالة لترجمة النصوص داخل العناصر المحددة
        function translateElements(selector) {
            $(selector).each(function () {
                let $element = $(this);
                let originalText = $element.clone().children("span, img").remove().end().text().trim(); // دەرچوونی تەنها دەق

                if (originalText) {
                    translateText(originalText, function (translatedText) {
                        $element.contents().filter(function () {
                            return this.nodeType === 3; // تەنها دەق بگۆڕێت و نە بەشەکان
                        }).replaceWith(translatedText);
                    });
                }
            });
        }

        // هەدفگرتنی هەموو دوگمەکان و پەراوەرەکان لە ناو #d0 و هەر شتێک کە دەقی تێدایە
        translateElements("#d0 button, #d0 label, #d0 button span, #d0 label span, #d0 label img");
    });
});
