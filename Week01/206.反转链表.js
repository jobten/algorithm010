/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
// 方法二：递归

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head
    }
    var listNode = reverseList(head.next)
    head.next.next = head
    head.next = null
    return listNode
};

// 方法一：迭代

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function(head) {
//     var prev = null
//     var curr = head

//     while(curr !== null) {
//         var nextTemp = new ListNode(-1)
//         nextTemp= curr.next
//         curr.next = prev
//         prev = curr
//         curr = nextTemp
//     }
//     return prev
// };
// @lc code=end

