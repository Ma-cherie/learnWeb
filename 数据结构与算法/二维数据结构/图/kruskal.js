// 最小生成树：kruskal 克鲁斯卡尔算法 加边法
// 步骤：选出最小路径，然后判断（边的两个点是否有一个没连接，或者两个点不在一个连接网络中），连接

const { Node, Graph, graph, nodeSet: pointSet, sideSet } = require('./图') // 把图引进来

// kruskal
function kruskal(pointSet,sideSet) {
    const linkList = []; //已经连接的网络，如[[a,b],[c,d]]
    while (true) {
        let minDis = Infinity;
        let beginPoint, endPoint;
        // 从邻接矩阵得到最小路径
        for (let i = 0; i < sideSet.length; i++) {
            for (let j = 0; j < sideSet[i].length; j++) {
                const tempBegin = pointSet[i];
                const tempEnd = pointSet[j];
                const tempDis = sideSet[i][j];
                if (i != j // 是否是自己到自己
                    && tempDis < minDis // 是否是最小路径
                    && canLink(linkList, tempBegin, tempEnd) // 能否连接
                ) {
                    minDis = tempDis;
                    beginPoint = tempBegin;
                    endPoint = tempEnd;
                }
            }
        }
        // 连接
        if (beginPoint && endPoint) {
            link(linkList, beginPoint, endPoint)
        }
        // 结束条件
        if (linkList.length ==1 && linkList[0].length == pointSet.length) {
            break;
        }
    }
}

// 判断是否能连接
function canLink(linkList, beginPoint, endPoint) {
    // 起点和终点所在的网络
    let beginNet = null;
    let endNet = null;
    for (let i = 0; i < linkList.length; i++) {
        const net = linkList[i];
        if (net.includes(beginPoint)) beginNet = net;
        if (net.includes(endPoint)) endNet = net;
    }
    // 不能连接的情况
    if (beginNet != null && endNet != null && beginNet == endNet) {
        return false;
    }
    return true;
}

// 连接

function link(linkList, beginPoint, endPoint) {
    if (beginPoint == null || endPoint == null) {
        return;
    }
    // 起点和终点所在的网络
    let beginNet = null;
    let endNet = null;
    for (let i = 0; i < linkList.length; i++) {
        const net = linkList[i];
        if (net.includes(beginPoint)) beginNet = net;
        if (net.includes(endPoint)) endNet = net;
    }
    // 1. 两个都没连接过
    if (beginNet == null && endNet == null) {
        const newNet = [beginPoint,endPoint];
        linkList.push(newNet);
    }
    // 2. 其中一个没有连接过（不在任一连接网络中）
    else if (beginNet == null && endNet != null) {
        endNet.push(beginPoint);
    }
    else if (beginNet != null && endNet == null) {
        beginNet.push(endPoint);
    }
    // 3. 两个点在两个连接网络，合并这两个网络  
    else if (beginNet != null && endNet != null && beginNet != endNet) {
        // 删除原来的两个网络
        linkList.splice(linkList.indexOf(beginNet),1)
        linkList.splice(linkList.indexOf(endNet),1)
        // 添加新网络
        const newNet = [...beginNet, ...endNet];
        linkList.push(newNet);
    }
    // 两个连接的点添加邻居
    beginPoint.neighbour.push(endPoint);
    endPoint.neighbour.push(beginPoint);
}

kruskal(pointSet, sideSet);

console.log(pointSet)