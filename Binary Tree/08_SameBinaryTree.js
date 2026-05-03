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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const helper = (nodeP, nodeQ) => {
            if((!nodeP && nodeQ) || (nodeP && !nodeQ)){
                return false
            }
            if(!nodeP && !nodeQ) return true;

            if(nodeP.val !== nodeQ.val) return false;

            let leftCheck = helper(nodeP.left, nodeQ.left);
            if(leftCheck === false) return false;

            let rightCheck = helper(nodeP.right, nodeQ.right);
            if(rightCheck === false) return false;

            return true;
        }

        return helper(p, q);
    }
}
