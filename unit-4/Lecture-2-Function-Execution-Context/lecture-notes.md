# Execution Context

When you run any JavaScript, a special environment is created to handle the transformation & execution of code. This is called the execution context. It contains the currently running code and everything that aids in its execution(variables, values etc...). 

In short we are talking about how we are running this code. 

There is a global execution context as well as a function execution context for every function invoked.

## Scope Review
To futher understand this we need to review scope.
What is Block scope?
What is Function Scope?
What about gloabl scope?

## Global Object

When JS runs in node or a browser, it creates a global object that stores all of the inherent properties of JS. In a browser it create the `window` object that represents the browser window and cotains the JS properties. In node its just the `global` object. We will see examples of this as we talk about Execution Context. 

## Global Execution Context

Memory Creation Phase (compile phase):
1. Create the global object (browser = window, Node.js = global)
    * We'll talk more about this later. 
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
myFunction(); //does not run yet.
```
Execution Phase:
1. Execute code line by line
2. Create a new execution context for each function call

```js
// name, x, and y will be stored in the global object and not assign the values during this phase.
var a = 'Gonzalo';// => Gonzalo
var aa = 1;// => 1
var aaa = 2;// => 2
// The function myFunction() was already stored.
function myFunction() { // The whole function is stored.
    console.log('this is a function');
}
myFunction(); // will run durring this phase.
```
## Function Execution Context

Function Execution Context revolves around the JavaScript engine executing function during the execution phase of the global execution context. Like global execution context we are going to have 2 phases Memoty creation then execution. 

Memory Creation Phase: 
1. the is space allocated in memory for num1 and num2. 
Execution Phase:
num1 and num2 are assigned their values 
the calculation is done and returned.
and then it's ran again!
```js
function add(num1, num2) { 
    return num1 + num2; 
}
var aaaa = add(aa, aaa);
var aaaaa = add(5, 10);
```

## `this`

In the last lecture we went over how we can use `this` but we didn't go indepth why it works, and what execution context has to to do with `this`.

Quick reminder of what it does:
```js
    const pet = {
        type: 'dog',
        sound: 'woof',
        makeSound(){
            console.log(`The ${this.type} make a ${this.sound}.`)
        }
    }
```
In the case of this object what is `this` refering to?
It refers to the object that it is currently in, pets in this case.

What happens if were are not inside of an object and we use `this`? lets run it and see what happens.

```js
function hello(){
    console.log(this);
}

```
When we invoke a **function** `this === window`
when we inkoke a **method** `this === currentObject`

## Strict mode

JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode". Strict mode isn't just a subset: it intentionally has different semantics from normal code.
Strict mode makes several changes to normal JavaScript semantics: 

1. Eliminates some JavaScript silent errors by changing them to throw errors.
2. Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can  sometimes be made to run faster than identical code that's not strict mode.
3. Prohibits some syntax likely to be defined in future versions of ECMAScript.

## Essential Questions
* When and how is the binding of `this` determined?
* How is the binding of `this` determined for arrow functions?
* How do we explicitly define what `this` should be when invoking a function?
* When does `this` commonly lose its context and how can we guard against it?
* What is _strict mode_ and how does it impact the binding of `this`? 
