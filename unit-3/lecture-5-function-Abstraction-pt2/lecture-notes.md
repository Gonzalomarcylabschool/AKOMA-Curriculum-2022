# Functional Abstraction pt 2

## Higher-Order Functions(methods)

A powerful concept of functional programming is higher-order functions. They are a great way to abstract out functionality and write better code.

A high-order function is a function that receives another function as a parameter or returns a function as a return value. You might be using a lot of high-order functions on a daily basis without knowing it—for example, the _map, filter and reduce_ methods from JavaScript are higher-order functions.

```js
const names = ["Leonardo", "Lucas", "Bianca", "José", "Maria", "Joe"];

const sayHiToNames = names.map(name => `Hello ${name}`);
```
Composition
Knowing how to compose your functions and how to put them in the right place is a technique that you can improve over time and a concept that’s very important in functional programming.

Composition can also be expressed as combination—it’s a process of combining multiple functions in a hierarchy to produce a new function or perform a computation.

```js
const splitName = (name) => name.split('_').join(' ');

const returnNameCapitalized = (name) => name.toUpperCase();

console.log(returnNameCapitalized(splitName('leonardo_maldonado')));
```


```js 
const arr = [1, 2, 3, 4, 6]

const map1 = arr.map(doubler)

function doubler(num){
    console.log("hello")
    if(num === 2){
        return num * 3
    }
    return num * 2
}

```

`Array.prototype.forEach()`
`Array.prototype.map()`
`Array.prototype.filter()`
`Array.prototype.reduce()`
`Array.prototype.sort()`
`Array.prototype.some()`
`Array.prototype.every()`