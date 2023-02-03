# Review for Hash Maps and Recursion
In this review we are going to go over what the rules are for Hash Maps and Recursion. We will also review how to build a hash Map data structure from scratch, using a Map class, or just an object. We'll also take about the benefits and drawback of Hash Maps and Recursion.

Rules for a hash map:

* Hash Maps is made up of Key value pairs.
* Looking up values in a Hash map should be (or close to) constant time (O(1)).
* When Inserting data it should be go though a hash function where return a hash key
* The hash key is uses to look up the values.

Benefits drawbacks

Constant time!!!

Takes up space.

Recursion is a function calling itself; defining or breaking down a problem into the same sub-problem. Recursion involves a recursive case and a base case so that we don't have an infinite loop or stack overflow.

What type of problems are best solved using recursion?

The best problems to use recursion involve solving the same smaller problem (sub-problem). Trees, Fibonacci, factorial, etc. are all examples. 

What are the benefits of writing functions recursively? What are the drawbacks?

Recursive solutions can be easier to read and easier to write.
Problems like graph or tree traversal are inherently recursive.

What are the drawbacks?

Recursive solutions take up more space in memory. 
Every function call is stored on the call stack until the base case is reached.
Recursive solutions are often slower since function calls are a relatively slow operation.

The most important benefit, writing simpler code, and most important drawback, it's inefficient (because function calls take up space on the call stack.