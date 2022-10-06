## Everything is a box
### HTML

The Hyper Text Markup Langue, better know as HTML, is the tool Developer usually use the build the stuctor of a website. Once you are able to reconise all of the boxes that need to be on your project you can code them in to you .html document.

*HTML5* (the most current version) added Semantic Tags.
* Semantic Tags are more expressive divisions. They are still boxes but they convey additional meaning.
* Structurally semantic tags include: `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`, `<aside>`, `<main>`
* Other new semantic tags include: `<figure>`, `<figcaption>`, `<blockquote>`
* Lastly, we are very familiar with the following semantic tags: `<p>`, `<h1>…<h6>`, `<ul>`, `<li>`, `<strong>`, `<em>`
* Non-semantic tags: `<div>`, `<span>`, `<b>`, `<i>`
These tags don’t give any information about what’s inside.

#### Why we use them:

* Make it easier to read and write our code
* Helps with accessibility 
* Search optimization  

## CSS
Stands for *Cascading Style Sheets*. It is the language used to add style (color, font, spacing) to the elements of a website. CSS is typically written in .css files and referenced by .html files using the `<link>` tag. (note: you must ensure the .css file has the same file name as the one in your link tag.)
```HTML
<link rel="stylesheet" href="styles.css">
```
### Selector and Sepcificity

* Selectors have something calles a sepcificity weight, which determains the superiority a selector is given when a styling conflict occurs. 
* A tag holds a low point value of 0-0-1
* A Class holds a point value of 0-1-0.
* An ID  holds a point value of 1-0-0
    * The higher the specificity weight of a selector, the more superiority the selector is given when a styling conflict occurs.
    * Example
    
*   Combined selectors will be read from right to left by the browser. The selector farthest to the right is known as the _key selector_. Any selector to the left of the key selector will serve as a _prequalifier_.
  * Example:
    ```CSS
    .hotdog, p, ul, a {
        background: brown;
    }	
    ```
    This is important to know becuase this will effect the speed in which your your project loads into the browser. Depening how you use this can slow it down.

### Box model 

![Box Model](https://static-assets.codecademy.com/Courses/Learn-CSS/Box-Model-in-DevTools/DevToolsTabs.png)



#### Things to remember
 * The box model is based on the `margin`, `border` and `padding` around the content of block and inlin-block elements. 
 * The width and height properties only effect the content size. `margin`, `border` and `padding` will not be effected.
 * Always take in to consideration margin colaps when thinking about your designs. When 2 block elements are stacked on top of eachother only, the larger margin of the 2 will be the one displayed. 
### Visual Formating Model
##### Things to remember
* There are 3 type of elements, `block`, `inline`, and `inline-block`. [Click here for a list of block and inline elements](https://www.w3schools.com/html/html_blocks.asp)
* A `block` take up the whole row
* `inline` does not take up the whole row will not take on box model properties
* `inline-block` will take up box model properties but will not take up the whole row, there for can be inline.