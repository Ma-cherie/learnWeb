// 注册页js
// 注册
$('#registerBtn').click(function () {
    //获取注册信息
    const username = $('#usernameInp').val();
    const password = $('#passwordInp').val();
    const gender = $('#genderInp').val();
    const age = $('#ageInp').val();
    if (!username ) {
        console.log('用户名不能为空');
        $('#usernameInp').parent().addClass('has-error');
        return;
    }
    if (!password) {
        console.log('密码不能为空');
        $('#passwordInp').parent().addClass('has-error');
        return;
    }
    $('#usernameInp').parent().removeClass('has-error');
    $('#passwordInp').parent().removeClass('has-error');
    $.ajax({
        url: 'http://localhost:5050/user/register',
        type: 'POST',
        data: {
            username: username,
            password: password,
            gender: gender,
            age: age
        },
        success (res){
            console.log(res);
            if (res.code == 200) {
                localStorage.setItem('username', username);
                $.ajax({
                    url:'http://localhost:5050/getUserId',
                    type: 'GET',
                    data:{username: username},
                    success(res){
                        let userid = res[0].userid;
                        localStorage.setItem('userid',userid);
                        $('#myModal').modal('show')
                            .find('.modal-title').text('注册成功')
                            .parents('#myModal').find('.modal-body').text(res.msg)
                            .parents('#myModal').find('#modal-btn').text('知道了,去聊天').removeClass('btn-danger').addClass('btn-success');
                    }
                })
                
            }
            else{
                $('#myModal').modal('show')
                    .find('.modal-title').text('注册失败')
                    .parents('#myModal').find('.modal-body').text(res.msg)
                    .parents('#myModal').find('#modal-btn').text('好了,我改').removeClass('btn-primary').addClass('btn-danger');
            }
        }
    })
})

// 注册成功后，点击跳转到聊天室
$('#modal-btn').click(function () {
    if ($('#modal-btn').text() == '知道了,去聊天') {
        window.location.href = './index.html';
    }
})