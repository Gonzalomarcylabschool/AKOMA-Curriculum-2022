**[00:00 - 00:05]**- | Introduction | The why |

**[00:05 - 00:10]**- | methods for manipulating arrays | 

**[00:05 - 00:15]**- | arrays |

**[00:15 - 00:30]**- | Bracket Notation | coding examples

**[00:30 - 00:45]**- | Passed by reference |

**[00:45 - 00:60]**- | Iterating arrays|

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


Tomorrow we will go over the following: 

* What is the purpose of the spread operator? How is it used with arrays?
* What is the purpose of rest parameters? How do they differ from the arguments object?
* What does it mean to destructure a JavaScript array?