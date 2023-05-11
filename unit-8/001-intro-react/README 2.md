# React

### Key Terms:

+ React
+ Component
+ `render`
+ JSX
+ React DOM
+ Virtual DOM * 
+ props 
+  inject js

ESmodule import react and reactDOM


### Essential Questions:

+ What is React? Why has it become so popular?
+ What is a component? How does this paradigm differ from model-view-controller?
+ What is JSX?

## What is React and why should you know how to use it?

* ReactJS (or simply React) is open-source JavaScript library for building UI or UI components.
* It allows developers to create _reusable _ UI components and efficiently update and render them in response to changes in data.
* React uses a _component-based_ architecture, where the UI is broken down into small, modular and reusable components, each of which has its own state and can be easily composed to form complex UIs. 

React also uses a virtual DOM (Document Object Model) which enables efficient updating of the UI without the need for the entire page to be refreshed. React can be used for building web applications, mobile applications, and desktop applications, and is widely used in the industry by companies like Facebook, Instagram, Netflix, and Airbnb.

## Composable 

React is compositional in nature because it allows you to break down a complex user interface into smaller and simpler components, and then compose these components together to create more complex user interfaces.

React components are self-contained, reusable units of code that represent a small piece of a UI. These components can be composed together to form more complex components, which can in turn be composed with other components to create even more complex components. This makes it easy to build and maintain large and complex UIs, as you can reuse components across different parts of your application, and even across different applications.

One of the key benefits of React's compositional model is that it enables developers to build applications with a high level of abstraction. By breaking down the UI into components, developers can create more modular, testable, and maintainable code. It also allows for greater code reuse and makes it easier to reason about the application's behavior.

## Declarative
Up until this point we have been writing imperative code. Imperative programming requires an understanding of the functions necessary to solve a problem, rather than a reliance on models that are able to solve it. The focus of imperative programming is how the problem should be solved, which requires a detailed step-by-step guide.

```jsx
//imperative

const h1 = document.createElement("h1") // use createElement to make an h1
h1.textContent = "Hello, React!" // use the textContent property to change the value of the h1
h1.className = "header" // use className property to add the 
document.getElementById("root").append(h1) // getElementById to get the element with an id of 'root' and  append function to add the h1 that was created. 
```

Lets take a look ad how we can set up some react and use the reactDOM object to do the same thing. First lets add some react to our project. Now this is the "easy" way to do this. We will need to add this using `npm` later.

```html
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script defer src="App.js" type="text/babel"></script>
```
Now that we have the ability to use react lets see what the `ReactDOM` object does

```jsx
console.log(ReactDOM);
```

Let use the `render` method to add our content to our page. It takes in the following arguments: jsx, element(where we will append).


```jsx
//declarative
ReactDOM.render(
    <h1 className ='header'>Hello, React!</h1>//jsx
    , document.getElementById("root")//element where we are appending
    ); // this does it all
```


## JSX

So, what is JSX? It's a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code. 

```jsx
const h1 = document.createElement("h1")
h1.textContent = "This is not JSX"
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
## You can store into variables. 
