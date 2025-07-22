class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        //Objects to store character freq's in given strings
        const sFreqCntr = {}
        const tFreqCntr = {}
        //Return false, if the strings are not of same length
        if(s.length !== t.length){
            return false
        }

        //Loop the strings and assign char freq's
        for(let letter of s){
            sFreqCntr[letter] = (sFreqCntr[letter] || 0) + 1
        }

        for(let letter of t){
            tFreqCntr[letter] = (tFreqCntr[letter] || 0) + 1
        }

        /* If a char is not present the same number of times in both
           freq counters, not anagrams */
        for(let key in sFreqCntr){
            if(sFreqCntr[key] !== tFreqCntr[key]){
                return false
            }
        }

        return true
    }
}
