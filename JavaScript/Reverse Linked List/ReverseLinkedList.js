function reverseLinkedList(head) {
	let nodeLead = head, nodeFollow = null;
	while (nodeLead != null){
		let temp = nodeLead.next;
		nodeLead.next = nodeFollow;
		nodeFollow = nodeLead;
		nodeLead = temp;
	}
	return nodeFollow;
}
