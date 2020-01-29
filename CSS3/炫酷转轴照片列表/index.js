// init item中inner弹出
let timer = setTimeout(() => {
    $('.wrapper').removeClass('init');
}, 0);

// 点击后展示图片
$('.content').on('click','li',function (e) {
    e.stopPropagation();
    $('.content').addClass('content-active')
    $(e.currentTarget).addClass('active');
})

// 点击关闭按钮
$('.close').click(function (e) {
    e.stopPropagation();
    $('.content').removeClass('content-active');
    $('.active').removeClass('active');
})

// 点击外面也触发关闭图片展示
$('.wrapper').click(function (e) {
    // e.stopPropagation();
    $('.close').click();
})