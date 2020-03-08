// 二叉树节点
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// 构建二叉树
const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
const e = new Node('E')
const f = new Node('F')
const g = new Node('G')
a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;

// 前序遍历
function preOrder(root) {
    if (root == null) return;
    console.log(root.value);
    preOrder(root.left);
    preOrder(root.right);
}

// 中序遍历
function inOrder(root) {
    if (root == null) return;
    inOrder(root.left);
    console.log(root.value);
    inOrder(root.right);
}

// 后序遍历
function postOrder(root) {
    if (root == null) return;
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.value);
}

// preOrder(a)
// inOrder(a)
// postOrder(a)

module.exports = {
    Node,
    preOrder,
    inOrder,
    postOrder
}