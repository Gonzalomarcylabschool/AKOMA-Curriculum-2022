'use strict';
function MakePerson(name, age, occupation) {
    return {
        name,
        age,
        occupation,
        friends: [],
        // addFriends(friendName){
        //     this.friends.push(friendName);
        // }
    }
}
const gonzalo = new MakePerson('Gonzalo', 34, 'Teacher')

// function Person(name, age, occupation){
//         this.name = name;
//         this.age = age; 
//         this.occupation = occupation;
//         this.hello = function (){
//             return `Hello, I'm ${name}, a ${age} year old ${occupation}`
//         }
//     }
// const gonzalo3 = new Person('Gonzalo', 34, 'Teacher')
// const bayzed = new Person('Bayzed', 20, 'Fellow')
// const itzel = new Person('Itzel', 22, 'teacher');
// const ivan = new Person("Ivan", 20, "fellow")
// /*
// the 'new' keyword
// - creates a new empty object{}
// - sets the value of 'this' to be te new empty object
// - calls the constructor method
// */

function Person (name, age, occupation){
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.friends = []
    // this.hello = function (){
    //     return `Hello, I'm ${this.name}, at ${this.age} ${occupation}`
    // }
}
Person.prototype.hello = function (){
    return `Hello, I'm ${this.name}, a ${this.age} ${this.occupation}`
}
const Gonzalo = new Person('Gonzalo', 34, 'Teacher')
const Bayzed = new Person('Bayzed', 19, 'Fellow')

// console.log(Person.prototype)