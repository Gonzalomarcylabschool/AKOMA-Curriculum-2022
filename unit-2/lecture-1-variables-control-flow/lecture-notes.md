**[00:00 - 00:05]**- | Introduction | The why | Warm up Question

**[00:05 - 00:10]**- | Expressions and statements | 

**[00:10 - 00:30]**- | Variables | Keywords | Naming Variables |

**[00:30 - 00:45]**- | Control flow mental model |

**[0045 - 00:60]**- | Control flow |

[Video](https://drive.google.com/file/d/1vCJG8zAcdAVqMvyUeLMckv_RAEfvH2Wr/view?usp=share_link)
## The Why

**Control flow** (or flow of control) is the order in which individual statements, instructions or function calls of an program are executed or evaluated. Know the best practices and rules of how to write your programs is going to help you write better, more efficent, and cleaner code. 

## Expressions and statements

A fragment of code that produces a value is called an _expression_.

```js
    true;
```

A statement stands on its own, so it amounts to something only if it affects the world. It could display something on the screen—that counts as changing the world—or it could change the internal state of the machine in a way that will affect the statements that come after it.

```js
    true ? "yes" : "no";
```

### Variables

A variable is a named reference to a value. That way an unpredictable value can be accessed through a predetermined name.

### Keywords
keywords are what we use to tell the computer that we are declaring a variable. There are 3 keywords we use in JavaScript: `let`, `var`, and `const`

## `var` vs `let`

One of the things that make JavaScript easy/hard to use is some of the shortcuts programed into it.

In other langues we would have to declare the type of value our variable will hold, and it cannot be changed. In javaScript we can store type of value into any variable, and they can be replaced with out having to create new vraibales 
When to use JavaScript const? Always declare a variable with const when you know that the value should not be changed.

## Const

Use const when you declare:

* A new Array
* A new Object
* A new Function
* A new RegExp
### Naming Variables

There are a few rules that you want to follow when you are naming your variables. 
* Do not start your your variable names with numbers.
* Always start your variable name with lower case characters. 
* Variable and function names written as camelCase.
* Global variables written in UPPERCASE.
* Constants (like PI) written in UPPERCASE.
* [Camelcase](https://dictionary.cambridge.org/us/dictionary/english/camel-case) is the best way to name your variables that have more than one word in it. 

```js
    
    let variableName = "value";
    
```

## Control Flow

### Metal Model

Sequence 

Selection

Itertaiton

### Code

Selection => conditionals

Iteration => loops