# Recursion

Let's talk about the call stack for a second. 

What is a stack?

An ADT that uses LIFO to keep stack of data. In an interpreter like the browser or the terminal, the _call stack_ keeps track of the functions that are being called.

```js
function add(number){
  print(number);
  return ++number
}
function print(value){
  console.log(value);
}
let num = 1;
debugger;
console.log(num);
console.log(add(num));
```

Recursion is a technique in programming where a function calls itself in order to solve a problem. 

```js
// Is this recursion?
function printRec(value){ 
  debugger;
  console.log(value);
  printRec(value);
}

console.log(printRec(num));
```

So there is a little more to it than just calling the function in itself. It is meant break down a complex problem into smaller, simpler sub-problems that can be solved using the same function.

A good mental model for recursion is to think of it like a game of Russian dolls. Each doll contains another doll inside it, and so on until you reach the smallest one. Each doll represents a function call, and each function call has its own set of variables and parameters. The innermost doll represents the *base case*, which is the point at which the recursion ends and the final result is returned.

```js
// Does this have a base case?
function printRec(value){ 
  console.log(value);
  value--;
  printRec(value);
}

console.log(printRec(num));
```

let's rewrite this with a base case.
```js
function printRec(value){ 
  if(value === 0){//base case
    return;
  }
  console.log(value);
  value--;
  printRec(value);// recursion
}

console.log(printRec(num));
```

A common example of recursion is finding the factorial of a number. The factorial of a number is the product of all the numbers from 1 to that number(n). 

```
!(5)
5 x 4 x 3 x 2 x 1 = 120
```


A recursive solution for finding the factorial of a number n is as follows:
```js
function fact(n) {
   return n * factorial(n - 1);// here is our recursion
}
```
What is the problem with the code above?

If you guessed we are missing a base case, you are correct!

```js
function factorial(n) {
  if (n === 1) {// here is our base
    return 1;
  }
  return n * factorial(n - 1);// here is our recursion.
}
```

In this example, the base case is when n is 1, and in that case the function returns 1. When n is not 1, the function calls itself with n - 1, and multiplies the returned value by n.

## Why not iterate instead?

So we can solve many of this problems using iterators as well. 

```js
function printRec(value){ 
  if(value === 0){//base case
    return;
  }
  console.log(value);
  value--;
  printRec(value);// recursion
}
// vs

function printLoop(value){
  while (value >= 0){
    console.log(value);
    value--;
  }
}
```

## Benefits and tradeoffs

Recursion can be a powerful tool to solve problems but also can be tricky to implement. as it can be easy to create a infinite loop if the base case is not well defined or if the recursive call is not properly written.

A recursive solution is an alternative to an iterative solution. 
Any iterative problem can also be solved recursively (and vice versa).

Some of the tradeoffs of recursion include:
Recursive solutions can be easier to read and easier to write.
Problems like graph or tree traversal are inherently recursive
Recursive solutions take up more space in memory. Every function call is stored on the call stack until the base case is reached.
Recursive solutions are often slower since function calls are a relatively slow operation.
