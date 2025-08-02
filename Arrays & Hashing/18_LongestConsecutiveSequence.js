class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums)
        let longestSeq = 0
        
        for(let num of numSet){
            if(!numSet.has(num - 1)){
                let currentNum = num
                let currentSeq = 1
                
                while(numSet.has(currentNum + 1)){
                    currentNum++
                    currentSeq++
                }
                
                longestSeq = Math.max(currentSeq, longestSeq)
            }
        }
        
        return longestSeq
    }
}
