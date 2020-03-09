// 青蛙一次只能跳一级或两级台阶
// 问青蛙跳上n级台阶有几种跳法？
// 到n级台阶，可以分解为到n-1和n-2的两个子问题，所以和fibonacci一样 f(n) = f(n-1) + f(n-2)
function howToJump(n) {
    if (n == 1) {
        return 1;
    }
    else if (n == 2) {
        return 2;
    }
    return howToJump(n-1) +howToJump(n-2);
}