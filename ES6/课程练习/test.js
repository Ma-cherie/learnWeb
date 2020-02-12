const getSum = (...arg1) => (...arg2) => arg1.concat(arg2).reduce((a,b)=> a+b,0);

console.log(getSum(1, 2, 3)(4, 5, 6))