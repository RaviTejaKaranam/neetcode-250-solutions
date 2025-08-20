class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length > s.length){
            return ""
        }
        const tCounter = {}
        for(let char of t){
            tCounter[char] = (tCounter[char] || 0) + 1
        }
        
        let left = 0
        let right = 0
        let required = Object.keys(tCounter).length
        let formed = 0
        const windowCounter = {}
        let minLen = Infinity
        let resArr = [0, 0]
        
        while(right < s.length){
            windowCounter[s[right]] = (windowCounter[s[right]] || 0) + 1
            if(tCounter[s[right]] &&  windowCounter[s[right]] === tCounter[s[right]]){
                formed++
            }
            
            while(left <= right && formed === required){
                if(right - left + 1 < minLen){
                    minLen = right - left + 1
                    resArr[0] = left
                    resArr[1] = right + 1
                }
                
                
                let char = s[left]
                windowCounter[char]--
                if(tCounter[char] && windowCounter[char] < tCounter[char]){
                    formed--
                }
                left++
            }
            right++
        }
        return minLen === Infinity ? "" : s.slice(resArr[0], resArr[1])
    }
}
