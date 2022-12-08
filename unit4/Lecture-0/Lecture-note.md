# Understanding Object in OOP

## The Why

1. **It will come up in interviews.** They will often be tasked to design and implement a class, possibly multiple classes, that interact with each other. 
2. **It is foundational for future units.** Unit X (Data Structures and Algorithms) will rely heavily on this unit as fellows will be expected to create their own abstract data structures using classes. Units 5 (DOM) and 6 (AJAX) can utilize classes for organization purposes. Unit 7 will review classes as fellows learn about MVC in server-side applications. Finally, Unit 8 (React) can be taught exclusively using functions, but it's good to touch on legacy React classes.  
3. **It will come up on the job.** This is perhaps the most important reason to take our time with this unit. As companies build applications to scale, it’s very like they will use classes in their code-base to better organize, encapsulate, and abstract their logic.


## What is an Object:

Lets some some practice first:
* Lets make an object named person. 
* The object must have at least 2 property.
* lets add a function that says hello.


```js
const person = {
	name: 'Gonzalo',
	age: 34,
	sayHello: function() {
		console.log('Hello')
	}
}
```