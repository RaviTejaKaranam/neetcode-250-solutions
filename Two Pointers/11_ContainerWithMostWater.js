class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        if(heights.length === 0 || heights.length === 1){
            return
        }
        let left = 0
        let right = heights.length - 1
        let maxArea = 0
        while(left < right){
            let area = Math.min(heights[left], heights[right]) * (right - left)
            maxArea = Math.max(area, maxArea)
            if(heights[left] < heights[right]){
                left++
            }
            else{
                right--
            }
        }
        return maxArea
    }
}
