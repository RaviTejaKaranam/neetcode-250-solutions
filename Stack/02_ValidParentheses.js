class Stack{
    constructor(){
        this.items = []
        this.length = 0
    }
    push(value){
        this.items.push(value)
        this.length++
    }
    pop(){
        if(this.items){
            this.length--
            return this.items.pop()
        }
        else{
            return false
        }
    }
}
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = new Stack()
        for(let char of s){
            if(char === "(" || char === "[" || char === "{"){
                stack.push(char)
            }
            
            else if(char === ")"){
                let lastValue = stack.pop()
                if(lastValue !== "("){
                    return false
                }
            }
            else if(char === "]"){
                let lastValue = stack.pop()
                if(lastValue !== "["){
                    return false
                }
            }
            else if(char === "}"){
                let lastValue = stack.pop()
                if(lastValue !== "{"){
                    return false
                }
            }
        }
        return stack.length === 0 ? true : false
    }
}
