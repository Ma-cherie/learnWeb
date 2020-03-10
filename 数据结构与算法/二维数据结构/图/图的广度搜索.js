// 图的节点
class Node {
    constructor(value) {
        this.value = value;
        this.neighbor = [];
    }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
a.neighbor.push(b);
a.neighbor.push(c);
b.neighbor.push(a);
b.neighbor.push(c);
b.neighbor.push(d);
c.neighbor.push(a);
c.neighbor.push(b);
c.neighbor.push(d);
d.neighbor.push(b);
d.neighbor.push(c);
d.neighbor.push(e);
e.neighbor.push(d);

// 图的广度优先搜索
function bfs(nodes, target, path = []) {
    if(nodes == null || nodes.length == 0) return false;
    let childNeighbor = [];
    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (path.includes(node)) continue;
        path.push(node);
        if(node.value == target) {
            return true;
        }
        else{
            childNeighbor = childNeighbor.concat(node.neighbor)
        }
    }
    // childNeighbor = [...new Set(childNeighbor)];
    return bfs(childNeighbor, target, path);
}
console.log(bfs([c], 'n'))