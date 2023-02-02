# Recursion pt2

What is recursion?

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


