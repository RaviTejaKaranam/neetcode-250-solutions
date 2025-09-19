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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        if(!root){
            const root = new TreeNode(val)
            return root
        }
        let curr = root
        while(true){
            if(val > curr.val){
                if(!curr.right){
                    curr.right = new TreeNode(val)
                    return root
                }
                curr = curr.right
            }
            else{
                if(!curr.left){
                    curr.left = new TreeNode(val)
                    return root
                }
                curr = curr.left
            }
        }
    }
}
