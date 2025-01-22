$(function() {
    function fetchOnlineUsers() {
        $.ajax({
            url: '/online-users', // رابط API لجلب الأعضاء
            method: 'GET',
            success: function(users) {
                const limitedUsers = users.slice(0, 10); // أخذ 10 أعضاء فقط
                const lonlineDiv = $('.lonline'); // استهداف العنصر
                lonlineDiv.empty(); // تنظيف المحتوى السابق
                
                limitedUsers.forEach(function(user) {
                    const userElement = $('<div></div>')
                        .text(user.name) // اسم المستخدم
                        .css({
                            'padding': '5px',
                            'margin': '5px',
                            'background-color': '#e0e0e0',
                            'border-radius': '5px',
                            'border': '1px solid #ccc'
                        });
                    lonlineDiv.append(userElement); // إضافة المستخدم إلى القائمة
                });
            },
            error: function(error) {
                console.error('Error fetching online users:', error);
            }
        });
    }

    fetchOnlineUsers(); // استدعاء الدالة عند تحميل الصفحة
    setInterval(fetchOnlineUsers, 30000); // تحديث القائمة كل 30 ثانية
});
