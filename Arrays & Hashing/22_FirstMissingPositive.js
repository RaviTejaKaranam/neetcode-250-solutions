class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        for(let i = 0; i < nums.length; i++){
        if(nums[i] <= 0 || nums[i] > nums.length){
            nums[i] = nums.length + 1
            } 
        }
        for(let i = 0; i < nums.length; i++){
            if(nums[i] > nums.length){
                continue
            }
            else{
                let index = Math.abs(nums[i]) - 1
                if(nums[index] > 0){
                    nums[index] = -1  * nums[index]
                }
            }
        }
        for(let i = 0; i < nums.length; i++){
            if(nums[i] >= 0){
                return i + 1
            }
        }
        return nums.length + 1
    }
}
