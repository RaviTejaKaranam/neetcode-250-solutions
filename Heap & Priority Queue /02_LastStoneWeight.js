class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    constructor(){
        this.heap = []
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    leftChild(i){
        return 2*i + 1;
    }

    rightChild(i){
        return 2*i + 2;
    }
    
    lastStoneWeight(stones) {
        for(let stone of stones){
            this.insert(stone);
        }
        while(this.heap.length > 1){
            let first = this.removeMax();
            let second = this.removeMax();

            this.insert(first - second);
        }

        return this.heap.length > 0 ? this.heap[0] : 0;
    }

    insert(x){
        let i = this.heap.length;
        this.heap[i] = x;

        //Max Heap
        while(i !== 0 && this.heap[this.parent(i)] < this.heap[i]){
            let temp = this.heap[this.parent(i)];
            this.heap[this.parent(i)] = this.heap[i];
            this.heap[i] = temp;
            i = this.parent(i);
        }
    }

    removeMax(){
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();

        let root = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.maxHeapify(0);

        return root;
    }

    maxHeapify(i){
        let leftChildIndex = this.leftChild(i);
        let rightChildIndex = this.rightChild(i);

        let largest = i;

        if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]){
            largest = leftChildIndex;
        }
        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]){
            largest = rightChildIndex;
        }

        if(largest !== i) {
            let temp = this.heap[i];
            this.heap[i] = this.heap[largest];
            this.heap[largest] = temp;
            this.maxHeapify(largest);
        }
    }
}
