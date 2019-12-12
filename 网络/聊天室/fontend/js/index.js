let usersArr;  //用户列表
let me = {
    username : '',
    userid: ''
}
$(window).on('load',function () {
    // 渲染左侧用户列表
    $.ajax({
        url: 'http://localhost:5050/getUsers',
        type: 'GET',
        success (res){
            usersArr = res;
            renderUserList(usersArr);
        }
    })
})

// 渲染左侧用户列表
function renderUserList(usersArr) {
    for (let i = 0; i < usersArr.length; i++) {
        $('.template').clone().removeClass('template')
            .data('username', usersArr[i].username)
            .data('userid',usersArr[i].userid)
            .find('.username').text(usersArr[i].username)
            .parents('.user-box').appendTo('.list')
            .click(renderDialog); // 点击了左侧用户，右侧渲染聊天框
    }
}

// 渲染右侧聊天框
function renderDialog() {
    $('.dialog').removeClass('template');
    const receiverid = $(this).data('userid');
    const receiverName = $(this).data('username');
    // 更新聊天框的用户名
    $('.dialog .header').text(receiverName).data({ 'receiverid': receiverid, 'receiverName': receiverName});
    // 更新聊天框的聊天内容

}

// 发送消息
$('button').on('click', function () {
    let msgContent = $('input').val();
    if (msgContent) {
        renderMsg('mine', msgContent);
        $('input').val('');
    }else {
        console.log('聊天消息为空');
        return;
    }
    // 消息接收者id
    let receiverid = $('.dialog .header').data('receiverid');
    // 发送时间
    let nowTime = new Date().getTime();
    console.log('receiverid: '+receiverid,nowTime);
    $.ajax({
        url: 'http://localhost:5050/addMsg',
        type: "POST",
        data:{
            senderid: 6,
            receiverid: receiverid,
            content: msgContent,
            sendTime: nowTime
        },
        success (res){
            console.log(res);
        }
    })
})

// 聊天框 input 按下回车键
$('input').on('keydown', function (e) {
    // 如果是空格就发送
    if (e.keyCode == 13) {
        $('button').trigger('click')
    }
})

// 新消息渲染
function renderMsg(who, txt) {
    // 添加对话消息
    if (who == 'mine') {
        $('.mine').eq(0).clone()
            .find('.msg').text(txt)
            .parent().appendTo('.content-box');
    } else if (who == 'robot') {
        $('.robot').eq(0).clone().find('.msg').text(txt).parent().appendTo('.content-box');
    }
    // 让滚动条在最底下
    // scrollHeight  --->滚动条的高度
    let contentHeight = $('.content-box')[0].scrollHeight;
    let viewHeight = $('.content-box')[0].clientHeight;
    $('.content-box').scrollTop(contentHeight - viewHeight);
}

// 定时获取聊天消息