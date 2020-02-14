// // 斐波那契数列的迭代器
// function* getFibonacciIterator() {
//     let prev1 = 1,  //当前数字的上一位
//         prev2 = 1,  //当前数字的上上位
//         count = 1;  //迭代的第几次
//     while (true) {
//         if (count <= 2) {
//             yield 1;
//         }
//         else{
//             let newValue = prev1 + prev2;
//             yield newValue;
//             prev2 = prev1;
//             prev1 = newValue;
//         }
//         count++;
//     }
// }
// const fibonacciIterator = getFibonacciIterator();

function* generateData() {
    let temp;
    console.log('第一次运行');
    temp = yield 1;
    console.log(`第二次运行${temp}`);
    temp = yield 1 + temp;    
    console.log(`第三次次运行${temp}`);
}
let iter = generateData();