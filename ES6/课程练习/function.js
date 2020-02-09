// 参数默认值
function sum(a, b = 1) {
    console.log("arguments:",arguments[0],arguments[1]);
    console.log(a,b);
    a = 3;
    console.log("arguments:",arguments[0],arguments[1]);
    console.log(a,b);
}

// 剩余参数
function sum(...args) {
    let result = 0;
    for(let i = 0; i < args.length; i++){
        result += args[i];
    }
    return result;
}


// 展开运算符
let arr = [1,2,3,{a:1}];
let obj = {
    a:1,
    b:2,
    address: {
        country: '中国',
        province: '广东',
        city: '广州深圳'
    },
    arr: [1,2]
};
// console.log(...arr);
// console.log({ ...obj});

// 展开数组
// console.log(sum(...arr))
let arr2 = [...arr];
// console.log(arr === arr2,arr.a === arr2.a)
// 展开对象
let obj2 = {
    ...obj,
    address: {
        ...obj.address
    },
    arr: [...obj.arr]
}
// console.log(obj2)
// console.log(obj.address === obj2.address)
// console.log(obj.arr === obj2.arr)

// 练习 最大值最小值
function max(...args) {
    let max = args[0];
    for(let i = 0; i < args.length; i++){
        if (args[i] > max) {
            max = args[i];
        }
    }
    return max;
}

// new.target
function Person(firstName,lastName) {
    // console.log(new.target);
    if (new.target === undefined) {
        throw new Error('没有使用new来调用构造函数');
    }
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + lastName;
}

const p1 = new Person('pan','zijun')
// console.log(p1)
// const p2 = Person('pan','zijun')
// console.log(p2)

// 箭头函数
const obj3 = {
    count: 0,
    add: function () {
        console.log(arguments)
        setInterval(() => {
            this.count++;
            console.log(this.count)
        }, 1000);
    }
}
// obj3.add(1);