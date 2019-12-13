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
        }
    })
    .then(function (res) {
        // console.log(res);
        if (res.code == 403) {
            $('#alert').text('用户名或密码错误').fadeIn();
        }
        if (res.code == 404) {
            $('#alert').text('该用户不存在').fadeIn();
        }
        if (res.code == 200) {
            $('#alert').text('').css({ 'display': 'none' });
            $('#alertSucc').fadeIn();
            localStorage.setItem('username', username);
        }
        return $.ajax({
            url: 'http://localhost:5050/getUserId',
            type: 'GET',
            data: { username: username },
        })
    })
    .then(function (res) {
        let userid = res[0].userid;
        localStorage.setItem('userid', userid);
        window.location.href = './index.html';
    })
})