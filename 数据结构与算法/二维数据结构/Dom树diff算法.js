// 树的节点
class Node{
    constructor(value){
        this.value = value;
        this.child = [];
    }
}

// 构件Dom Tree
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
a.child.push(b,c);
// 另外一颗
const a2 = new Node('a');
const b2 = new Node('b');
const c2 = new Node('c');
const d = new Node('d');
const e = new Node('e');
a2.child.push(b2, c2,d);
d.child.push(e)


// 比较dom树的变化，比较两棵树的区别，root1是之前，root2是之后
// function DomDiff(root1, root2) {
//     const diffList = []; //{type:'add,modify,del',origin,now}
//     diff(root1,root2);
//     return diffList;
// }

const diffList = []; //{type:'add,modify,del',origin,now}
function diff(root1, root2) {
// 比较这个节点
    if (root1 == root2) return; //同一棵树或者都是null
    // 新增的
    if (root1 === null && root2 !== null) {
        diffList.push({ type: 'add', origin: null, now: root2 });
    }
    // 删除的
    else if (root1 !== null && root2 === null) {
        diffList.push({ type: 'del', origin: root1, now: null });
    }
    // 修改的
    else if (root1.value !== root2.value) {
        diffList.push({ type: 'modify', origin: root1, now: root2 });
        // 坑，这个节点修改了，不代表子节点也变了
        diffChild(root1, root2)
    }
    // 如果没有新增修改删除，则继续往下看
    else {
        diffChild(root1, root2)
    }
}

// 比较子节点
function diffChild(root1,root2) {
    // 传进来的两个节点都没有子节点
    if (root1.child.length == 0 && root2.child.length == 0) return;
    // 如果两棵树子节点树相等，或者 root1.child 比 root2.child少
    else if (root1.child.length <= root2.child.length) {
        for (let i = 0; i < root1.child.length; i++) {
            diff(root1.child[i], root2.child[i])
        }
        // root2.child新增的
        for (let i = root1.child.length; i < root2.child.length; i++) {
            diffList.push({ type: 'add', origin: null, now: root2.child[i] });
        }
    }
    // 如果root1.child 比 root2.child多
    else if (root1.child.length > root2.child.length) {
        for (let i = 0; i < root2.child.length; i++) {
            diff(root1.child[i], root2.child[i])
        }
        // root2.child删除的
        for (let i = root2.child.length; i < root1.child.length; i++) {
            diffList.push({ type: 'del', origin: root1.child[i], now: null });
        }
    }
}

diff(a,a2);
console.log(diffList)