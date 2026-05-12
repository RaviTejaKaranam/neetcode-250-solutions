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
    rob(root) {
        const helper = (node) => {
            if(!node) return [0, 0] //[robNode, skipNode];

            const [leftRob, leftSkip] = helper(node.left);
            const [rightRob, rightSkip] = helper(node.right);

            let robCurrent = node.val + leftSkip + rightSkip;
            let skipCurrent = Math.max(leftRob, leftSkip) + Math.max(rightRob, rightSkip);

            return [robCurrent, skipCurrent];

        }

        return Math.max(...helper(root));
    }
}
