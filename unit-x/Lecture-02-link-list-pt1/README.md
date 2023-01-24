# Linked List

## Data Structures and Abstract Data Types

In Computer Science, a data structure is a way of organizing and storing data in a computer so that it can be accessed, modified and processed efficiently.

You can think of as: 
* Inputting information
* Processing information
* Maintaining information
* Retrieving information

Up to this point one of the main data structure we have been working with are arrays which has a specific implantation every time we use it. But what if we have a data structure that we know how it inputs, processes, maintains, and gets data, but we don't know how we are going to implement?

### ADT

An abstract Data type (ADT) is a type (or class) for objects whose behavior is defined by a set of values and a set of operations, but whose implementation details can vary.

So what does this mean in plain english? In short we have something that can be used but we don't need to know how it will be used yet. Think of a notebook. Some people use it as a journal, other use it to take notes, and some draw in them. In some way shape or form you are making markings in the notebook, that is the defined set of operations. The same things happens in ADT. We know how they work, but we don't need to know how we are going to use them until it's time to use them. 

Examples of common abstract data types in JavaScript include:

Linked List
Stack
Queue
Hash Table
Tree
Set
Graph

## So What is a Linked List?

A Linked List is a data structure that consists of a sequence of objects, called nodes, each contains a link or pointer to the next node in the list. The first node in the list is called the head, and the last node in the list is called the tail.

[Visual examples](https://visualgo.net/en/list)

In JavaScript, a Linked list can be implemented using JavaScript object oriented programing, where each object represents a node, and contains a property that refers to the next node in the list. Here's an example of a simple implementation of a Linked list in JavaScript:

## Simple Linked list code:

```js
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

node1.next = node2;//pointer(link or reference)
node2.next = node3;
node3.next = null
```

## Using ES6 Classes
```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  remove(data) {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return `${data} removed.`;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return `${data} removed.`;
      }
      current = current.next;
    }
  }
}
```

## Benefits and Drawbacks

Low memory overhead: Linked lists do not require extra memory for storing the size of the list, unlike arrays.

Space efficiency: In a Linked list, the memory is allocated only when a new element is added, so it can be more space-efficient than an array, which needs to pre-allocate memory for a certain number of elements, whether or not they are used.

No need to shift elements: In an array, when you insert or delete an element in the middle of the array, you need to shift all the elements after it to make space or fill the gap. This can take O(n) time, where n is the number of elements in the array. In a Linked list, you only need to update the references of the surrounding nodes, so there's no need to shift any elements, making the insertion and deletion more efficient.

Drawbacks:

Search operations are slower in Linked lists: In an array, you grab elements using random access, the ability to reference values based on their index. With Linked lists, there is no random access. You must traverse the Linked list starting from the head node.

Another tradeoff is that it uses more memory than arrays because of the the pointers are stored. Rather than being stored in a heap of contiguous memory locations like an array, a Linked list is stored in its own separate node, and each node contains a reference, called a "link", to the next node in the list.

## Linked List Methods

These are the methods that are typically associated with Linked List:

`append(data)`/`prepend(data)`: This method is used to add a new node with a given data to the Linked list. Depending on the implementation, this method can add a new node to the tail/ the head. If you want to add a specific index of the Linked list you would need to write a method for it.

`remove(data)`: This method is used to remove a node with a given data from the Linked list. It typically searches for the first occurrence of the node with the matching data and removes it from the list.

`removeFirst()`/`removeLast()` : This method is used to remove the first or last node in the Linked list.(also known as `removeHead()`/`removeLastTail()`).

`find(data)`: This method is used to find a node with a given data in the Linked list. It typically searches the list for the first occurrence of the node with the matching data and returns it.(you can also call it `contains()`).

`length()`: This method returns the number of nodes in the Linked list.

`isEmpty()`: This method returns a boolean indicating whether the Linked list is empty or not.

`print()`: This method is used to print the data of all the nodes in the Linked list.

These methods are the most common ones, but depending on the implementation, a Linked list can have additional methods such as `getFirst()`, `getLast()`, `get(index)`, `insertAt(data, index)`, `reverse()`, `sort()`, `mergeList()` among others.

The performance of these methods can vary depending on the implementation. For example, an singly Linked list implementation may have a O(n) performance for find and remove methods, while a doubly Linked list implementation would have a O(1) performance for the same methods.

Oh wait! What are singly and doubly Linked list?

## Singly and Doubly Linked list

A singly Linked list only contains a link (pointer) to the next node, which means that it can only be traversed in one direction from head to tail. This takes up less space in memory. 

A doubly Linked list contains both a link to the next node and a link to the previous node. This means that it can be traversed in both directions, but takes up more space in memory.


```js
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
```
## Cycles

A cycle in a Linked list is a situation where the last node of the list points to one of the previous nodes, forming a loop. This means that there is no end to the list and traversing the list will continue indefinitely.

```js
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);

// create a cycle by making the last node point to the first node
list.tail.next = list.head;
```
How how do we check to see if our Linked list 

[Visual examples](https://visualgo.net/en/list)