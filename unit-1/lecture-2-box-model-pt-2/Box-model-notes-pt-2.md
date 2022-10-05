# Boxmodel and Layout Foundations Notes pt. 2

* **0:00 - 0:05** | Introduction / The why
* **0:05 - 0:20** | Margin border padding review / Block and Inline review and examples
* **0:20 - 0:30** | Inline-Block elements / Box Sizing 
* **0:35 - 0:60** | Dimensions / Images / Float / Position

## The Why...

Continuing building a strong foundation in how we need to think about the structure of what we are working on. Seeing the boxes is the first part, structuring the order of the boxes in HTML is the second part, and understanding how you will arrange them on your page using CSS is the final part. Today we are going to go in more depth on how CSS allows us to do this using Box and visual formatting model.

## Review

### Box model 

![Box Model](https://static-assets.codecademy.com/Courses/Learn-CSS/Box-Model-in-DevTools/DevToolsTabs.png)

#### Things to remember
 * The box model is based on the `margin`, `border` and `padding` around the content of block and inlin-block elements. 
 * The width and height properties only effect the content size. `margin`, `border` and `padding` will not be effected.
 * Always take in to consideration margin colaps when thinking about your designs. When 2 block elements are stacked on top of eachother only, the larger margin of the 2 will be the one displayed. 
### Visual Formating Model
##### Things to remember
* There are 3 type of elements, `block`, `inline`, and `inline-block`. [Click here for a list of block and inline elements](https://www.w3schools.com/html/html_blocks.asp)
## Inline-Block elements
* `inline-block` elements act just like `block` elements except they do *not* take up the entire row by default. Thus, you can place `inline-block` elements side-by-side.
* `inline-block` elements observe the `width` and `height` properties. Padding, margin, and boder all work as they do with `block` elements.
* Note: *`img` elements are NOT `inline-block`. They are `inline` by default.*
* Browsers use the `vertical-align` property to perform vertical alignment for adjacent `inline-block` elements.

## Box Sizing
* The `box-sizing` property can have two values: `content-box` and `border-box`.
* The `content-box` setting is default in all modern browsers. This is the standard box model. Padding and border are not included in element height or width
* With `border-box`, width and height are calculated inclusive of padding and border.
* The `border-box` setting is "best" since it simplifies the math a front-end developer must do. For example, if we have a box with a width of 50% and padding of 12px; border-box ensures that it's precisely 50% of the container width, not 50% plus 24-pixels.
* The code below can be used to set `border-box` everywhere.
  ```CSS
    html {
        box-sizing: border-box;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }
  ```


# Dimensions
* `px`, `rem`, `%` called measurement units

## Absolute Units
*  CSS distinguishes between a physical pixel (also device pixel or display pixel) and what we call the *CSS reference pixel* (or CSS pixel or reference pixel).
*  The size of a reference pixel is the size of a pixel on a display that has 96 pixels per inch. 

## Relative Units
## Ems and Rems
* `em` and `rem` are relative to the calculated (from the parent element) or root (from the html element) font sizes, respectively. The calculated font size is the height of the current font in pixels. 
* The root font size is the height of the base font for the document or the browser's default (usually 16 px).
* If the calculated font size is 20 pixels and the root font size is 16 pixels, then 1.5em is 30px (20 * 1.5), while 1.5rem is 24px (16 * 1.5).
* You may find it easier to work with rems instead of ems since rems are consistent. Once you've set the root font size for a document, `1.5rem` means the same thing everywhere in that document. This relationship isn't true for ems; they compound.
  * Example
  ```CSS
    /* Root font-size on the document level */
    html {
      font-size: 20px;
    }
    
    @media (max-width: 900px) {
      html { font-size: 16px; }
    }
    
    @media (max-width: 400px) {
      html { font-size: 12px; }
    }
    
    /* Type will scale with document */
    h1 {
      font-size: 2.6rem;
    }
  
  ```
## Auto
* The `auto` specifier, as a `width` or `length` tells the browser to try to fit the entire element including its margins in its container.
* As a left or right `margin` on a block element, it tells the browser to push the element all the way to the right or left.
  * You can center a `block` element by setting right and left `margin` to `auto`.
* As a top or bottom `margin`, `auto` is equal to 0.
* Helpful diagram illustrating difference between `width: auto` and `width: 100` [here](http://d3jtzah944tvom.cloudfront.net/202/images/lesson_2/measurement-units-02.png)

# Images

## JPG
* The jpg format uses a _lossy_ form of compression, in other words, it trades off image quality for file size.
* If you edit a jpg, the resulting file has less detail than the original. If you edit again it loses even more detail.
* You can set loss levels when saving a jpeg.
* In general, jpgs don't work well for CSS backgroung images.

## PNG
* PNGs use compression but it is non-lossy. Lack of lossiness means larger file size.
* pngs are ideal for images that need their details.

## The img element
* `<img>` is a self-closing tag. It has two attributes: `src` and `alt`

# Floats
* Elements float within their immediate container, which puts a limit on how far the browser can move the floated element. 
  * If you float two elements in a row in the same direction, their vertical edges (counting their margins) will touch, providing they fit in the same row.
  * Any whitespace (other than margins and padding) that would otherwise appear between the elements will collapse.

## Contain Floats
* The browser removes floats from the normal document flow, and that means the container no longer contains the floated items. 
  * Hence, the browser cannot determine the container's height, so it can't render the container correctly.
  * Solution: `overflow: hidden` (or `overflow: auto`) is the simplest way to clear a floated element. 
    * Apply the property to the container element and watch it expand to wrap your floated elements.

* Instead of an `overflow` propery, a *clearfix* can be applied to a container.
  * A clearfix is a standard pattern that developers use to ensure a container doesn't lose its floated children. 
  * It employs an invisible block element as the last child element of the container and the clear property.  
  
  ```css
    #columns::after { /* This rule is the clearfix */
    clear: both;
    content: "";
    display: block;
    }
  ```
  * In the example above, a new `block` child element (`""`) is added to the end of the #columns element.
  * The `clear: both` css property then has the new `block` element clear all floated elements. 
  * This empty/invisible `block` element sits below any floated elements, thus the container contains it. 
* *Note:* When you float an element, it uses as much space as it needs to display its content

# Positioning
## Offset Properties
* `top`, `bottom`, `left`, `right`
* Each offset measures the inward distance from the side of the container named by the offset property. 
* For instance, `bottom: 50px` indicates a position 50px inward from (above) the bottom edge of the container. 
* _* Remember that the offset is always inward when working with positive offset values. Negative offsets shift elements in the opposite direction.*_

## The `position` property
### `position: static`
* The default. statically positioned items are part of the page flow. 
* They appear in the same order they appear in the markup. 
* The offset properties do not affect static elements.

### `position: relative`
* Relative positioning moves an element to a new position relative to where the browser would otherwise put it. 
* For example, if you include `left: 50px` and `bottom: 100px` with `position: relative`, the browser will shift the element 50px inward from the left edge and 100px upward from the bottom edge from where the browser would place it otherwise.
* *Relative positioning does not remove an item from the document flow.* 
  * The browser positions the next element as though the previous one still occupied its pre-offset location.

### `position: absolute`
* Absolute positioning causes the browser to move the element to a new position within a container element.
* By default, the container is the nearest ancestor element that has a `relative`, `absolute`, or `sticky` position
* If no ancestor container is present, `body` is used.
* *Absolute positioning removes elements from the normal document flow.* No matter where you position it, the browser won't treat that space as occupied space.

### `position: fixed`
* Fixed positioningsets an element to a fixed position within the window. 
* The element does not move if the user scrolls the page. (Think navigation bar at the top of a page.)
