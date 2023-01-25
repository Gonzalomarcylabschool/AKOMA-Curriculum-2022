## tradeoffs between singly linked lists and doubly linked lists
A singly linked list only contains a link (pointer) to the next node. This means that it can only be traversed in one direction from head to tail. Although can only go in one direction this takes up less space in memory. A doubly linked list contains both a link to the next node and a link to the previous node. This means that it can be traversed in both directions but takes up more space in memory.

Inserting into the middle of a doubly linked list can be done in constant time (assuming you have a pointer to where it should be inserted).
white_check_mark

Doubly linked lists can be traversed in reverse (singly linked lists can't)
