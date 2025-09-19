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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let head = new ListNode(0)
        let dummy = head
        let sum = 0
        let carry = 0
        while(l1 && l2){
            sum = l1.val + l2.val + carry
            carry = parseInt(sum / 10)
            sum = sum % 10
            let newNode = new ListNode(sum)
            dummy.next = newNode
            dummy = newNode
            l1 = l1.next
            l2 = l2.next
        }
        while(l1){
            sum = l1.val + 0 + carry
            carry = parseInt(sum / 10)
            sum = sum % 10
            let newNode = new ListNode(sum)
            dummy.next = newNode
            dummy = newNode
            l1 = l1.next
        }
        while(l2){
            sum = 0 + l2.val + carry
            carry = parseInt(sum / 10)
            sum = sum % 10
            let newNode = new ListNode(sum)
            dummy.next = newNode
            dummy = newNode
            l2 = l2.next
        }

        if(carry){
            let newNode = new ListNode(carry)
            dummy.next = newNode
        }

        return head.next
    }
}
