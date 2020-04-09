var id = 0;
var name = 'global';
let fn = function () {
    console.log(this);
    this.name = 'foo' + id++;
}.bind(window);
let obj = {
    name: 'local',
    fn: fn
}

console.log(window.name);
obj.fn();
console.log(window.name);
let obj2 = new obj.fn();
obj2.name = 'obj2';
console.log(window.name);
