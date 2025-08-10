class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        if(nums.length <= 1){
            return nums.length
        }
        let k = 0
        let i = 1
        while(i < nums.length){
            if(nums[i] === nums[k]){
                i++
            }
            else{
                k++
                nums[k] = nums[i]
                i++
            }
        }
        return k + 1
    }
}
