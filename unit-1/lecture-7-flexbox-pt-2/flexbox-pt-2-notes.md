

### Axis Review

![flex-direciton properties  and their effect on the main and corss axis](https://samanthaming.gumlet.io/flexbox30/4-flexbox-axes.jpg.gz)


* `flex-direction`
  Establishes the **main axis**, which determines the direction of flex items in the flex-container.
  ```css
  .container {
    flex-direction: row | row-reverse | column | column-reverse;
  }
  ```
### Flex Container Properties continued

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

### Flex Item Properties
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