// 初解，不够优化，每次都要求两侧的和
var pivotIndex = function (nums) {
    let leftSum, rightSum;
    for (let i = 0; i < nums.length; i++) {
        leftSum = sumArr(nums.slice(0, i));
        rightSum = sumArr(nums.slice(i + 1));
        if (leftSum == rightSum) {
            return i;
        }
    }
    return -1;
};

// 第二次，只需判断 左侧和（动态求） == 数组和 - 当前元素 - 左侧和
var pivotIndex = function (nums) {
    let sum = sumArr(nums);
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (leftSum == sum - nums[i] - leftSum) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
};



// 数组求和
function sumArr(arr) {
    let sum = 0;
    arr.forEach(ele => sum += ele)
    return sum;
}

