// //these variables would be global.
// console.log(z);
// var x = 1;
// var y = 2;
// function myfuction(){
// 	//this would be a local variable. 
// 	var z = 3;
// }
// {
//   var z = 10;
// }
// console.log(z);

//**********************************************************
// //this is the area of the global scope
// let a = 1;
// //console.log(a);
// function myFunction() {
// 	//this is the function scope
// //	console.log(a);
// 	let b = 2;

// 	if (true) {
// 		//this is a block scope
// 		let c = 3;

// 	} 

// 	{
// 		//anything in here would also be blcokscope
// 		let d = 15;
// 			console.log(d);
// 	}

// }

// myFunction();
//**********************************************************
//var examples
// console.log(x); // will return undefinded. The program recognizes that this variables exists. 
// var x = 5; //this will be hoisted and have a global scope.
// console.log(x); // will print 5.
// x = 4; //the variable has been reassigned and will  print 4.
// console.log(x) // will print 
//**********************************************************
//function scope example
// function myfunction() {
//  var x = 1;
//  console.log(x); //will print 1 to the console.
//  function myNestedFunction() {
//   console.log(x); //still available in the scope and will print 1 to the console.
//  }
//  myNestedFunction(); //will print 1 to the console.
// }
// myfunction();

// this is also an example of function scope
// var x = 1;
// console.log(x);//will print 1 to the console.
// {
//   console.log(x);//still available in the scope and will print 1 to the console.
// }
//  console.log(x);//will print 1 to the console.
//**********************************************************
// //redeclare example
// var b = 1; // variable declared; global scope
// console.log(b); // output 1
// if (true) {
// 	var b = 2; //variable redeclared; gloabl scope
// 	console.log(b); // output 2
// }
// console.log(b); // symtom of variable being redeclared: output 2
//**********************************************************


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
//**********************************************************
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
//**********************************************************
// var b = 1;
// console.log(b);
// if (true){
//     var b = 2;
//     console.log(b);
// }
// console.log(b);
//**********************************************************
// let c  = 1;
// console.log(c);
// if (true){
//     let c = 2;
//     console.log(c);
// }
// console.log(c);
//**********************************************************

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
//**********************************************************
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



// // Lexical Scope example
//  let x = 1; //global scope
//  let y = 2;
//  console.log(x)// will print 1
//  if (true){
//      console.log(x); //will print 1 its reffrencing its parent scope
//      let y = 3; // block scope
//      console.log(y); // will print 3
//  }
//  console.log(x);// will print 1
//  x = 4; //reassign the value
//  console.log(x); // will print out 4 


// function myFunction(par){

//  return par;
// }

// console.log(myFunction("this"))
// console.log(par);

// console.log(x); // will return undefinded. The program recognizes that this variables exists. 
//   var x = 5;
//   console.log(x); // will print 5.
//   x = 4;
//   console.log(x)




// let z = 1; //initialized
// let a; //declared
// a = "you were right people!!";
// console.log(a);
// console.log(z); //print out 1

// if (true) {
//     const z = 2;
//     const w = 3;
//     console.log(z); //print out 2
//     console.log(w); // print out 3
// }
// console.log(z); // print out 1

// //z = 4; // w
// console.log(theTest("testing this function"));

// function myFunction(parameter){
//       console.log(parameter)
//     }
//   //  console.log(parameter);
// myFunction("this is a function");

// function theTest(testing){
//     let x = testing;
//     return x;
// }


let x = "hello";
console.log(x)
{
    let z = 1;
    console.log(z)
    {
        console.log(z)
    }
}

x = "hello";


