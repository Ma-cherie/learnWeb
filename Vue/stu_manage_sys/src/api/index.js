import Axios from 'axios';
import URLs from './URLs.js';
// console.log(URLs);
// 自定义一个axios实例默认值
const Request = Axios.create({
    baseURL: URLs.baseUrl,
    method: 'GET',
    params:{
        // appkey: 'Dirty_1579775100154',
        appkey: 'Lazy_Bone_1569767870124',
    }
})

function findByPage(page,size) {
    return Request({
        url: URLs.findByPage,
        params: {
            page,
            size
        }
    })
}

function addStu(stu) {
    return Request({
        url: URLs.addStu,
        params:{
            ...stu
        },
    })
}

function delBySno(sno) {
    return Request({
        url: URLs.deleteStu,
        params:{
            sNo: sno
        }
    })
}

function updateStudent(stu) {
    return Request({
        url: URLs.updateStu,
        params:{
            ...stu
        }
    })
}

function searchStu(search,sex,page,size) {
    return Request({
        url: URLs.searchStu,
        params:{
            search: search,
            sex: sex,
            page: page,
            size: size,
        }
    })
}

export default {
    findByPage,
    updateStudent,
    addStu,
    delBySno,
    searchStu,
}