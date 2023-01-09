//Object
const objName = {
    key: 'value',//This is a state.
    functionName(parameter) { // This is a behavior.
        console.log(parameter);
    }
}
const gonzalo = {
  name: 'Gonzalo',
  age: 34,
  occupation: 'Teacher',
  friend: []
}
const randy = {
  hasBaby: false,
  age: 19,
  height: "6'1\"",
  sayILoveYou: function(){
    console.log('I Love you')
  },
  dab: function() {
    console.log('Randy hit a dab')
  }
}

// Lets make an object together:
/* Make new object below this line*/

/* Make new object above this line */

//Factory Funciton

// Lets make a Factory Function together:
/* Make new Factory Functionbelow this line*/
function makePerson(name, age, occupation){
  return { 
    name,
    age,
    occupation,
    friends: [],
    hello(){
    return `Hello, I'm ${this.name}, at ${this.age} ${occupation}`
    }
  }
}
const gonzalo2 = makePerson('gonzalo', 34, 'teacher')
const randy2 = new Person('Randy', 19, 'Fellow')

/* Make new Factory Function above this line */

// Lets make a constructor together:
/* Make new object below this line*/
function Person(name, age, occupation){
  this.name = name;
  this.age = age;
  this.occupation = occupation;
  this.friends = []
}
Person.prototype.hello = function (){
  return `Hello, I'm ${this.name}, at ${this.age} ${this.occupation}`
}
Person.prototype.sayGoodBye= function(){
  return `Good bye`;
}

 const gonzalo3 = new Person('Gonzalo', 34, 'teacher')
/* Make new object above this line */

//Let's make a Person class and then a few instances!!

// class Person{
//   constructor(name, age, occupation){
//     this.name = name;
//     this.age = age;
//     this.occupation = occupation;
//     this.friends = []
//   }
//   hello(){
//   return `Hello, I'm ${this.name}, at ${this.age} ${this.occupation}`
//   }
// }
class Animal {
  constructor(name, legs, tail){
    this.name = name,
    this.legs = legs,
    this.tail = tail
  }

  makeSound(){
    console.log('Animal made Sound');
  }
} 
const viva = new Animal('viva', 4, true);

class Rooms {
  constructor(type, floors, sqFootage, windows, walls){
    this.type = type;
    this.floors = floors;
    this.sqFootage = sqFootage;
    this.windows = windows;
    this.walls = walls;
    this.furniture = []; 
  }
  turnOnLight(){
    return `The light are now on!`
  }
  addFurniture(item) {
      this.furniture.push(item);
      return `You have added a ${item} to ${this.type}`
    }
}
const bedRoom = new Rooms('bed room', 'wood', 100, true, 4);
const kitchen = new Rooms('kitchen', 'tile', 120, true, 4);

function HeadPhones(brand){
  this.brand = brand;
}
HeadPhones.prototype.music = function() {
  return`music is playing`
}
const beats = new HeadPhones('Beats');
const airPods = new HeadPhones('Apple');