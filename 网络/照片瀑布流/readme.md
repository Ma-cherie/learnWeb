## 图片瀑布流
    用原生js实现的图片瀑布流

## 项目注意点
1. 封装简单请求的ajax
2. 根据哪一列最短，往哪一列添加图片
    - 这里要注意，图片没有加载完时，只有默认高度，下一次还可能往这列添加图片，导致渲染完这一列会很长。解决方案：1.img.onload(图片不加载会阻塞)2.给图片设置高度
3. 拉到底继续加载，再次请求
    - 要做防抖处理，防止一直拉底一直请求。要做到等这次请求完成了再做下一次请求。解决方案：防抖 1.加锁 2.settimeout

## 知识点
1. 判断一列图片和底部是否有空隙
    - offsetTop(图片列和顶部距离) + offsetHeight(图片列高度)
    - document.documentElement.clientHeight(页面可视区高度)
    - window.scrollY(滚动条滚动的距离)