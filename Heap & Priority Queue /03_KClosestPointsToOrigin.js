class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const heap = [];

        function parent(i) {
            return Math.floor((i - 1)/2);
        }

        function leftChild(i){
            return 2*i + 1;
        }

        function rightChild(i){
            return 2*i + 2;
        }

        function insert(x, y){
            let i = heap.length;
            let distance = x*x + y*y;
            heap[i] = [distance, x, y];

            while(i !== 0 && heap[parent(i)][0] < heap[i][0]){
                let temp = heap[parent(i)];
                heap[parent(i)] = heap[i];
                heap[i] = temp;
                i = parent(i)
            }
        }

        function removeMax(){
            if(heap.length === 0){
                return null;
            }
            if(heap.length === 1){
                return heap.pop();
            }

            let root = heap[0];
            heap[0] = heap[heap.length - 1];
            heap[heap.length - 1] = root;
            heap.pop();
            maxHeapify(0);
        }

        function maxHeapify(i){
            let leftChildIndex = leftChild(i);
            let rightChildIndex = rightChild(i);

            let largest = i;
            
            if(leftChildIndex < heap.length && heap[leftChildIndex][0] > heap[largest][0]){
                largest = leftChildIndex;
            }
            if(rightChildIndex < heap.length && heap[rightChildIndex][0] > heap[largest][0]){
                largest = rightChildIndex;
            }

            if(i !== largest){
                let temp = heap[largest];
                heap[largest] = heap[i];
                heap[i] = temp;
                maxHeapify(largest);
            }
        }

        for(const [x, y] of points){
            insert(x, y);
            if(heap.length > k){
                removeMax();
            }
        }

        const pointsArray = []
        for(let point of heap){
            pointsArray.push([point[1], point[2]]);
        }

        return pointsArray;
    }
}
