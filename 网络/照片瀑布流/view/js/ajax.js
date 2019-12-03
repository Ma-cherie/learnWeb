/**
* 封装ajax
* @param {*} type  请求方式
* @param {*} url 请求地址
* @param {*} data  请求数据  key=value
* @param {*} cb 成功拿到响应数据的回调函数
*/
function ajax(type, url, data, cb) {
    // 创建xhr对象
    let xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    // 绑定处理事件
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                cb(JSON.parse(xhr.responseText));
            }
            else {
                console.log('error' + xhr.status);
            }
        }
    }

    // 发送请求
    if (type == 'GET') {
        xhr.open(type, url + '?' + data, true);
        xhr.send();
    }
    else {
        xhr.open(type, url, true);
        xhr.setRequestsHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }
}