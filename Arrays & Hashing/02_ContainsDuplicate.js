class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        //Empty object to keep track of nums
        let freqTracker = {}
        for(let i = 0; i < nums.length; i++){
            //If num is not in freqTracker, mark it as seen
            if(!freqTracker[nums[i]]){
                freqTracker[nums[i]] = true
            }
            //If num is in freqTracker, it's a duplicate
            else{
                return true // Duplicate found
            }
        }
        return false //No duplicates
    }
}
