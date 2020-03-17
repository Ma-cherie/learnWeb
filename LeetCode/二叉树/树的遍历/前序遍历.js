// 递归遍历比较简单，但是不用递归的话，前中后序都不太一样

// 不用递归的话，用栈
var preorderTraversal = function (root) {
    if (!root) return [];
    const ansArr = [];
    const stack = [root];
    while (stack.length > 0) {
        const node = stack.pop();
        ansArr.push(node.val);
        if (node.right) {
            stack.push(node.right)
        }
        if (node.left) {
            stack.push(node.left)
        }
    }
    return ansArr;
};