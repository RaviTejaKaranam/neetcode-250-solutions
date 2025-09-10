/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *     @param {number} index
 *     @return {number}
 *     get(index) {
 *         ...
 *     }
 *
 *     @return {number}
 *     length() {
 *         ...
 *     }
 * }
 */

class Solution {
    /**
     * @param {number} target
     * @param {MountainArray} mountainArr
     * @return {number}
     */
    findInMountainArray(target, mountainArr) {
        let length = mountainArr.length()
        let left = 1
        let right = length - 2
        let peak
        while(left <= right){
            let mid = Math.floor((left + right) / 2)
            let leftValue = mountainArr.get(mid - 1)
            let midValue = mountainArr.get(mid)
            let rightValue = mountainArr.get(mid + 1)

            if(leftValue < midValue && midValue < rightValue){
                left = mid + 1
            }
            else if(leftValue > midValue && midValue > rightValue){
                right = mid - 1
            }
            else{
                peak = mid
                break
            }
        }

        //Search for target - Left Half
        left = 0
        right = peak
        while(left <= right){
            let mid = Math.floor((left + right) / 2)
            let value = mountainArr.get(mid)
            if(value < target){
                left = mid + 1
            }
            else if(value > target){
                right = mid - 1
            }
            else{
                return mid
            }
        }
        //Search for target - Right Half
        left = peak
        right = length - 1
        while(left <= right){
            let mid = Math.floor((left + right) / 2)
            let value = mountainArr.get(mid)
            if(value < target){
                right = mid - 1
            }
            else if(value > target){
                left = mid + 1
            }
            else{
                return mid
            }
        }
        return -1
    }
}
