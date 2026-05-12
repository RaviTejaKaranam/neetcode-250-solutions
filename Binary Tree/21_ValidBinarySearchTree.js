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
    isValidBST(root) {
        //if(!root) return true;
        let minAllowed = -Infinity;
        let maxAllowed = Infinity;

        const helper = (node, minAllowed, maxAllowed) => {
            if(!node) return true;
            if(node.val < maxAllowed && node.val > minAllowed){
                return helper(node.left, minAllowed, node.val) && helper(node.right, node.val, maxAllowed);
            }
            else{
                return false;
            }
        }
        return helper(root, minAllowed, maxAllowed);
    }
}
