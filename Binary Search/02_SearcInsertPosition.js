class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let left = 0
        let right = nums.length - 1
        if(target < nums[left]){
            return 0
        }
        if(target > nums[right]){
            return nums.length
        }
        while(left <= right){
            let mid = Math.floor((left + right)/2)
            if(nums[mid] === target || (nums[mid] > target && nums[mid - 1] < target)){
                return mid
            }
            else if(nums[mid] > target){
                right = mid - 1
            }
            else{
                left = mid + 1
            }
        }
    }
}
