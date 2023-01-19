# Unit-4 Review

## Encapsulation

Encapsulation is a concept in software design that refers to the practice of keeping an object's internal state and behavior hidden from the outside world and exposing only a public interface for interacting with that object. This allows you to control how an object's data is accessed and modified, and can help to prevent unintended changes to the object's state.

JavaScript classes provide a way to create encapsulated objects. By defining a class, you can create a blueprint for creating objects that have specific states and behaviors. The states and behaviors of a class are defined using the constructor function and the class methods, respectively. You can then create instances of the class using the new keyword, and these instances will have the properties and methods defined by the class.

```js
const gonzalo = {
  firstName: 'Gonzalo',
  lastName: 'Romero',
  friends: [],
  sayHi() {
    return `Hi, my name is ${firstName} ${lastName}`;
  },
  addFriends(friendName) {
    this.friends.push(friendName);
    return `${friendName} has been added`;
  }
}
```

## `this`

In JavaScript, this refers to the object that the current function is a property of or its execution function. The value of this can change depending on how the function is called.

In a method of an object: this refers to the object that the method was called on. For example, in the following code, this inside the sayName method refers to the person object:
```js
let person = {
  name: "Gonzalo Romero",
  sayName() {
    return `${this.name}`;
  }
};
person.sayName(); // Outputs: "Gonzalo Romero"
```
In a standalone function: this refers to the global object (or window object in a browser). For example, in the following code, this inside the showThis function refers to the global object:
```js
let showThis = function() {
  console.log(this);
}
showThis();     

                           // Outputs: window (in browser) or global (in node)
```
In a constructor function: this refers to the object that is being constructed. For example, in the following code, this inside the Person constructor function refers to the new object that is being created:
```js
function makePerson(name){
  return {
    name
    this.name
    sayHi(){
      return this
    }
  }
}// gonzalo {name: 'Gonzalo Romero'}

function Person(name) {
  this.name = name;
} //=> gonzalo Person{name: 'Gonzalo Romero'}


//or 

class Person{
  constructor(name){
    this.name = name;
  }
}

// in either case the following is the same:
let gonzalo = new Person("Gonzalo Romero");
console.log(gonzalo.name); // Outputs: "Gonzalo Romero"

```
## Closure

A closure in JavaScript is a function that has access to the variables and functions in its outer scope, even after that outer function has finished executing. This allows the inner function to "remember" the state of its outer scope, and continue to operate on it even after the outer function has completed.

Closures allow you to create private data by using an inner function to access and manipulate data that is not directly accessible from outside the closure. This can be done by creating a variable in the outer scope of the closure, and then returning an inner function that has access to that variable. Because the inner function has access to the variable, but the variable is not accessible from outside the closure, it can be considered "private" data.

For example:
```js
function makeCounter(startingValue) {
  let privateCounter = startingValue;

  return function() {
    privateCounter++;
    return privateCounter;
  }
}

let counter = makeCounter(0);

console.log(counter());  // Outputs: 1
console.log(counter());  // Outputs: 2
console.log(counter());  // Outputs: 3
console.log(counter.privateCounter); //undefined
```

## Factory Constructor and ES6 Classes


```js
//Factory function
function makePerson(name, age, occupation){ //declare the function and return
  return {
    name,
    age,
    occupation,
    friends: []
    hello(){
      return `Hello, I'm ${this.name}, at ${this.age} ${this.occupation}`;
    }
  }
}
const gonzaloFactory = makePerson('Gonzalo', 34, 'Teacher');
```
```js
//Constructor function
function Person (name, age, occupation){
  this.name = name;
  this.age = age;
  this.occupation = occupation;
  this.friends = []
  // sayHi(){

  // }
}
Person.prototype.hello = function (){
  return `Hello, I'm ${this.name}, at ${this.age} ${this.occupation}`
}
const gonzalo = new Person('Gonzalo', 34, 'Teacher')
 ;
```
```js
//ES6 class
class Person {
  constructor (name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.friends = [];
  }
  hello(){
    return `Hello, I'm ${this.name}, at ${this.age} ${this.occupation}`;
  }
}
```

## Inheritance and `instanceof`  

In JavaScript, inheritance is implemented using prototype-based inheritance, where objects can inherit properties and methods from other objects.We have seen this before:

```js
const gonzalo = {
  name: 'Gonzalo',
  age: 34,
  job: 'teacher'
};

console.log(Object.keys(gonzalo));
// expected output: Array ['name, 'age', 'job]
```

To create a child class that inherits from a parent class, you can use the extends keyword and the super keyword to call the parent class' constructor and access its prototype object. For example:
```js
class Person {
  constructor (name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.friends = [];
  }
  hello(){
    return `Hello, I'm ${this.name}, at ${this.age} ${this.occupation}`;
  }
  callPerson(personToCall){
    if(personToCall instanceof Person){
      return `this is a domestic call`
    }
    else if(personToCall instanceof Person){
      return `this is an international call`
    }
  }
}

const gonzalo = new Person('Gonzalo', 34, 'Teacher');

class InternationalPerson extends Person {
  constructor(name, age, occupation, nationality){
    super(name, age, occupation);
    this.nationality = nationality;
  }
}
const fernando = new InternationalPerson('Fernando', 56, 'Printer', 'Mexican')
```

## Polymorphism

Polymorphism is a concept in object-oriented programming that allows objects of different classes to be treated as objects of a common class. This allows you to write code that can work with objects of different types, without having to know the specific type of the object when executed.

```js
class Pet {
  constructor(name){
    this.name = name
  }
  speak(){
    return `Animal sound!`;
  }
}

class Cat extends Pet{
  constructor(name){
    super(name);
  }
  speak() {
    return `${this.name} said meow!`;
  }
}

class Dog extends Pet{
  constructor(name){
    super(name);
  }
  speak() {
    return `${this.name} said woof!`;
  }
}
const pets = [new Pet('Tau'),new Cat('Tiger'), new Dog('Viva')];

for (let pet of pets) {
  pet.speak();
}
```

In this example, the speak method is implemented differently in the Pet, Cat and Dog classes, but the code that calls the method does not need to know the specific type of the object. This is polymorphism, because the code can work with objects of different types and the specific implementation of the method is determined when executed.