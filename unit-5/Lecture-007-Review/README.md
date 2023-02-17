# Review 

## Intro to The Document Object Model (DOM)

The browser pulls in HTML documents, parses them, and creates object models of the pages in its memory. This model is the Document Object Model (DOM).

What does parse mean in the context of the DOM?

According to the Document Object Model (DOM), every HTML tag is an object. Nested tags are “children” of the enclosing one. The text inside a tag is an object as well.

Each element in the HTML document is represented by a DOM node. These nodes can be accessed and changed using JavaScript.

When the model is updated, those changes are reflected on screen.

## The why

There are several reasons why someone might need to learn how to use the Document Object Model (DOM). It is a major part of Front-End and Full-Stack development for the following reasons:

Dynamic web pages: The DOM provides a way to manipulate the content, structure, and style of a web page dynamically, without requiring a page reload. This is particularly useful for creating rich and interactive user experiences.

Cross-browser compatibility: The DOM is a standard maintained by the World Wide Web Consortium (W3C), and is supported by all modern browsers. By using the DOM to manipulate web pages, developers can ensure that their code will work consistently across different browsers.

Better organization: The DOM provides a way to structure and organize the content of a web page in a hierarchical manner, making it easier to understand and maintain complex web applications.

Improved accessibility: The DOM allows developers to programmatically manipulate a web page to make it more accessible for users with disabilities. For example, by using JavaScript and the DOM, developers can provide alternative text for images, or create custom keyboard navigation for users who cannot use a mouse.

Server-side rendering: The DOM can also be used on the server-side to generate HTML that can be sent to the browser for rendering. This is particularly useful for web applications that need to provide a fast and responsive user experience, even on slow network connections.(More on this in future units)

## What do we need to know about the DOM:

We can use the Developer Tools to access, test and debug the DOM.
The document is a built in variable that is given to us by the browser.
It is an instance of the Document class and has many built in properties and methods that we will use to manipulate our web pages.
We can manipulate webpages using JS
This makes Dynamic webpage
Dynamic webpages have a better User experience.

What engineers would work with the DOM most often?

* Front-end Developers
* Full-Stack

## Accessing Elements
| Method | Description |
|----------|----------|
| `getElementById()` | Selects an individual element within a document using a specific id. |
| `querySelector()` | Uses CSS selector to select the first matching element within a document. | 
| `getElementsByClassName()` | Allows you to select all elements with a given class attribute. |
| `getElementsByTagName()` | Locates all elements that match a given tag name. It's worth noting that you can also just use the tag name | 
| `querySelectorAll()` | Uses CSS selector to select one or more elements |

## Creating elements

One of the awesome parts of DOM manipulation is that you may want to create new elements based on how the user interacts with your code. you will need to use the `createElement` method. 

```js
 const h3 = document.createElement('div');
```

This only create the element we still need to add it to the page.

## Adding elements

| Property | Description |
|----------|----------|
| `append` | Adds new element or text to a node |
| `appendChild` | Adds new elements only |

append can also add more than one element. 

```js


const body = document.body;
body.append('here is some text');
body.appendChild('here is some more text'); 

body.append(h3);
// body.appendChild(h3);

```
## Adding content

| Property | Description |
|----------|----------|
| innerText | adds text to the page that will be human-readable only (the computer will not recognize if it cannot be seen on the page) |
| textContent | add text that will always be recognized |
|createTextNode()| this a method for adding text |

## Adding and changing attributes

There are a few ways change attributes to our elements. One way is by using the dot notation for that attribute:

```js
h1.id = 'Hello';
h1.title = 'this is the h1 of the page';
```
This is not always the case, so you will have the following methods to use:

| Property/method | Description |
|----------|----------|
| `className` | Change the value of the class attribute for an element |
| `setAttribute()` | Sets an attribute of an element |
| `removeAttribute()` | Removes an attribute from an element |


## `.remove` `.removeChild`

If we want to remove an element we would use the `.remove` method. If we wanted to remove an element that is a child of an element, we would use the `.remove child`

```js
const div = document.createElement('div');
const spanHi = document.createElement('span');

body.append(div, spanHi);
```

## Callback Functions

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

## Event listener / Event handler

click => things happens
press => things happens
load => thing happens

when I press `w` my charter walks forward. 

There is a few ways we can make this happen

```HTML
<element type="callback">
<h1 onclick="callback"></h1>
```
```js
element.type = function(){callback};
document.querySelector('h1').onclick = function(){callback};
// or

element.addEventListener("type", callback, option)
document.querySelector('h1').addEventListener("click", callback)
```

[click here](https://developer.mozilla.org/en-US/docs/Web/Events) for a list of all the event types.

## `DOMContentLoaded` and `defer`

 We are going to use `DOMContentedLoaded` if we ever have any dependance or have code that depends on elements and if defer is not available. 

```js
document.addEventsListener('DOMContentLoaded', () => {
  //function code  
});
```
`defer`

This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing DOMContentLoaded.

Scripts with the defer attribute will prevent the DOMContentLoaded event from firing until the script has loaded and finished evaluating.
