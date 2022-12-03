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

 