const { Node } = require('./二叉树遍历');

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

// 构建二叉树
const a2 = new Node('A')
const b2 = new Node('B')
const c2 = new Node('C')
const d2 = new Node('D')
const e2 = new Node('E')
const f2 = new Node('F')
const g2 = new Node('G')
a2.left = c2;
a2.right = b2;
c2.left = f2;
// c2.right = g2;
b2.left = d2;
b2.right = e2;
f2.right = g2;

// 比较两棵树是否相同
function compareTree(root1,root2) {
    if(root1 == root2 ) return true; //同一棵树,包括了null == null
    if((root1 == null && root2 != null) || (root1 != null && root2 == null)) return false; //其中有一个为null
    if(root1.value != root2.value) return false; //有一个值不相同
    const leftBool = compareTree(root1.left,root2.left) || compareTree(root1.left,root2.right);
    const rightBool = compareTree(root1.right, root2.right) || compareTree(root1.right,root2.left);
    return leftBool && rightBool;
}

// 比较两棵树的区别，root1是之前，root2是之后
function diff(root1,root2) {
    const diffList = []; //{type:'add,modify,del',origin,now}
    function diffTree(root1, root2) {
        if (root1 == root2) return; //同一棵树或者都是null
        // 新增的
        if (root1 === null && root2 !== null) {
            diffList.push({ type: 'add', origin: null, now: root2 });
        }
        // 删除的
        else if (root1 !== null && root2 === null) {
            diffList.push({ type: 'del', origin: root1.value, now: null });
        }
        // 修改的
        else if (root1.value !== root2.value) {
            diffList.push({ type: 'modify', origin: root1.value, now: root2.value });
            // 坑，这个节点修改了，不代表子节点也变了
            diffTree(root1.left, root2.left)
            diffTree(root1.right, root2.right)
        }
        // 如果没有新增修改删除，则继续往下看
        else{
            diffTree(root1.left, root2.left)
            diffTree(root1.right, root2.right)
        }
    }
    diffTree(root1,root2);
    return diffList;
}

const diffList = diff(a, a2)
console.log(diffList);
