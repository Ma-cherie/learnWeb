## 基于Ajax的无刷新聊天室
软件体系结构的作业
要求：
1. 设计注册登录页面
2. 用户注册登录后进入在线聊天室页面
3. 用户可以选择私聊，也可以选择公共发言
4. 后台使用XML或者数据库来储存用户信息（包括用户名，密码，性别，年龄，兴趣爱好等）和聊天信息（包括聊天内容，发送方，接收方，发送时间等）。

前端：bootstrap + jquery
登录、注册页、聊天室页
后端：node.js
用express搭建后台

### brain storm
登录、注册
**用户表**
userid username password gender age
获取用户列表
获取和谁的聊天记录，按时间展示
发送消息，存到数据库
**消息表**
msgid senderid receiverid content sendtime

聊天室定时检测有没有给自己的消息


