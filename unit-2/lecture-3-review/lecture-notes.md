## Data Types

The values can be one of the following:
* numbers: whole: `1`, `1000`, `1000000000`, or decimal `10.123`
* strings: anything inside of quotations `"string"`, `"123"`, `"!@123dsflk"`
* booleans:  `true` `false`
* Empty values: `undifined` `null`
* objects:`{key:value}`or arrays: `[value, value, value]`


Of these value types, we have our primative data types where are :
* string
* number
* bigint
* boolean
* undefined
* symbol
* null

We can see what type a value is by invoking it in our console and using `typeof()`.

## Operators

An operation is a calculation on one or more values called operands mapping to an output value.
You will be using operartors to do the following:

* Arithmetic
* Comparison
* Logic

### Unary Binary and Ternary Operators

```js
    //unary
    typeof();
    ++;
    --;
    -;(only sometimes)
    
    //binary
    let a = 1 + 2;
    
    //ternary
    true ? "if true output" : "if false output"
```
### Logical Operators

#### And

`&&` is the AND operator. It returns `true` if both operands evaluate to `true`.

#### Or

`||` is the OR operator. It returns `true` if either of its operands evaluate to `true`.

#### Not

The `!` operator returns the opposite boolean value 

### Truthy and Falsey — Converting to Boolean Values
We can convert values to Booleans using the `Boolean` function:

```javascript
// The six falsey values
Boolean(null); // false
Boolean(""); // false (same with any other empty string)
Boolean(0); // false (same with any other version of 0: -0, 0n)
Boolean(undefined); // false
Boolean(NaN); // false 
Boolean(false); // false 

// Everything else is truthy
Boolean(true); // true
Boolean({}); // true
Boolean([]); // true
Boolean(99.99); // true
Boolean("reuben"); // true
Boolean("null"); // true
// etc...
```

In the programming world, you will often hear people refer to certain values as _truthy_ or _falsy_. These are just cute names that we use to describe values that _evaluate to_ `true` or `false` when _coerced_ (made to change). 

Boolean coercion most commonly occurs when we write `if` statements. If a non-boolean value is provided as the condition of an `if` statement, the JavaScript interpreter will automatically coerce the value. 

```js
if ("" || 0 || null || undefined || NaN) {
    console.log("Will this print?")   
} else {
    console.log("Nope!")
}
```
### Type Coercion

#### rule 0

Number Conversion Rules of Thumb:
* If it looks like a number, it gets cast as a number.

#### rule 1

When using the binary plus `+` operator, if one or more arguments is a string, both arguments will be converted to strings and concatenated together. Otherwise, both arguments will be coerced into numbers and added using addition operator.

#### rule 2:

When using any other arithmetic operator (`-`, `/`, `%`, `*`), both arguments are coerced to numbers and the operator is applied.

## Control flow

Sequence: What is the order we want to to make things happen, where are we starting and where will we end.

Selection: What things will effect how we get to the end?

Itertaiton: Do we have to repeat any part of our code?

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