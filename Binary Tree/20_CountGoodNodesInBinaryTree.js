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
    goodNodes(root) {
        if(!root) return 0;
        let max = root.val;
        let result = 0;
        const helper = (node, max) => {
            if(!node) return;
            if(node.val >= max){
                result++;
                max = node.val;
            }
            helper(node.left, max);
            helper(node.right, max)
        }

        helper(root, max);
        return result; 
    }
}
