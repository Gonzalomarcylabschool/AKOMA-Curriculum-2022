# Intro to The Document Object Model (DOM)

The browser pulls in HTML documents, parses them, and creates object models of the pages in its memory. This model is the Document Object Model (DOM).

According to the Document Object Model (DOM), every HTML tag is an object. Nested tags are “children” of the enclosing one. The text inside a tag is an object as well.

Each element in the HTML document is represented by a DOM node. These nodes can be accessed and changed using JavaScript.

When the model is updated, those changes are reflected on screen.

## The why

There are several reasons why someone might need to learn how to use the Document Object Model (DOM):

Dynamic web pages: The DOM provides a way to manipulate the content, structure, and style of a web page dynamically, without requiring a page reload. This is particularly useful for creating rich and interactive user experiences.

Cross-browser compatibility: The DOM is a standard maintained by the World Wide Web Consortium (W3C), and is supported by all modern browsers. By using the DOM to manipulate web pages, developers can ensure that their code will work consistently across different browsers.

Better organization: The DOM provides a way to structure and organize the content of a web page in a hierarchical manner, making it easier to understand and maintain complex web applications.

Improved accessibility: The DOM allows developers to programmatically manipulate a web page to make it more accessible for users with disabilities. For example, by using JavaScript and the DOM, developers can provide alternative text for images, or create custom keyboard navigation for users who cannot use a mouse.

Server-side rendering: The DOM can also be used on the server-side to generate HTML that can be sent to the browser for rendering. This is particularly useful for web applications that need to provide a fast and responsive user experience, even on slow network connections.

## Back to HTML

First lest make a new file and practice doing some HTML.



## Accessing Elements
Before we can update a page, we need to find, or select, the element(s) that we want to update. In order to find an element, we need to search through the document. The syntax for the search looks something like this:

| Method | Description |
|----------|----------|
| `getElementById()` | Selects an individual element within a document using a specific id. |
| `querySelector()` | Uses CSS selector to select the first matching element within a document. | 
| `getElementsByClassName()` | Allows you to select all elements with a given class attribute. |
| `getElementsByTagName()` | Locates all elements that match a given tag name | 
| `querySelectorAll()` | Uses CSS selector to select one or more elements |

```js
//getElementById()
<h1 id='hello' class='myText'>Hello World</h1>
<p class='myText'>this</p>
<p class='myText'>is</p>
<p class='myText'>some</p>


document.getElementById('hello');//points to the h1
document.querySelector('.hello');//points to the h1
document.getElementsByClassName('myText');//points to the h1
document.getElementsByTagName('h1');//points to the h1
document.querySelectorAll('.myText')// points to the h1 and p tags
```

| Property | Description |
|----------|----------|
| `parentNode` | Locates the parent element of an initial selection |
| `previousSibling` | Finds the previous sibling of a selected element |
| `nextSibling` | Finds the next sibling of a selected element |
| `firstChild` | Finds the first child of a selected element |