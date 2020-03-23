// 876 链表的中间节点
// 初解：方法一
// 两次遍历：想着遍历一遍得到链表长度，得到中间位置，然后再遍历一次拿到中间值...（遍历两次反而是对空间的优化）
var middleNode = function (head) {
    let size = getSize(head);
    let middle = size % 2 == 0 ? size / 2 + 1 : Math.ceil(size / 2);
    let count = 1;
    let node = head;
    while (true) {
        if (count == middle)
            return node;
        node = node.next;
        count++;
    }
};
// 获取链表的长度
function getSize(head) {
    if (head == null) return 0;
    // let len = 1;
    // len += getSize(head.next);
    // return len;
    let len = 0, node = head;
    while (node != null) {
        node = node.next;
        len++;
    }
    return len;
}


// 方法一： 一次遍历，多用一个数组
// 遍历一遍拿到所有节点和长度，然后取中间(其实这种解法，虽然只遍历一次，但是要多用一个数组)
var middleNode = function (head) {
    let node = head;
    let nodeArr = [];
    while (node != null) {
        nodeArr.push(node);
        node = node.next;
    }
    console.log(nodeArr);
    let middle = Math.floor(nodeArr.length / 2);
    return nodeArr[middle];
};


// 方法三：快慢双指针
var middleNode = function (head) {
    if (head.next == null) return head;
    let slow = head;
    let fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};