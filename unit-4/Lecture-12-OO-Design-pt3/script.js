// class Person{
//   constructor(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     // this.fullName = `${this.firstName} ${this.lastName}`
//   }
//   get fullName(){
//     return `${this.firstName} ${this.lastName}`
//   }
//   set fullName (value) {
//     const parts = value.split(' ');
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   }
// }

// class Gonzalo extends Person{
//   constructor(firstName, lastName, dab = false){
//     super(firstName, lastName);
//     this.dab = dab;
//   }
  
// }

// class Dog{
//   constructor(name){
//     this.name = name;
//   }
// }
// const gonzalo = new Person('Gonzalo', 'Romero');
// const randy = 'randy';
// const randy2 = new Person('randy', 20);
// const viva = new Dog('Viva');
// // if (viva instanceof Dog){
// //   console.log('is a dog');
// // };
// const gonzaloClass = new Gonzalo('Gonzalo', 'Romero', true);

/*
* `user`
    properties:  
      * name
      * email
      * adress
      * membership
      * payment
      * cart
    behaviors: 
      addItem
      remove item
 */

/*
item class:
  properties:
    name : p
    price : p
    discription : P
    * _itemId; this will be a closure
    review : []
  behaviors:
    addReview
    item name toString
  nice to have:
    similar items
*/

/*
cart class:
  properties: 
    list of items
  behaviors:
    number of items
    total
*/
class User{
  constructor(name, email, payment, membership, address){
    this.name = name;
    this.email = email;
    this.payment = payment;
    this.membership = membership;
    this.address = address;
    this.cart = new Cart();
  }
  addToCart(item){//this takes in a object
    this.cart.items.push(item)
  }
}

class Cart{
  constructor(){
    this.items =[]
  }
}

class Item{
  constructor(name, price, description){
    this.name = name;
    this.price = price;
    this.description = description;
    this.review = [];
  }
  addReview(newReview){
    //How do I know I'm getting the correct input/ 
    //are there any limts
    this.review.push(newReview);
    return `Thank you for your review!`
  }
}

const gonzalo = new User('Gonzalo', 'gonzalo@marcylabschoo.org', 0000111122223333, 'prime', '123 marcy way, brooklyn 11234')
const marker = new Item('marker', 9.99, 'this marker draws for you!')