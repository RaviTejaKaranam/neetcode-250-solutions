class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0
        //Start at 0 index and add elements that are not equal to val.
        for(let i = 0; i < nums.length; i++){
            if(nums[i] !== val){
                nums[k] = nums[i]
                k++
            }
        }

        return k
    }
}
