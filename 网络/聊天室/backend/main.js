// 导入express，创建基于Node.js的web服务器
let express = require('express');
// 创建服务器
let server = express();
// 运行Web服务器监听特定的端口
let port = 5050;
server.listen(port, function () {
    console.log(`服务器监听 :${port}`);
});

// 导入其他的包
let mysql = require('mysql');

// 使用第三方提供的函数和对象
// 创建数据库连接池，连接池有一堆连接
let pool = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '',
    database: 'chatbox',
    connectionLimit: 10 //连接池大小
});

/********************** 后台API ***********************/
//使用Express提供的中间件：处理POST请求中的主体数据，保存在req.body属性中
// 处理application/x-www-form-urlencoded类型的请求数据
server.use(express.urlencoded({
    extended: true     //是否使用扩展工具解析请求主体
}))
// 自定义中间件，允许制定客户端的跨域访问
server.use(function (req, res, next) {
    res.set('Access-Control-Allow-Origin', "*")//当前服务器允许来自任何客户端的跨域访问
    next()//放行，让后续的请求处理方法继续处理
})

// 访问根路径
server.get('/', (req, res) => {
    res.send('主页');
})

// 用户注册
server.post('/user/register',(req,res)=>{
    // console.log(req.body,res);
    const user = req.body;
    if (!user.username) {
        res.json({ code: 401, msg: '用户名为空' });
        return;
    }
    if (!user.password) {
        res.json({ code: 402, msg: '密码为空' });
        return;
    }
    // 执行数据库操作——Select 查询用户是否存在
    let sql1 = `select userid from chatbox_user where username=?`;
    pool.query(sql1, [user.username], (err, result) => {
        // console.log(err);
        if (result.length > 0) {
            res.json({ code: 500, msg: '用户已存在' });
            return;
        }
        //执行数据库操作——INSERT 添加用户
        let sql2 = `insert into chatbox_user (username,password,gender,age) values (?,?,?,?);`;
        pool.query(sql2,[user.username,user.password,user.gender,user.age],(err,result)=>{
            console.log(err);
            console.log(result);
            if (result) {
                //向客户端输出响应消息
                res.json({ code: 200, msg: '用户注册成功' });
            }
        });
    })
})

// 用户登录
server.post('/user/login',(req,res) => {
    const user = req.body;
    if (!user.username) {
        res.json({ code: 401, msg: '用户名为空' });
        return;
    }
    if (!user.password) {
        res.json({ code: 402, msg: '密码为空' });
        return;
    }
    // 执行数据库操作——Select 查询用户是否存在
    const sql1 = `select password from chatbox_user where username=?`;
    pool.query(sql1,[user.username],(err,result) => {
        if (result.length == 0) {
            res.json({code: 404, msg: '该用户不存在'});
            return
        }
        // 如果存在，检查密码对不对
        if (user.password == result[0].password) {
            res.json({code: 200, msg:'登录成功'});
        }
        else{
            res.json({ code: 403, msg: '用户名或密码错误' });
        }
    })
})