/**
 * // Definition for a QuadTree node.
 * class Node {
 *     constructor(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *         this.val = val;
 *         this.isLeaf = isLeaf;
 *         this.topLeft = topLeft;
 *         this.topRight = topRight;
 *         this.bottomLeft = bottomLeft;
 *         this.bottomRight = bottomRight;
 *     }
 * }
 */

class Solution {
    /**
     * @param {number[][]} grid
     * @return {Node}
     */
    construct(grid) {
        const build = (n, startRow, startCol) => {
            let allEqual = true;

            for(let i = 0; i < n; i++){
                for(let j = 0; j < n; j++){
                    if(grid[startRow][startCol] !== grid[startRow + i][startCol + j]){
                        allEqual = false;
                        break;
                    }
                }
                if(!allEqual) break;
            }

            if(allEqual) {
                return new Node(grid[startRow][ startCol], true);
            }

            let mid = Math.floor(n/2);
            let topLeft = build(mid, startRow, startCol);
            let topRight = build(mid, startRow, startCol + mid);
            let bottomLeft = build(mid, startRow + mid, startCol);
            let bottomRight = build(mid, startRow + mid, startCol + mid);

            return new Node(0, false, topLeft, topRight, bottomLeft, bottomRight);
        }

        return build(grid.length, 0, 0);
    }
}
