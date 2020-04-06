/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    let data = '';
    function preorder(root) {
        if (root == null) {
            data += 'null,';
            return;
        }
        data += root.val + ',';
        preorder(root.left);
        preorder(root.right);
    }
    preorder(root);
    return data;
};


/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    console.log(data);
    let nodes = data.split(',').slice(0, -1);
    console.log(nodes);

    function buildTree(nodes) {
        let val = nodes.shift();
        if (val == 'null') return null;
        let root = new TreeNode(parseInt(val));
        root.left = buildTree(nodes);
        root.right = buildTree(nodes);
        return root;
    }
    return buildTree(nodes);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */