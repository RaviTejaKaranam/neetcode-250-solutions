class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let start = 0
        let end = numbers.length - 1
        while(end > start){
            if(numbers[start] + numbers[end] === target){
                return [start + 1, end + 1]
            }
            else if(numbers[start] + numbers[end] > target){
                end--
            }
            else{
                start++
            }
        }
    }
}
