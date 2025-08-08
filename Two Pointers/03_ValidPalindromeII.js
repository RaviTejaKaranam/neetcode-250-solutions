class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        if(s.length === 0){
            return
        }
        let left = 0
        let right = s.length - 1
        while(left < right) {
            if(s[left] === s[right]){
                left++
                right--
            }
            else{
                return (this.checkPalindrome(s.slice(left, right)) || this.checkPalindrome(s.slice(left + 1, right + 1)))
            }
        }
        return true
    }

    checkPalindrome(str){
        if(str.length === 0){
            return
        }
        let left = 0
        let right = str.length - 1
        while(left < right){
            if(str[left] === str[right]){
                left++
                right--
            }
            else{
                return false
            }
        }
        return true
    }
}

