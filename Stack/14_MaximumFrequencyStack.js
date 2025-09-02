class FreqStack {
    constructor() {
        this.items = []
        //this.frequencyStack = []
        this.freqMap = {}
        this.freqStack = {}
        this.maxFreq = 0
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.items.push(val)
        this.freqMap[val] = (this.freqMap[val] || 0) + 1
        this.maxFreq = Math.max(this.maxFreq, this.freqMap[val])
        if(!this.freqStack[this.freqMap[val]]){
            this.freqStack[this.freqMap[val]] = [val]
        }
        else{
            this.freqStack[this.freqMap[val]].push(val)
        }
    }

    /**
     * @return {number}
     */
    pop() {
        let stackLen = this.freqStack[this.maxFreq].length
        let poppedValue = this.freqStack[this.maxFreq].pop()
        this.freqMap[poppedValue]--
        if(stackLen === 1){
            this.maxFreq--
        }
        return poppedValue
    }
}
/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
