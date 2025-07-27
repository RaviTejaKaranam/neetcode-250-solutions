class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        // 'res' will eventually hold the majority element
        // 'count' keeps track of the balance of votes
        let res = 0, count = 0

        // Loop through the array
        for(let num of nums){
          //If count is 0, choose the current number as the new res
            if(count === 0){
                res = num
            }
            // If current number is equal to res, increment count
            if(num === res){
                count++
            }
            // Else vote against it and decrement the count
            else{
                count--
            }
        }
        
        return res
    }
}
