class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length
        let n = matrix[0].length

        let start = 0
        let end = m - 1

        while(start <= end){
            let row = Math.floor((start + end)/2)
            if(target < matrix[row][0]){
                end = row - 1
            }
            else if(target > matrix[row][n - 1]){
                start = row + 1
            }
            else{
                let left = 0
                let right = n - 1
                while(left <= right){
                    let col = Math.floor((left + right)/2)
                    if(target === matrix[row][col]){
                        return true
                    }
                    else if(target > matrix[row][col]){
                        left = col + 1
                    }
                    else{
                        right = col - 1
                    }
                }
                return false
            }
        }
        return false
    }
}
