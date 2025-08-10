class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b)
        const resultArr = []

        for(let i = 0; i < nums.length; i++){
            if(i > 0 && nums[i] === nums[i - 1]){
                continue
            }
            let left = i + 1
            let right = nums.length - 1


            while(left < right){
                if(nums[left] + nums[right] === -(nums[i])){
                    resultArr.push([nums[left], nums[right], nums[i]])
                    left++
                    right--
                    while(nums[left] === nums[left - 1]){
                        left++
                    }
                    while(nums[right] === nums[right + 1]){
                        right--
                    }
                }
                else if(nums[left] + nums[right] > -(nums[i])){
                    right--
                }
                else{
                    left++
                }
            }
        }

        return resultArr
    }
}
