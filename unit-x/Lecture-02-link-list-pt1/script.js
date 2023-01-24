//simple node
const node1 = {//node
    data: 1 //data
  };
  
  const node2 = {
    data: 2
  };
  
  const node3 = {
    data: 3
  };
  console.log(node1);
  
  node1.next = node2;//pointer
  node2.next = node3;
  node3.next = null
  
  //Why don't we put the pointer in the object?

  // const no = {
  //   data: 1,
  //   next: no2
  // };
  
  // const no2 = {
  //   data: 1,
  //   node: no3
  // };
  
  // const no3 = {
  //   data: 1,
  //   next: null
  // };
  
  
//   node1.next = node2;
//   node2.next = node3;
//   node3.next = null
  
  
  
  const n3 = { // node
    data: 300, // data
    next: null // pointer
  }
  const n2 = {// node
    data: 200, //data
    next: n3 // pointer
  }
  const n1 = {//node
    data: 100, //data
    next: n2 // pointer
  };
  
  
  
  // console.log(n1);

//ES6 classes
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  #length = 0
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    debugger;
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.#length++;
  }

  remove(data) {
    //check to see if there is a list
    if (!this.head) {
      return null;
    }
    //check if there is only one node and if data is in the head
    if (this.head.next === null && this.head === data){
      this.head = null;
      return `${data} removed.`;
    }
    //check if the data is in the head
    if (this.head.data === data) {
      this.#length--;
      this.head = this.head.next;
      return `${data} removed.`;
    }
    //check the rest of the list
    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        this.#length--;
        return `${data} removed.`;
      }
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);

class NodeDoubly {
  constructor(value, prev=null, next=null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add a new node to the end of the list
  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Add a new node to the beginning of the list
  prepend(value) {
    let newNode = new Node(value, null, this.head);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  remove(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        if (currentNode === this.head && currentNode === this.tail) {
          // If it's the only node in the list
          this.head = null;
          this.tail = null;
        } else if (currentNode === this.head) {
          // If it's the first node
          this.head = currentNode.next;
          this.head.prev = null;
        } else if (currentNode === this.tail) {
          // If it's the last node
          this.tail = currentNode.prev;
          this.tail.next = null;
        } else {
          // If it's a middle node
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
        }
        this.length--;
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}

const list2 = new LinkedList();
list2.append(1);
list2.append(2);
list2.append(3);
list2.append(4);

list2.tail.next = list.head;