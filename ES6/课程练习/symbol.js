const hero = (function () {
    const getPower = Symbol("用来得到浮动攻击力的属性符号名");
    return {
        name: "雅典娜",
        power: 260,
        attack(){
            let hurt = this[getPower](this.power-5,this.power+5);
            console.log(`攻击,造成${hurt}伤害`);
        },
        [getPower](min,max){
            return (Math.random() * (max - min) + min).toFixed(2);
        }
    }
})();

console.log(hero);