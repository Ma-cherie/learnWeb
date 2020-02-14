// 斐波那契数列的迭代器
function getFibonacciIterator() {
    let prev1 = 1,  //当前数字的上一位
        prev2 = 1,  //当前数字的上上位
        count = 1;  //迭代的第几次
    return {
        next(){
            let value = count <= 2 ? 1 : prev1 + prev2;
            let result = {
                value,
                done: false,
            }
            prev2 = prev1;
            prev1 = result.value;
            count++;
            return result;
        }
    }
}
// const fibonacciIterator = getFibonacciIterator();

// 数组的迭代生成器
function getIterator(arr) {
    let i = 0;
    return {
        next(){
            let result = {
                value: arr[i++],
                done: i >= arr.length
            }
            return result;
        }
    }
}
// const iter = getIterator([1,2,3,4,5]);

// const arr = [1, 2, 3, 4, 5];
// const iterator = arr[Symbol.iterator]();
// let result = iterator.next();
// while (!result.done) {
//     let value = result.value;
//     console.log(value);
//     result = iterator.next();
// }
// console.log('---------------------------')
// for (const value of arr) {
//     console.log(value)
// }

// const obj = {
//     a: 1,
//     b: 2,
//     [Symbol.iterator](){
//         const keys = Object.keys(this);
//         let i = 0;
//         return {
//             next: () => {
//                 const propName = keys[i];
//                 const propValue = this[propName];
//                 const result = {
//                     value: {
//                         key: propName,
//                         value: propValue
//                     },
//                     done: i >= keys.length
//                 }
//                 i++;
//                 return result;
//             }
//         }
            
//     }
// }

// for (const item of obj) {
//     console.log(item);
// }

// const arr = [...obj];
// console.log(arr);