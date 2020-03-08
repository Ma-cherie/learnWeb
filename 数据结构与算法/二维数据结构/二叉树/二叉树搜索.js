const { Node,preOrder } = require('./二叉树遍历');

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

// 深度搜索
function deepSearch(root,target) {
    if (root == null) return false;
    if (root.value === target) return true;
    const left = deepSearch(root.left,target);
    const right = deepSearch(root.right,target);
    return left || right;
}

// console.log(deepSearch(a,'F'));

// 广度搜索
function wideSearch(nodeList,target) {
    if(nodeList == null || nodeList.length == 0) return false;
    const childList = [];   //当前层所有节点的子节点
    for (let i = 0; i < nodeList.length; i++){
        if(nodeList[i] != null && nodeList[i].value === target){
            return true;
        }
        nodeList[i].left !== null ? childList.push(nodeList[i].left) : '';
        nodeList[i].right !== null ? childList.push(nodeList[i].right) : '';
    }
    return wideSearch(childList,target);
}


console.log(wideSearch([a], 'G'));
