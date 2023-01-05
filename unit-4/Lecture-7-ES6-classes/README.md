# ES6 Classes

## Review

It's been some time so lets go over some of the things we learn about OOP!

### Objects
* State 
* Behavior
* Encapsulation 
```js
const Gonzalo = {
  
}
```
### Factory Functions

```js
function makePerson(name, age, occupation)){
  name,
  age,
  occupation,
  friends: []
  hello(){
     return `Hello, I'm ${this.name}, at ${this.age} ${occupation}`
  }
}
```

### Constructor

```js
function Person (name, age, occupation){
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.friends = []
}
Person.prototype.hello = function (){
        return `Hello, I'm ${this.name}, at ${this.age} ${occupation}`
    }
const gonzalo = new Person('Gonzalo', 34, 'Teacher')
const bayzed = new Person('Bayzed', 19, 'Fellow')
```

## ES6 Classes
In JavaScript, a class is a type of function that is used to define a blueprint for creating objects. Classes in JavaScript are a simple way to create objects that have similar properties and methods.

ES6, also known as ECMAScript 6 or ECMAScript 2015, is the latest version of the ECMAScript standard and adds several new features to JavaScript, including classes. The syntax for defining a class in ES6 is similar to other object-oriented languages, such as Java or C++.

Here is an example of how you might define a class in ES6:

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
```
You can then create an instance of the class using the new keyword:

```js
let p = new Point(1, 2);
console.log(p.x);  // Outputs: 1
console.log(p.y);  // Outputs: 2
```
Classes in JavaScript are just a syntactical sugar over the prototype-based inheritance that has been in JavaScript since the beginning. The class syntax does not actually add any new functionality to the language; it just makes it easier to define objects and inheritance.

## Constructor VS Class

In JavaScript, a constructor is a function that is used to create and initialize an object. When you create an object using the new keyword, the constructor function is called to create the object and set up its initial state.

ES6 classes are similar to constructors in that they are used to create and initialize objects. The constructor method in a class is a special method that is called when an object is created from the class. It is used to set up the initial state of the object, similar to how a constructor function is used.

So, in this sense, classes in ES6 are similar to constructor functions in that they both allow you to create objects with a specific initial state. However, the syntax for defining a class is slightly different from the syntax for defining a constructor function.

One of the main differences is in the syntax. The syntax for defining a class in ES6 is based on object-oriented languages like Java or C++, and it uses the class keyword and a constructor method to define the object. In contrast, constructor functions in JavaScript are defined using the function keyword and the function name is typically capitalized to indicate that it is a constructor. Here is an example of a constructor function:

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}
// vs
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
```
Let's make a Person class and then some instances.

### Inheritance

Another difference between classes and constructor functions, which we will go into more detail latere, is in how inheritance is implemented. In JavaScript, inheritance is implemented using the prototype chain. When you define a constructor function, you can use the prototype property to add methods and properties to the constructor's prototype, which will be inherited by all instances of the object.

With ES6 classes, inheritance is implemented using the extends keyword. You can define a class that extends from another class. This subclass(child class) will inherit all of the methods and properties of the superclass(parent class).

Here is an example of how you might define a subclass using the extends keyword:

```js
class Point {//superclass
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Circle extends Point {//subclass
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }
}

```
In this example, the Circle class extends the Point class and adds a radius property. It also calls the super method, which calls the constructor method of the superclass (in this case, the Point class) to set up the inheritance relationship.

## Instance Method VS Class Method

So far, we have only been creating and using Instance methods in our Objects. We have used Class Method before. 

```js
  let arr = [1, 2, 3];
  arr.push(4);//this is the instance method because we are doing on an instance of an array.
  Array.isArray(arr)//this is a Class method
  
```

```js
class Person {
  constructor(name, age, occupation){
      this.name = name;
      this.age = age;
      this.occupation = occupation;
      this.friends = []
  }
  
  hello() { //this is the instance method
    return `Hello, I'm ${this.name}, at ${this.age} ${occupation}` 
  }
  
  static onlyPerson() {
    return `this only prints out here`
  }
}

//going back to the array example

class Array{
  constructor(){
    this.length = 0;
  }
  push(newElemet){
    //code
  }
  pop() {
    //code
  }
  map(func) {
    //code
  }
  
  static isArray(arr){
    //code
  }
}
```

