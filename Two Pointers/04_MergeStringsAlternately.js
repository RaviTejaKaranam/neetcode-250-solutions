class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let resStr = ""
        let word1Trckr = 0
        let word2Trckr = 0

        while(word1Trckr < word1.length && word2Trckr < word2.length){
            resStr = resStr + word1[word1Trckr] + word2[word2Trckr]
            word1Trckr++
            word2Trckr++
        }

        while(word1Trckr < word1.length){
            resStr = resStr + word1[word1Trckr]
            word1Trckr++
        }

        while(word2Trckr < word2.length){
            resStr = resStr + word2[word2Trckr]
            word2Trckr++
        }

        return resStr

    }
}
