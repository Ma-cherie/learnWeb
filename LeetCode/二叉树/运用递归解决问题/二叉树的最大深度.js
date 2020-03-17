// 这道题可以从“自顶向下”（前序遍历）和“自底向上”（后序遍历）做
// 二叉搜索树其实也算是前序遍历（自顶向下）


// 自顶向下，从根节点第1层往下面+1
var maxDepth = function (root) {
    if (!root) return 0;
    let ans = 0;
    f(root, 1);

    function f(root, depth) {
        if (!root) return 0;
        // 当没有左右子树，更新深度
        if (!root.left && !root.right) {
            ans = Math.max(ans, depth)
        }
        // 否则递归向下 更新最大深度
        f(root.left, depth + 1);
        f(root.right, depth + 1);
    }
    return ans;
};

// 自底向上，很容易理解
var maxDepth = function (root) {
    if (!root) return 0;
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
};