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
     * @return {boolean}
     */
    isBalanced(root) {
        const helper = (node) => {
            if(!node) return 0;
            let leftDepth = helper(node.left);
            if(leftDepth === -1) return -1;
            let rightDepth = helper(node.right);
            if(rightDepth === -1) return -1;

            return Math.abs(leftDepth - rightDepth) <= 1 ? 1 + Math.max(leftDepth, rightDepth) : -1;
        }

        return helper(root) !== -1;
    }
}
