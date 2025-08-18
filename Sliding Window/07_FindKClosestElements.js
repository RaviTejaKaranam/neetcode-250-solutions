class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let left = 0
        let right = arr.length - 1
        
        while(right - left >= k){
            if(Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)){
                right--
            }
            else{
                left++
            }
        }
        return arr.slice(left, right + 1)
    }
}
