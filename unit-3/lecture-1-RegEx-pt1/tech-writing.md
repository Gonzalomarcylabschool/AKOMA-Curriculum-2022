12. **What do we mean when we say that JavaScript passes variables _by value_?**

When working with *primitive data types*, such as strings or numbers, we are working with the pass by value rule. This rule simply means that primitive data types pass their value and **they are not related in any way in assignments**. 

```js

let a = 1; // Declaring and initializing the variable "a" with the value of 1.
let b = a; // Declaring "b" and passing the value of "a" which is 1. 
a += 10; // The value of "a" has been reassigned to 11 and the value of "b" remains unchanged.

```
pass by value is accesing the value of one variable and copying to another, both variable do not affect eachother. 