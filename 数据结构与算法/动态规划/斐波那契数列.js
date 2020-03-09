// f(n) = f(n-1) + f(n-2)
function fibonacci(n) {
    if (n <= 0) return -1;
    if (n == 1) return 0;
    if (n == 2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}
// console.log(fibonacci(7));

// 递归数组求和
function sum(arr) {
    if (arr.length == 0) {
        return 0;
    }
    return arr[0] + sum(arr.slice(1))
}
const arr = [1,2,3]
console.log(sum(arr, 0))