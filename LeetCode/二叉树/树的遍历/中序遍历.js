// 递归

// 不用递归，用栈
var inorderTraversal = function (root) {
    if (!root) return [];
    const ansArr = [];
    const stack = [];
    while (!root || stack.length > 0) {
        while (!root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        ansArr.push(root.val);
        root = root.right;
    }
    return ansArr;
};