// 836 矩形重叠
// 第一次自己尝试，没有成功0.0看了题解才发现这条路真的很绕
var isRectangleOverlap = function (rec1, rec2) {
    if (!rec1 || !rec2 || rec1.length == 0 || rec2.length == 0) return false;
    const [ax1, ay1, ax2, ay2] = rec1;
    const [bx1, by1, bx2, by2] = rec2;
    // 1左下 2右上 重叠一部分
    if (ax1 < bx1 && ay1 < by1 && ax2 > bx1 && ay2 > ay1 && bx2 > ax2 && by2 > ay2)
        return true;
    // 2左下 1右上 重叠一部分
    else if (ax1 > bx1 && ay1 > by1 && ax1 < bx2 && ay1 < by2 && ax2 > bx2 && ay2 > by2)
        return true;
    // 2包含1
    else if (bx1 <= ax1 && by1 <= ay1 && bx1 < ax2 && by1 < ay2 && bx2 >= ax2 && by2 >= ay2)
        return true;
    // 1包含2
    else if (ax1 <= bx1 && ay1 <= by1 && ax1 < bx2 && ay1 < by2 && ax2 >= bx2 && ay2 >= by2)
        return true;
    else
        return false;
};

// 解法一：判断不重叠、不相交的情况
var isRectangleOverlap = function (rec1, rec2) {
    if (!rec1 || !rec2 || rec1.length == 0 || rec2.length == 0) return false;
    const [ax1, ay1, ax2, ay2] = rec1;
    const [bx1, by1, bx2, by2] = rec2;
    return !(
        ay2 <= by1 ||
        ax2 <= bx1 ||
        ay1 >= by2 ||
        ax1 >= bx2
    )
};
// 解法二：根据投影到x、y轴的交集
var isRectangleOverlap = function (rec1, rec2) {
    if (!rec1 || !rec2 || rec1.length == 0 || rec2.length == 0) return false;
    const [ax1, ay1, ax2, ay2] = rec1;
    const [bx1, by1, bx2, by2] = rec2;
    return (Math.min(ax2, bx2) > Math.max(ax1, bx1))
        && (Math.min(ay2, by2) > Math.max(ay1, by1))
};
