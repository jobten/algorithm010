// 方法二：迭代

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var prehead = new ListNode(-1)
    var prev = prehead

    while(l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            prev.next = l1
            l1 = l1.next
        } else {
            prev.next = l2
            l2 = l2.next
        }
        prev = prev.next
    }
    // 指向未合并的链表
    prev.next = l1 === null ? l2 : l1

    return prehead.next
};

// 方法一：递归

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var mergeTwoLists = function(l1, l2) {
//     if (l1 === null) {
//         return l2
//     }
//     if (l2 === null) {
//         return l1
//     }
//     if (l1.val > l2.val) {
//         l2.next = mergeTwoLists(l1, l2.next)
//         return l2
//     } else {
//         l1.next = mergeTwoLists(l1.next, l2)
//         return l1
//     }
// };