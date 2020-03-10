class Node {
    constructor(value) {
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
a.child.push(c, f, b);
b.child.push(d, e);
// 树的广度优先遍历
function wideOrder(root) {
    if (root == null) return;
    bfs([root]);

    function bfs(rootList) {
        if (!rootList || rootList.length == 0) {
            return;
        }
        let childList = [];
        for (let i = 0; i < rootList.length; i++) {
            const node = rootList[i];
            console.log(node.value)
            childList = childList.concat(node.child);
        }
        bfs(childList)
    }
}

wideOrder(a);