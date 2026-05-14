class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.heap = [];

        for(let num of nums){
            this.add(num);
        }
    }

    leftChild(i){
        return 2*i + 1;
    }

    rightChild(i){
        return 2*i + 2;
    }

    parent(i){
        return Math.floor((i - 1) / 2);
    }

    minHeapify(i){
        let leftChildIndex = this.leftChild(i);
        let rightChildIndex = this.rightChild(i);

        let smallest = i;

        if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]){
            smallest = leftChildIndex;
        }
        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]){
            smallest = rightChildIndex;
        }

        if(smallest !== i){
            let temp = this.heap[i];
            this.heap[i] = this.heap[smallest];
            this.heap[smallest] = temp;
            this.minHeapify(smallest);
        }
    }

    removeMin(){
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();

        let root = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.minHeapify(0);
        
        return root;

    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        let i = this.heap.length;
        this.heap[i] = val;

        while(i !== 0 && this.heap[this.parent(i)] > this.heap[i]){
            let temp = this.heap[this.parent(i)];
            this.heap[this.parent(i)] = this.heap[i];
            this.heap[i] = temp;
            i = this.parent(i);
        }

        if(this.heap.length > this.k){
            this.removeMin();
        }

        return this.heap[0];
    }
}
