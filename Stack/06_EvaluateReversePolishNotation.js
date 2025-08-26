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
}



class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack  = new Stack()
        for(let str of tokens){
            if(str === "+" || str === "-" || str === "*" || str === "/"){
                let rightOperand = parseInt(stack.pop())
                let leftOperand = parseInt(stack.pop())
                let result
                if(str === "+"){
                    result = leftOperand + rightOperand
                }
                else if(str === "-"){
                    result = leftOperand - rightOperand
                }
                else if(str === "*"){
                    result = leftOperand * rightOperand
                }
                else if(str === "/"){
                    result = leftOperand / rightOperand
                }
                stack.push(result)
            }
            else{
                stack.push(str)
            }
        }
        return parseInt(stack.pop())
    }
}
