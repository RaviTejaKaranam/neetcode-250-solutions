class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const heap = [];

        function parent(i){
            return Math.floor((i - 1)/2);
        }

        function leftChild(i){
            return 2*i + 1;
        }

        function rightChild(i){
            return 2*i + 2;
        }

        function insert(x){
            let i = heap.length;
            heap[i] = x;

            while(i !== 0 && heap[parent(i)] > heap[i]){
                let temp = heap[parent(i)];
                heap[parent(i)] = heap[i];
                heap[i] = temp;
                i = parent(i);
            }
        }

        function removeMin(){
            if(heap.length === 0) return null;
            if(heap.length === 1) return heap.pop();

            let root = heap[0];
            heap[0] = heap[heap.length - 1];
            heap[heap.length - 1] = root;
            heap.pop();
            minHeapify(0);
        }

        function minHeapify(i){
            let leftChildIndex = leftChild(i);
            let rightChildIndex = rightChild(i);
            let smallest = i;

            if(leftChildIndex < heap.length && heap[leftChildIndex] < heap[smallest]){
                smallest = leftChildIndex;
            }
            if(rightChildIndex < heap.length && heap[rightChildIndex] < heap[smallest]){
                smallest = rightChildIndex;
            }

            if(i !== smallest){
                let temp = heap[smallest];
                heap[smallest] = heap[i];
                heap[i] = temp;
                minHeapify(smallest);
            }
        }

        for(let num of nums){
            insert(num);
            if(heap.length > k) {
                removeMin();
            }
        }

        return heap[0];
    }
}
