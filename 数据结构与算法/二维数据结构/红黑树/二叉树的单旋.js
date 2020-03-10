const { Node, getDepth, isBalanceTree, preOrder } = require('./平衡二叉树')

const node2 = new Node(2)
const node5 = new Node(5)
const node3 = new Node(3)
const node6 = new Node(6)
node2.right = node5;
node5.left = node3;
node5.right = node6;
const root = node2;

// 单旋平衡二叉树 后序遍历
function balanceTree(root) {
    if (isBalanceTree(root)) return root;
    if (root.left != null) root.left = balanceTree(root.left)
    if (root.right != null) root.right = balanceTree(root.right)
    const leftDepth = getDepth(root.left);
    const rightDepth = getDepth(root.right);
    if (Math.abs(leftDepth - rightDepth) < 2) {
        return root;
    }else if(leftDepth > rightDepth){
        rightRotate(root);
    }else{
        leftRotate(root)
    }
}

// 左旋
function leftRotate(root){
    const newRoot = root.right;
    root.right = root.right.left;
    newRoot.left = root;
    return newRoot;
}
// preOrder(leftRotate(root))

// 右旋
function rightRotate(root) {
    const newRoot = root.left;
    root.left = root.left.right;
    newRoot.right = root;
    return newRoot;
}

console.log(isBalanceTree(root));
const newRoot = balanceTree(root);
console.log(isBalanceTree(newRoot));
