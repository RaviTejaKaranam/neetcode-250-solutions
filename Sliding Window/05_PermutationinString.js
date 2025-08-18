class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let left = 0

        if(s1.length > s2.length){
            return false
        }
        let reqLen = s1.length
        let s1Tracker = {}
        let s2Tracker = {}
        for(let char of s1){
            s1Tracker[char] = (s1Tracker[char] || 0) + 1
        }
        for(let left = 0; left < s2.length; left++){
            let right = left
            let frq = {}
            while(s1Tracker[s2[right]]){
                frq[s2[right]] = ( frq[s2[right]] || 0 ) + 1
                if(frq[s2[right]] > s1Tracker[s2[right]]){
                    break
                }
                right++
            }
            if(right - left === s1.length){
                return true
            }
        }
        return false

    }
}
