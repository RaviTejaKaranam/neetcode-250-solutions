class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const tracker = {}
        let left = 0
        let maxLen = 0
        for(let right = 0; right < s.length; right++){
            let char = s[right]
            if(tracker[char] >= 0 && left <= tracker[char]){
                left = tracker[char] + 1
            }
            tracker[char] = right
            
            maxLen = Math.max(right - left + 1, maxLen)
        }
        return maxLen
    }
}
