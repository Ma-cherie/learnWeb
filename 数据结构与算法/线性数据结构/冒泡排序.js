const arr = [4,1,6,9,3,2,8,7];

// 冒泡排序
function sort(arr) {
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; j < arr.length - 1 - i ; j++){
            if (compare(arr[j],arr[j+1])) {
                exchange(arr,j,j+1);
            }
        }
    }
}

// 比较函数
function compare(a,b) {
    return a > b ? true : false;
}

// 交换函数
function exchange(arr,a,b) {
    [arr[a],arr[b]] = [arr[b],arr[a]];
}

sort(arr);
console.log(arr);