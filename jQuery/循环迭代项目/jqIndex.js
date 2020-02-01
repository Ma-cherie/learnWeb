// 全局数据
let currentPage = 1;    //现在页码
let pageSize = 10;      //一页的数量
let pageNum = 1;        //总共页数
let tableData = {};     //学生列表数据

// 事件绑定
function bindEvent() {
    // 切换导航
    $('.menu-list').on('click','dd',function (e) {
        // 改变导航样式
        $('.active').removeClass('active');
        $(e.target).addClass('active');
        // 切换内容区样式
        let id = $(e.target).data('for');
        $('.right-content > div').fadeOut();
        $('#' + id).fadeIn();
    })

    // 新增学生
    $('#addStudentBtn').click(function (e) {
        e.preventDefault();
        let data = $('#student-add-form').serializeArray();
        data = formatData(data);
        // 校验表单
        if(data == false){
            alert('数据填写不完全，请检查后提交');
        }
        else{
            transferData('/api/student/addStudent',data,function (res) {
                alert(res.msg);
                // $('#student-add-form')[0].reset();
                // $('[data-for=student-list]').click();
                // getTableData();
            })
        }
    })

    // 编辑学生
    $('#table-body').on('click','.edit',function (e) {
        $('.modal').slideDown();
        let index = $(this).parents('tr').data('index');
        let student = tableData[index];
        renderEditForm(student);
    })
    // 删除学生
    $('#table-body').on('click','.delete',function (e) {
        let index = $(this).parents('tr').data('index');
        let sNo = tableData[index].sNo;
        transferData('/api/student/delBySno',{sNo: sNo},function (res) {
            alert(res.msg);
            getTableData();
        })
    })
    

    // 提交编辑信息
    $('#edit-submit').click(function (e) {
        e.preventDefault();
        let data = $('#edit-form').serializeArray();
        data = formatData(data);
        let sNo = $('#edit-form [name=sNo]').val();
        if (data == false) {
            alert('数据填写不完全，请检查后提交');
        }
        else {
            transferData('/api/student/updateStudent', Object.assign({
                sNo: sNo
            }, data),function (res) {
                alert(res.msg);
                $('#student-add-form')[0].reset();
                $('.mask').click();
                getTableData();
            })
        }
    })

    // 取消编辑
    $('.mask').click(function () {
        $('.modal').slideUp();
    })
}

// 将serializeArray数组转换成对象
// 校验表单，是否有空值（空值返回false）
function formatData(data) {
    let resultObj = {};
    for (let i = 0; i < data.length ; i++){
        if (!data[i].value) {
            return false;
        }
        resultObj[data[i].name] = data[i].value;
    }
    return resultObj;
}

// 获取学生列表数据
function getTableData() {
    transferData('/api/student/findByPage',{
        page: currentPage,
        size: pageSize
    },function (res) {
        tableData = res.data.findByPage;
        pageNum = Math.ceil(res.data.cont / pageSize);
        console.log(currentPage, pageNum,pageSize);
        renderTable(tableData);
        renderTurnPage();
    })
}

// 渲染学生列表
function renderTable(data) {
    let htmlStr = '';
    data.forEach((ele,index) => {
        htmlStr += `
        <tr data-index="${index}">
            <td>${ele.sNo}</td>
            <td>${ele.name}</td>
            <td>${ele.sex == 0 ? '男' : '女'}</td>
            <td>${ele.email}</td>
            <td>${ new Date().getFullYear() - ele.birth}</td>
            <td>${ele.phone}</td>
            <td>${ele.address}</td>
            <td>
                <button class="btn edit">编辑</button>
                <button class="btn delete">删除</button>
            </td>
        </tr>`;
    });
    $('#table-body').html(htmlStr);
}

// 渲染分页
function renderTurnPage() {
    $('.turn-page-box').page({
        curPage: currentPage,
        totalPage: pageNum,
        changeCb: function (page) {
            currentPage = page;
            getTableData();
        }
    })
}


// 回填数据
function renderEditForm(data) {
    const editForm = $('#edit-form')[0];
    editForm.name.value = data.name;
    editForm.stuid.value = data.sNo;
    data.sex == 0 ? editForm.editMale.setAttribute('checked', 'checked') : editForm.editFemale.setAttribute('checked', 'checked');
    editForm.email.value = data.email;
    editForm.birthYear.value = data.birth;
    editForm.phone.value = data.phone;
    editForm.address.value = data.address;
}


// 封装数据处理函数 处理前后端数据交互
function transferData(url, data, successCb) {
    // 提交数据
    const hostname = 'https://open.duyiedu.com';
    const appkey = 'Lazy_Bone_1569767870124';
    // const appkey = 'Dirty_1579775100154';
    // 请求
    $.ajax({
        url: hostname + url,
        type: 'GET',
        data: $.extend({
            appkey: appkey
        }, data),
        dataType: 'json',
        success(res){
            if (res.status == "fail") {
                alert(res.msg);
            } else if (res.status == 'success') {
                successCb(res);
            }
        }
    })
}

bindEvent();
getTableData();