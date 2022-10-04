# Boxmodel and Layout Foundations Notes

* **0:00 - 0:05** | Introduction / The why
* **0:05 - 0:25** |  CSS review / Box Model
* **0:25 - 0:35** | Visual formatting Model / Block, Inline, and Inline-Block elements
* **0:35 - 0:60** | Box Sizing / Dimensions / Images / Float / Position

## The Why...

Yesterday we talked about how we need to start thinking about the structure of what we are working on. Seeing the boxes is the first part, structuring the order of the boxes in HTML is the second part, and understanding how you will arrange them on your page using CSS is the final part.

## CSS review and additional information

* Called _cascade_ because all styles cascade from the top of a stylesheet to the bottom, allowing different styles to be added or overwritten.
  * The _cascade_ works inside individual selectors as well.
   ```CSS
    p {	
        background: orange;
        background: green;
    }
   ```
   In this example, since the green background declaration comes after the orange, it will override it.

* Selectors have something calles a sepcificity weight, which determains the superiority a selector is given when a styling conflict occurs. A tag holds a low point value of 0-0-1. The class selector has a medium specificity weight and holds a point value of 0-1-0. Lastly, the ID selector has a high specificity weight and holds a point value of 1-0-0. Specificity points are calculated using three columns. The first column counts ID selectors, the second column counts class selectors, and the third column counts type selectors. 
* The higher the specificity weight of a selector, the more superiority the selector is given when a styling conflict occurs.
    * Example
    ```HTML
    <p>Some text</p>
    <p class="style">More text</p>
    <p id="og" class="style">Final text</p>
    ```
    ```CSS
    p{
        color : blue;
    }
    .style{
        color : red;
    }
    #og{
        color : green;
    }
    ```
* When selectors are combined the browser will read them from right to left. The selector farthest to the right, directly before the opening curly bracket, is known as the _key selector_. Any selector to the left of the key selector will serve as a _prequalifier_.
  * Example:
    ```CSS
    .hotdog, p, ul, a {
        background: brown;
    }	
    ```
    The browser will locate all of the `a` selectors being that it is the _key selector_ then it will locate the `ul`, then `p`, and finally the `.hotdog`.

    This is important to know becuase this will effect the speed in which your your project loads into the browser. Depening how you use this can slow it down and that not somthing you want for your projects. 

## The Box Model


* According to the box model concept, every element on a page is a rectangular box and may have width, height, padding, borders, and margins.
* Each part of the box model corresponds to a CSS property: 
    * `width` 
    * `height` 
    * `padding` 
    * `border`
    * `margin`

    ```CSS
    div {
      margin: 20px;
      border: 6px solid #949599;
      padding: 20px;
      height: 100px;
      width: 400px;
    }	
    ```

* According to the box model, the total width of an element can be calculated using the following formula:
  `margin-right + border-right + padding-right + width + padding-left + border-left + margin-left`

## Margins and Padding

* The *margin* property allows us to set the amount of space that surrounds an element. Margins for an element fall outside of any border and are completely transparent in color.
* The *padding* property is very similar to the margin property; however, it falls inside of an element’s border, should an element have a border. The padding property is used to provide spacing directly within an element.

## Margin collapse
* Top and bottom margins "collapse" between `block` elements, meaning if you position two adjacent `block`s one above the other, the margin between them isn't thesum of the top and bottom margins. Instead, the margin _collapses_ to the larger of the two.
* Margin collapse only happens with top and bottom, not left and right margins.

## Border

* The border is a boundary that surrounds the padding. and lies right before the margin. 
 
## Width and Height
* The width and height define how much horizontal and vertical space it needs for the content area of the box, which may or may not include the padding and borders. In most cases, the browser can determine the width and height automatically.


### Border Box
```css
div {
    box-sizing: border-box;
}
```
* The border-box value alters the box model so that any border or padding property values are included within the width and height of an element. When using the border-box value, if an element has a width of 400 pixels, a padding of 20 pixels around every side, and a border of 10 pixels around every side, the actual width will remain 400 pixels.

# The Visual Formatting Model
* In CSS The Visual Formatting Model describes how the elements are processed and display it for visual media. This includes continuous media such as a computer screen.
* In the visual formatting model, each element in html file generates zero or more boxes according to the box model. The layout of these boxes is effected by:

    * Box dimensions and type.
    * Positioning scheme (normal flow, float, and absolute positioning).
    * Relationships between elements in the document tree.
    * External information (e.g., size of the screen).
* The `display` property has almost thirty values, but `block`, `inline-block`, and `inline` are most used.
* The display property determines how the browser lays out an element relative to its neighbors.

## Block elements
* _block elements_ (headings, paragraphs, sections, tables, forms, etc) by default occupy all horizontal space available within its container, with nothing to its left or right.
* If a page contains 3 block elements directly inside the `body` and nothing else, then all three elements will display one above the other like a stack of blocks.
* `block` elements use the box properties (width, height, margin, padding, border) to determine size of the element.
* Though a block element takes up an entire row, its width is not altered to do so. If a `div` is 500px in a 900px `section`, the remaining 400px will remain empty.
* Most elements are block by default!

## Inline elements
* Inline elements provide some semantic meaning to content (`span`, `b`, `strong`, `em`,*`img`* etc)
* inline elements handle the dimension properties (width, height, padding, border, and margin) differently from the way block elements treat them.
* Browsers handle left and right margins and padding for inline elements in the same way as for block elements, but they process other box model properties differently.
* For inline elements, browsers:
  * ignore the width and height properties (except with the img element), but instead use values computed from the element content.
  * ignore top and bottom margins.
  * padding and borders may extend into rows above and below but will not interfere or shift them but overlap them. See [example](http://d3jtzah944tvom.cloudfront.net/202/images/lesson_2/the-visual-formatting-model-01.png)

* *block* elements occupy any available width, regardless of their content, and begin on a new line
    * Example:
      ```HTML
        <div>
        The following paragraph is a
        <p class="highlight">block-level element;</p>
        its background has been colored to display both 
        the beginning and end of the block-level element's influence.
        </div>
       ```
* *inline* elements occupy only the width their content requires and line up on the same line, one after the other.
    * Example
      ```HTML
        <div> The following span is an <span class="highlight">
        inline element</span>; its background has been colored 
        to display both the beginning and end of the inline element's 
        influence. </div>
        ```
* Every element has a default display property value; however, as with all other property values, that value may be overwritten. `<p>`, for example is `display: block` by default.
[Click here for a list of all of the inline and block elements](https://www.w3schools.com/html/html_blocks.asp)
[Next steps](https://docs.google.com/presentation/d/1nDpKb5IevlBImPV-znPqrVJ0AgMx8gFRddV8rQNJwMY/edit?usp=sharing)

