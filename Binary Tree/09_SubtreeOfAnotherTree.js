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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(!subRoot) return true;
        if(!root) return false;

        if(this.sameTree(root, subRoot)) return true;

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    sameTree(p, q) {
        const helper = (nodeP, nodeQ) => {
            if(!nodeP && !nodeQ) return true;
            if(!nodeP || !nodeQ) return false;

            if(nodeP.val !== nodeQ.val) return false;

            let leftCheck = helper(nodeP.left, nodeQ.left);
            if(!leftCheck) return false;
            let rightCheck = helper(nodeP.right, nodeQ.right);
            if(!rightCheck) return false;

            return true;
        }

        return helper(p, q);
    }
}
