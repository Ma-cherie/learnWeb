// 吐槽：curry？for three？
// 面试的时候，问到了add(1,2)(3) add(1,2,3) 这种函数怎么实现？
// 我一看，不限参数数量，又能链式调用。说明可以用剩余参数接收参数，这个函数要返回一个函数。
// 后来才知道是柯里化，这道题的思路是用闭包来记录所有参数

// 需要柯里化的函数 add 
function add(...args) {
    let ans = 0;
    args.forEach(num => ans += num);
    return ans;
}

// 柯里化
function currying(fn) {
    let allArgs = [];

    function next(...args) {
        if (args.length > 0) {
            allArgs = allArgs.concat(args);
            return next;
        }else{
            return fn.apply(this, allArgs);
        }
        return next;
    }
    return next;
}

let newAdd = currying(add);
console.log(newAdd(1, 2)(3)())