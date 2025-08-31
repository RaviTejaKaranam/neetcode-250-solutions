class Stack{
    constructor(){
        this.items = []
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        return this.items.length ? this.items.pop() : false
    }
    peek(){
        return this.items.length ? this.items[this.items.length - 1] : false
    }
    
}

class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const exactPosition = []
        const stack = new Stack()

        for(let i = 0; i < position.length; i++){
            exactPosition[i] = [position[i], speed[i]]
        }

        exactPosition.sort((a, b) => a[0] - b[0])
        for(let i = exactPosition.length - 1; i >= 0; i--){
            let timeTaken = (target - exactPosition[i][0]) / exactPosition[i][1]
            if(!stack.peek()){
                stack.push(timeTaken)
            }
            else if(stack.peek() && timeTaken > stack.peek()){
                stack.push(timeTaken)
            }
        }
        return stack.items.length
    }
}
