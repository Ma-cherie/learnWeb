let usersArr;  //用户列表
let me = {
    username : localStorage.getItem('username'),
    userid: localStorage.getItem('userid')
}
let chatMsg;

// 上次获取新消息的时间
let lastGetMsgTime = 0;

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
    // 获取聊天信息
    getChatMsg();
})

 // 获取聊天信息
 function getChatMsg() {
    $.ajax({
        url: 'http://localhost:5050/getChat',
        type: 'GET',
        data: {
            userid: me.userid
        },
        success(res) {
            // console.log(res)
            chatMsg = res;
            lastGetMsgTime = new Date().getTime();
        }
    })
}
// 渲染左侧用户列表
function renderUserList(usersArr) {
    for (let i = 0; i < usersArr.length; i++) {
        $('.template').clone().removeClass('template')  //克隆用户盒子模板
            .data('username', usersArr[i].username)     //记录用户名
            .data('userid',usersArr[i].userid)          //记录用户id
            .find('.username').text(usersArr[i].username) //显示用户名
            .parents('.user-box').appendTo('.list')     //把盒子添加进list
            .click(function () {                        // 点击事件：点击了左侧用户，右侧渲染聊天框
                $('.dialog').removeClass('template');
                // 聊天对象的信息
                const receiverid = $(this).data('userid');
                const receiverName = $(this).data('username');
                // 更新聊天框的用户名
                $('.dialog .header').text(receiverName).data({ 'receiverid': receiverid, 'receiverName': receiverName });
                renderDialog(receiverid,receiverName);
            });                       
    }
}

// 渲染右侧聊天框(点击渲染)
function renderDialog(receiverid, receiverName) {
    // 根据获取的chatMsg，更新聊天框的聊天内容(1.当前聊天，更新消息框；2.其他聊天，增加badge)
    // 清空之前聊天的信息
    let jqDom = $('.content-box').find('.template').siblings().slice(2).remove();
    // 此聊天的聊天信息
    const thisChatMsg = [];
    chatMsg.forEach(ele => {
        // 我发给ta
        if (ele.receiverid == receiverid && ele.senderid == me.userid) {
            renderMsg('mine',ele.content);
        // ta发给我
        }else if (ele.receiverid == me.userid && ele.senderid == receiverid){
            renderMsg('robot',ele.content);
        // 群聊
        }else if(receiverid == 666 && ele.receiverid ==666){
            renderMsg('robot',ele.content);
        }
    });

}

// 消息渲染 who(mine我方,robot对方)
function renderMsg(who, txt) {
    // 添加对话消息
    if (who == 'mine') {
        $('.mine').eq(0).clone().removeClass('template')
            .find('.msg').text(txt)
            .parent().appendTo('.content-box');
    } else if (who == 'robot') {
        $('.robot').eq(0).clone().removeClass('template').find('.msg').text(txt).parent().appendTo('.content-box');
    }
    // 让滚动条在最底下
    // scrollHeight  --->滚动条的高度
    let contentHeight = $('.content-box')[0].scrollHeight;
    let viewHeight = $('.content-box')[0].clientHeight;
    $('.content-box').scrollTop(contentHeight - viewHeight);
}

// 发送消息
$('button').on('click', function () {
    let msgContent = $('input').val();
    if (msgContent) {
        // renderMsg('mine', msgContent);
        // clearInterval(interval);
        // interval = setInterval(intervalF, 1000);
        $('input').val('');
    }else {
        console.log('聊天消息为空');
        return;
    }
    // 消息接收者id
    let receiverid = $('.dialog .header').data('receiverid');
    // 发送时间
    let nowTime = new Date().getTime();
    // console.log('receiverid: '+receiverid,nowTime);
    $.ajax({
        url: 'http://localhost:5050/addMsg',
        type: "POST",
        data:{
            senderid: me.userid,
            receiverid: receiverid,
            content: msgContent,
            sendtime: nowTime
        },
        success (res){
            // console.log(res);
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


// 定时获取聊天消息
let interval = setInterval(intervalF, 1000);

function intervalF() {
    
    let newChatMsg;
    // 获取新的聊天记录
    $.ajax({
        url: 'http://localhost:5050/getNewMsg',
        type: 'GET',
        data: {
            lastTime: lastGetMsgTime,
            userid: me.userid
        },
        success :function(res){
            newChatMsg = res;
            console.log(res);
            const receiverid = $('.dialog .header').data('receiverid');
            // 渲染新消息
            newChatMsg.forEach(ele => {
                // 我发给ta
                if (ele.receiverid == receiverid && ele.senderid == me.userid) {
                    renderMsg('mine', ele.content);
                    // ta发给我
                } else if (ele.receiverid == me.userid && ele.senderid == receiverid) {
                    renderMsg('robot', ele.content);
                    // 群聊
                } else if (receiverid == 666 && ele.receiverid == 666) {
                    renderMsg('robot', ele.content);
                }
            });
            
            lastGetMsgTime = new Date().getTime();
        }
    })
}