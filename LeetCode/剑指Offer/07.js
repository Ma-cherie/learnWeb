// 重建二叉树
// 一、原始写法，这样会创建很多数组
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder || !inorder || preorder.length == 0 || inorder.length == 0 || preorder.length != inorder.length)
        return null;
    let root = new TreeNode(preorder[0]);
    // 根据根节点的位置，将中序遍历分为左右子树
    let idx = inorder.indexOf(preorder[0]);
    root.left = buildTree(preorder.slice(1, idx + 1), inorder.slice(0, idx));
    root.right = buildTree(preorder.slice(idx + 1, preorder.length), inorder.slice(idx + 1, inorder.length));
    return root;
};