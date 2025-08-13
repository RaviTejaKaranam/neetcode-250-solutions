class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people = people.sort((a,b) => a- b)
        let left = 0
        let right = people.length - 1
        let boats = 0
        while(left <= right){
            let weightLeft = limit - people[right]
            right--
            boats++
            if(people[left] <= weightLeft){
                left++
            }
        }
        return boats
    }
}
