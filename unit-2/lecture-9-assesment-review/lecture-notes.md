# Unit 2 Review 

## Hoisting

JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

The reason this happens because JavaScript runs in 2 phases: creation (compile) phase and the execution phase. During the creation phase the code will be compiled and store all of the functions and variable declared with the var keyword in memory to be able to access them in the code. This way during the execution phase It knows exactly where to refrence them.

Any Declaration functions can be hiosted. This will allow them to be recognised anyhwhere in the scope of the entire code.  

```js
  //function scope example
  myfunction(); //here the function will run due to hoisting. It is still at the the top of its scope. this will run
  //myNestedFunction() this will not work because it is outside of it's scope.
  function myfunction(){
  	myNestedFunction();//This function is being hoisted inside of its scope it will and can run.
    var x = 1;
    console.log(x);//
    function myNestedFunction(){
      console.log(x);//
    }
  }
  ```

**Note**: arrow and expressions functions can't be hosited.

Any variables declared with `var` would be hoisted as well, meaning the variable is defined through out its scope.This however, does not mean that it will carry its assigment when it is hoisted. The value of the assigment will only be avaiable after its assigment. It can then later in the code be reassigned.

```js
 //hoisting and global scope example
   console.log(x); // will return undefinded. The program recognizes that this variables exists. 
    var x = 5;
    console.log(x); // will print 5.
    x = 4; //the variable has been reassigned and will  print 4.
  ```
## Variable keywords

Before ES6, `var` was the only keyword avaible to declare variables in JavaScript. Any variables declared with `var` would be hoisted, meaning the variable is defined through out its scope. This happens because of the two phases JavaScript runs in.: creation (compile) phase and the execution phase. During the creation phase the code will be compiled and variable declared with the `var` keyword in memory to be able to access them in the code. This way during the execution phase It knows exactly where to refrence them. 

This however, does not mean that it will carry its assigment when it is hoisted. The value of the assigment will only be avaiable after its assigment. It can then later in the code be reassigned.

`var` is also effected by function scope. If you declare a variable with the keyword `var` in a function it will be avaiable for the entirety of the function. 
  
The problem with the `var` keyword is that it can be redeclared at anypoint. If you redeclare in a block, it will also be redeclared out side of the block.
  
Unlike `var`, `let` and `const` cannot be redeclared nor hoisted. This is thanks to the effect of block scope. When a `let` or `const` variable are declare inside of `{ }`(curly braces) better know as a block, they can only be accessed from inside of the the block. One of the added benifits of let is that it can still be reassigned just like the `var` keyword.

 `const` is effected by block scope just like the `let` keyword. The main diffrences between `const` and `let` its abilty to be reassigned.  
 

## spread operator, rest parameter, `arguments` objects.
The the **spread** operator is denoted by three dots (...). 

### So how is it used with arrays?

There are so many ways we can use this!!!

#### copy arrays

```js
    let nums;
    const numArray = [1, 2, 3, 4, 5, 6]
    nums = [...numArray];
    console.log(numArray);
    console.log(nums);
```

 #### Inserting the elements of one array into another

```js
    const baked_desserts = ['cake', 'cookie', 'donut'];
    const desserts = ['icecream', 'flan', 'frozen yoghurt', ...baked_desserts];
    console.log(desserts);
    //Appending baked_desserts after flan
    const desserts2 = ['icecream', 'flan', ...baked_desserts, 'frozen yoghurt'];
    console.log(desserts2);
```

#### Array to arguments

```js
    function sum(x, y, z) {
        return x + y + z;
    }
    const numbers = [1, 2, 3];
    console.log(sum(...numbers));


    const minNum = [1,2,300,-1,0,-100];
    console.log(Math.min(...minNum));

    
```
## rest parameters

What is the purpose of rest parameters? 

lets say that we want to create a function that can take in as many arguments as we want.

```js
    function sumAll(...args) { // args is the name for the array
      let sum = 0;

      for (let arg of args) sum += arg;

      return sum;
    }

    alert( sumAll(1) ); // 1
    alert( sumAll(1, 2) ); // 3
    alert( sumAll(1, 2, 3) ); // 6
```
### `arguments` objects

```js
function argFunc(x, y, z){
	console.log(arguments);
}

function argFuncNoArg(){
  
  console.log(arguments);
}

argFunc(1, 2, 3)
argFuncNoArg(4, 5, 6)


//argFunc(1, 2, 3, 4, 5, 6)
```
## passed by value vs passed by refrences.

Primitive data types are passed by value, meaning that the values are store in a single space in moemory. When they are copied to a new variables, they are copied from their location in memory and stored in their own space in memory from the original variable to the new variable. When we change the value to the orginal variable, it will not change the value in the variable where we copied its original value.
```js
  let x = 1; //this will be stored in location "a" in memory.
  let y = x; //this will copy the value stored in location "a" and store it in the new location "b"
  x = 2// this will change the value in location "a" leaving the value in location "b" unchanged.
```


The when we create an object it will create a refrence to point to where the memory lives in memory.

```js
  const obj = { key: "value" }; // this has created a reference to location "a" in memory.
```
If we try to copy `obj` into another variable it will only copy the reference to location "a" and not the properties in the `obj`. 

```js
  const obj2 = obj// this has only stored the reference to location 
  "a"
```
All change to the orginal object will be reflected when we use the variable we stored the reference of the first one. If we use the second variable to make change it will make changes to the object that was originally declared. This is happening because its referencing location "a" in memory.

```js
console.log(obj)// => { key: "value" }
console.log(obj2) // => { key: "value" }
obj.key = "values2";
console.log(obj2)// => { key: "values2" }
obj2.key = "this is the new value."
console.log(obj)// => { key: "this is the new value" }
```
## Mutable Vs Unmutable and Reassignments

A mutable value is one that can be changed without creating an entirely new value. In JavaScript, objects and arrays are mutable by default, but primitive values are not — once a primitive value is created, it cannot be changed, although the variable that holds it may be reassigned.

```js

//Mutating
let obj = {
	key: "value1"
}
console.log(obj.key)

obj.key = "value"
console.log(obj.key)

let arr = [1, 2, 3]
console.log(arr);
arr[1] = 5;
console.log(arr);

//unmutable
1;// this value is one and will always be one and it will never change making it unmutable.
let a = 1; //make a space in memory to store the value of 1, which can still never change. 
// reassignment
a = 2;//when we reassign a variable a new value, 1 never changed it will always be 1, the variable where it was store removed it and now is storing a new value.

//object reassignments


arr = obj;//
console.log(arr);
```

## Types Values Operators