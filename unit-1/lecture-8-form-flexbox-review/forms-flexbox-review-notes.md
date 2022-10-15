## Agenda
* Review 
    * Forms
    * Flexbox
        * Container
        * items
* build a site
    *   HTML
    *   CSS
## Why do we use Forms?

Forms are the main point of interaction between the user and a website. 

Examples of interactions:
* Log in
* Buying things
* Adding content in the form of comments, photos or videos.
 
Forms are used to submit information/data for a spesific purpose.

Facebook (now Meta), Apple, Netflix, Instagram, Snapchat, Google, Spotify and so many more use form all day, every day, at all times! Knowing how to build forms and implement them is a skill that you will need if you are looking to get in to anyone of these gigs  

**But how!?!**

### Quick Pitstop
**HTTP** (or Hypertext Transfer Protocol) defines a set of rules for _how_ data is formatted and transmitted over the internet. We'll learn more about this in Unit 7 but here is the basic idea:
* A user submits a form and they are either **sending information** to a server or **requesting information** from a server.
* There are two "methods" that HTTP requires us to specify
    * `POST`: send
    * `GET`: request
* Learn more about HTTP [here.](https://www.youtube.com/watch?v=kBXQZMmiA4s)

Forms are wrapped in a `<form>` tag. This tag _typically_ contains two attributes:
* `method` - Indcates the HTTP method to be used (e.g. `post` or `get`) 
* `action` - Determines the location where the form information should be sent (e.g. the URL of our server).

```html
<form method="get" action="./handle_action.php">
    <!--Input elements / submit button go here-->
</form>
```
Lets take a quick look at 2 real world examples: [Facebook](https://www.facebook.com/login/) [Netflix](https://www.netflix.com/login) [Google](https://www.google.com/)
> For now, we want to focus on how to build forms without actually sending an HTTP message. Our forms can leave these attributes out and we'll return to using these attributes to build functional forms later. 

## How do you construct a Form?

There are four elements used to create a form: 
* `<form>`
    * As mentioned before the `<form>` element is used to create an HTML form for user input.  Like the `<section>`, `<footer>`, or `table` element, its a container, but the browser know when it see this tag that its main purpose will be to gather information.
* `<label>`
    * The `<label>` tag defines a label for form elements.
    * It's useful for screen-reader users, because the screen-reader will read out loud the label when the user focus on the input element.
    * The `<label>` element also help users who have difficulty clicking on very small regions (such as radio buttons or checkboxes) - because when the user clicks the text within the <label> element, it toggles the radio button/checkbox.
    * 
    
* `<input>`
    * This element is whats used to collect the information/ data from the user. It can be displayed in many ways, depending on the `type` attribute used. [Click here](https://www.w3schools.com/html/html_form_input_types.asp) to see all the `type` attribute a `<input>` can use.
    * the main ones we will be using today will be:
        * text
        * number
        * email
        * checkbox
        * radio
        * submit(for button)
        
**Note**

The for attribute of the `<label>` tag should be equal to the id attribute of the `<input>` element to bind them together.
```HTML
<label for="name">Name</label>
<input name="name" id="name">
```
You can just put the input inside of the label like so: 

```HTML
<label>
    Name
    <input name="name">
</label>
```
but using the former is best practice. 
* `<button>`
   *  Used for submitting the form data to a form-handler.

### The what: Flexbox

* Flexbox aims to provide a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic.
* The main idea behind the flex layout is to give the container the ability to alter its items' width/height (and order) to best fill the available space (mostly to accommodate to all kind of display devices and screen sizes).
* A flex container expands items to fill available free space or shrinks them to prevent overflow.
* Flexbox is direction-agnostic.
* We call the parent element the **_flex container_** and the inner elements **_flex items_**.

### The why:

* Repsonsive and mobile firendly 
* Make it easier to posistion child elements. 
* No margin collapse.
* No need for floats.
* Better for content flow.
* Supported across browsers.

### Parent and child relationship
* A parent is an element that is directly above and connected to an element in the document tree. In the diagram below, the `<div>` is a parent to the `<ul>`.

* A child is an element that is directly below and connected to an element in the document tree. In the diagram above, the `<ul>` is a child to the `<div>`.
```HTML
  <div class="parent">
    <ul class="child parent">
      <li class="child sibling"></li>
      <li class="child sibling"></li>
      <li class="child sibling"></li>
    </ul>
  </div>
```

[Click here ](http://web.simmons.edu/~grabiner/comm244/weekfour/document-tree.html#:~:text=Parent%20and%20Child,element%20in%20the%20document%20tree.)to read more about HTML document tree.
### Axis

* There are 2 axis that flexbox used
    * `main` and `cross` axis
* Axis are dictated by the `flex-direciton` property.
    * By default `flex-direction` is set to `row`. This will make the `main` axis go from left to right of the screen and the `cross` go from top to bottom.
    * To change this you must set the `flex-direction` to a value of `column`. The `main` will then go from top to bottom and `cross` to go from left to right of the screen.
* There are 2 other values that will change the axis: `row-reverse` and `column-reverse`

![flex-direciton properties  and their effect on the main and corss axis](https://samanthaming.gumlet.io/flexbox30/4-flexbox-axes.jpg.gz)

### Flex Container Properties
* `display`
  Defines a flex container. Can be block or inline, given the value.
  ```css
  .container {
    display: flex; /* or inline-flex */
  }
  ```
* `flex-direction`
  Establishes the **main axis**, which determines the direction of flex items in the flex-container.
  ```css
  .container {
    flex-direction: row | row-reverse | column | column-reverse;
  }
  ```
* `flex-wrap`
  By default, flex items try to fit on one line. You can change this and have them wrap when needed with `flex-wrap`.
  ```css
  .container{
    flex-wrap: nowrap | wrap | wrap-reverse;
  }
  ```
* `justify-content`
  Defines alignment along the main axis by determining how leftover space in a flex container is distributed.
  ```css
  .container {
    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
  }
  ```
  * `align-items`
    This determines how flex items ae aligned on the **cross axis**. Think of it as `justify-content` for the cross axis.
  ```css
  .container {
    align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
  }
  ```
  * `align-content`
    When there are multiple lines on a cross axis, `align-content` determines how to distribute the space between those lines.
  ```css
  .container {
    align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
  }
  ```

## Flex Item Properties
* `order`
  By default, flex items are laid out in source order. The `order` property can be used to override the default position of a particular flex item.
  ```css
  .item {
    order: <integer>; /* default is 0 */
  }
  ```
* `flex-grow`
  Determines the extent to which a flex item can grow to fill unused space in a flex-container.
  ```css
  .item {
    flex-grow: <number>; /* default 0 */
  }
  ```
* `align-self`
  Allows the default (cross axis) alignment to be overridden for an individual flex item.
  ```css
  .item {
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
  }
  ```