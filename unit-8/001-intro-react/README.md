# React

## What is React and why should you know how to use it?

ReactJS (or simply React) is a popular open-source JavaScript library for building user interfaces (UIs) or UI components. It allows developers to create reusable UI components and efficiently update and render them in response to changes in data. React uses a component-based architecture, where the UI is broken down into small, modular and reusable components, each of which has its own state and can be easily composed to form complex UIs. 

React also uses a virtual DOM (Document Object Model) which enables efficient updating of the UI without the need for the entire page to be refreshed. React can be used for building web applications, mobile applications, and desktop applications, and is widely used in the industry by companies like Facebook, Instagram, Netflix, and Airbnb.

## Composable 

React is compositional in nature because it allows you to break down a complex user interface into smaller and simpler components, and then compose these components together to create more complex user interfaces.

React components are self-contained, reusable units of code that represent a small piece of a UI. These components can be composed together to form more complex components, which can in turn be composed with other components to create even more complex components. This makes it easy to build and maintain large and complex UIs, as you can reuse components across different parts of your application, and even across different applications.

One of the key benefits of React's compositional model is that it enables developers to build applications with a high level of abstraction. By breaking down the UI into components, developers can create more modular, testable, and maintainable code. It also allows for greater code reuse and makes it easier to reason about the application's behavior.

## Declarative

```jsx
//declarative
ReactDOM.render(<h1 className ='header'>Hello, React!</h1>, document.getElementById("root"))

//imperative
const h1 = document.createElement("h1")
h1.textContent = "Hello, React!"
h1.className = "header"
document.getElementById("root").append(h1)
```

## JSX

```jsx
const h1 = document.createElement("h1")
h1.textContent = "Hello world"
h1.className = "header"
console.log(h1)

// <h1 class="header">

const element = <h1 className="header">This is JSX</h1>
console.log(element)

/*
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {
        className: "header", 
        children: "This is JSX"
    }, 
    _owner: null, 
    _store: {}
}
 */

// JSX
ReactDOM.render(element, document.getElementById("root"))
```

### Quick note: One parent element
When you write your JSX that you want to render you, there can only be one parent element

```jsx
//this is correct
ReactDOM.render(
    <h1 className ='header'>Hello, React!</h1>,
    document.getElementById("root"));

//this is incorrect
ReactDOM.render(
    <h1 className ='header'>Hello, React!</h1>
    <p>This is some text!</p>,
    document.getElementById("root"));

//this is how we fix it
ReactDOM.render(
    <div>
        <h1 className ='header'>Hello, React!</h1>
        <p>This is some text!</p>,
    </div>
    document.getElementById("root"));
```
In this example the first block of code only has one element, so it is seen as the parent element

In the second block of code there are 2 elements, but no parent element. 

in the third example we se that 
## you can store into variables. 
