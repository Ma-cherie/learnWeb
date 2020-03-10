class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
const h = new Node('h');
const i = new Node('i');
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
d.right = h;
e.right = i;

// 获取树的深度
function getDepth(root) {
    if(root == null) return 0;
    const leftDepth = getDepth(root.left);
    const rightDepth = getDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
}
// console.log(getDepth(a));

// 判断树是不是平衡树
function isBalanceTree(root) {
    if(root == null) return true;
    const leftDepth = getDepth(root.left);
    const rightDepth = getDepth(root.right);
    if (Math.abs(leftDepth - rightDepth) > 1) {
        return false;
    }else{
        return isBalanceTree(root.left) && isBalanceTree(root.right);
    }
}

// console.log(isBalanceTree(a))

// 前序遍历二叉树
function preOrder(root) {
    if (root == null) return;
    console.log(root.value);
    preOrder(root.left);
    preOrder(root.right);
}
// preOrder(a);

module.exports = {
    Node,
    getDepth,
    isBalanceTree,
    preOrder
}