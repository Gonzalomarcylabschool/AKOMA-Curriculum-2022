// function Person(name, age, occupation){
//         this.name = name;
//         this.age = age; 
//         this.occupation = occupation;
//     }
// const gonzalo = new Person('Gonzalo', '34', 'teacher');

/*
the 'new' keyword
- creates a new empty object{}
- sets the value of 'this' to be te new empty object
- calls the constructor method
*/

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

console.log(Person.prototype)