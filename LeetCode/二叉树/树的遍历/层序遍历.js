var levelOrder = function (root) {
    if (!root) return [];
    const res = [];
    bfs([root], res);
    return res;
};

function bfs(nodeArr, res) {
    if (!nodeArr || nodeArr.length == 0) return [];
    const childArr = [], curArr = [];
    nodeArr.forEach(node => {
        curArr.push(node.val);
        node.left ? childArr.push(node.left) : '';
        node.right ? childArr.push(node.right) : '';
    })
    res.push(curArr);
    bfs(childArr, res);
}