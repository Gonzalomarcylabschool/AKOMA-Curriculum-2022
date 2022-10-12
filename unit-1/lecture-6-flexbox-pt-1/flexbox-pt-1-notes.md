# Flexbox 
### Agenda
* **0:00 - 0:05** | Introduction / Warm up question / The why
* **0:05 - 0:15** | Axis | Flex container | Flex items
* **0:15 - 0:35** | Flex Container Properties | Demo
* **0:35 - 0:60** | Flex Item Properties | Demo

## The what and why

### The what:

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

### Axis

* There are 2 axis that flexbox used
    * `main` and `cross` axis
* Axis are dictated by the `flex-direciton` property.
    * By default `flex-direction` is set to `row`. This will make the `main` axis go from left to right of the screen and the `cross` go from top to bottom.
    * To change this you must set the `flex-direction` to a value of `column`. The `main` will then go from top to bottom and `cross` to go from left to right of the screen.
    * 
## Flex Container Properties
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