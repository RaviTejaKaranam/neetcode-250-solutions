class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let mid = Math.floor(s.length / 2)
        for(let i = 0; i < mid; i++){
            let temp = s[i]
            s[i] = s[s.length - i - 1]
            s[s.length - i - 1] = temp 
        }

        return s
    }
}
