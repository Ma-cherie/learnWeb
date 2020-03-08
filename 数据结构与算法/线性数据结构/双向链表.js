class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLink{
    constructor(...args){
        if (args.length >= 1) {
            this.root = args[0];
            args[0].next = args[1];
            args[args.length - 1].prev = args[args.length - 2];
        }
        for(let i = 1; i < args.length -1; i++){
            args[i].next = args[i+1];
            args[i].prev = args[i-1];
        }
    }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const link = new DoubleLink(node1,node2,node3);

console.log(link.root)