setInterval(function () {
    $(".ovr").css({
        "visibility": "hidden", // يخفي العنصر مع بقائه في الصفحة
        "pointer-events": "none" // يسمح بالتفاعل مع الموقع دون تعطيل وظائف العنصر
    });
}, 1000); // يتحقق كل ثانية ويخفي العنصر إن وجد
