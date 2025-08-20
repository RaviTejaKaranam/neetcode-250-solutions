class Stack{
    constructor(){
        this.items = []
    }
    push(value){
        return this.items.push(value)
    }
    pop(){
        if(this.items){
           let value = this.items.pop()
           return value
        }
        else{
            return false
        }
        
    }
}

class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = new Stack()
        let sum = 0
        for(let operation of operations){
            if(operation === "+"){
                let lastScore = stack.pop()
                let secondLastScore = stack.pop()
                let newTop = Number(lastScore) + Number(secondLastScore)
                stack.push(secondLastScore)
                stack.push(lastScore)
                stack.push(newTop)
            }
            else if(operation === "C"){
                stack.pop()
            }
            else if(operation === "D"){
                let value = stack.pop()
                let newTop = 2 * Number(value)
                stack.push(value)
                stack.push(newTop)
            }
            else{
                stack.push(operation)
            }
        }
        let value = stack.pop()
        while(value){
            sum += Number(value)
            value = stack.pop()
        }
        return sum
    }
}
