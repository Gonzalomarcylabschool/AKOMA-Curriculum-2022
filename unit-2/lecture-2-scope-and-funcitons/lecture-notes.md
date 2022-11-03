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

```js
    //how to write a function:
    function functionName(){
        //code to run;
    }
    // example
    function print(){
        console.log("test");
    }
```

### Invoking functions

```js
    print();
```

### Functions with Parameters

When you want to pass through data into your functions you can use parameters. They act like variables that only work in the function. 