$(document).ready(function () {
const observer = new MutationObserver(function () {
const $modal = $('#upro');
const $label = $modal.find('label.modal-title');

if ($label.length) {  
        // استخراج النص بعد الصور  
        let fullText = $label.clone().children().remove().end().text().trim();  

        if (fullText.includes("ضحكة")) {  
            // تغيير العلم  
            const $flag = $modal.find('.u-co img');  
            if ($flag.length && !$flag.attr('src').includes('sy.png')) {  
                $flag.attr('src', 'flag/sy.png');  
            }  

            // تغيير اسم الدولة النصي  
            const $countryLabel = $modal.find('.u-co').contents().filter(function () {  
                return this.nodeType === 3; // Node نص فقط  
            });  
            if ($countryLabel.length) {  
                $countryLabel[0].nodeValue = 'سوريا';  
            }  
        }  
    }  
});  

observer.observe(document.body, { childList: true, subtree: true });

});
