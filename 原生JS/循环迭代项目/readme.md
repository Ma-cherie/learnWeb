# 学生管理系统
这是一个循环迭代项目，用不同的技术栈来实现的学生管理系统。
功能点，先自己想一下，然后看老师怎么实现，然后自己再实现一遍。

本次的技术栈：html + css + 原生js

功能：
1. 静态结构样式
2. 对学生的增删查改
3. 翻页 搜索

## 知识点
- 用一个bindEvent函数绑定页面中所有事件,方便维护。 

- 发现类似的功能，提取思想,抽象成函数,减少代码冗余

- label是行级元素

- 表单重置    
    <input type="reset" value="重置">
    form.reset();

- 获取表单元素
    form表单获取了之后，form.name获取id=name或name=name的元素，form.name.value获取值

- 对象拼接 Object.assign()

- 事件委托。导航等，要给一堆类似的元素添加点击事件，考虑事件委托。

- e.preventDefault() 取消表单默认事件

- 400 Bad Request 传的参数有问题

- ClassList 
改变元素的class
className = xxx
classList.add  classList.remove

- 元素居中绝对定位+top left right bottom：0


