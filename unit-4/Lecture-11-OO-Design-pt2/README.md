# Object-Oriented Design Part 2

In the last lecture, we covered an approach to designing classes: 

* Clarify the requirements.
    * Understand the expectations.
        * If possible, ask clarifying questions.
    * 
* Figure out the primary use cases.
    * Think and talk though, what the Object(s) is/are supposed to do. 
* Identify key Objects.
    * How many Objects do you need? What are they? 
* Identify behaviors of the Objects.
    * What are the Objects supposed to do?
* Identify behaviors between Objects.
    * How do the Objects interact with each other, if they do?

There are 2 things that I want to talk about before we get in to our design challange

## `instanceof`

## `getter` `setter`
```js
const person = {
  firstName: 'Gonzalo',  
  lastName: 'Romero',
  get fullName ( ) {
    return `${person. firstName} ${person. lastName}`
  },
  set fullName (value) {
    const parts = value.split (' ');
    this.firstName = parts [0];
    this. lastName = parts [1];
  }
};

person. fullName = 'John Smith';
console. log (person) ;
```
## Design Challenge 

Today we are going to design an Amazon Store using Object Oriented JavaScript. What classes can you create? and How are they related?

For example, you cound have a `User` class, an `Cart` class, and an `Item` class.

A User has a cart (and only one cart), but a cart can have a list of many items.

There are many possible solutions, and you get to be as creative as you want to be!


What do need: 
* `user`
 * name
 * password
 * email
 * adress
 * membership
 * payment
 * cart
