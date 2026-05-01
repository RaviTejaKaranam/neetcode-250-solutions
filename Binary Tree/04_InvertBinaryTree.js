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
     * @return {TreeNode}
     */
    invertTree(root) {
        const helper = (node) => {
            if(!node) return null;
            let left = helper(node.left);
            let right = helper(node.right);

            node.left = right;
            node.right = left;

            return node;
        }

        helper(root);
        return root;
    }
}
