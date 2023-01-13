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
 * name
 * 
 * email
 * adress
 * membership
 * payment
 * cart
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
}

class Cart{
  constructor(){
    this.items =[]
  }
  addToCart(item){//this takes in a object
    this.items.push(item)
  }
}