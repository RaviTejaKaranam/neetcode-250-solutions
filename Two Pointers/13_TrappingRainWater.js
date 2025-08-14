class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let preMax = height[0]
        const prefixMax = [preMax]
        for(let i = 1; i < height.length; i++){
            if(height[i] > preMax){
                preMax = height[i]
            }
            prefixMax[i] = preMax
        }
        let sufMax = height[height.length - 1]
        const suffixMax = []
        suffixMax[height.length - 1] = sufMax
        for(let i = height.length - 2; i >= 0; i--){
            if(height[i] > sufMax){
                sufMax = height[i]
            }
            suffixMax[i] = sufMax
        }
        let waterTrapped = 0
        for(let i = 0; i < height.length; i++){
            waterTrapped += Math.min(prefixMax[i],suffixMax[i]) - height[i]
        }
        
        return waterTrapped
    }
}
