/** 切换导航
* 新增学生
* 学生列表
* 编辑 删除
* 编辑：显示，数据回填，点击蒙层取消，提交数据
*/

// 全局数据
let tableData; 
// 当前页码
let currentPage = 1 ;
// 一页条数
let pageSize = 2;
// 总页数
let pageNum = 1;

/**用一个bindEvent函数绑定页面中所有事件 */
function bindEvent() {
    // 切换导航
    const menuList = document.getElementsByClassName('menu-list')[0];
    menuList.addEventListener('click',function (e) {
        // 切换导航样式
        const activeElement = menuList.getElementsByClassName('active')[0];
        initStyle('active', activeElement, e.target);
        // 切换内容区样式
        let id = e.target.getAttribute('data-for');
        const targetContent = document.getElementById(id);
        const activeContent = document.getElementsByClassName('content-active')[0];
        initStyle('content-active', activeContent, targetContent);
    },false);

    // 新增学生
    const addStudentBtn = document.getElementById('addStudentBtn');
    const studentForm = document.getElementById('student-add-form');
    addStudentBtn.addEventListener('click',function (e) {
        // 取消默认事件
        e.preventDefault();
        // 校验表单
        let resultData = formatForm(studentForm);
        if (resultData.msg) {
            alert(resultData.msg);
            return false;
        }
        else{
            // 提交数据
            transferData('/api/student/addStudent',resultData.data,function () {
                alert('添加成功');
                const studentForm = document.getElementById('student-add-form');
                studentForm.reset();
                document.getElementsByClassName('menu-list')[0].getElementsByTagName('dd')[0].click();
                getTableData();
            });
        }
    },false);

    // 编辑、删除 学生信息按钮
    const tableBody = document.getElementById('table-body');
    tableBody.addEventListener('click',function (e) {
        let tagName = e.target.tagName;
        // 点击的学生列表的下标
        let index = e.target.dataset.index;
        // 判断是否是button
        if (tagName == 'BUTTON') {
            // 判断是否是编辑按钮
            let isEdit = [].slice.call(e.target.classList).includes('edit');
            if (isEdit) {
                // 显示模态框
                const modal = document.getElementsByClassName('modal')[0];
                modal.style.display = 'block';
                // 表单数据回填
                renderEditTable(tableData[index]);
            }
            // 删除按钮
            else{
                let student = tableData[index];
                let sNo = student.sNo;
                transferData('/api/student/delBySno', {sNo: sNo},function () {
                    alert('删除成功');
                    getTableData();
                })
            }
        }
    },false);

    // 提交编辑的学生信息
    const editSubmitBtn = document.getElementById('edit-submit');
    const editForm = document.getElementById('edit-form');
    editSubmitBtn.addEventListener('click',(e) => {
        e.preventDefault();
        // 校验表单
        let resultData = formatForm(editForm);
        if (resultData.msg) {
            alert(resultData.msg);
            return;
        }
        else {
            // 提交数据
            transferData('/api/student/updateStudent', resultData.data,function () {
                alert('修改成功');
                editForm.reset();
                // 隐藏模态框
                const modal = document.getElementsByClassName('modal')[0];
                modal.style.display = 'none';
                // 渲染表格
                getTableData();
            })
        }
    },false);

    // 取消编辑
    const mask = document.getElementsByClassName('mask')[0];
    mask.onclick = function (e) {
        // 隐藏模态框
        const modal = document.getElementsByClassName('modal')[0];
        modal.style.display = 'none';
    }

    // 分页
    const prevBtn = document.getElementsByClassName('prev')[0];
    const nextBtn = document.getElementsByClassName('next')[0];
    prevBtn.onclick = function (e) {
        if (currentPage > 1) {
            currentPage--;
        }
        getTableData();
    }
    nextBtn.onclick = function (e) {
        if (currentPage < pageNum) {
            currentPage++;
        }
        getTableData();
    }
}


/**
 * 获取学生列表数据
 */
function getTableData() {
    // transferData('/api/student/findAll',{
    transferData('/api/student/findByPage',{
        page: currentPage,
        size: pageSize
    },function (response) {
        console.log(response);
        // 渲染数据
        // renderTable(response.data);
        // tableData = response.data;
        tableData = response.data.findByPage;
        pageNum = Math.ceil(response.data.cont / pageSize);
        renderTable(response.data.findByPage);
        renderTurnPage();
    })
}

