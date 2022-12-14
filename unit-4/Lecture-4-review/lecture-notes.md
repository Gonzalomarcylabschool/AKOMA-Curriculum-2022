# review of OOP

## Topics
* Object Oriented Programming
* State, Behavior and Encapsulation
* Function vs Method 
* Naming Conventions in OOP
* factory function
* Scope 
* Global Object
* Execution Context
* `this`
* Strict mode
* Closure

## The Why

why is it essential to learn about this. 

1. **It will come up in interviews.** They will often be tasked to design and implement a class, possibly multiple classes, that interact with each other. 

2. **It is foundational for future units.** Unit X (Data Structures and Algorithms) will rely heavily on this unit as fellows will be expected to create their own abstract data structures using classes. Units 5 (DOM) and 6 (AJAX) can utilize classes for organization purposes. Unit 7 will review classes as fellows learn about MVC in server-side applications. Finally, Unit 8 (React) can be taught exclusively using functions, but it's good to touch on legacy React classes.  

3. **It will come up on the job.** This is perhaps the most important reason to spend time with this unit. As companies build applications to scale, it’s very like they will use classes in their code-base to organize better, encapsulate, and abstract their logic.

## What is an object

An object is a data type inside that consist of propperties. These properties are made of key-value pairs. The key will usually be the name of the property, and the value will of the data or function that we store inside of the property. Let take a look an an example of this. 

```js
const obj = {
    key: 'value' // this property holds data 
    func: function myFunc() { // this property holds a function
        console.log(this);
    }
}
```

## State, Behavior and Encapsulation

Usually when we create an object the properties are realted to eachother. Let say that we create an object that is a shape. We may want the properties of that shape. 

```js
const square = {
    lenght: 3,
    sides: 4,
}
```
This properties are all related to the square. this data that we are storing inside of the object is know as the state of the object. but lest say that we wanted to do thing with this data, we would need to add the behaviors: 

```js
const square = {
    lenght: 3,
    sides: 4,
    area(){
        return this.length * 2;
    },
    perimeter(){
        return this.length * this.sides;
    },
    getLength() {
        return this.length
    }
}
```
The function that we have added are now our behaviors of this object. We actually run them and do things with them. 

Lets's try!

Not only can were use the state of our object but using our behaviors we can change the state. 
```js
const square = {
    length: 3,
    sides: 4,
    area(){
        return this.length * 2;
    },
    perimeter(){
        return this.length * this.sides;
    },
    getLength() {
        return this.length
    },
    changeLength(newLength1) {
        this.length = newLength
        return "the new lenght is " + newLength + "."
    }
}
```

By putting all of these properties inside of the object we have now made an object that has all realted poperties. This is Encapsulation.

## Function Vs Method

All methods are functions but not all functions are methods! This is because all functions that are inside of an object are considerd methods, anything function outide of object is not a moethod. 

```js
// method or not?

hello();

person.hello();

cat.tail;

myfunction.function;

phone.makeCall();
```
## Naming Conventions in OOP

* camelCase for all variables (properties) and functions (methods).
* TitleCase for all ES6 Classes and constructor functions. 
* _ is used to denote a variable that’s supposed to be private.

## Factory Functions

A factory function returns a new object with all of the properties set in the function. This allows us to create multiple ojects that have all of the same properties again and again.

```js
function makePolygon(length = 1, sides = 2){
  return {
        length,
        sides,
        perimeter(){
            return this.length * this.sides;
        },
        getLength() {
            return this.length
        },
        changeLength(newLength1) {
            this.length = newLength
            return "the new lenght is " + newLength + "."
        }
    }
}
const triangle = makePolygon(1, 3);
```

## Scope Review
To futher understand this we need to review scope.
What is Block scope?
What is Function Scope?
What about gloabl scope?

How does lexical Scope work?

## Global Object

When JS runs in node or a browser, it creates a global object that stores all of the inherent properties of JS. In a browser it create the `window` object that represents the browser window and cotains the JS properties. In node its just the `global` object. We will see examples of this as we talk about Execution Context. 

## Execution Context

When you run any JavaScript, a special environment is created to handle the transformation & execution of code. This is called the execution context. It contains the currently running code and everything that aids in its execution(variables, values etc...). 

In short we are talking about how we are running this code. 

There is a global execution context as well as a function execution context for every function invoked. The Global Execution Context is everything that is having in our code from the compile phase to the execution phase. The function execution context does the same thing just during the invokation of a function. Exeeuction context allows us to use the `this` keyword to refer to the object that we are currently executing code in. 

## Strict mode

JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode". Strict mode isn't just a subset: it intentionally has different semantics from normal code.
Strict mode makes several changes to normal JavaScript semantics: 

1. Eliminates some JavaScript silent errors by changing them to throw errors.
2. Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can  sometimes be made to run faster than identical code that's not strict mode.
3. Prohibits some syntax likely to be defined in future versions of ECMAScript.

## Closure

When we want to create an enviorment where the variable are closed off to the rest of the scope of our program we would use closure. There are 3 part to this: the inner function, this hold the code that we want to execute, the outer function whice hold the data we want to keep track of with out habing it be accesible to the rest of the code, and the variable where we store the outer function which when invoked it stores the inner function. 
```js
function makeCoutner() { //outer function
    let counter = 0; //data we are keeping track of
    return () => {//inner function that the outer function returns
        counter++; //code we want to run.
        console.log(`the value of the counter is ${counter}`);
    }
}
let increment = makeCoutner(); //variable we store the return value of the function, which is a function
```