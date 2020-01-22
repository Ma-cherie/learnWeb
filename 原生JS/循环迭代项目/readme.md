# 学生管理系统
这是一个循环迭代项目，用不同的技术栈来实现的学生管理系统。
功能点，先自己想一下，然后看老师怎么实现，然后自己再实现一遍。

本次的技术栈：html + css + 原生js

功能：
1. 静态结构样式
2. 对学生的增删查改
3. 翻页 搜索

## 知识点
- label是行级元素

- 表单重置    
    <input type="reset" value="重置">
    form.reset();

- form表单获取了之后，form.name获取id=name的元素，form.name.value获取值

- 用一个bindEvent函数绑定页面中所有事件,方便维护。

- 改变元素的class
    className = xxx
    classList.add  classList.remove

- 发现类似的功能，提取思想,抽象成函数

- e.preventDefault() 取消表单默认事件

- 对象拼接 Object.assign()