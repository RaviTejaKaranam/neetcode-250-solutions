class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        //Using spread operator to create a new array with nums followed by nums again
        return [...nums, ...nums]
    }
}
