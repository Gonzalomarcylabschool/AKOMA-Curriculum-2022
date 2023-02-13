# DOM API

## Accessing Elements
Before we can update a page, we need to find, or select, the element(s) that we want to update. In order to find an element, we need to search through the document. The syntax for the search looks something like this:

| Method | Description |
|----------|----------|
| `getElementById()` | Selects an individual element within a document using a specific id. |
| `querySelector()` | Uses CSS selector to select the first matching element within a document. | 
| `getElementsByClassName()` | Allows you to select all elements with a given class attribute. |
| `getElementsByTagName()` | Locates all elements that match a given tag name. It's worth noting that you can also just use the tag name | 
| `querySelectorAll()` | Uses CSS selector to select one or more elements |


```js
<h1 id='hello' class='myText'>Hello World</h1>
<p class='myText'>this</p>
<p class='myText'>is</p>
<p class='myText'>some</p>


document.getElementById('hello');//points to the h1
document.querySelector('#hello');//points to the h1
document.getElementsByClassName('myText');//points to the h1
document.getElementsByTagName('h1');//points to the h1 
document.h1 //same as getElementsByTagName. 
document.querySelectorAll('.myText')// points to the h1 and p tags
```

## Storing elements into variables

One way to abstract your code is by storing the elements to a variable, so tha you do not need to write out the whole syntax over and over again. 

```js
const body = document.body;

const h1 = document.getElementById('hello');

```

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
| Property | Description |
|----------|----------|