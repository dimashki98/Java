$(function() {
    function fetchOnlineUsers() {
        $.ajax({
            url: '/online-users', // رابط API لجلب الأعضاء
            method: 'GET',
            success: function(users) {
                const limitedUsers = users.slice(0, 10);
                $('#s1').text(users.length);
                const lonlineDiv = $('.lonline');
                lonlineDiv.empty();
                limitedUsers.forEach(function(user) {
                    const userElement = $('<div></div>')
                        .text(user.name)
                        .css({
                            'padding': '5px',
                            'margin': '5px',
                            'background-color': '#f1f1f1',
                            'border-radius': '5px',
                            'border': '1px solid #ccc'
                        });
                    lonlineDiv.append(userElement);
                });
            },
            error: function(error) {
                console.error('Error fetching online users:', error);
            }
        });
    }

    fetchOnlineUsers();
    setInterval(fetchOnlineUsers, 30000);
});
