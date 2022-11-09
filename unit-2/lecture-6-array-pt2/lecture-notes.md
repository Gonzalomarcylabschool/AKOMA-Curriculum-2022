**[00:00 - 00:05]**- | Introduction | The why |

**[00:05 - 00:20]**- | Iterating arrays | 

**[00:20 - 00:30]**- | methods for manipulating arrays |

**[00:30 - 00:45]**- | Rest and spread | 

**[00:45 - 00:60]**- | destructure |


## Warm up question and quick review.
## Iterating arrays
How do we iterate over arrays?

What does it mean to iterate?

As we know there are a few ways to write loops, what are they again

types of loops
* for
* while
* do while
* for...in
* for...of
* forEach()

lets look at these examples:

```js
const scores = [22, 54, 76, 92, 43, 33];

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}

let i = 0;

while (i < scores.length) {
    console.log(scores[i]);
    i++;
}


do {
    console.log(scores[i]);
    i++;
} while (i < scores.length);

for (i in scores) {
    console.log(scores[i]);
}

for (score of scores) {
    console.log(score);
}

scores.forEach((score) => {
    console.log(score);
});

//or

scores.forEach((score) => console.log(score));

```


What are the key methods for manipulating arrays?
```js
    array.push();
    array.pop();
    array.indexOf();
    array.join();
    array.unshift();
    array.shift();
    array.latIndexOf();
    array.slice();

```
If we look up the documentation of arrays on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) we can see all of the methods we can use.  


## Rest and Spread (...)

The the **rest** and **spread** operator is denoted by three dots (...). This allows us to make things os much easier when we code. 

### What is the purpose of the spread operator? 

```js
    const array = ["h","e","y"]
    console.log(...array);
    //=> h e y
```

### So how is it used with arrays?

There are so many ways we can use this!!!

#### copy arrays

```js
    let nums;
    const numArray = [1, 2, 3, 4, 5, 6]
    nums = [...numArray];
    console.log(numArray);
    console.log(nums);
```

 #### Inserting the elements of one array into another

```js
    const baked_desserts = ['cake', 'cookie', 'donut'];
    const desserts = ['icecream', 'flan', 'frozen yoghurt', ...baked_desserts];
    console.log(desserts);
    //Appending baked_desserts after flan
    const desserts2 = ['icecream', 'flan', ...baked_desserts, 'frozen yoghurt'];
    console.log(desserts2);
```

#### Array to arguments

```js
    function sum(x, y, z) {
        return x + y + z;
    }
    const numbers = [1, 2, 3];
    console.log(sum(...numbers));


    const minNum = [1,2,300,-1,0,-100];
    console.log(Math.min(...minNum));

    
```
## rest parameters

What is the purpose of rest parameters? 

lets say that we want to create a function that can take in as many arguments as we want.

```js
    function sumAll(...args) { // args is the name for the array
      let sum = 0;

      for (let arg of args) sum += arg;

      return sum;
    }

    alert( sumAll(1) ); // 1
    alert( sumAll(1, 2) ); // 3
    alert( sumAll(1, 2, 3) ); // 6
```
How do they differ from the arguments object?

These are based on the arguments that already exist. the rest parameter will let you add as many as you want once the functions has been written

* What does it mean to destructure a JavaScript array?

take an array and make them smaller object elemetns or arrays

```js
    const nums = [1, 2, 3, 4, 5, 6, 7, 8]
    const [a, b] = nums;
    console.log(a);
    console.log(b);
```

```js

    function runners(){
        return ["Sandra", "Ola", "Chi"];
    }

    var [a, b, c] = runners();
    console.log(a); //Output: Sandra
    console.log(b); //Output: Ola
    console.log(c); //Output: Chi
 ```
