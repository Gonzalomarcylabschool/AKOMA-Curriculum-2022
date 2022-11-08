[slides](https://docs.google.com/presentation/d/1SNaebwauarFSp4HhQUUc4P5p-atF4yrIXDmWDx8RiW8/edit#slide=id.g18410043d65_0_86)

Primitive data types are store as single values:


What are the key methods for manipulating arrays?
Of the seven JavaScript data types, how do we classify arrays?
Under what conditions will an array be equal (==) to another array?
What does it mean for arrays to be passed by reference in JavaScript?
What is the purpose of the spread operator? How is it used with arrays?
What is the purpose of rest parameters? How do they differ from the arguments object?
What does it mean to destructure a JavaScript array?

## Data Stuctures
What is a data structure?

A data structure is not only used for organizing the data. It is also used for processing, retrieving, and storing data. 

There a many different data stuctures but this week we will be focused on arrays and objects.

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
	for(let i =0; i<csScientists.length;i++){
		console.log(csScientists[i]);
	}
```


How do we access individual elements within arrays?

objects have properties, 
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
How do we iterate over arrays?

