You have learned all of the parts putting together you code. think of all of these topics of lego blocks and 

What is an object and why are they useful?

Objects are a type of data Structure. Remeber that data structures is how we store our data.

What other data structure do we know?

That right arrays!!!

When we store data in an array its like we are making a list because there is and order. 
```js 
	const array = ["jason", "ashley", "xhes"]
	console.log(array[0]);
	console.log(array[1]);
	console.log(array[2]);
```

Object are like description, using properties (the key-value pairs)
```js
	const computer = { 
	cpu: "intel", 
	capacity : "512gb", 
	ram: "16gb" 
}
```
What can of values can we store in a property?

```js
	const computer2 = { 
		isApple: true,// boolean
		isPC: false,// boolean
		powerSupply: 500 , // number
		cpu: "intel", // string
		capacity : ["1TB", "500GB", "500GB"], // array
		ram: 16, // number
		graphicsCard: {gpu1: "3090", gpu2:"3070ti"},//more objects
		hello: () => console.log("hello"),//function
		hello2: (name) => {console.log(`hello ${name}again!`)}//funciton
	}
```
How do we access object properties? 

When we want to acces a property in an object we need to use dot notation. to use dot notation we need to use the name of the object we want to acces, and the key of the property with a dot in between the two.

```js
	console.log(computer.cpu);
	//here I'm printing the cpu property to the console from the computer object.
	// using dot notation
	console.log(computer.ram);
	console.log(computer.capacity);
	
	// using bracket notation with dot notation
	console.log(computer2.capacity[0]); //what will print out here? what about the next line.
	console.log(computer2.capacity[1]);
	
	// accessing objects inside on object?
	console.log(computer2.graphicsCard.gpu1);
```
When can we use dot notation and when must we use bracket notation?


What data types can be valid object values in JavaScript? What data types can be valid object keys?
What is the relationship between arrays and objects in JavaScript?
What does it mean for a property to be enumerable?
What are the ways that we can iterate over objects?
How can we copy the properties from one object to another?