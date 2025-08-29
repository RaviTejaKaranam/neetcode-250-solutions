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
        if(this.length){
            this.length--
            return this.items.pop()
        }
        return false
    }
    peek(){
        return this.items[this.items.length - 1]
    }
}

class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = new Stack()
        for(let asteroid of asteroids){
            if(asteroid > 0){
                stack.push(asteroid)
            }
            else{
                let destroyed = false
                while(stack.length && stack.peek() > 0){
                    let top = stack.pop()
                    if(top === Math.abs(asteroid)){
                        destroyed = true
                        break
                    }
                    else if(Math.abs(asteroid) < top){
                        destroyed = true
                        stack.push(top)
                        break
                    }
                }
                if(!destroyed){
                    stack.push(asteroid)
                }
            }
        }
        return stack.items
    }
}
