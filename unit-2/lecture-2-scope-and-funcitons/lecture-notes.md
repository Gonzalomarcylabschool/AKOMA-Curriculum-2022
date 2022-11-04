**[00:00 - 00:05]**- | Introduction | The why |

**[00:05 - 00:10]**- | Scope | 

**[00:10 - 00:30]**- | What is a Function | How do we write a function | How do we invoke a function |

**[00:30 - 00:40]**- | Function with parameters |

**[0045 - 00:60]**- | Hoisting |

## The Why
Functions enable you to break down a problem into smaller chunks. After you create a function, the details of how it works can almost be forgotten about(but don't). In this way the detail is abstracted, allowing the programmer to focus on the bigger picture.

Show example of one of my projects
## Warm up Question

## Scope
Global Variables − A global variable has a global scope which means it can be defined anywhere in your JavaScript code.

Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.


Block vs function
```js
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z);
// → 40
```
### What is a function?

A function is a tool in programing that we use to break up the code that we want to run in our program. Somtimes it might be somehting that we would like to use many times in our program, but not necessarily loop it. 

### How do we write a function?

funtion expressions and arrow functions
function decleartions

```js
    //how to write a function:
    function functionName(){
        //code to run;
    }
    // example declaration
    function print(){
        console.log("test");
    }
    
    // expressions
    
    let funName = function() {
        //code
    }
    // arrow 
    cosnt arFunName = () => {
        //code
    }
```

### Invoking functions

```js
    print();
    funName;
    arFunName;
    
```

### Functions with Parameters

When you want to pass through data into your functions you can use parameters. They act like variables that only work in the function. 


```js
    //how to write a function:
    function functionName(parameters){
        //code to run;
    }
    // example declaration
    function print(text){
        console.log(text);
    }
    
    // expressions
    
    let funName = function(text) {
        console.log(text);
    }
    // arrow 
    cosnt arFunName = (text) => {
        console.log(text);
    }
```
### Hoisting

JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

So while the code is compiled it see's where the keywords are for the and stores them into memory


declaration functions can be hiosted 

arrow and expressions functions can't

Reminders
study guide pratice assesment 

bring question to lecture always
