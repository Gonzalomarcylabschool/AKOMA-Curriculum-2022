[slides](https://docs.google.com/presentation/d/1SNaebwauarFSp4HhQUUc4P5p-atF4yrIXDmWDx8RiW8/edit#slide=id.g18410043d65_0_86)

[video TBD]()
**[00:00 - 00:05]**- | Default parameters | The why |

**[00:05 - 00:05]**- | Data Stuctures| 

**[00:05 - 00:15]**- | arrays |

**[00:15 - 00:30]**- | Bracket Notation | coding examples

**[00:30 - 00:45]**- | Passed by reference |

**[00:45 - 00:60]**- | Iterating arrays|

## Default parameters

```js
function myFunction(){

}


```

## The why
Primitive data types are store as single values

Arrays are good for list and processing the data inside of them.

So if we had a ton of data that we need to procces or go though using single variables would take up too much time and space in a computer. 


## Data Stuctures
What is a data structure?

A data structure is not only used for organizing the data. It is also used for processing, retrieving, and storing data. 

There a many different data stuctures but this week we will be focused on arrays and objects.

funny enough in java Script an array is considered an object;

## Arrays

What are arrays and why are they useful data structures?

![mental-model-data](lecture-5-array-pt1/mental-model-data.png)
```js
let csScientistOne = "Vint Cerf" 

let csScientistTwo = "Grace Hopper"

let csScientistThree = "Alan Turing"

let csScientistFour = "Barbara Liskov"

console.log(csScientistOne);
console.log(csScientistTwo);
console.log(csScientistThree);
console.log(csScientistFour);

//or 
console.log(csScientistOne, csScientistTwo, csScientistThree, csScientistFour)
```

Now storing data into variables this way would take so much time. Especailly if you had to do this for thousands or even tens of thousands of variables (or millions).

2 data stuctures that solve this exact problem are objects and arrays.

```js
	const csScientists = [
		"Vint Cerf", 
		"Grace Hopper", 
		"Alna Turing", 
		"Barbara Liskov"]
	for(let i = 0; i< csScientists.length; i++){
		console.log(csScientists[i]);
	}
```


How do we access individual elements within arrays?

arrays have index, they are like list, they have an order. 

index: the position that the element is at
elements: the data in the array 

![data stucture mental model](https://media.geeksforgeeks.org/wp-content/uploads/array-2.png)

```js
	const groceries = ["milk", "eggs", "carrots", "cereal"]
```

What is the first element of the array?

What index number would it have?

How would we represent that?

### Bracket Notation

We can reference individual elements in an Array using bracket notation.

```js
	const groceries = ["milk", "eggs", "carrots", "cereal"]
	console.log(groceries[0]);//what would this output.
```
**PRO TIP** Because arrays may change and sometimes may be very long finding the value of the last element of the array will be kinda hard. that why we would use `arrayName.length -1` to get the last element of the array.
We can also re-assign values in an array using bracket notation.

```js
	const groceries = ["milk", "eggs", "carrots", "cereal"]
	groceries[0] = "orange juice";
```
### coding examples

Lets go back to the original example and try to reference the elements in our console and see how we can change their values.

## Passed by reference

What does it mean for arrays to be passed by reference in JavaScript?

As we mentioned before primitive data types are store as single values in memory. they are also considered pass by value.

```js

let a = 3;
let b = 4;
console.log(a);
// whats going to happen here?
let c = a;
console.log(c);
a = 4;
console.log(a);
console.log(c);
```

What does it mean for arrays to be passed by reference in JavaScript?
Arrays on the other hand are pass by reference

![data stucture mental model](https://media.geeksforgeeks.org/wp-content/uploads/array-2.png)

The numbers on top of each box is the address of each element of the array. The when we create the array it will create a refrence to point to where the memory lives in memory.
![](https://i0.wp.com/javaconceptoftheday.com/wp-content/uploads/2014/11/PrimitiveTypeArray.png?w=1300)

When we assign a variable an existing array, its not going to copy the values inside of the array, but refrences the original array. So any chnages that we make to the first array will be refrenced in the new variable. 

So when we want to 
```js
	const arr = [1, 2];
	cont nums = arr;
	console.log(nums);
```
![](https://i0.wp.com/javacoQuick reivew: nceptoftheday.com/wp-content/uploads/2014/11/CopyAnArray.png?w=1300)
Quick reivew: 
```js
	arr[0] = 2;
	console.log(arr, nums);
```
Under what conditions will an array be equal (==) to another array?

Because arrays are pass by reference arrays that have the same values will not be equal
```js
const a = [1, 2, 3];
const b = [1, 2, 3];
const c = a;
console.log(a == c);
```

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