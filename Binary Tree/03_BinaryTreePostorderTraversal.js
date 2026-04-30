/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    postorderTraversal(root) {
        const res = [];

        const helper = (node) => {
            if(!node) return;
            helper(node.left);
            helper(node.right);
            res.push(node.val);
        }

        helper(root);
        return res;
    }
}
