class Person {
    constructor(name, age, occupation){
        this.name = name;
        this.age = age; 
        this.occupation = occupation;
    }
    greet(){
        return `Hello, my name is ${this.name}, a ${this.occupation} of ${this.age}years old.`
        }
    }

const gonzalo = new Person('Gonzalo', '34', 'teacher');

/*
the 'new' keyword
- creates a new empty object{}
- sets the value of 'this' to be te new empty object
- calls the constructor method
*/