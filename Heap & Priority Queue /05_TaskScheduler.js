/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
class Solution {

    leastInterval(tasks, n) {

        let map = {};
        const heap = [];

        for (let task of tasks) {
            map[task] = (map[task] || 0) + 1;
        }

        for (let key of Object.keys(map)) {
            insert([key, map[key]]);
        }

        let time = 0;

        // stores: [[task, remainingCount], availableTime]
        let queue = [];

        while (queue.length || heap.length) {

            time++;

            // move cooldown-finished tasks back to heap
            while (queue.length && queue[0][1] <= time) {
                insert(queue.shift()[0]);
            }

            // execute task
            if (heap.length) {

                let taskDone = removeMax();

                taskDone[1]--;

                // still remaining
                if (taskDone[1] > 0) {

                    // available after n cooldown intervals
                    queue.push([taskDone, time + n + 1]);
                }
            }
        }

        return time;

        function parent(i) {
            return Math.floor((i - 1) / 2);
        }

        function leftChild(i) {
            return 2 * i + 1;
        }

        function rightChild(i) {
            return 2 * i + 2;
        }

        function insert(x) {

            let i = heap.length;

            heap[i] = x;

            while (
                i !== 0 &&
                heap[parent(i)][1] < heap[i][1]
            ) {

                let temp = heap[parent(i)];

                heap[parent(i)] = heap[i];

                heap[i] = temp;

                i = parent(i);
            }
        }

        function removeMax() {

            if (heap.length === 0) {
                return null;
            }

            if (heap.length === 1) {
                return heap.pop();
            }

            let root = heap[0];

            heap[0] = heap[heap.length - 1];

            heap.pop();

            maxHeapify(0);

            return root;
        }

        function maxHeapify(i) {

            let leftChildIndex = leftChild(i);

            let rightChildIndex = rightChild(i);

            let largest = i;

            if (
                leftChildIndex < heap.length &&
                heap[leftChildIndex][1] > heap[largest][1]
            ) {
                largest = leftChildIndex;
            }

            if (
                rightChildIndex < heap.length &&
                heap[rightChildIndex][1] > heap[largest][1]
            ) {
                largest = rightChildIndex;
            }

            if (largest !== i) {

                let temp = heap[largest];

                heap[largest] = heap[i];

                heap[i] = temp;

                maxHeapify(largest);
            }
        }
    }
}
