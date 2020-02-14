// import { reject } from "async";

// async function f1() {
//     console.log(1);
//     // throw 3;
//     return 2;
// }
// async function f2() {
//     // const result = await f1();
//     // console.log(result);
//     // 相当于
//     const result = f1().then(data =>{
//         const result = data;
//         console.log(result);
//     }) 
// }
// f2();

// // 新的setTimeout模式
// function sleep(duration) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve();
//         }, duration);
//     })
// }
// (async ()=>{
//     await sleep(1000);
//     console.log('等待一秒钟')
// })()


// 练习async和await
(async () =>{
    // 请求得到users
    const users = await ajax({
        url: 'https://api.github.com/users'
    });
    let user = users[0].login;
    console.log(`https://api.github.com/users/${user}/repos`);
    // 请求user仓库
    console.log(repos);
})()




// 封装Ajax
function ajax(obj) {
    return new Promise((resolve, reject) => {
        //指定提交方式的默认值
        obj.type = obj.type || "get";
        //设置是否异步，默认为true(异步)
        obj.async = obj.async || true;
        //设置数据的默认值
        obj.data = obj.data || null;
        // 根据不同的浏览器创建XHR对象
        let xhr = null;
        if (window.XMLHttpRequest) {
            // 非IE浏览器
            xhr = new XMLHttpRequest();
        } else {
            // IE浏览器
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        // 区分get和post,发送HTTP请求
        if (obj.type === "post") {
            xhr.open(obj.type, obj.url, obj.async);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            let data = toData(obj.data);
            xhr.send(data);
        } else {
            let url = obj.url + "?" + toData(obj.data);
            xhr.open(obj.type, url, obj.async);
            xhr.send();
        }
        // 接收返回过来的数据
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject(xhr.status)
                }
            }
        }
    })
}
// 辅助函数,把传进来的对象拼接成url的字符串
function toData(obj) {
    if (obj === null) {
        return obj;
    }
    let arr = [];
    for (let i in obj) {
        let str = i + "=" + obj[i];
        arr.push(str);
    }
    return arr.join("&");
}