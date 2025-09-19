class ListNode{
    constructor(val, next = null){
        this.val = val
        this.next = next
    }
}

class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.length = k
        this.left = new ListNode(0)
        this.right = this.left
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if(this.isFull()){
            return false
        }
        const curr = new ListNode(value)
        if(this.isEmpty()){
            this.left.next = curr
            this.right = curr
        }
        else{
            this.right.next = curr
            this.right = curr
        }
        this.length--
        return true
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if(this.isEmpty()){
            return false
        }
        this.left.next = this.left.next.next
        if(!this.left.next){
            this.right = this.left
        }
        this.length++
        return true
    }

    /**
     * @return {number}
     */
    Front() {
        return this.isEmpty() ? -1 : this.left.next.val
    }

    /**
     * @return {number}
     */
    Rear() {
        return this.isEmpty() ? -1 : this.right.val
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.left.next === null
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.length === 0
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
