#  Constructors Prototypes

## Why

Let reminder ourselver of why we need to learn OOP? 

## Instance

Evertime that were use a factor function to create a new object we call it an instance.
```js
function makePerson(name, age, occupation) {
    return {
        name,
        age,
        occupation,
        friends: []
        hello: function(){
            //code
        }
    }
}
const gonzalo = makePerson('Gonzalo', 34, 'Teacher')
```
In the example above, I have created an instance called `Gonzalo`. 

Now factory functions are great, but that's if we want to use the functional programming paradigm. There is a better way of creating instances. We are going to use a constructor function and the `new` keyword. 

```js
function Person (name, age, occupation){
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.friends = []
}
const itzel = new Person('Itzel', 22, 'Teacher')
```

Few things happen here that abstract some of the things that happen in a factory function.

1. When we use the constructor, we are saying that `this` will be the name of that constructor. 

```js
function Person{
    //this === {}
}
```
2. We have abstracted the need to return an object. So when we create a new instance, it will automatically be am an object
```js
function Person{
    //this === {}
    //return this
}
```

## Methods in constructors

```js
function Person (name, age, occupation){
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.friends = []
    this.hello = function (){
        return `Hello, I'm ${this.name}, at ${this.age} ${occupation}`
    }
}
const Gonzalo = new Person('Gonzalo', 34, 'Teacher')
const Bayzed = new Person('Bayzed', , 'Fellow')

```
We have seen this before, what will we get if we type into the console `Gonzalo.hello`
What will `Gonzalo.hello === Bayzed.hello` evaluate to? `true or false`

If we have 2 instance, this is not big deal, but what if we have 100, or more. This will take up all of that space in memory. So how do we solve this problem. 


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
const Gonzalo = new Person('Gonzalo', 34, 'Teacher')
const Bayzed = new Person('Bayzed', , 'Fellow')
```
Now that we have done this, lets console.log(Gonzalo). Do we see the property hello?

Where is it, and how do we accese it?

```js
Gonzalo.prototype//what does this give us
Gonzalo.__proto__ == Person.protptype// but why?

```
What are the benefits of using constructors to create objects?
What is the benefit of storing methods on the prototype of the constructor?
What is the association between an object's prototype and its constructor?
What are the ways in which we can examine the link between an object and its constructor?
What is prototypal inheritance and how does it differ from class-based inheritance seen in object-oriented languages?



