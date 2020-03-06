const {Node} = require('./链表.js');

// 构造链表
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.next = node2;
node2.next = node3;
node3.next = null;

// 遍历链表
function bianLink(root) {
    let temp = root;
    while (true) {
        if (temp != null) {
            console.log(temp.value);
        }else{
            break;
        }
        temp = temp.next;
    }
}

bianLink(node1)

// 构造数组与遍历数组
const arr = [1,2,3,4,5];
function bianArr(arr) {
    if(arr == null) return;
    for(let i = 0 ; i < arr.length ; i++){
        console.log(arr[i]);
    }
}
bianArr(arr);