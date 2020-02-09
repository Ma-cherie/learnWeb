class Animal{
    constructor(type, name, age, gender) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    info(){
        console.log(this.type, this.name, this.age, this.gender);
    }
}

const chai = new Animal('dog', 'AChai', 3, 'male');
chai.info();