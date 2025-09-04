class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let left = 0
        let right = x
        while(left <= right){
            let mid = Math.floor((left + right)/2)
            let midSquare = mid * mid
            if(midSquare === x){
                return mid
            }
            else if(midSquare > x){
                right = mid - 1
            }
            else{
                left = mid + 1
            }
        }
        return left - 1
    }
}
