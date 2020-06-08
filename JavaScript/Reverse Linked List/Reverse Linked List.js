function reverseLinkedList(head) {
	if (head == null) return null;
	if (head.next == null) return head;
	const newHead = reverseLinkedList(head.next);
	head.next.next = head;
	head.next = null;
	return newHead;
}
