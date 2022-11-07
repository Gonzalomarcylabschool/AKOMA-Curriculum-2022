Before the introduction of ES6 in 2015, `var` was the only keyword avaible to declare variables in JavaScript. Any variables declared with `var` would be hoisted, meaning the variable is defined through out its scope.  It can also be reassigned.
 See example below:
 ```js
 //hoisting and global scope example
   console.log(x); // will return undefinded. The program recognizes that this variables exists. 
    var x = 5;
    console.log(x); // will print 5.
    x = 4; //the variable has been reassigned and will  print 4.
  ```
  `var` is also effected by function scope. If you declare a variable with the keyword `var` in a function it will be avaiable for the entirety of the function. 
  ```js
  //function scope example
  function myfunction(){
    var x = 1;
    console.log(x);//will print 1 to the console.
    function myNestedFunction(){
      console.log(x);//still available in the scope and will print 1 to the console.
    }
    myNestedFunction();//will print 1 to the console.

  }
  ```
  The problem with the `var` keyword is that it can be redeclared at anypoint. If you redeclare in a block, it will also be redeclared out side of the block.
  ```js
  //redeclare example
  var b = 1;// variable declared; global scope
  console.log(b); // output 1
  if (true){
    var b = 2;//variable redeclared; gloabl scope
    console.log(b);// output 2
  }
  console.log(b);// symtom of variable being redeclared: output 2
  ```
  Unlike `var`, `let` and `const` cannot be redeclared nor hoisted. This is thanks to the effect of block scope. When a `let` or `const` variable are declare inside of `{ }`(curly braces) better know as a block, they can only be accessed from inside of the the block. One of the added benifits of let is that it can still be reassigned just like the `var` keyword.

  ```js
  // let example
  let x = 1; //global scope
  console.log(x)// will print 1
  if (true){
      let x = 2;// block scope
      let y = 3; // block scope
      console.log(x); //will print 2
      console.log(y); // will print 3
  }
  console.log( x);// will print 1
  console.log(y); // will return a refrence error. 
  x = 4; //reassign the value
  console.log(x); // will print out 4 
  ```
  Note that in the "redecalre example", the first time and the 
  3rd time the value of the variable was printed out they were diffrent, but in the `let` example the first and third time the values of the varibles were printed they were the same.  

  `const` is effected by block scope just like the `let` keyword. The main diffrences between `const` and `let` its abilty to be reassigned.  
  ```js
  const z = 1;
  console.log(z)//print out 1
  if (true){
    const z = 2;
    const w = 3;
    console.log(z);//print out 2
    console.log(w);// print out 3
  }
  console.log(z)// print out 1
  console.log(w);//will return a refrence error. because its outside of the block
  z = 4; // will return a TypeError because const can't be reassigned.
  console.log(z); //will not run because of the erros above
  ```
  As you can see above because `const` variables will cannot be areassigned, when you try to re assign it, you will get a TypeError. 