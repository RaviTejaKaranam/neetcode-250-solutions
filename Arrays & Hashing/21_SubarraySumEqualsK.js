class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let prefixSum = 0
        let prefixSumTrkr = {0 : 1}
        let counter = 0

        for(let i = 0; i < nums.length; i++){
            prefixSum += nums[i]
            let diff = prefixSum - k
            if(prefixSumTrkr[diff]){
                counter += prefixSumTrkr[diff]
            }
            prefixSumTrkr[prefixSum] = (prefixSumTrkr[prefixSum] || 0) + 1
            
        }
        return counter
    }
}
