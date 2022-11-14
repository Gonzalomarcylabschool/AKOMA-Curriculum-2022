# Objects

**[00:00 - 00:05]**- | Introduction | The why |

**[00:05 - 00:15]**- | Review of objects part 1 | 

**[00:15 - 00:30]**- | Methods |

**[00:30 - 00:45]**- | Pratice methods | 

**[00:45 - 00:60]**- | Question and Assesment review |

## The why

You have learned all of the parts putting together you code. think of all of these topics of lego blocks and objects is the last lego block that we need to learn about so that we can build out legos into amazing code. 

## What is an object 
#### why are they useful?

Objects are a type of data Structure. Remeber that data structures is how we store our data.

When we store data in an array its like we are making a list because there is and order. 
```js 
	const array = ["jason", "ashley", "xhes"]
	console.log(array[0]);
	console.log(array[1]);
	console.log(array[2]);
```

Object are like description, using properties (the key-value pairs)and there isn't an order like arrays.
```js
	const computer = { 
	cpu: "intel", 
	capacity : "512gb", 
	ram: "16gb" 
}
```

### What can we store in Objects  

Each key in your JavaScript object must be a string, symbol, or number.

```js
	const shoppingCart = {
	   1: "apple",
	   2: "oranges"
};
```
There’s another rule to keep in mind about key names: if your key name contains spaces, you need to wrap it in quotes.

```js
	const programmer = {
	   firstname: "Phil",
	   age: 21,
	   backendDeveloper: true,
	   languages: ["Python", "JavaScript", "Java", "C++"],
	   "current project name": "The Amazing App"
	};
```
What data types can be valid object values in JavaScript? ALL OF THEM!!
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
##  Access object properties

How do we access object properties? 

Dot Notation: objecName.keyName
```js
	computer2.cpu
	console.log(computer.cpu);
	//here I'm printing the cpu property to the console from the computer object.
	// using dot notation
	console.log(computer.ram);
	console.log(computer.capacity);
	
	// accessing objects inside on object?
	console.log(computer2.graphicsCard.gpu1);
```
Bracket notation: objectName[keyName]

when we have an expression to evaluate we can use bracket notation. lets go back to these 2 examples

```js
	const shoppingCart = {
	   1: "apple",
	   2: "oranges"
	};
	console.log(shoppingCart.1)//what do you think will happen here?
	const programmer = {
	   firstname: "Phil",
	   age: 21,
	   backendDeveloper: true,
	   languages: ["Python", "JavaScript", "Java", "C++"],
	   "current project name": "The Amazing App"
	};
	console.log(programmer."current project name")
```
This is going to give us an syntaxError

the work around here is to use bracket notation

```js
	shoppingCart["1"]
	programmer["current project name"]
```
Now bracket notation doesnt only need to be done in this way.

```js
	programmer["age"]
	let x = "firstname"
	programmer[x]
	//this will still work 
	//this is an expression that will evaluate 
	programmer.x// will this work??
	//when we want to acces our objects in a more dynamic way (when we dontknow the key name) we can use bracket notation.
	
	//dot notation needs the exact name of the key
	//bracket notation will evaluate whats in the brackets then use that as the name of the key.
	//going back to computer 2
	// using bracket notation with dot notation
	console.log(computer2.capacity[0]); //what will print out here? what about the next line.
	console.log(computer2.capacity[1]);
	
```
## Objects and arrays

```js
let array = ["Vincent", "Oshawn", "Koumba"];
array[0];
array[1];
array[2];
let object = {}
//lets add some properties to our object:
object.0 = "Vincent"
object.1 = "Oshawn"
object.2 = "Koumba"
// => object{0: "Vincent", 1: "Oshawn", 2: "Koumba"}
//now if we want to acces them it woud look like this:
object[0]
object[1]
object[2]
// this almost looks exactly the same!! WHAT!!
```
Arrays are just object whos keys are only number( but don't forget there is an order to them).

## Methods
how do we delete properties(key-value) from an object

`delete`

`in`

`hasOwnProperty`

`for...in` loop

`Object.keys`

`Object.assign`

How do we delete properties(key-value) from an object?

```js
delete computer2.cpu;
```
how do we find somthing inside of an object?
```js
	const programmer = {
	   firstname: "Phil",
	   age: 21,
	   backendDeveloper: true,
	   languages: ["Python", "JavaScript", "Java", "C++"],
	   "current project name": "The Amazing App"
	};
	
	if ( age in programmer){
		console.log("the dr. is away")
	}
```

What does it mean for a property to be enumerable?

It is one of the properties that was created by the developer, not the inheret properties that objects have. We can check to see if something is enumerble by using `hasOwnProperty`.
```js
	programmer.hasOwnProperty("age");
```
What are the ways that we can iterate over objects?
using the method object.keys
```js
	console.log(object.keys(programer))
	//we get an array with the keys
	
	let y = Object.keys(programmer);
	for (let i = 0; i < y.length;i++){
		let key = y[i]
		console.log(y[i]);//prints the keys
		console.log(programmer[key]);//prints the values
	}
	for (let a in programmer){
		console.log(`the key is ${a}`);//
		console.log(`the value is ${programmer[a]}`);
	}
	//if we did this with an array key would be the index value will be the element.
```
How can we copy the properties from one object to another?

```js
	const target = { a: 1, b: 2 };
	const source = { b: 4, c: 5 };

	const returnedTarget = Object.assign(target, source);

	console.log(target);
	// expected output: Object { a: 1, b: 4, c: 5 }

	console.log(returnedTarget === target);
	// expected output: true
```
