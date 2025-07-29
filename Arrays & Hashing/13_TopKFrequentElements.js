class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqCntr = {}
        const bucketArr = new Array(nums.length + 1).fill(-1)
        const resultsArr = []

        for(let num of nums){
            freqCntr[num] = (freqCntr[num] || 0) + 1
        }

        for(let key in freqCntr){
            let idx = freqCntr[key]
            if(bucketArr[idx] === -1){
                bucketArr[idx] = [key]
            }
            else{
                bucketArr[idx] = [...bucketArr[idx], key]
            }
        }

        for(let i = bucketArr.length - 1; i >= 0; i--){
            if(resultsArr.length !== k){
                if(bucketArr[i] !== -1){
                    resultsArr.push(...bucketArr[i])
                }
            }
        }

        return resultsArr
    }
}
