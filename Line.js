$(document).ready(function() {
    var socket;
    
    function connectWebSocket() {
        socket = new WebSocket("wss://r7shq.com"); // استبدل بعنوان WebSocket الخاص بك

        socket.onopen = function() {
            console.log("تم الاتصال بالسيرفر.");
        };

        socket.onclose = function() {
            console.log("تم فقد الاتصال، إعادة المحاولة...");
            setTimeout(connectWebSocket, 3000); // إعادة الاتصال بعد 3 ثوانٍ
        };

        socket.onerror = function(error) {
            console.log("خطأ في الاتصال:", error);
            socket.close(); // إغلاق الاتصال وإعادة المحاولة
        };
    }

    connectWebSocket();

    // تعطيل تأثير فقدان الإنترنت في المتصفح
    $(window).on("offline", function(event) {
        event.preventDefault();
        console.log("تم تجاهل انقطاع الإنترنت.");
    });
});
