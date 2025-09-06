class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let minCap = Math.max(...weights)
        let maxCap = 0
        for(let weight of weights){
            maxCap += weight
        }
        let leastShipCap = Infinity

        while(minCap <= maxCap){
            let mid = Math.floor((minCap + maxCap)/2)
            let day = 1
            let sum = 0
            for(let weight of weights){
                if(sum + weight <= mid){
                    sum += weight
                }
                else{
                    day++
                    sum = weight
                }
            }
            if(day <= days){
                leastShipCap = Math.min(leastShipCap, mid)
                maxCap = mid - 1
            }
            else{
                minCap = mid + 1
            }
        }
        return leastShipCap
    }
}
