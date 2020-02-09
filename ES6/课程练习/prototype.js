function Person(name,age) {
    this.name = name;
    this.age = age;
}

// 构造函数原型对象 prototype === 构造函数原型对象里的constructor
// console.log(Person.prototype.constructor == Person);
// console.log(Person.prototype);
Person.prototype.type = "human";
Person.prototype.sayHello = function () {
    console.log("hello~")
}

const p1 = new Person('jj',18);
console.log(p1.__proto__ === Person.prototype)
// 对象的隐式原型 __proto___ === 构造函数的显式原型prototype