//最小生成树算法：Prim 普利姆 加点法
const { Node, Graph, graph, nodeSet: pointSet, sideSet } = require('./图')

// prim
function primSpanTree(pointSet, sideSet) {
    // 存放已经选取的点
    const nowPoint = [];
    // 任意选一个
   nowPoint.push(pointSet[2]);
    // 取一个最小边，不断把点添加进去，直到图中所有点都添加完了
    while (true) {
        const minDisNode = getMinDisNode(pointSet, sideSet, nowPoint);
        nowPoint.push(minDisNode);
        if (nowPoint.length == pointSet.length) {
            break;
        }
    }
}

// 得到下一个要添加的最小路径的点，要传图（点集和邻接矩阵），现在已经连通的点（因为该点已经连通了，就没必要连这条线）
function getMinDisNode(pointSet, sideSet, nowPoint) {
    let fromPoint, toPoint, minDis = Infinity; //起始点、终点、最小路径
    // 根据已有的点出发，选最小路径
    for (let i = 0 ; i < nowPoint.length ; i++){
        const nowPointIndex = getIndex(pointSet, nowPoint[i].value) // 得到当前出发点在点集的下标，以便得到该点的边集
        // 得到最小路径
        for (let j = 0 ; j < sideSet[nowPointIndex].length ; j++){
            const thisPoint = pointSet[j]; // 这一轮循环要判断的终点
            // 再从邻接矩阵中选出最小路径的点（判断: 是否已经连通、最小路径？）
            if (sideSet[nowPointIndex][j] < minDis && getIndex(nowPoint, thisPoint.value) < 0) {
                fromPoint = nowPoint[i];
                toPoint = thisPoint;
                minDis = sideSet[nowPointIndex][j];
            }
        }
    }
    // 添加进已有，两个点neighbor
    fromPoint.neighbour.push(toPoint)
    toPoint.neighbour.push(fromPoint)
    return toPoint;
}

// 得到当前出发点在点集的下标
function getIndex(pointSet,str) {
    for (let i = 0; i < pointSet.length; i++) {
        if (pointSet[i].value == str) {
            return i;
        }
    }
    return -1;
}

primSpanTree(pointSet, sideSet);

console.log(pointSet)