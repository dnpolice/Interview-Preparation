// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

function findLoop(head) {
	let slow = head.next;
	let fast = head.next.next;
	//After entering the loop the hare chases the tortise getting 1 unit of distnace closer each time.
	while (slow != fast && fast.next != null && fast != null){
		slow = slow.next;
		fast = fast.next.next;
	}
	if (fast == null)
		return null;
	slow = head;
	while (slow != fast){
		slow=slow.next;
		fast = fast.next;
	}
	return slow;
}
