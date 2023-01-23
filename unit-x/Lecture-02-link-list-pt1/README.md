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

## So What is a linked list?

A linked list is a data structure that consists of a sequence of objects, called nodes, each contains a link or pointer to the next node in the list. The first node in the list is called the head, and the last node in the list is called the tail.

In JavaScript, a linked list can be implemented using JavaScript object oriented programing, where each object represents a node, and contains a property that refers to the next node in the list. Here's an example of a simple implementation of a linked list in JavaScript:



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

node1.next = node2;//pointer
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
    }

    add(data) {
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
            return;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }
}

```

## Linked List Methods

Linked lists are a basic data structure, and the methods that are typically associated with them are:

add(data): This method is used to add a new node with a given data to the linked list. Depending on the implementation, this method can add a new node to the head, the tail or in a specific index of the linked list.

remove(data): This method is used to remove a node with a given data from the linked list. It typically searches for the first occurrence of the node with the matching data and removes it from the list.

removeFirst()/removeLast() : This method is used to remove the first or last node in the linked list.

find(data): This method is used to find a node with a given data in the linked list. It typically searches the list for the first occurrence of the node with the matching data and returns it.

length(): This method returns the number of nodes in the linked list.

isEmpty(): This method returns a boolean indicating whether the linked list is empty or not.

print(): This method is used to print the data of all the nodes in the linked list.

These methods are the most common ones, but depending on the implementation, a linked list can have additional methods such as getFirst(), getLast(), get(index), insertAt(data, index), reverse(), sort() among others.

The performance of these methods can vary depending on the implementation. For example, an singly linked list implementation may have a O(n) performance for find and remove methods, while a doubly linked list implementation would have a O(1) performance for the same methods.

Oh wait! What are singly and doubly linked list?

## Singly and Doubly Linked list

As we mentioned already a Linked list has 2 properties, the data and the pointer(or link). This is known as a Singly Linked List. 