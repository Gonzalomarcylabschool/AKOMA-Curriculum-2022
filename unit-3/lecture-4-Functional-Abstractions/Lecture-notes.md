# Function Abstraction


Before we begin lets do a quick review!

how do we write a function? How do we invoke a function

```js
keyword functionName (parameter) {
    //code
}

function myFunction(x) {
    console.log(x);
}
//invoke the function:
myFunction('hello'); // what is this going to do?
```

What is functional programming and what are its benefits?
Explain what it means that functions are first-class citizens in JavaScript.

If any programming language has the ability to treat functions as values, to pass them as arguments and to return a function from another function then it is said that programming language has First Class Functions and the functions are called as First Class Citizens in that programming language.

Let’s look at all the abilities of functions being a First Class Citizen.

1. Ability to treat functions as values: Functions in JavaScript can be treated as values, i.e. a function can be stored as a value in a variable.

```js
const add = function(x, y) {
    return x + y;
}
add(1, 2);
```
In this example, a function is stored in a variable `add`, and the variable with argumentss

What are higher-order functions and how does this result from the concept of first-class functions?
Thus far, how have we abstracted over data? How have we abstracted over actions (particularly, actions performed on data)?
How do JavaScript's higher-order array methods allow us to further leverage abstraction?

Array.prototype.forEach()
Array.prototype.map()
Array.prototype.filter()
Array.prototype.reduce()
Array.prototype.sort()
Array.prototype.some()
Array.prototype.every()



Functional proramming
JS functions are first class functions

first class functions
here wer are declaring a functions
```js
function add(x, y) {
    return x + y;
}
```
we have created a function object called `add`
just like we have the data types string, number, boolean, we have the type function. 

Thats why we can store them into variables as an expressions:
```js 
const add = function(x, y) {
    return x + y;
}
```
```js
const greet = salutation => {
    return firstName => {
        return`${salutation} ${firstName}`
    }
}
const howdy = greet('Howdy');
const hello = greet('Hello');

howdy('Amber'); // returns 'Howdy Amber'
hello('Mr. Knight');// returns 'Hello Mr. Kight'
```

 