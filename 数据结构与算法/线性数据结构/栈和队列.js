// 封装栈结构
class Stack{
    constructor(){
        this.arr = [];
    }
    push(sth){
        this.arr.push(sth);
    }
    pop(){
        return this.arr.pop();
        // unshift(添加) shift(去掉)  push pop
    }
}

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack.arr);
// stack.pop();
// console.log(stack.arr);


// 封装队列
class Queue{
    constructor(){
        this.arr = [];
    }
    push(sth){
        this.arr.push(sth);
    }
    pop(){
        return this.arr.shift();
    }
}

const queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.arr);
queue.pop();
console.log(queue.arr);