class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {

        let commonPrefix = ""

        //Sort the strs array
        strs.sort()

        //Max possible common prefix length
        let maxPossibleLen = Math.min(strs[0].length, strs[strs.length - 1].length)

        for(let i = 0; i < maxPossibleLen; i++){
            //Check if there is a char mismatch between first and the last string
            //Return the commonPrefix if there is a mismatch
            if(strs[0][i] !== strs[strs.length - 1][i]){
                return commonPrefix
            }
            //If the char is equal, it is part of the commonPrefix
            else{
                commonPrefix += strs[0][i]
            }
        }

        return commonPrefix

    }
}
