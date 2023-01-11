const gonzalo = {
  name: 'Gonzalo',
  age: 34,
  job: 'teacher'
};

// Before ES6 Classes:
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
};
// 
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};
// Instantiate a Book object:
const book1 = new Book('PapaBear', 'Gonzalo', 2022);

  // Magazine constructor:
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
};
  // Inherit prototype from Book:
Magazine.prototype = Object.create(Book.prototype);
  // Instantiate a magazine object
 const mag1 = new Magazine( 'Mag One', 'John Doe', '2018','Jan' );



  //Using ES6
// class Book{// This is the superclass(parent class)
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   };
//   getSummary = function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   };
// };

// class Magazine{//this is the subclass(child class)
//   constructor(title, author, year, month) {
//     super(title, author, year)
//     this.month = month;
//   };
// };