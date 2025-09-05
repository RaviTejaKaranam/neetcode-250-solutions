class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1
        let right = 0
        for(let pile of piles){
            right = Math.max(pile, right)
        }
        let minRate = Infinity
        while(left <= right){
            let rate = Math.floor((left + right)/2)
            let totalTime = 0
            for(let pile of piles){
                let timeTaken = Math.ceil(pile / rate)
                totalTime += timeTaken
            }    
            if(totalTime <= h && rate < minRate){
                minRate = Math.min(rate, minRate)
                right = rate - 1
            }
            else{
                left = rate + 1
            }         
        }
        return minRate
    }
}
