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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        const helper = (node, key) => {
            if(!node) return null
            if(key < node.val) {
                node.left = helper(node.left, key);
            }
            else if(key > node.val){
                node.right = helper(node.right, key);
            }
            else{
                //Key is found;

                if(!node.left && !node.right){
                    return null;
                }
                else if(node.left && !node.right){
                    return node.left;
                }
                else if(node.right && !node.left){
                    return node.right;
                }
                else{
                    //2 children
                    let replaceNode = this.findMin(node.right);
                    node.val = replaceNode.val;
                    node.right = helper(node.right, replaceNode.val);
                }
            }

            return node;
        }
        return helper(root, key);
    }

    findMin(node){
        while(node.left){
            node = node.left;
        }
        return node;
    }
}
