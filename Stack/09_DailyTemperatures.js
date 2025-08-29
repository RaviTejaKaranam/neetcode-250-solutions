class Stack{
    constructor(){
        this.items = []
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        if(this.items.length){
           return this.items.pop()
        }
        return false
    }
    peek(){
        if(this.items.length){
            return this.items[this.items.length - 1]
        }
        return false
        
    }
}

class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const resArr = new Array(temperatures.length).fill(0)
        const stack = new Stack()
        for(let i = 0; i < temperatures.length; i++){
            if(stack.items.length === 0){
                stack.push([temperatures[i], i])
            }
            else{
                while(stack.peek() && temperatures[i] > stack.peek()[0]){
                    const [temp, index] = stack.pop()
                    resArr[index] = i - index
                }
                stack.push([temperatures[i], i])
            }
        }
        return resArr
    }
}
