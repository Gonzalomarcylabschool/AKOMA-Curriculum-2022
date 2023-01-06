# Inheritance 
n JavaScript, inheritance is implemented using prototype-based inheritance, where objects can inherit properties and methods from other objects.

To create a class that can be inherited from, you can define a constructor function and add properties and methods to its prototype object. For example:
```JS
function Book(title, author, year) {
this.title = title;
this.author = author;
this.year = year;
}
// getSummary
Book.prototype. getSummary = function () {
return '${this.title} was written by ${this.author} in ${this.year}';
};

// Magazine Constructor
function Magazine(title, author, year, month) {
Book. call(this, title, author, year);
this.month = month;
}
// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype) ;
// Instantiate Magazine Object
const mag1 = new Magazine( 'Mag One', 'John Doe', '2018',
'Jan' );
console. log (mag 1) ;
```

As always ES6 has come to the rescue and has made it easier to implement this. 

To create a child class that inherits from a parent class, you can use the extends keyword and the super keyword to call the parent class' constructor and access its prototype object. For example:
```js
class Book{// This is the superclass(parent class)
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary = function () {
        return '${this.title} was written by ${this.author} in ${this.year}';
    };
}

class Magazine{//this is the subclass(child class)
    constructor(title, author, year, month) {
        super(title, author, year)
        this.month = month;
    }
}
```