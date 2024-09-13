/*
https://leetcode.com/problems/reverse-linked-list/description/

Reverse a Linked List
Given the beginning of a singly linked list head, reverse the list, and return
the new beginning of the list.

Example 1:

Input: head = [0,1,2,3]

Output: [3,2,1,0]
Example 2:

Input: head = []

Output: []
Constraints:

0 <= The length of the list <= 1000.
-1000 <= Node.val <= 1000
*/

/**
 * Definition for singly-linked list.
 */
class ListNode {
  constructor(val = 0, next = null) {
    this.next = next;
    this.val = val;
  }
}


class Solution {

  /**
   * Time: O(n) Space: O(1)
   * @param {ListNode} head
   * @return {ListNode}
   */
  reverseList(head) {
    let prev = null, curr = head, next;

    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  }
}

class Solution {

  /**
   * Time: O(n) Space: O(n)
   * @param {ListNode} head
   * @return {ListNode}
   */
  reverseListRec(head) {
    if (!head) return null;

    let newHead = head;

    if (head.next) {
      newHead = self.reverseListRec(head.next);
      head.next.next = head;
    }

    head.next = null;

    return newHead;
  }
}
