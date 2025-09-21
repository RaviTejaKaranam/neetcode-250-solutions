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
        const queue1 = [p]
        const queue2 = [q]

        while(queue1.length && queue2.length){
            const node1 = queue1.shift()
            const node2 = queue2.shift()

            if(node1 === null && node2 === null){
                continue
            }

            if(node1 === null || node2 === null || node1.val !== node2.val){
                return false
            }

            queue1.push(node1.left, node1.right)
            queue2.push(node2.left, node2.right)
        }

        return true
    }
}
