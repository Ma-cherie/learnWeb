// 一个随机数数组
const arr = [];
for (let i = 0 ; i < 10000 ; i++) {
    arr[i] = Math.floor(Math.random() * 10000);
}

let count = 0; //查找次数
// 数组遍历搜索
function search(arr,target) {
    for (let i = 0; i < arr.length; i++) {
        count++;
        if (arr[i] == target) {
            return true;
        }
    }
    return false;
}
console.time('searchArr')
console.log(search(arr,1000),count)
console.timeEnd('searchArr')

// 二叉搜索树 节点
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// 构建二叉排序树
function buildSortTree(arr) {
    if(arr == null || arr.length == 0) return null;
    const root = new Node(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        addNode(root, arr[i]);
    }
    return root;
}
// 比较大小并添加节点
function addNode(root,value) {
    if (root == null) return;
    // 等于节点的value
    if (value == root.value) return;
    // 小于节点的value
    if (value < root.value){
        if (root.left == null) //节点为空直接添加节点
            root.left = new Node(value);
        else    // 否则递归创建添加节点
            addNode(root.left, value)
    }
    // 大于节点的value
    else{
        if (root.right == null) 
            root.right = new Node(value);
        else
            addNode(root.right, value)
    }
}

const root = buildSortTree(arr);
// console.log(root)

// 遍历二叉搜索树
let count2 = 0; // 遍历次数
function searchTree(root, value) {
    count2++;
    if(root == null) return false;
    if(root.value == value) return true;
    if (value < root.value)
        return searchTree(root.left, value);
    else
        return searchTree(root.right, value);
}
console.time('searchTree')
console.log(searchTree(root,1000),count2)
console.timeEnd('searchTree')