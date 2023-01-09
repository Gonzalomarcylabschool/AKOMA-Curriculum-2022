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
  Book.call(this, title, author, year);
  this.month = month;
}
    // Inherit Prototype
Magazine.prototype = Object.create(Book.prototype) ;
    // Instantiate Magazine Object
const mag1 = new Magazine( 'Mag One', 'John Doe', '2018','Jan' );
  console. log (mag1) ;


  //Using ES6
// class Book{// This is the superclass(parent class)
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
//   getSummary = function () {
//     return '${this.title} was written by ${this.author} in ${this.year}';
//   };
// }

// class Magazine{//this is the subclass(child class)
//   constructor(title, author, year, month) {
//     super(title, author, year)
//     this.month = month;
//   }
// }