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
* Let's make an object named `person`. 
* The object must have at least two properties.
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

If we want to code in a data-oriented way, OOP is the best way to go. We no longer want to process data; we also want to keep track of it and do things with it. This is where *state* and *behavior* come in.
 
The state is the part of the program that keeps track of the data.
How does it keep track of data:
With an object we have key-value pairs

The behavior is what the program can do.
Which part of the object do you think is the behavior?
THE METHODS!!!

```js
const person = {
	name: 'Gonzalo',//this is state
	age: 34,//this is state
	sayHello: function() {// this is the behavior
		console.log('Hello')
	}
}

const shoppingCart = {
        amountOfItems: 5,//this is state
        cost: 1.99,// this is also state
        total(){ // this is a behavior. 
            return this.amountOfItems * this.cost;
        }
    }
```

By keeping track of the data and running functions altogether, we are doing what is known as *Encapsulation*

## `this` keyword 

We won't go into the detail of `this` but I will show you how it works: 

```js
const person = {
	name: 'Gonzalo',
	age: 34,
	sayHello: function(name = 'friend') {
		console.log(`Hello ${name}. My name is Gonzalo`)
	}
}

```
So we just hard-coded a more formal greeting. We need to make this more dynamic because in the real world, the value of name might change

```js
	console.log(`Hello ${name}. My name is ${name}`)
	//Why will this not work?
```

We actually need to change it to the following:

```js
	console.log(`Hello ${name}. My name is ${this.name}`)
```

```js
    const shoppingCart = {
        amountOfItems: 5,
        cost: 1.99,
        total(){
            return this.amountOfItems * this.cost;
        }
    }
```
## Factory Functions

A factory function returns a new object with all of the properties set in the function. This allows us to create multiple ojects that have all of the same properties again and again.

```js
function makePerson(name, age){
  return{
    name: name,
    age: age,
  }
}
const gonzalo = makePerson('gonzalo', 34);
```

Here we are going to make a dynamic 
```js
    function shoppingCart(item,  price) {
        amountOfItems: item,
        cost: price,
		_storeName: 'shoperight'
      	total(){
            return this.amountOfItems * this.cost;
        }
    }
```

## Essential Questions

Let's take a moment to answer the essential question. 

What is encapsulation? Why do we use it? How do objects enable it?

How do objects encapsulate state? How do they encapsulate behavior?

What are factory functions and why are they useful?

What are examples of how we can create factory functions?

What are private variables? What is the JavaScript naming convention for private variables?