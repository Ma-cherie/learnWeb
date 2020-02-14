// /**
// 1.	有一个字符串数组urls，里面存放了很多的请求地址，现在需要同时向这些地址发送ajax请求，
// 并把每次请求的JSON结果按照响应的先后顺序依次保存到一个新数组results里面，当所有请求完成后，把新数组results输出
// results数组中每一项的对象格式如下：
// {
// 		requestTime: 日期对象,   //开始请求的时间
// 		data: 对象,  //服务器响应的结果
// 		responseTime: 日期对象   //响应的时间
// }
//  */
// // 请求地址数组
// const urls = [
//     'https://api.github.com/users',
//     'https://api.github.com/users/mojombo/repos'
// ]
// // 存放promise数组，以便Promise.all使用
// const proArr = [];
// // 结果数组
// const results = [];
// urls.forEach(url => {
//     const result = {}; //结果对象
//     result.requestTime = new Date(); //请求时间
//     const pro = fetch(url); //请求
//     proArr.push(pro);
//     // 注册后续处理函数
//     pro.then(resp =>{
//         result.responseTime = new Date(); //响应时间
//         // console.log(resp);
//         return resp.json();
//     }).then(data => {
//         // console.log(data);
//         result.data = data;
//         results.push(result);
//     })
// })

// const proAll = Promise.all(proArr);
// proAll.then(() => {
//     console.log(results);
// },err =>{
//     console.log(err);
// })

/**
 * 2. 编写一个函数createDomProxy，该函数返回一个DOM对象的代理，
 * 该代理可以将DOM对象以on开头的属性（即事件）变为Promise对象，
 * 可以让后续的开发者这样使用这个函数createDomProxy：
 */

async function test() {
    const div = document.getElementById("test"); //得到某个div dom
    const divProxy = createDomProxy(div); //创建它的代理
    // while (true) { //使用一个死循环，是为了不断的监听它被点击
    //     // const e = await divProxy.onclick //等待它被点击，e是事件参数
    //     // const e2 = await divProxy.onmouseenter //等待它被点击，e是事件参数
    //     // const e3 = await divProxy.onmouseleave //等待它被点击，e是事件参数
    //     // console.log("div被点击了", e) //被点击后运行的代码
    //     // console.log("鼠标移入div", e2) //被点击后运行的代码
    //     // console.log("鼠标移出div", e3) //被点击后运行的代码
    //     divProxy.onclick.then(e => {
    //         console.log("div被点击了", e)
    //     })
    //     divProxy.onmouseenter.then(e => {
    //         console.log("鼠标移入div", e)
    //     })
    //     divProxy.onmouseleave.then(e => {
    //         console.log("鼠标移出div", e)
    //     })
    // }
    divProxy.onclick.then(e => {
        console.log("div被点击了", e)
    })
    divProxy.onmouseenter.then(e => {
        console.log("鼠标移入div", e)
    })
    divProxy.onmouseleave.then(e => {
        console.log("鼠标移出div", e)
    })
}

function createDomProxy(dom) {
    const domProxy = new Proxy(dom,{
        get(target,key){
            // console.log(target, key)
            // 如果key是以'on'开头
            if (key.startsWith('on')) {
                return new Promise((resolve, reject) => {
                    dom[key] = function (e) {
                        resolve(e);
                    }
                })
            }
            else {
                return dom[key];
            }
            
        }
    })
    return domProxy;
}

test();
