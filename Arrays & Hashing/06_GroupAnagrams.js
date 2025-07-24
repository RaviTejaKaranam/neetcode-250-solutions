class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const groupAnagramsMap = new Map();
        const groupAnagrams = []

        for(let str of strs){
          //An array of 26 0's
            const charFreqTracker = new Array(26).fill(0);

            for(let char of str){
                // Keep track of all the character frequencies in the charFreqTracker array.
                // "abc" -> [1, 1, 1, 0, 0, 0 ......]
                // "xyz" -> [0, 0, 0, .......1, 1, 1]
                let index = char.charCodeAt(0) - 'a'.charCodeAt(0)
                charFreqTracker[index]++
            }
            //Use a delimeter to avoid cases like [1, 11, ...] and [11, 1, ....]
            const key = charFreqTracker.join("#");
            // Use the key varbiable as the key to store all the strs that have the same characters
            if(!groupAnagramsMap[key]){
                groupAnagramsMap[key] = [str]
            }
            else{
                groupAnagramsMap[key] = [...groupAnagramsMap[key], str]
            }
        }
        //Group anagrams together based on the key in the hash map.
        for(let key in groupAnagramsMap){
            groupAnagrams.push(groupAnagramsMap[key])
        }

        return groupAnagrams

    }

}
