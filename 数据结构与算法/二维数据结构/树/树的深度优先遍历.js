class Node{
    constructor(value){
        this.value = value;
        this.child = [];
    }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')
a.child.push(c,f,b);
b.child.push(d,e);

// 树的深度优先遍历
function deepOrder(root) {
    if (root == null) return;
    console.log(root.value);
    for (let i = 0; i < root.child.length; i++) {
        const node = root.child[i];
        deepOrder(node);
    }
}

deepOrder(a);