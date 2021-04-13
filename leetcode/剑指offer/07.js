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
    let root = preorder[0];
    console.log(inorder.indexOf(root));
};

preorder = [3, 9, 20, 15, 7]
inorder = [9, 3, 15, 20, 7]
console.log(buildTree(preorder, inorder));

// 5 9 4 3 15 20 7