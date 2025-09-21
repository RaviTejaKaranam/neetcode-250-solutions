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
    inorderTraversal(root) {
        const visited = []
        function helper(curr){
            if(!curr){
                return
            }
            helper(curr.left)
            visited.push(curr.val)
            helper(curr.right)
        }
        helper(root)
        return visited
    }
}
