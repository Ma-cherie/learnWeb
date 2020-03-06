const arr = [4, 1, 6, 9, 3, 2, 8, 7];

// 拿数组第一个作为比较位，小的站左边，大的站右边，不断递归
function quickSort(arr) {
    // 出口就是，left和right是空数组[]
    if (arr == null || arr.length == 0) {
        return [];
    }
    const leader = arr[0];
    let left = [];
    let right = [];
    for(let i = 1 ; i < arr.length; i++){
        if (leader > arr[i]) left.push(arr[i]);
        else right.push(arr[i]);
    }
    left = quickSort(left);
    right = quickSort(right);
    return left.concat(leader,right);
}

const newArr = quickSort(arr);
console.log(newArr)