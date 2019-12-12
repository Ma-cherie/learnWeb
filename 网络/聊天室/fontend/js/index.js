// 发送消息
$('button').on('click', function () {
    let val = $('input').val()
    if (val) {
        renderDom('mine', val);
        $('input').val('');
    }
})

// 聊天框 input 按下回车键
$('input').on('keydown', function (e) {
    // 如果是空格就发送
    if (e.keyCode == 13) {
        $('button').trigger('click')
    }
})

// 新消息渲染
function renderDom(who, txt) {
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