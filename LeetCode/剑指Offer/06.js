// 从尾到头打印链表
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    let arr = [];
    addToArr(head, arr);
    return arr;
};

// 先到最后再开始push
function addToArr(head, arr) {
    if (head == null) return;
    addToArr(head.next, arr);
    arr.push(head.val); 
}
// 我挺吃惊我一下能写出这个的，可能跟之前的练习有关

// 直接从头开始unshift
function addToArr(head, arr) {
    if (head == null) return;
    arr.unshift(head.val);
    addToArr(head.next, arr);
}
