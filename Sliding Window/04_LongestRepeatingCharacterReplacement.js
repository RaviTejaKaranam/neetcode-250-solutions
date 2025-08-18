class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0
        let maxLen = 0
        let maxFrqncy = 0
        const frqncy = {}
        
        for(let right = 0; right < s.length; right++){
            frqncy[s[right]] = (frqncy[s[right]] || 0) + 1
            maxFrqncy = Math.max(maxFrqncy, frqncy[s[right]])

            if((right - left + 1) - maxFrqncy > k){
                frqncy[s[left]]--
                left++
            }

            maxLen = Math.max(maxLen, right - left + 1)
        }
        return maxLen
    }
}
