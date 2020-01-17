// server - front data  personArr
var personArr = [
    { name: '王港', src: './img/3.png', des: '颈椎不好', sex: 'm', age: 18 },
    { name: '刘莹', src: './img/5.png', des: '我是谁', sex: 'f', age: 23 },
    { name: '王秀莹', src: './img/4.png', des: '我很好看', sex: 'f', age: 25 },
    { name: '刘金雷', src: './img/1.png', des: '你没有见过陌生的脸', sex: 'm', age: 15 },
    { name: '刘飞翔', src: './img/2.png', des: '瓜皮刘', sex: 'm', age: 20 }
];

// 初始化变量 Initial Variable
let oUl = document.getElementsByTagName('ul')[0];
let oInput = document.getElementsByTagName('input')[0];
let oBtnArr = [].slice.call(document.getElementsByClassName('btn'));
let lastActiveBtn = oBtnArr[2]; //记录上一个active的btn

// // 全局过滤条件
// const state = {
//     text: '',
//     sex: 'all'
// }

// 渲染页面
function renderPage(data) {
    let htmlStr = '';
    data.forEach((ele,index,self) => {
        htmlStr += `
        <li>
            <img src="${ele.src}" alt="">
            <p class="name">${ele.name}</p>
            <p class="desc">${ele.des}</p>
        </li>
        `;
    });
    oUl.innerHTML = htmlStr;
}


renderPage(personArr);


// 行为
store.subscribe(function () {
    renderPage(lastFilter(personArr));
})
// 防抖 debounce(handler, timeout);
function debounce(handler, timeout) {
    let timer = null;
    // 返回一个实际的事件处理函数
    return function () {
        // console.log(timer);
        clearTimeout(timer);
        let event = arguments,
            self = this;
        timer = setTimeout(() => {
            handler.apply(self, arguments);
        }, timeout);
    }
}

// 输入框
oInput.oninput = debounce(function () {
    // let newArr = filterArrByText(personArr,this.value);
    // state.text = this.value;
    store.dispatch({ type: 'text', value: this.value});
    // let newArr = lastFilter(personArr);
    // renderPage(newArr);
},500);

// 性别过滤按钮
oBtnArr.forEach((ele)=>{
    ele.onclick =function () {
        changeActive(this);
        // state.sex = this.getAttribute('sex');
        // let newArr = filterArrByGender(personArr, this.getAttribute('sex'));
        store.dispatch({ type: 'sex', value: this.getAttribute('sex')});
        // let newArr = lastFilter(personArr);
        // renderPage(newArr);
    }
})


// 改变性别过滤按钮样式 
function changeActive(curActiveBtn) {
    lastActiveBtn.className = 'btn';
    curActiveBtn.className = 'btn active';
    lastActiveBtn = curActiveBtn;
}



