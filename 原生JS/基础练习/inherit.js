// 继承 Es6的写法、es5的写法
// es6
// class Parent{
//     constructor(name){
//         this.name = name;
//         this.fortune = '1000000'
//     }
//     sayHi(){
//         console.log('Hi')
//     }
//     static type = 'Human'
//     static sayHello(){
//         // console.log(this)
//         console.log('Hello')
//     }
// }
// class Child extends Parent{
//     constructor(name,age){
//         super(name);
//         this.age = age;
//     }
// }

// es5
function Parent(name) {
    this.name = name;
    this.fortune = '1000000'
}
Parent.prototype.sayHi = function (){
    console.log('Hi')
}
Parent.type = 'Human';
Parent.sayHello = function(){
    console.log('Hello')
}
function Child(name,age) {
    // this.name = name;
    Parent.call(this,name);
    this.age = age;
}

function inherit(Child,Parent) {
    Child.prototype.__proto__ = Parent.prototype;
    Child.__proto__ = Parent;
    // Object.setPrototypeOf(Child.prototype,Parent.prototype)
    // Object.setPrototypeOf(Child,Parent)
}
inherit(Child,Parent)

const p = new Parent('爸爸');
const c = new Child('儿子',18);
console.log(p)
console.log(c)
p.sayHi()
c.sayHi()
console.log(Parent.type)
console.log(Child.type)
Parent.sayHello()
Child.sayHello()
