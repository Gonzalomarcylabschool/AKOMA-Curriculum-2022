Recursion is a technique in programming where a function calls itself in order to solve a problem. It's a way to break down a complex problem into smaller, simpler sub-problems that can be solved using the same function.

A good mental model for recursion is to think of it like a game of Russian dolls. Each doll contains another doll inside it, and so on until you reach the smallest one. Each doll represents a function call, and each function call has its own set of variables and parameters. The innermost doll represents the base case, which is the point at which the recursion ends and the final result is returned.

A common example of recursion is finding the factorial of a number. The factorial of a number is the product of all the numbers from 1 to that number. A recursive solution for finding the factorial of a number n is as follows:

```js
function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

```
In this example, the base case is when n is 1, and in that case the function returns 1. When n is not 1, the function calls itself with n - 1, and multiplies the returned value by n.

Recursion can be a powerful tool to solve problems but also can be tricky to implement, as it can be easy to create a infinite loop if the base case is not well defined or if the recursive call is not properly written.