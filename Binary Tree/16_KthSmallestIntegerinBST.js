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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let count = 0;
        let res;

        const helper = (node) => {
            if(!node || res !== undefined) return;
            helper(node.left);
            count++;
            if(count === k){
                res = node.val;
                return; 
            }
            helper(node.right);
        }

        helper(root);
        return res;
    }
}
