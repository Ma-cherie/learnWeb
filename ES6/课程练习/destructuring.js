// // 对象解构
const user = {
    name: '成哥',
    age: 20,
    sex: '男',
    address:{
        province: '广东',
        city: '深圳'
    }
}
// let name = user.name;
// let age = user.age;
// let sex = user.sex;
// let address = user.address;
// let { age, sex: gender = 'male', address } = user;
// let { name, address: { province } } = user;
// console.log(name, age, gender, address, province);
// let {name, ...obj} = user;
// console.log(name,obj);

// //数组解构
// const numbers = ['a','b','c','d', [1,2,3,4], {a:'a'}];
// const [n1,,,n4,[,,n5],{a:A}] = numbers;
// console.log(n1,n4,n5,A);
// let a = 1, b = 2;
// [b,a] = [a,b];



// 练习
const article = {
    title: "文章标题",
    content: "文章内容",
    comments: [{
        content: "评论1",
        user: {
            id: 1,
            name: "用户名1"
        }
    }, {
        content: "评论2",
        user: {
            id: 2,
            name: "用户名2"
        }
    }]
}

//解构出第二条评论的用户名和评论内容
// name:"用户名2"  content:"评论2"
const {content,user: {name}} = article.comments[1];
// console.log(content,name)


function print(user) {
    console.log(`姓名：${user.name}`)
    console.log(`年龄：${user.age}`)
    console.log(`性别：${user.sex}`)
    console.log(`省份：${user.address.province}`)
    console.log(`城市：${user.address.city}`)
}
function print({name, age, sex, address: {province, city}}) {
    console.log(`姓名：${name}`)
    console.log(`年龄：${age}`)
    console.log(`性别：${sex}`)
    console.log(`省份：${province}`)
    console.log(`城市：${city}`)
}
// print(user);

function ajax({
    type = "get",
    url = "/"
} = {}) {
    
}