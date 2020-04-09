let helperObj = {
    name: 'one piece'
};

let obj = {
    name: 'lufy',
    say(){
        console.log(this.name);
    },
    say2: () => {
        console.log(this.name);
    },
    say3: function () {
        console.log(this.name);
    },
    say4(){
        function f() {
            console.log(this.name);
        }
        f();
    },
    say5() {
        const f = () => {
            console.log(this.name);
        }
        f();
    },
    embed:{
        name: 'solon',
        say(){
            console.log(this.name);
        }
    }
}

const say = obj.say;
const say2 = obj.embed.say;

say();
say2();

obj.say();
obj.say2();
obj.say3();
obj.say4();
obj.say5.call(helperObj);