#ES6 Classes
## Quick review on ES6 Classes

In the last lecture, we went over we can instantiate an object:

* Object literals
* Factory functions
* Constructor functions
* Classes

All these are just different ways of doing the same thing, making objects. But with each of these, we abstract a part of the process. Factory functions ensure we don't have to write out each object. Constructor functions allow us to store our methods in a way that doesn't take up more memory and is still accesible to every instance made using the prototype constructor. 

Finally, classes make it so that we can do everything we just mentioned in a much cleaner way.(becuase its like other langues )

Let's practice writing a Class with the following:


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
  arr.push(4);//This is the instance method because we are invoking on an instance of an array.
  Array.isArray(arr)//This is a class method.
  
```
To create a class method you need to use the `static` keyword in your method. This makes a method that can only be used with the class and not instences.  
```js
class Person {
  constructor(name, age, occupation){
      this.name = name;
      this.age = age;
      this.occupation = occupation;
      this.friends = [];
  }
  
  hello() { //this is the instance method
    return `Hello, I'm ${this.name}, at ${this.age} ${occupation}` 
  }
  
  static onlyPerson() {//this is the class method
    return `this only prints out here`
  }
}
//
const gonzalo = new Person("Gonzalo", 34, "Teacher")
// What would it look like for us to make a new instance?

// How do we invoke hello method?

// Does it matter which instance I invoke the hello method on?

// What about the onlyPerson method?

// Going back to the array example, this is what the array class under the hood would look like. 

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

const arr1 = new Array();
// What would it look like for us to make a new instance?

// How do we invoke push method?

// Does it matter which instance I invoke the push method on?

// What about the isArray method?
```

