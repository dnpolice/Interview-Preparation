class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function mergeLinkedLists(headOne, headTwo) {
    let set1Node = headOne;
      let prevNode = null;
      let set2Node = headTwo;
      while (set1Node != null && set2Node != null){
          if (set1Node.value < set2Node.value){
              prevNode = set1Node;
              set1Node = set1Node.next;
          } else{
              if (prevNode != null) prevNode.next = set2Node;
              prevNode = set2Node;
              set2Node = set2Node.next;
              prevNode.next = set1Node;
          }
      }
      if (set1Node == null) prevNode.next = set2Node;
      return headOne.value < headTwo.value ? headOne : headTwo;
  }
  
  /*
  Goal: Merge linked lists
  Pick one of the linked lists as the main one(headOne)
  If headOne.value < headTwo.value move to the next node
  If headTwo.value < headOne.value then
  Assign the prevous node in headOne to point to the node in headTwo. 
  Assign the node in headTwo to point to the currentNode in headOne
  Move the previousNode to headTwo
  Move headTwo to the nextNode (headTwo.next)
  Move headOne to the nextNode(headOne.next)
  return headOne.value < headTwo.value ? headOne : headTwo;
  */
