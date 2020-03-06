const { Node,Link } = require('./链表');
// 构造链表
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

// node1.next = node2;
// node2.next = node3;
// node3.next = null;
const link = new Link(node1,node2,node3);

// 递归遍历链表，必须有出口
function bianLink(root) {
    if(root == null) return;
    console.log(root.value);
    bianLink(root.next);
}
// bianLink(node1)
bianLink(link.root);

// 数组的递归遍历
const arr = [1,2,3,4,5];
function bianArr(arr,index = 0) {
    if (arr == null || index >= arr.length) {
        return;
    }
    console.log(arr[index]);
    bianArr(arr,index + 1);
}
// bianArr(arr);