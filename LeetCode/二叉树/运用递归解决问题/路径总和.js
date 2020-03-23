// 我的最初解
// 终点是左右子树为null，求和的过程都是当前的值+子树的值（or说成是当前节点+之前路径）
var hasPathSum = function (root, sum) {
    if (!root) return false;
    let pathSumArr = []; // 路径和的数组
    function getPathSum(root, cur) { //cur为加到当前节点的和
        if (!root) return 0;
        // 判断当前节点是否是叶子节点
        if (root.left == null && root.right == null)
            pathSumArr.push(cur + root.val);
        // 左侧，如果不是叶子节点，则往左侧找
        getPathSum(root.left, cur + root.val);
        // 右侧   如果不是叶子节点，则往右侧找
        getPathSum(root.right, cur + root.val);
    }

    getPathSum(root, 0);
    console.log(pathSumArr)
    return pathSumArr.includes(sum) ? true : false;
};


// 优化解法
var hasPathSum = function (root, sum) {
    if (!root) return false;

    sum -= root.val;
    if (root.left == null && root.right == null) {
        return (sum == 0);
    }
    let left = hasPathSum(root.left, sum)
    let right = hasPathSum(root.right, sum)
    return left || right;
};


