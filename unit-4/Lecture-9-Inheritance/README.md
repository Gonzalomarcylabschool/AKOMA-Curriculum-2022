# Inheritance 
In JavaScript, inheritance is implemented using prototype-based inheritance, where objects can inherit properties and methods from other objects.We have seen this befor: 

```js
const gonzalo = {
  name: 'Gonzalo',
  age: 34,
  job: 'teacher'
};

console.log(Object.keys(gonzalo));
// expected output: Array ["Gonzalo", 34, "teacher"]
```

## Before ES6 classes

In ES5, making your own object with inheritance was more complicated. 
You would need the following:
  - Constructor function
  - Prototype constructor for the methods
  - Object.call()
  - Object.create(Object.prototype)


```JS
// Parent constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Child constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
this.month = month;
}
// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype) ;
// Instantiate Magazine Object
const mag1 = new Magazine( 'Mag One', 'John Doe', '2018',
'Jan' );
console. log (mag 1) ;
```

As always, ES6 has come to the rescue and made implementing this easier. 

To create a child class that inherits from a parent class, you can use the extends keyword and the super keyword to call the parent class' constructor and access its prototype object. For example:

```js
class Book{// this is the superclass(parent class)
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  };
  getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
};

class Magazine extends Book{//this is the subclass(child class)
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  };
};

//Let's make a comic class!
```

## Polymorphism 
Polymorphism is the presentation of one interface for multiple data types.

For example, integers, floats, and doubles are implicitly polymorphic: regardless of their different types, they can all be added, subtracted, multiplied, and so on.

In the case of OOP, by making the class responsible for its code as well as its own data, polymorphism can be achieved in that each class has its own function that (once called) behaves properly for any object.

