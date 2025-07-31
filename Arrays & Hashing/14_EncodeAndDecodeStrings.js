class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let singleStr = ""
        for(let str of strs){
            let len = str.length
            singleStr += len + "#" + str
        }

        return singleStr

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let resultArr = []
        let i = 0
        while(i < str.length){
            let j = i
            while(str[j] !== "#"){
                j++
            }
            let length = parseInt(str.slice(i, j))
            let start = j + 1
            let end = start + length
            let newStr = str.slice(start, end)
            resultArr.push(newStr)
            i = j = end
        }

        return resultArr
    }
}
