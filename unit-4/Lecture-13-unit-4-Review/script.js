// const gonzalo={
//     firstName: 'Gonzalo',
//     lastName: 'Romero',
//     friends: [],
//     sayHi() {
//       return `Hi, my name is ${firstName} ${lastName}`;
//     },
//     addFriends(friendName) {
//       this.friends.push(friendName);
//       return `${friendName} has been added`;
//     }
  // }

//   let person = {
//   name: "Gonzalo Romero",
//   sayName() {
//     return `${person.name}`;
//   }
// };
// person.sayName(); // Outputs: "Gonzalo Romero"

// let showThis = function() {
//   console.log(this);
// }
// showThis(); // Outputs: window (in browser) or global (in node)
// class Person{
//   constructor(name){
//     this.name = name;
//   }
// }

// // in either case the following is the same:
// let gonzalo2 = new Person("Gonzalo Romero");
// console.log(gonzalo2.name); // Outputs: "Gonzalo Romero"

// function makeCounter(startingValue) {
//   let privateCounter = startingValue;

//   return function() {
//     privateCounter++;
//     return privateCounter;
//   }
// }

// let counter = makeCounter(0);
// let counter1 = makeCounter(15);
// console.log(counter());  // Outputs: 1
// console.log(counter());  // Outputs: 2
// console.log(counter());  // Outputs: 3
// console.log(counter.privateCounter); //undefined

// function makePerson(name, age, occupation){ //declare the function and return
//   return {
//     name,
//     age,
//     occupation,
//     friends: [],
//     hello(){
//       return `Hello, I'm ${this.name}, at ${this.age} ${this.occupation}`;
//     }
//   }
// }
// const gonzaloFactory = makePerson('Gonzalo', 34, 'Teacher');

// function Person (name, age, occupation){
//   this.name = name;
//   this.age = age;
//   this.occupation = occupation;
//   this.friends = []
// }
// Person.prototype.hello = function (){
//   return `Hello, I'm ${this.name}, at ${this.age} ${this.occupation}`
// }
// const gonzaloConstructor = new Person('Gonzalo', 34, 'Teacher')
//  ;

//  class Person {
//   constructor (name, age, occupation) {
//   this.name = name;
//   this.age = age;
//   this.occupation = occupation;
//   this.friends = [];
//   }
//   hello(){
//     return `Hello, I'm ${this.name}, at ${this.age} ${this.occupation}`;
//   }
// }

// const gonzalo3 = {
//   name: 'Gonzalo',
//   age: 34,
//   job: 'teacher'
// };

// console.log(Object.keys(gonzalo3));
// // expected output: Array ['name, 'age', 'job]

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

    //if (personToCall instanceof Person)> true 
    if(personToCall instanceof InternationalPerson){
      return `this is an international call`
    }
    else {
      return `this is a domestic call`
    }
  }
  toString(){
    return this.name;
  }
}

const gonzalo5 = new Person('Gonzalo', 34, 'Teacher');
const itzel = new Person ('Itzel', 12, 'Teacher');


class InternationalPerson extends Person {
  constructor(name, age, occupation, nationality){
    super(name, age, occupation);
    this.nationality = nationality;
  }
}
const fernando = new InternationalPerson('Fernando', 56, 'Printer', 'Mexican')


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
  console.log(pet.speak());
}