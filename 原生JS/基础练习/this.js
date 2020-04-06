//  call、apply、bind的区别
class Person{
    constructor(name){
        this.name = name;
    }
    say(arg){
        console.log(this.name,arg);
    }
}

const person = new Person('huahua');
// person.say()
const animal = {name: 'cat'};
person.say.call(animal,1)
person.say.apply(animal,[1])
person.say.bind(animal)(1)
