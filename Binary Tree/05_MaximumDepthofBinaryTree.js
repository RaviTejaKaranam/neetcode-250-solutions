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
     * @return {number}
     */
    maxDepth(root) {
        let depth = 0;
        const helper = (node) => {
            if(!node) return 0;
            let leftDepth = helper(node.left);
            let rightDepth = helper(node.right);
            depth = 1 + Math.max(leftDepth, rightDepth);
            return depth;
        }

        helper(root);
        return depth;
    }
}