// 渲染分页部分
function renderTurnPage(params) {
    // 渲染页面
    const currentPageSpan = document.getElementsByClassName('currentPage')[0];
    const pageNumSpan = document.getElementsByClassName('pageNum')[0];
    currentPageSpan.innerText = currentPage;
    pageNumSpan.innerText = pageNum;
    // 渲染按钮
    const prevBtn = document.getElementsByClassName('prev')[0];
    const nextBtn = document.getElementsByClassName('next')[0];
    if (currentPage <= 1) {
        prevBtn.setAttribute('disabled','disabled');
    }else{
        prevBtn.removeAttribute('disabled');
    }
    if (currentPage >= pageNum) {
        nextBtn.setAttribute('disabled', 'disabled');
    } else {
        nextBtn.removeAttribute('disabled');
    }
}


/**
 * 渲染表格数据
 */
function renderTable(data) {
    const tBody = document.getElementById('table-body');
    let htmlStr = '';
    // console.log(data);
    data.forEach((ele,index) => {
        // 计算年龄
        let age = new Date().getFullYear() - ele.birth;
        // 添加数据到dom
        htmlStr += `
         <tr>
            <td>${ele.sNo}</td>
            <td>${ele.name}</td>
            <td>${ele.sex == 0 ? '男' : '女'}</td>
            <td>${ele.email}</td>
            <td>${age}</td>
            <td>${ele.phone}</td>
            <td>${ele.address}</td>
            <td>
                <button class="btn edit" data-index="${index}">编辑</button>
                <button class="btn delete" data-index="${index}">删除</button>
            </td>
        </tr>`;
    });
    tBody.innerHTML = htmlStr;
}

/**
 * 切换导航样式 (函数抽象)
 * className 切换的样式类名
 * activeDom 原来active的元素
 * targetDom 目标active的元素
 */
function initStyle(className,activeDom,targetDom) {
    activeDom.classList.remove(className);
    targetDom.classList.add(className);
}


/** 
 * 校验表单
 * 返回一个对象{data: {}, msg: ""}
 * 当表单合格，有数据，返回表单数据
 * 若表单有空值，返回{msg:"有数据为空，请检查数据"}
 */
function formatForm(form) {
    let result = {
        data: {},
        msg: ""
    }
    let name = form.name.value;
    let sex = form.sex.value;
    let sNo = form.stuid.value;
    let email = form.email.value;
    let birth = form.birthYear.value;
    let phone = form.phone.value;
    let address = form.address.value;
    // console.log(name, sex, stuid ,email, birthYear, phone,address);
    if (!name || !sex || !sNo || !email || !birth || !phone || !address){
        result.msg = "有数据为空，请检查数据";
    }
    else{
        result.data = { name, sex, sNo, email, birth,phone,address};
    }
    return result;
}


/**回填表单数据 */
function renderEditTable(data) {
    // console.log(data);
    const editForm = document.getElementById('edit-form');
    editForm.name.value = data.name;
    editForm.stuid.value = data.sNo;
    data.sex == 0 ? editForm.editMale.setAttribute('checked', 'checked') : editForm.editFemale.setAttribute('checked', 'checked');
    editForm.email.value = data.email;
    editForm.birthYear.value = data.birth;
    editForm.phone.value = data.phone;
    editForm.address.value = data.address;
}


// 封装数据处理函数 处理前后端数据交互
function transferData(url,data,success) {
    // 提交数据
    const hostname = 'https://open.duyiedu.com';
    const appkey = 'Lazy_Bone_1569767870124';
    let response = saveData(hostname + url, Object.assign({appkey: appkey}, data) );
    // console.log(response);
    if (response.status == "fail") {
        alert(response.msg);
    } else if (response.status == 'success') {
        success(response);
    }
}

// 数据交互  
function saveData(url, param) {
    var result = null;
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    if (typeof param == 'string') {
        xhr.open('GET', url + '?' + param, false);
    } else if (typeof param == 'object') {
        var str = "";
        for (var prop in param) {
            str += prop + '=' + param[prop] + '&';
        }
        xhr.open('GET', url + '?' + str, false);
    } else {
        xhr.open('GET', url + '?' + param.toString(), false);
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                result = JSON.parse(xhr.responseText);
            }
        }
    }
    xhr.send();
    return result;
}



bindEvent();
getTableData();