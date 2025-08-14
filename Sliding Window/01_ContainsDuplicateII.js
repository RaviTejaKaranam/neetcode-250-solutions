class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const freqTracker = {}
        for(let i = 0; i < nums.length; i++){
            if(freqTracker[nums[i]] >= 0 && Math.abs(freqTracker[nums[i]] - i) <= k){
                return true
            }
            freqTracker[nums[i]] = i
        }

        return false
    }
}
