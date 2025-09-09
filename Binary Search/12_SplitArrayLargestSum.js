class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        let min = Math.max(...nums)
        let max = 0
        let sumMax = Infinity
        for(let num of nums){
            max += num
        }

        while(min <= max){
            let mid = Math.floor((min + max) / 2)
            let sum = 0
            let subArrays = 1
            for(let num of nums){
                if(sum + num <= mid){
                    sum += num 
                }
                else{
                    subArrays++
                    sum = num
                }
            }
            if(subArrays <= k){
                max = mid - 1
                sumMax = Math.min(sumMax, mid)
            }
            else{
                min = mid + 1
            }
        }
        return sumMax
    }
}
