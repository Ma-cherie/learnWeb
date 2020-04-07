/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    if (!nums || nums.length == 0) return -1;
    let max = Math.max(...nums);
    let index = nums.indexOf(max);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] * 2 > max && i != index) {
            return -1;
        }
    }
    return index;
};