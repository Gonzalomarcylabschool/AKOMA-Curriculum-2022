const stack = [];
const push = (element) => stack.push(element); //O(1)
const pop = () => stack.pop(); //O(1)

class Stack {
  constructor(stack = []){
    this.stack = stack;
  }
  push(element){
    this.stack.push(element)
  }
  pop(){
    this.stack.pop()
  }
  pop(){
    this.stack.pop()
  }
}
const newStack = new Stack([1, 2, 3]);
const transaction = new Stack();

const queue = [];
const enqueue = (item) => queue.push(item); // O(1)
const dequeue = () => queue.shift(); // O(n)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) { //O(1)
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() { //O(1)
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

const newQueue = new Queue();
newQueue.enqueue(1);