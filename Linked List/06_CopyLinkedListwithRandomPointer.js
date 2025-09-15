// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const mapOldToCopy = new Map()
        mapOldToCopy.set(null, null);
        let curr = head

        while(curr){
            const copyNode = new Node(curr.val)
            mapOldToCopy.set(curr, copyNode)
            curr = curr.next
        }

        curr = head

        while(curr){
            const copy = mapOldToCopy.get(curr)
            copy.next = mapOldToCopy.get(curr.next)
            copy.random = mapOldToCopy.get(curr.random)
            curr = curr.next
        }

        return mapOldToCopy.get(head)
    }
}
