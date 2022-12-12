# Closure

In the last lecture we talked about Execution Context and how the order of our code runs in JavaScript. For today's lecutre, we are going to talk about a concept that take advantage of Execution Context to solve problems that we incounter using javaScript. 

Let fun the block of code below:
```js
let _counter = 0
function increment(){
    _counter++
    console.log(`the value of the counter is ${_counter}`)
}
```
`_counter`, based on out naming convention would be a private variable that we don not want to be changed at any point because we would like for it to keep track of how much we have counted by at this point. Unfotrunatly, as we saw just now in the code, there is nothing stopping us from being able to mutate the value. 

Why does this happen? Lexical scope is one of the reason why. `_counter` was declared in the global scope there for the function `increment()` has acces to the variable, but so does everything else in the program, which can cause bugs long term. 

So how can we preven this from happening, well for starters, do not declare it in the global scope, that is just bad practice, we should know that by know. (If you didn't know it now!)

```js
function makeCoutner(){
    let counter = 0;
}
//makeCounter();
console.log(counter)//what happens when we run this. 
```

So if you guess that if we run this we were going to get a `ReferenceError`, you were right! Because variables declared with the `let` keyword only have block scope, it cannot be accesed out side of the function, even if we invoke it. But this leads us to another problem. 

```js
function makeCoutner(){
    let counter = 0;
}
function increment(){
    counter++
    console.log(`The value of the counter is ${counter}`)
}

//if we invoke the function increment here will this work?
```
So here is the solution to this problem: using lexical scope, which frankly cause our problem, we can solve it!

```js
function makeCoutner() {
    let counter = 0; 
    function increment() {
        counter++; 
        console.log(`the value of the counter is ${counter}`);
    }
}
```
OH NO!!! ANOTHER PROBLEM!!! Now we can't acces the function `increment()` becuase of it's scope. 

This is where closure, comes into play! Lets turn `makeCounter()` into a higher order function. But first can someone remind me, of you can look up what a higher order function is or does?

```js 
// function makeCoutner() {
//     let counter = 0;
//     function increment() {
//         counter++;
//         console.log(`the value of the counter is ${counter}`);
//     }
// }

function makeCounter() {
    let counter = 0;
    return function () {
        counter++;
        console.log(`the value of the counter is ${counter}`);
    }
}
let increment = makeCounter();// notice how I stored the function. This works becuse of functions are frist class citizens! what does that mean again?
debugger
;

increment();
increment();
increment();
increment();
```

The idea of closures is that a nested function has acces the parent function variables and parameters. We can even see that in the browsers debugger. This is due to lexical scope.  Lets see if that works with something similar but not the same. 
```js
let count = 0;

function myFunction() {
  debugger;
  count++
  console.log(coutn);
}

let x = myFunction;
```
Note that there is no closure section inside of the scope. That is because Closures can only happen when you have a nested loop.