// Instances of objects can inherit all of the properties of Objects.

const gonzalo = {
  name: 'Gonzalo',
  age: 34,
  job: 'teacher'
};
// gonzalo.toString(); // instance method
// Object.keys(gonzalo); // class method
 const jared = {
  name: "Jared",
  age: 20,
  occupation: 'fellow'
 }
// jared.toString() //instance method
// Object.keys(jared) //class method
// We can see that both jared and gonzalo have inherited properties of the Object class, and both can use them.

// Before ES6 Classes:
/*
  In ES5, making your own object with inheritance was more complicated. 
  You would need the following:
    - Constructor function
    - Prototype constructor for the methods
    - Object.call()
    - Object.create(Object.prototype)
*/

// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// };
// // 
// Book.prototype.getSummary = function () {
//   return `${this.title} was written by ${this.author} in ${this.year}`;
// };
// Instantiate a Book object:

// Magazine constructor:
// function Magazine(title, author, year, month) {
//   Book.call(this, title, author, year);
//   this.month = month;
// };
  // Inherit prototype from Book:
// Magazine.prototype = Object.create(Book.prototype);
  // Instantiate a magazine object


  //Using ES6
class Book{ // This is the superclass(parent class).
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  };
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
};

const book1 = new Book('PapaBear', 'Gonzalo', 2022);
const book2 = new Book('Marcy Life', 'Isaac', 2023);

class Magazine extends Book{// This is the subclass(child class).
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  };
};

const mag1 = new Magazine( 'Mag One', 'John Doe', '2018','Jan' );

//Let's make a comic class.

class Comic extends Book { // This is another the subclass(child class).
  constructor(title, author, year, issue){
    super(title, author, year);
    this.issue = issue;
  };
  getSummary() {
    return `${this.title}, issue ${this.issue}, was written by ${this.author} in ${this.year}`;
  };
  changeYear(newYear){ // This will change the state of the year property.
    this.year = newYear;
    return `The year has been changed to ${newYear}`
  }
};
const superMan1 = new Comic('Super Man 1', 'Jerry Siegel', 1938,  1 )

const literature = [mag1, book1, book2, superMan1]

// With this code, we can see how mag1, book1, and book2 still use the original getSumary, and superMan1 uses the same method name but has a different result.

// literature.forEach((e) => {
//   console.log(e.getSummary());
// });