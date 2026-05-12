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
     * @param {number} target
     * @return {TreeNode}
     */
    removeLeafNodes(root, target) {
        const helper = (node) => {
            if(!node) return null;
            node.left = helper(node.left);
            node.right = helper(node.right);

            if(node.val === target && !node.left && !node.right){
                return null;
            }
            else{
                return node;
            }
        }

        return helper(root);
    }
}
