// // 旧的继承
// function Dog(name,age,gender) {
//     Animal.call(this, "狗", name, age, gender);
// }

// Dog.prototype.__proto__ = Animal.prototype;

// const chai = new Dog("A Chai", 2, "male");
// console.log(chai);