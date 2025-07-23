class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //Object to store already visited nums
        let indexTracker = {}
        for(let i = 0; i < nums.length; i++){
            //Calculate the diff between current num and the target
            let diff = target - nums[i]
            //Check if the diff is already in the indexTracker,
            //If it exists, a pair is found 
            if(indexTracker[diff] >= 0){
                return [indexTracker[diff], i]
            }
            //Track the index of current num
            else{
                indexTracker[nums[i]] = i
            }
        }
    }
}
