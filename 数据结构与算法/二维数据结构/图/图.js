// 图的节点
class Node{
    constructor(value){
        this.value = value;
        this.neighbour = [];
    }
}

// 图
class Graph {
    constructor(nodeSet, sideSet){
        this.nodeSet = nodeSet;
        this.sideSet = sideSet;
    }
}


// 构建一个图（点集，边集）
const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
const e = new Node('E')
const nodeSet = [a,b,c,d,e];
// 邻接矩阵（Adjacency Matrix）, 是表示顶点之间相邻关系的矩阵
const M = Infinity; //无限大
const sideSet = [
    [0,4,7,M,M],
    [4,0,8,6,M],
    [7,8,0,5,M],
    [M,6,5,0,7],
    [M,M,M,7,0],
]

const graph = new Graph(nodeSet,sideSet);

module.exports = {
    Node,
    Graph,
    graph,
    nodeSet,
    sideSet
}