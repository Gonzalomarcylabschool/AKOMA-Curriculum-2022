
// // Any variables declared here will have a global scope.
// var  a = "this";// What Scope do you think this variable have?
// if (true){
//     //any variable that is declared here will have a local scope
//     var b = "that"; // What Scope do you think this variable have?
// }
// function {
//     //any variable that is declared here will have a local scope
//     var c = "also this";// What Scope do you think this variable have?
// }

// //var a = 1;
// function my(){
//     var a = 2; 
//     console.log(a);
// }
// //var a = 3;
// console.log(a);
// my();
// //var a = 4;
// console.log(a);

// var b = 1;
// console.log(b);
// if (true){
//     var b = 2;
//     console.log(b);
// }
// console.log(b);

// let c  = 1;
// console.log(c);
// if (true){
//     let c = 2;
//     console.log(c);
// }
// console.log(c);


// let x = 1;
// console.log(x)
// if (true){
//     let x = 2;
//     console.log(x);
// }
// console.log( x);
// let x = 1; //global scope
//   console.log(x)// will print 1
//   if (true){
//       let x = 2;// block scope
//       let y = 3; // block scope
//       console.log(x); //will print 2
//       console.log(y); // will print 3
//   }
//   console.log( x);// will print 1
//   //console.log(y); // will return a refrence error. 
//   x = 4;
//   console.log(x);

// const z = 1;
//   console.log(z)
//   if (true){
//     const z = 2;
//     const w = 3;
//     console.log(z);
//     console.log(w);
//   }
//   //console.log(w);
//   z = 4; // will return and error
//   console.log(z);

 function hello() {
      var a = 'hello';
    }

    hello();
    console.log(a);