/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function (preorder, inorder) {
    if (preorder.length === 0) {
        return null;
    }
    // 根节点
    let cur = new TreeNode(preorder[0]);
    // 中序遍历中根节点的index
    const index = inorder.indexOf(preorder[0]);
    cur.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
    cur.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1))
    return cur;
};

preorder = [3, 9, 20, 15, 7]
inorder = [9, 3, 15, 20, 7] // index = 1
console.log(buildTree(preorder, inorder));

// 5 9 3 15 20 7
   