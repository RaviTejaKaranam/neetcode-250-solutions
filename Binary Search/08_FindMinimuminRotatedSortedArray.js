class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0
        let right = nums.length - 1
        let min = Infinity
        while(left <= right){
            if(left === right){
                min = Math.min(min, nums[left])
                return min
            }
            let mid = Math.floor((left + right) / 2)
            min = Math.min(min, nums[mid])
            if(nums[mid] <= nums[right]){
                right = mid
            }
            else{
                left = mid + 1
            }
        }
        return min
    }
}
