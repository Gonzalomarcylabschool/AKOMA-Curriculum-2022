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