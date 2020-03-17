// 递归
var isSymmetric = function(root) {
    if(root == null) return true;
    return isMirror(root.left,root.right);
};

function isMirror(root1,root2){
    if(!root1 && !root2)    return true;
    if(root1 == null || root2 == null) return false;
    return (root1.val == root2.val)
        && isMirror(root1.left, root2.right)
        && isMirror(root1.right, root2.left)
}

// 非递归，用队列