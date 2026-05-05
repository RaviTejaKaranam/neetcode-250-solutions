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
        if(!root) {
            return new TreeNode(val);
        }
        let node = root;
        while(node){
            if(val > node.val && node.right){
                node = node.right;
            }
            else if(val > node.val && !node.right){
                node.right = new TreeNode(val);
                return root;
            }
            else if(val < node.val && node.left){
                node = node.left;
            }
            else {
                node.left = new TreeNode(val);
                return root;
            }
        }
    }
}
