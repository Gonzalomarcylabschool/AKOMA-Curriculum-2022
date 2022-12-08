# Understanding Object in OOP

## The Why

Up to this point, we have mainly been using the programming paradigm known as Functional programming. This is where our goal is more procces oriented. 

```js
function myFuction0(x) {
	myFuction1(x);
}

function myFuction1(y) {
	myFuction2(y + 1)
}

function myFuction2(z) {
	console.log(z * 2)
}
```
But there is another programming paradigm that we will be diving into this unit: Object Oriented Programming, or OOP. As always, let's talk about the why it's essential to learn about this. 

1. **It will come up in interviews.** They will often be tasked to design and implement a class, possibly multiple classes, that interact with each other. 

2. **It is foundational for future units.** Unit X (Data Structures and Algorithms) will rely heavily on this unit as fellows will be expected to create their own abstract data structures using classes. Units 5 (DOM) and 6 (AJAX) can utilize classes for organization purposes. Unit 7 will review classes as fellows learn about MVC in server-side applications. Finally, Unit 8 (React) can be taught exclusively using functions, but it's good to touch on legacy React classes.  

3. **It will come up on the job.** This is perhaps the most important reason to spend time with this unit. As companies build applications to scale, it’s very like they will use classes in their code-base to organize better, encapsulate, and abstract their logic.


## What is an Object:

Lets practice first:
* Lets make an object named person. 
* The object must have at least 2 property.
	* These two properties are known as our data properties.
* Lets add a function that says hello.

```js
const person = {
	name: 'Gonzalo',
	age: 34,
	sayHello: function() {
		console.log('Hello')
	}
}
```

The function that we have added here is called a method!

## Function vs Method

We have written functions and have used methods before. People on the internet might use these terms interchangeably. But, there is a diffrence. When we refer to a function it will be something that looks like this: 
```js
function sayHello(name){
	console.log(`Hello ${name}`)
}
sayHello('Saida')// outputs: 'Hello Saida'
```
The methods we have used look something like this: 
```js
let word = 'park'
word.replace('p','d')// returns 'dark'
```
Although all methods are functions, not all functions are methods. A *method* is an object property that has a function value.


## State, Behavior and Encapsulation

If we want to code in away that is data oriented OOP is the best way to go. We no longer want procces data we want to also keep track of it and do things with. This is where *state* and *behavior* come in.
 
The state is the part of the program that keeps track of the data.
How does it keep track of data:
With an object we have key-value pairs

The behavior is what the program can do.
Which part of the object do you think is the behavior?
THE METHODS!!!

By keeping track of the data and doing things all together we are doing what is knonw as *Encapsulation*

