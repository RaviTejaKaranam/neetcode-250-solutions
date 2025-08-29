class Stack{
    constructor() {
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
class StockSpanner {
    /**
     * @param {number} price
     * @return {number}
     */
    constructor(){
        this.stack = new Stack()
    }
    next(price) {
        let span = 1
        while(this.stack.peek() && this.stack.peek()[0] <= price){
            span += this.stack.pop()[1]
        }
        this.stack.push([price, span])
        return span
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
