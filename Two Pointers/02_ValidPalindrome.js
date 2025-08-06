class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function isAlphaNumeric(char){
            if((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')){
                return true
            }
            else{
                return false
            }
            
        }

        s = s.toLowerCase()
        let left = 0
        let right = s.length - 1
        while(left < right){
            while((left < right) && !isAlphaNumeric(s[left])){
                left++
            }
            while((left < right) && !isAlphaNumeric(s[right])){
                right--
            }
            if(s[left] !== s[right]){
                return false
            }
            else{
                left++
                right--
            }
        }
        return true
    }
}
