## Prototype 

Lets see what happens if we run `console.log(Person.prototype)` in our console. 

As you can see we go the property `constructor` which is an object itself. We know what a constructor does it helps us build something, so far we have used it to build our objects. What else can we build with it?

Lets add our function from before using prototype, note that this goes outside of the Object constructor. 

```js
function Person (name, age, occupation){
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.friends = []
}
Person.prototype.hello = function (){
        return `Hello, I'm ${this.name}, at ${this.age} ${occupation}`
    }
const gonzalo = new Person('Gonzalo', 34, 'Teacher')
const bayzed = new Person('Bayzed', 19, 'Fellow')
```

## Prototype Inheritance
All JavaScript objects inherit properties and methods from a prototype:

`Date` objects inherit from `Date.prototype`
`Array` objects inherit from `Array.prototype`
`Person` objects inherit from `Person.prototype`
The Object.prototype is on the top of the prototype inheritance chain:

`Date` objects, `Array` objects, and `Person` objects inherit from `Object.prototype`.

prototype object chains allow objects to inherit features from one another, the prototype property and how it can be used to add methods to constructors, and other related topics.

Now that we have done this, lets console.log(Gonzalo). Do we see the property hello?

Where is it, and how do we accese it?


```js
Gonzalo.prototype//what does this give us
Gonzalo.__proto__ == Person.protptype// but why?
```