/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head
        let fast = head
        while(fast !== null && fast.next !== null){
            slow = slow.next
            fast = fast.next.next
        }
        
        let prev = null
        let second = slow.next
        slow.next = null
        while(second){
            let temp = second.next
            second.next = prev
            prev = second
            second = temp
        }

        let first = head
        second = prev
        while(second){
            let firstNext = first.next
            let secondNext = second.next
            first.next = second
            second.next = firstNext
            first = firstNext
            second = secondNext
        }
        
    }
}
