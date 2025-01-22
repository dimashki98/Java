$(function() {
    function fetchOnlineUsers() {
        $.ajax({
            url: '/online-users', // تأكد من أن هذا الرابط يعيد البيانات بشكل صحيح
            method: 'GET',
            success: function(users) {
                if (Array.isArray(users)) { // تحقق أن البيانات عبارة عن قائمة
                    const limitedUsers = users.slice(0, 10);
                    $('#s1').text(users.length); // تحديث العدد الكلي
                    const lonlineDiv = $('.lonline');
                    lonlineDiv.empty(); // تنظيف المحتوى السابق
                    limitedUsers.forEach(function(user) {
                        const userElement = $('<div></div>')
                            .text(user.name) // إضافة اسم المستخدم
                            .css({
                                'padding': '5px',
                                'margin': '5px',
                                'background-color': '#f1f1f1',
                                'border-radius': '5px',
                                'border': '1px solid #ccc'
                            });
                        lonlineDiv.append(userElement);
                    });
                } else {
                    console.error('The API response is not an array:', users);
                }
            },
            error: function(error) {
                console.error('Error fetching online users:', error);
            }
        });
    }

    fetchOnlineUsers(); // استدعاء الدالة عند تحميل الصفحة
    setInterval(fetchOnlineUsers, 30000); // تحديث البيانات كل 30 ثانية
});
