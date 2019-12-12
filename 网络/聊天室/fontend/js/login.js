// 登录页js
// 登录按钮
$('#loginBtn').click(function () {
    const username = $('#usernameInp').val();
    const password = $('#passwordInp').val();
    if (!username || !password) {
        $('#alert').text('用户名或密码为空').fadeIn();
    }
    $.ajax({
        url: 'http://localhost:5050/user/login',
        type: 'POST',
        data:{
            username: username,
            password: password
        },
        success (res){
            console.log(res);
            if (res.code == 403) {
                $('#alert').text('用户名或密码错误').fadeIn();
            }
            if (res.code == 404) {
                $('#alert').text('该用户不存在').fadeIn();
            }
            if (res.code == 200) {
                $('#alert').text('该用户不存在').css({'display': 'none'});
                $('#alertSucc').fadeIn();
                window.location.href = './index.html';
            }
        }
    })
})