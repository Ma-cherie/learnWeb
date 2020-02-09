// 新的继承
class Dog extends Animal{
    constructor(name,age,gender){
        super("犬类", name, age, gender);
        this.love = "爱吃骨头";
    }
    info(){
        super.info();
        console.log(`【爱好】：${this.love}`);
    }
}

const chai = new Dog("A Chai", 2, "male");
chai.info();