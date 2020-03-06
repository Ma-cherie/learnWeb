class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Link {
    constructor(...args){
        if(args.length == 0) return;
        this.root = args[0];
        // 除了最后一个元素指向null，其他节点都指向下一个
        for(let i = 0 ; i < args.length -1 ; i++){
            args[i].next = args[i+1];
        }
    }
}

// 构造链表
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.next = node2;
node2.next = node3;
node3.next = null;

exports.Node = Node;
// exports.link = link;
exports.Link = Link;