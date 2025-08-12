class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        nums = nums.sort((a, b) => a - b)
        let res = []
        for(let i = 0; i < nums.length; i++){
            if(i > 0 && nums[i - 1] === nums[i]){
                continue
            }
            for(let j = i + 1; j < nums.length; j++){
                if(j > i + 1 && nums[j - 1] === nums[j]){
                    continue
                }   
                let left = j + 1
                let right = nums.length - 1
                while(left < right){
                    let sum = nums[i] + nums[j] + nums[left] + nums[right]
                    if(sum === target){
                        res.push([nums[i], nums[j], nums[left], nums[right]])
                        left++
                        right--
                        while(left < right && nums[right] === nums[right + 1]){
                            right--
                        }
                        while(left < right && nums[left] === nums[left - 1]){
                            left++
                        }
                    }
                    else if(sum > target){
                        right--
                    }
                    else{
                        left++
                    }
                }
            }
        }
        return res
    }
}
