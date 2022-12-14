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
// moethod or not?

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