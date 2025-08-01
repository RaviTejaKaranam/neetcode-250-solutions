class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if(nums.length === 0){
            return
        }
        let prefixArr = new Array(nums.length)
        let suffixArr = new Array(nums.length)
        let resultArr = []
        prefixArr[0] = 1
        suffixArr[suffixArr.length - 1] = 1
        
        for(let i = 1; i < nums.length; i++){
            prefixArr[i] = prefixArr[i-1] * nums[i-1]
        }

        for(let i = nums.length - 2; i >= 0; i--){
            suffixArr[i] = suffixArr[i+1] * nums[i+1]
        }

        for(let i = 0; i < nums.length; i++){
            resultArr[i] = prefixArr[i] * suffixArr[i]
        }
        
        return resultArr



    }
}
