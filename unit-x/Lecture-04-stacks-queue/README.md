## What is a stack? 

A stack is a Abstract data type that usually holds elements in sequential and ordered elements. They use a principle of last in first or LIFO. This is the concept that what ever was the last element that was added it will be the first to be removed. This can be achieved by using the following operations 

push — This operation is responsible for inserting or pushing a new element to the stack.
pop — This operation is responsible for removing the most recent element from the stack.

```js
// Simple stack

const stack = [];
const push = (element) => stack.push(item); //O(1)
const pop = () => stack.pop(); //O(1)

//Using ES6 classes

class Stack {
 constructor(stack = []) {
   this.stack =  stack;
 }
 push(item) {
   this.stack.push(item);
 }
 pop() {
   this.stack.pop();
 }
}
```

## What is a queue? 

A queue is a Abstract data type, similar to the stack, of sequential and ordered elements. The queue differ by using first in first out, or FIFO, the concept that the first element in will be the first one removed.

This can be achieved by using the following 2 operations:

enqueue—This operation is responsible for inserting or pushing a new element to the queue.
dequeue—This operation is responsible for removing the oldest element from the queue.

```js
const stack = [];
const enqueue = (item) => queue.push(item); // O(1)
const dequeue = () => queue.shift(); // O(n)

// Using a ES6 class using a Linked List:

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

  dequeue() { O(1)
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
```