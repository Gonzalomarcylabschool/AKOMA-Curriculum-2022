function reverse(head){
  let current = head;
  let  previous = null;
  let next =  null

  while(current != null){
    next = current.next;// storing the next node
    current.next = previous; //getting rid of the original pointer
    previous = current; // storing current 
    current = next // so we can move on in the list
  }
  return previous;
}