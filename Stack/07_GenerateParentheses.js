class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = []
        this.backtrack("", 0, 0, n, res)
        return res
    }

    backtrack(curr, open, close, val, res){
        if(curr.length === 2*val){
        res.push(curr)
        return
        }
        if(open < val){
            this.backtrack(curr + "(", open + 1, close, val, res)
        }
        if(close < open){
            this.backtrack(curr + ")", open, close + 1, val, res)
        }
    }
}
