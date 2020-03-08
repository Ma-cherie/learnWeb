// 还原二叉树
const prev = ['A','C','F','G','B','D','E']
const middle = ['F','C','G','A','D','B','E']
const post = ['F','G','C','D','E','B','A']

// 导入
const { Node,preOrder,postOrder,inOrder } = require('./二叉树遍历.js')

// 根据前序中序还原二叉树
function buildTree(prev,middle) {
    if (prev == null || middle == null || prev.length == 0 || middle.length == 0 || prev.length !== middle.length) {
        return null;
    }
    // 前序中找出根节点
    const root = new Node(prev[0]);
    // 根节点在中序的坐标
    const rootIndex = middle.indexOf(root.value);
    // 根据中序分为左右子树
    const leftMiddle = middle.slice(0, rootIndex); //左子树中序
    const rightMiddle = middle.slice(rootIndex + 1, middle.length);//右子树中序
    const leftPrev = prev.slice(1, rootIndex + 1); //左子树前序
    const rightPrev = prev.slice(1 + rootIndex, prev.length);//右子树前序
    root.left = buildTree(leftPrev, leftMiddle);
    root.right = buildTree(rightPrev, rightMiddle);
    return root;
}

// const root = buildTree(prev,middle);
// preOrder(root)


// 根据中序和后序还原二叉树
function getTree(middle,post) {
    // 出口
    if (!middle || !post || middle.length == 0 || post.length ==0 || middle.length != post.length) {
        return null;
    }
    // 根节点,在中序的位置
    const root = new Node(post[post.length -1]);
    const rootIndex = middle.indexOf(root.value);
    // 得到左右子树的中序、后序
    const leftMiddle = middle.slice(0, rootIndex) // 左子树的中序遍历
    const rightMiddle = middle.slice(rootIndex + 1, middle.length) // 右子树的中序遍历
    const leftPost = post.slice(0, rootIndex) // 左子树的后序遍历
    const rightPost = post.slice(rootIndex, post.length - 1) // 右子树的后序遍历
    root.left = getTree(leftMiddle,leftPost);
    root.right = getTree(rightMiddle,rightPost);
    return root;
}

const root = getTree(middle,post);
preOrder(root);