class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let i = 0
        function helper(){
            let num = 0
            let result = ""
            while(i < s.length){
                let char = s[i]
                if(!isNaN(char)){
                    num = num * 10 + (Number(char))
                    i++
                }
                else if(char === "["){
                    i++
                    let decoded = helper()
                    result += decoded.repeat(num)
                    num = 0
                }
                else if(char === "]"){
                    i++
                    return result
                }
                else{
                    result += char
                    i++
                }
            }
            return result
        }
        return helper()
    }
}
