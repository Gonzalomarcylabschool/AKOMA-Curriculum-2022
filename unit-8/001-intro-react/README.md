# React

## What is React and why should you know how to use it?

ReactJS (or simply React) is a popular open-source JavaScript library for building user interfaces (UIs) or UI components. It allows developers to create reusable UI components and efficiently update and render them in response to changes in data. React uses a component-based architecture, where the UI is broken down into small, modular and reusable components, each of which has its own state and can be easily composed to form complex UIs. 

React also uses a virtual DOM (Document Object Model) which enables efficient updating of the UI without the need for the entire page to be refreshed. React can be used for building web applications, mobile applications, and desktop applications, and is widely used in the industry by companies like Facebook, Instagram, Netflix, and Airbnb.

## Composable 

React is compositional in nature because it allows you to break down a complex user interface into smaller and simpler components, and then compose these components together to create more complex user interfaces.

React components are self-contained, reusable units of code that represent a small piece of a UI. These components can be composed together to form more complex components, which can in turn be composed with other components to create even more complex components. This makes it easy to build and maintain large and complex UIs, as you can reuse components across different parts of your application, and even across different applications.

One of the key benefits of React's compositional model is that it enables developers to build applications with a high level of abstraction. By breaking down the UI into components, developers can create more modular, testable, and maintainable code. It also allows for greater code reuse and makes it easier to reason about the application's behavior.

## What is JSX?

JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.
```js

const h1 = <h1>Hello world</h1>

```

What does “syntax extension” mean?

In this case, it means that JSX is not valid JavaScript. Web browsers can’t read it!

If a JavaScript file contains JSX code, then that file will have to be compiled. This means that before the file reaches a web browser, a JSX compiler will translate any JSX into regular JavaScript.

Codecademy’s servers already have a JSX compiler installed, so you don’t have to worry about that for now. Eventually we’ll walk through how to set up a JSX compiler on your personal computer.