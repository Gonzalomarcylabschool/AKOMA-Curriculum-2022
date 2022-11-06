
scope
global scope
function scope
block scope
lexical environment
lexical scope
creation (compile) phase
execution phase

How do variables declared with var, let, and const differ when it comes to redeclaration, reassignment, and hoisting?
What is global, function, and block scoping?
Why wouldn't we simply declare all of our variables in the global scope?
How are function parameters scoped?
How does JavaScript reconcile variables declared with the same name in different scopes?

What is scope
Where certain variales are available (what is available to me in my function)
They are between the `{ }`
`{ }` this is a block

What is global, function, and block scoping?

lets start from small to largest
```js
    //this is the area of the global scope
    let 
    function myFunction{
        //this is the function scope
        if (true){
            //this is a block scope
        }
    }

```
How do variables declared with var, let, and const differ when it comes to redeclaration, reassignment, and hoisting?

lexicon enviorment
{{{{{{}}}}}}
there is block scope 
```js
    let a = "hi";
    {
        let a = "hello";
        console.log(a);
    }
    
    console.log(a);
```
global scope
the code we write inside of the file.

Where certain variables are available 
