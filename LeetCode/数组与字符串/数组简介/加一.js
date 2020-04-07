/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let flag = false; //判断是否要加一位（全为9）
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1;
            break;
        } else if (digits[i] == 9) {
            flag = i == 0 ? true : false;
            digits[i] = 0;
            continue;
        }
    }
    if (flag)
        digits.unshift(1);
    return digits;
};