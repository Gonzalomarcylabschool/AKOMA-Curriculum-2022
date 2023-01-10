// write a class
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