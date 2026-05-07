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
    rightSideView(root) {
        if(!root) return [];
        const queue = [root];
        const resArr = [];
        let j = 0;
        while(j < queue.length){
            let currentLevel = [];
            let currentLevelLength = queue.length - j;
            for(let i = 0; i < currentLevelLength; i++){
                let node = queue[j];
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
                currentLevel.push(node.val);
                j++;
            }
            resArr.push(currentLevel[currentLevel.length - 1]);
        }

        return resArr;
    }
}
