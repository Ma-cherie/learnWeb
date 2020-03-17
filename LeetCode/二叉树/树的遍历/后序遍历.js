// 递归
var postorderTraversal = function (root, arr = []) {
    if (root == null) return [];
    postorderTraversal(root.left, arr);
    postorderTraversal(root.right, arr);
    arr.push(root.val)
    return arr;
};