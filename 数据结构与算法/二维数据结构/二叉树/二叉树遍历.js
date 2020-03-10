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

// 层序遍历
function cengOrder(root) {
    if (root == null) {
        return;
    }
    function ceng(rootList) {
        if (rootList == null || rootList.length == 0) return;
        const childList = [];
        for (let i = 0; i < rootList.length; i++) {
            const root = rootList[i];
            if (root != null) {
                console.log(root.value);
                root.left !== null ? childList.push(root.left) : '';
                root.right !== null ? childList.push(root.right) : '';
            }
        }
        ceng(childList)
    }
    ceng([root]);
}

// preOrder(a)
// inOrder(a)
// postOrder(a)

module.exports = {
    Node,
    preOrder,
    inOrder,
    postOrder,
    cengOrder
}


const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
cengOrder(node1)