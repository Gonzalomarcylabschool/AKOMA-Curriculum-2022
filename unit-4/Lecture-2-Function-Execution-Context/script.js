
"use strict";
// // //debugger;
// var a = 'Gonzalo';
// var aa = 1;
// var aaa = 2;

// // function myFunction() { // The whole function is stored.
// //     console.log('this is a function'); // will not run until the function is invoked in the execution phase.
// // }
// // //myFunction(); 

// debugger;
// function add(num1, num2) { 
//     console.log('this is a function'); 
//     return num1 + num2
// }
// var aaaa = add(aa, aaa);
// var aaaaa = add(5, 10);

//console.log(this)

//function hello(){
  //  console.log(this);
//}
// debugger
// const pet = {
//     type: 'dog',
//     sound: 'woof',
//     makeSound(){
//         return `The ${pet.type} make a ${this.sound}.`
//     }
// }
// pet.makeSound();
// a = 100;
function hello(){
   return this;
}
hello();

const math = {
    value1: 1,
    value2: 2,
    add(){
        return this.value1 + this.value2
    }
}
function strictTest(){
  "use strict"
  let name = "gonzalo"
  return () => {
    name = "steve";
    return `the new name is ${name}`
  }
}

const nameChange = strictTest();