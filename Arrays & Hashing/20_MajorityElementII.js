class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const numsFrqncy = {}
        let resultArr = []
        for(let num of nums){
            numsFrqncy[num] = (numsFrqncy[num] || 0) + 1
            if(Object.keys(numsFrqncy).length > 2){
                for(let key in numsFrqncy){
                    numsFrqncy[key] = numsFrqncy[key] - 1
                    if(!numsFrqncy[key]){
                        delete numsFrqncy[key]
                    }
                }
            }
        }
        
        for(let key in numsFrqncy){
            let count = 0
            for(let num of nums){
                if(num == key){
                    count++
                }
            }
            if(count > Math.floor(nums.length/3)){
                resultArr.push(parseInt(key))
            }
        }
        return resultArr
    }
}




