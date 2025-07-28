class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    sortArray(arr) {
        if(arr.length <= 1){
            return arr
        }
        let mid = Math.floor(arr.length / 2)
        let left = this.sortArray(arr.slice(0, mid))
        let right = this.sortArray(arr.slice(mid))
        return this.merge(left, right)
    }

    merge(first, second){
        const result = []
        let left = 0, right = 0
        while(left < first.length && right < second.length){
            if(first[left] < second[right]){
                result.push(first[left])
                left++
            }
            else{
                result.push(second[right])
                right++
            }
        }
        while(left < first.length){
            result.push(first[left])
            left++
        }
        while(right < second.length){
            result.push(second[right])
            right++
        }
        
        return (result)
    }
}
