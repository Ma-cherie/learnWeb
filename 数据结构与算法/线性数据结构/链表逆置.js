const { Node,Link} = require('./链表.js')

// 构造链表
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const link = new Link(node1,node2,node3,node4,node5)

// 链表逆置
function linkReverse(root) {
    // 找到倒数第二个节点，操作最后一个节点
    if (root.next.next == null) {
        root.next.next = root;
        return root.next; // 返回最后一个节点，也就是新链表的头结点
    }else{
        let newRoot = linkReverse(root.next); //传递最后一个节点
        root.next.next = root;
        root.next = null;
        return newRoot;
    }
}

// 递归遍历
function bianLink(root) {
    if (root == null) {
        return;
    }
    console.log(root.value);
    bianLink(root.next);
}

// console.log(linkReverse(link.root));
const newRoot = linkReverse(link.root);
bianLink(newRoot);