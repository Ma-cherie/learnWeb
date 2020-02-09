let a = 1;
function sum(...args) {
    let sum = 0;
    args.forEach((ele) =>{
        sum += ele;
    })
    return sum;
}

let obj = {
    a,
    sum(...args) {
        let sum = 0;
        args.forEach((ele) => {
            sum += ele;
        })
        return sum;
    }
}
// console.log(obj)
// console.log(obj.sum(1, 2, 3))

let prop1 = "name";
let prop2 = "age";
let person1 = {
    0: 'a',
    3: 'c',
    1: 'b',
    [prop2]: 18,
    [prop1]: '潘梓俊',
}

let person2 = {
    name: "梁君珺",
    age: 20
}

console.log(Object.assign({},person1, person2))


