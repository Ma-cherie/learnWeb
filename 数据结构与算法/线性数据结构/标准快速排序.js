// const arr = [4, 1, 6, 9, 3, 2, 8, 7];
// const arr = [1,8,1,3,8,7,0,2,0,3,7];
const arr = [3,2,3,4]

function qucikSort(arr) {
    const newArr = arr.slice();
    sort(newArr);
    return newArr;
}

function sort(arr,begin = 0,end = arr.length - 1) {
    if (begin >= end){
        return;
    }
    // 取最后一位是基准值，也就意味着要从左边开始找
    const base = arr[end];
    let i = begin;
    let j = end;
    // 要把比基准值小的放左边，比基准值大的放右边
    while(i < j){
        // 从左往右找，找比基准值要大的，替换到右边
        while (i < j && arr[i] <= base) { //如果有重复值，=号派上用场
            i++;
        }
        arr[j] = arr[i];
        // 从右往左找，找比基准值要小的，替换到左边
        while (j > i && arr[j] >= base) {
            j--;
        }
        arr[i] = arr[j];
        // 最后i = j 结束一次循环
    }
    // 把基准值放到中间
    arr[j] = base;
    // 对左右分别递归快速排序
    sort(arr,begin,j-1);
    sort(arr,j+1,end);
}

const newArr = qucikSort(arr);
console.log(newArr)