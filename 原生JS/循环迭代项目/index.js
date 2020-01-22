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

/** 切换导航
* 新增学生
* 学生列表
* 编辑 删除
* 编辑：显示，数据回填，点击蒙层取消，提交数据
*/



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
    addStudentBtn.addEventListener('click',function (e) {
        // 取消默认事件
        e.preventDefault();
        // 验证表单
        let resultData = formatForm();
        if (resultData.msg) {
            alert(resultData.msg);
            return false;
        }
        else{
        // 提交数据
            let response = saveData('https://open.duyiedu.com/api/student/addStudent', 
                    Object.assign({appkey: 'Lazy_Bone_1569767870124',}, resultData.data));
            // console.log(response);
            if (response.status == "fail") {
                alert(response.msg);
            }else if(response.status == 'success'){
                alert(response.msg);
                const studentForm = document.getElementById('student-add-form');
                studentForm.reset();
                document.getElementsByClassName('menu-list')[0].getElementsByTagName('dd')[0].click();
            }
        }
    },false)
}


/**
 * 获取学生列表数据
 */
function getTableData() {
    let response = saveData('https://open.duyiedu.com/api/student/findAll',{
        appkey: 'Lazy_Bone_1569767870124'
    });
    console.log(response);
    if(response.status == "success"){
        // 渲染数据
        renderTable(response.data);
    }

}

/**
 * 渲染表格数据
 */
function renderTable(data) {
    const tBody = document.getElementById('table-body');
    let htmlStr = '';
    console.log(data);
    data.forEach((ele) => {
        // 计算年龄
        let age = new Date().getFullYear() - ele.birth;
        // 添加数据到dom
        htmlStr += `
         <tr>
            <td>${ele.sNo}</td>
            <td>${ele.name}</td>
            <td>${ele.sex}</td>
            <td>${ele.email}</td>
            <td>${age}</td>
            <td>${ele.phone}</td>
            <td>${ele.address}</td>
            <td>
                <button class="btn edit">编辑</button>
                <button class="btn delete">删除</button>
            </td>
        </tr>`;
    });
    tBody.innerHTML += htmlStr;
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
function formatForm() {
    let result = {
        data: {},
        msg: ""
    }
    const studentForm = document.getElementById('student-add-form');
    let name = studentForm.name.value;
    let sex = studentForm.sex.value;
    let sNo = studentForm.stuid.value;
    let email = studentForm.email.value;
    let birth = studentForm.birthYear.value;
    let phone = studentForm.phone.value;
    let address = studentForm.address.value;
    // console.log(name, sex, stuid ,email, birthYear, phone,address);
    if (!name || !sex || !sNo || !email || !birth || !phone || !address){
        result.msg = "有数据为空，请检查数据";
    }
    else{
        result.data = { name, sex, sNo, email, birth,phone,address};
    }
    return result;
}

bindEvent();
getTableData();