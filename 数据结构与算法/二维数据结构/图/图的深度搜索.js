// 图的节点
class Node{
    constructor(value){
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

// 图的深搜就在于，判断过的点就不判断了（标记），不要形成环
/**
 * @param {*} node 起始节点
 * @param {*} target 要搜索匹配的内容
 * @param {*} path 是查找过的点
 */
function deepSearch(node, target, path = []) { 
    if (node == null || path.includes(node)) {
        return false;
    }
    if (node.value == target) {
        return true;
    }
    path.push(node);
    let result = false;
    for (let i = 0; i < node.neighbor.length; i++) {
        if (deepSearch(node.neighbor[i], target, path)) {
            result = true;
        }
    }
    return result;
}

console.log(deepSearch(b, 'e'))