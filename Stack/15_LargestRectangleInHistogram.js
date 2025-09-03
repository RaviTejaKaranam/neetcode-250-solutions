class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = []
        let maxArea = 0
        for(let i = 0; i < heights.length; i++){
            if(!stack.length){
                stack.push([i, heights[i]])
            }
            else{
                let index = i
                let value
                while(stack.length && heights[i] < stack[stack.length - 1][1]){
                    [index, value] = stack.pop()
                    maxArea = Math.max(maxArea, value * (i - index))
                }
                stack.push([index, heights[i]])
            }
        }
        
        for(let i = stack.length - 1; i >= 0; i--){
            let [index, value] = stack[i]
            maxArea = Math.max(((heights.length - index) * value), maxArea)
        }
        return (maxArea)
    }
}
