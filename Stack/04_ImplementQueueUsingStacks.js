class Stack{
    constructor(){
        this.items = []
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        if(!this.empty()){
            return this.items.pop()
        }
        else{
            return false
        }
    }
    empty(){
        return this.items.length === 0
    }
}

class MyQueue {
    constructor() {
        this.s1 = new Stack()
        this.s2 = new Stack()
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.s1.items.push(x)
    }

    /**
     * @return {number}
     */
    pop() {
        if(this.s2.empty()){
            while(!this.s1.empty()){
                this.s2.push(this.s1.pop())
            }
            const frontValue = this.s2.pop()
            return frontValue
        }
        return this.s2.pop()
    }

    /**
     * @return {number}
     */
    peek() {
        if(this.s2.empty()){
            while(!this.s1.empty()){
                this.s2.push(this.s1.pop())
            }
        }
        const frontValue = this.s2.pop()
        this.s2.push(frontValue)
        return frontValue
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.s1.empty() && this.s2.empty()
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
