# Linked List pt 2

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

## isCyclic

Floyd's cycle-finding algorithm: also known as the "tortoise and hare" algorithm, which uses two pointers, a slow pointer and a fast pointer, to traverse the list. The slow pointer moves one step at a time and the fast pointer moves two steps at a time. If there is a cycle in the list, the fast pointer will eventually catch up to the slow pointer, indicating that there is a cycle in the list. If the fast pointer reaches the end of the list, it means that there is no cycle in the list.

```js
function isCyclic(head){
  // Create two pointers, slow and fast
  //both will start with the value of the head
   // Traverse the list with the two pointers
   //Here the 2 pointers will 
}



```

## reverse a node

## mergeList

## Remove duplicates


