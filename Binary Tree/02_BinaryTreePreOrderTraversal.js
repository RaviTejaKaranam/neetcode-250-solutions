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
    preorderTraversal(root) {
        const res = [];

        const helper = (node) => {
            if(!node) return;
            res.push(node.val);
            helper(node.left);
            helper(node.right);
        }

        helper(root);
        return res;
    }
}
