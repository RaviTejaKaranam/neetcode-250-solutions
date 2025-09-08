class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length - 1
        while(left <= right){
            let mid = Math.floor((left + right) / 2)
            if(nums[left] === nums[mid] && nums[mid] === nums[right]){
                left++
                right--
            }
            if(nums[mid] === target){
                return true
            }
            if(nums[left] <= nums[mid]){
                if(target < nums[mid] && nums[left] <= target){
                    right = mid - 1
                }
                else{
                    left = mid + 1
                }
            }
            else{
                if(target > nums[mid] && target <= nums[right]){
                    left = mid + 1
                }
                else{
                    right = mid - 1
                }
            }
        }
        return false
    }
}
