# Types, Values, and Operators

**[00:00 - 00:05]**- | Introduction with Ani | The why | Warm up Question

**[00:05 - 00:15]**- | Primiative data types | 

**[00:15 - 00:35]**- | Operators | Short-circuiting of logical operators |

**[00:35 - 00:60]**- | Type Coercion |

## The Why

## Warm-up Questions
* Name some of the primiative data types in JavaScript? What is the last non-primitive data type?
* What are some examples of unary, binary, and ternary operators?
* What are logical operators?
* What is the difference between the equality `==` and strict-equality `===` operators?
* What is short-circuit evaluation and why might it be useful?
* When does JavaScript automatically change the type of a value?

## Primative data Types

Computers use binary digits, or simply put bits to read, modify, and/or create new data. There are literally billions of bits being proccses by the computer at any givin moment. We need to seperate them in to chunkc that represent peiecs of information. We call these chunks **values**. 

When we declare a value we must invokes its name
```js
    let variableName = "value";
```
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

```js
    typeof(a)
    'number'
    typeof(b)
    'string'
    typeof(c)
    'boolean'
    typeof(d)
    'object'
    typeof(10.10)
    'number'
    typeof(e)
    'undefined'
```

## Operators

An operation is a calculation on one or more values called operands mapping to an output value. An operator is a symbol or sign that maps operands to output values.

You will be using operartors to do the following:

* Arithmetic
* Comparison
* Logic

### Unary

Any operator that only takes one operand is called a Unary Operator. 

[click here for a list of unary operator](https://www.digitalocean.com/community/tutorials/javascript-unary-operators-simple-and-useful)

You should be familar with the Unary operators that preform Arithmetic: `++` and `--`

Not all operators are symbols. Some are written as words. One example is the typeof operator, which produces a string value naming the type of the value you give it.

```js
    console.log(typeof 4.5)
    // → number
    console.log(typeof "x")
    // → string
```


The minus operator can be used both as a binary operator and as a unary operator
```js
    console.log(- (10 - 2))
    // → -8
```

### Binary

Anytime there are 2 operands you will be using a binary operartor:

```js
    let a = 1 + 2;
    let b = 5 - 3;
```
Something to keep in mind when doing arithmetic is to think about precedence of the operators:

### Ternary 


```js
    function getFee(isMember) {
      return (isMember ? '$2.00' : '$10.00');
    }
    
    console.log(getFee(true));
    // expected output: "$2.00"
    
    console.log(getFee(false));
    // expected output: "$10.00"
    
    console.log(getFee(null));
    // expected output: "$10.00"
```
## Type Coercion

```js
    console.log(8 * null)
    // → 0
    console.log("5" - 1)
    // → 4
    console.log("5" + 1)
    // → 51
    console.log("five" * 2)
    // → NaN
    console.log(false == 0)
    // → true
```

[More type coercion](https://github.com/Gonzalomarcylabschool/AKOMA-Curriculum-2022/blob/main/unit-2/lecture-0-type-value-operators/type-coercion.md)

## Key Terms
* type
* `typeof`
* operator
* ternary operator
* binary operator
* unary operator
* logical operators `||`, `&&` and `!`
* short-circuit evaluation
* type coercion


