# Execution Context

## Global Execution Context
When you run any JavaScript, a special environment is created to handle the transformation & execution of code. This is called the execution context. It contains the currently running code and everything that aids in its execution
There is a global execution context as well as a function execution context for
every function invoked

Memory Creation Phase (compile phase):
1. Create the global object (browser = window, Node.js = global)
2. Create the 'this' object and bind it to the global object
3. Setup memory heap for storing variables and function references as key value pairs in the global object.
4. Store functions and variables in global execution context and set the varaibles to "undefined"

```js
// name, x, and y will be stored in the global object and not assign the values during this phase.
let name = 'Gonzalo';// => undefined
let x = 1;// => undefined
let y = 2;// => undefined
// The function myFunction() will be stored into memory and be hosited
function myFunction() { // The whole function is stored.
    console.log('this is a function'); // will not run until the function is invoked in the execution phase.
}
myFunction(); 
```
Execution Phase:
1. Execute code line by line
2. Create a new execution context for each function call

```js
// name, x, and y will be stored in the global object and not assign the values during this phase.
let name = 'Gonzalo';// => Gonzalo
let x = 1;// => 1
let y = 2;// => 2
// The function myFunction() was already stored.
function myFunction() { // The whole function is stored.
    console.log('this is a function');
}
myFunction(); // will run durring this phase.
```
## Function Execution Context



## Essential Questions
* When and how is the binding of `this` determined?
* How is the binding of `this` determined for arrow functions?
* How do we explicitly define what `this` should be when invoking a function?
* When does `this` commonly lose its context and how can we guard against it?
* What is _strict mode_ and how does it impact the binding of `this`? 
