const arr = [4, 1, 6, 9, 3, 2, 8, 7];

// 选择排序
function sort(arr) {
    for (let i = 0; i < arr.length ; i++) {
        let maxIndex = 0;
        // console.log(arr);
        for (let j = 0; j < arr.length - i ; j++) {
            if (compare(arr[maxIndex], arr[j])) {
                maxIndex = j;
            }
        }
        console.log(maxIndex);
        exchange(arr, maxIndex, arr.length - 1 - i);
        console.log(arr);
        
    }
}

// 比较函数
function compare(a, b) {
    return a < b ? true : false;
}

// 交换函数
function exchange(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

sort(arr);
console.log(arr);