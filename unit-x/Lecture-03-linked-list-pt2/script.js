class Node {
  constructor(data = null, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  #size = 0
  constructor() {
    this.head = null;
    this.tail = null;
  }
  //append
  prepend(data){
    let newNode = new Node(data, this.head);
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
    }
    this.#size++;
  }
  //remove
  //this.#size--;
  //length

  //insert*

}
const list = new LinkedList();
list.prepend(1);
list.prepend(2);
list.prepend(1000);

