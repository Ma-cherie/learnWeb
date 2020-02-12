class Animal{
    abc = 'abc';
    static brand = 'porsche';
    constructor(type, name, age, gender) {
        // if (new.target === Animal) {
        //     console.log(typeof new.target);
        //     throw new Error('Animal是抽象类,你不能直接创造Animal的对象!');
        // }
        this.type = type;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.hello = function () {
            console.log('hello~')
        }
    }
    // 创建一个age属性，并加上getter，读取该属性时，运行该函数
    get age(){
        return this._age + '岁';
    }
    // 创建一个age属性，并加上setter，设置该属性时，运行该函数
    set age(age){
        if (age<0) {
            this._age = 0;
        }
        this._age = age;
    }

    // @deprecated
    info(){
        console.log(`【种类】：${this.type}`);
        console.log(`【名字】：${this.name}`);
        console.log(`【年龄】：${this.age}`);
        console.log(`【性别】：${this.gender}`);
    }

}

// const chai = new Animal('dog', 'AChai', 3, 'male');
// chai.info();

// function deprecated(target,methodName,descriptor) {
//     // 类 function Animal
//     // 被装饰器标注的函数 info
//     // {value: function info(){}, ... }
//     // console.log(target, methodName, descriptor);
//     const oldFunc = descriptor.value;
//     descriptor.value = function (...args) {
//         console.warn(`${methodName}方法已经过时`);
//         oldFunc.apply(this,args);
//     }
// }