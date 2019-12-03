let page = 1; // 获取图片数据页数
let lock = false; //锁，是否正在请求数据
getData(); 

// 获取数据
function getData() {
    ajax('GET','http://localhost:3000/data',`page=${page}`,function (res) {
        console.log(res);
        // 拿到数据后渲染
        renderDom(res);
        page++;
        lock = false;
        if (res.length == 0) {
            lock = true;
        }
    })
}
function renderDom(data) {
    const cols = document.getElementsByClassName('col');
    const boxs= document.getElementsByClassName('box');
    const boxWidth = boxs[0].offsetWidth;
    data.forEach((item) => {
        // 图片
        let img = new Image();
        img.src = item.img;
        img.width = boxWidth - 40;
        // img.height / img width = item.height / item.width
        img.height = item.height / item.width * img.width;
        // 文字
        let p = document.createElement('p');
        p.innerText = item.desc;
        // box
        let box = document.createElement('div');
        box.className = 'box';
        box.appendChild(img);
        box.appendChild(p);
        // 最短的li
        let li = getMinHeightLi();
        li.appendChild(box);
    })
}

// 计算得到最短的li
function getMinHeightLi() {
    const lis = document.getElementsByTagName('li');
    let minLiIndex = 0;
    let minHeight = lis[0].offsetHeight;
    for(let i=0 ; i< lis.length ; i++){
        if (lis[i].offsetHeight < minHeight) {
            minHeight = lis[i].offsetHeight;
            minLiIndex = i;
        }
    }
    return lis[minLiIndex];
}



// 滑轮滚动
window.onscroll = function () {
    // console.log('yo')
    // 当照片列与底部有空隙，renderDom
    // 最短的li
    let li = getMinHeightLi();
    if (li.offsetTop + li.offsetHeight < window.scrollY + document.documentElement.clientHeight){
        if (!lock){
            lock = true;
            getData();
        }

    }
}
