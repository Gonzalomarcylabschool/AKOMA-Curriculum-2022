# Linked List pt 2

## Linked List Methods

These are the methods that are typically associated with Linked List:

`append(data)`/`prepend(data)`: This method is used to add a new node with a given data to the Linked list. Depending on the implementation, this method can add a new node to the tail/ the head. If you want to add a specific index of the Linked list you would need to write a method for it.

`remove(data)`: This method is used to remove a node with a given data from the Linked list. It typically searches for the first occurrence of the node with the matching data and removes it from the list.

```js
 // If the head node contains the value, remove it and return the new head
 // Create a pointer to traverse the list current
 // Traverse the list using a while loop
// If the next node contains the value, remove it
// else the pointer become the next node current = current.next
```

`removeFirst()`/`removeLast()` : This method is used to remove the first or last node in the Linked list.(also known as `removeHead()`/`removeLastTail()`).
remove first(or head)



`find(data)`: This method is used to find a node with a given data in the Linked list. It typically searches the list for the first occurrence of the node with the matching data and returns it.(you can also call it `contains()`).
```js
// set a pointer
// traverse through the list

```

`length()`: This method returns the number of nodes in the Linked list.

```js

```
`isEmpty()`: This method returns a boolean indicating whether the Linked list is empty or not.
```js
//check to see if there is a head
//if no then it's true
//else false
```

`print()`: This method is used to print the data of all the nodes in the Linked list.
```js
//move through the link list and console.log

```

These methods are the most common ones, but depending on the implementation, a Linked list can have additional methods such as `getFirst()`, `getLast()`, `get(index)`, `insertAt(data, index)`, `reverse()`, `sort()`, `mergeList()` among others.

The performance of these methods can vary depending on the implementation. For example, an singly Linked list implementation may have a O(n) performance for find and remove methods, while a doubly Linked list implementation would have a O(1) performance for the same methods.

## isCyclic

Floyd's cycle-finding algorithm: also known as the "tortoise and hare" algorithm, which uses two pointers, a slow pointer and a fast pointer, to traverse the list. The slow pointer moves one step at a time and the fast pointer moves two steps at a time. If there is a cycle in the list, the fast pointer will eventually catch up to the slow pointer, indicating that there is a cycle in the list. If the fast pointer reaches the end of the list, it means that there is no cycle in the list.

```js
function isCyclic(head){
  // Create two pointers, slow and fast
  //both will start with the value of the head
   // Traverse the list with the two pointers
   // If the fast pointer catches up to the slow pointer, there is a cycle
    // if notMove the pointer to the next node
   // if the fast pointer stops that means there is no cycle
}
// or
/*
// Create a set to store the visited nodes


  // Create a pointer to traverse the list


  // Traverse the list
  

    // Add the current node to the set of visited nodes
   

    // Move the pointer to the next node
  
  }

  // If the pointer reaches the end of the list, there is no cycle
*/
```
<details><summary>Solution</summary>

```js
function hasCycle(head) {
  // Create a set to store the visited nodes can also be an array
  let visited = new Set();

  // Create a pointer to traverse the list
  let current = head;

  // Traverse the list
  while (current != null) {
    // If the current node has been visited, there is a cycle
    if (visited.has(current)) {
      return true;
    }

    // Add the current node to the set of visited nodes
    visited.add(current);

    // Move the pointer to the next node
    current = current.next;
  }

  // If the pointer reaches the end of the list, there is no cycle
  return false;
}
```

</details>

## reverse a node

```js
 // Initialize the next, previous, and current pointers (NPC)
 //(N is null, P is null, C is the head)
 // Traverse the list (while loop until C is null)
 // save the next node (N becomes C.next)
  // Reverse the link (C.next becomes P)
  // Move the pointers one step forward (P becomes C and C becomes N)
  // Update the head to point to the new first node
```

<details><summary>Solution</summary>

```js
function reverse(head) {
  // Initialize the current, previous, and next pointers
  let next = null;
  let current = head;
  let previous = null;


  // Traverse the list
  while (current != null) {
    // Save the next node
    next = current.next; ()

    // Reverse the link
    current.next = previous;

    // Move the pointers one step forward
    previous = current;
    current = next;
  }

  // Update the head to point to the new first node
  head = previous;

  return head;
}
```
We are not just picking up the nodes and flipping them around we are 

This function uses three pointers, current, previous, and next, to traverse the list. It starts with the current pointer pointing to the head of the list, the previous pointer pointing to null, and the next pointer pointing to null. It then traverse the list, reversing the link of the current node by assigning the current.next to the previous node, and then moving the pointers one step forward, the previous pointer will now point to the current node, and the current pointer will point to the next node. The next pointer is used to save the next node before reversing the link. Once the end of the list is reached, the head pointer is updated to point to the new first node and the reversed list is returned.
</details>

## mergeList

<details><summary>Solution</summary>

```js
function merge(head1, head2) {
  // Initialize pointers to traverse the lists
  let current1 = head1;
  let current2 = head2;

  // Initialize the head of the new list
  let newHead = null;

  // Compare the values of the head nodes
  if (current1.value >= current2.value) {
    newHead = current2;
    current2 = current2.next;
  } else {
    newHead = current1;
    current1 = current1.next;
  }
  
  // Initialize a current pointer for the new list
  let current = newHead;

  // Traverse both lists
  while (current1 != null && current2 != null) {
    // Compare the values of the current nodes
    if (current1.value < current2.value) {
      // Add the current node of list1 to the new list
      current.next = current1;
      current1 = current1.next;
    } else {
      // Add the current node of list2 to the new list
      current.next = current2;
      current2 = current2.next;
    }
    // Move the current pointer to the next node
    current = current.next;
  }

  // Append the remaining nodes of the non-empty list
  if (current1 != null) {
    current.next = current1;
  }
  if (current2 != null) {
    current.next = current2;
  }

  // Return the new list
  return newHead;
}
```
This function uses an if statement to compare the values of the two head nodes, and assigns the head with the smaller value as the head of the new list. It then uses the current pointer to add the smaller node of each current pair of node from both lists to the new list, and at the end, it checks if there's any remaining node in one of the lists and appends it to the new list.
</details>

## Remove duplicates

<details><summary>Solution</summary>
// Create a set to store the unique values
// Create pointers to traverse the list
// Traverse the list
// If the current value is already in the set, remove it
// else Add the current value to the set
// Move the current pointer to the next node

```js
function removeDuplicates(head) {
  // Create a set to store the unique values
  let uniqueValues = new Set();

  // Create pointers to traverse the list
  let current = head;
  let previous = null;

  // Traverse the list
  while (current != null) {
    // If the current value is already in the set, remove it
    if (uniqueValues.has(current.value)) {
      previous.next = current.next;
    } else {
      // Add the current value to the set
      uniqueValues.add(current.value);
      previous = current;
    }
    // Move the current pointer to the next node
    current = current.next;
  }

  return head;
}
```

</details>

