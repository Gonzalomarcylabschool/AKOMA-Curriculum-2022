[Video from todays lecture.](https://us02web.zoom.us/rec/share/dkWPdlvkYJpYedce1Xm2eweyaWmQcT_K8fbIbnp-7BDZBgldH9mIweDXJyQ2YXWk.VsP5dEBY1VzPXcSU?startTime=1664809268000)

[Slides from lecture.](https://docs.google.com/presentation/d/1flOZ-zI8vZEk9apOBiDpb14Yv_6uQnT_DlQ4JEgN5GE/edit?usp=sharing)
### Code-a-Long - Our Landing Page Mockup

<img src="https://github.com/The-Marcy-Lab-School/Fall-2022-Curriculum-BMC/blob/main/se-unit-1/lesson-0-semantics/images/div-boxes.gif?raw=true" alt="drawing" width="600"/>

* We will recreate [our Tribute Page](https://codepen.io/freeCodeCamp/full/zNqgVx) together! But we can make some fun styling changes along the way!
* We will download the [Page Ruler Chrome Extension](https://chrome.google.com/webstore/detail/page-ruler/jcbmcnpepaddcedmjdcmhbekjhbfnlff/related?hl=en) to get precise pixel measurements.
* We will use the following elements in our page:
* We will also download the [Eye Dropper Chrome Extension](https://chrome.google.com/webstore/detail/eye-dropper/hmdcmlfkchdmnmnmheododdhjedfccka) to find exact colors.

#### Our Process
0. Open up https://codepen.io/freeCodeCamp/full/zNqgVx. Without inspecting the HTML, try to visually identify each of the elements listed in the structure below. What boxes can you imagine?
1. Create a file called `index.html` to write your HTML. 
2. Use semantic elements to create a structure. Then, you can fill in the content elements (text, pictures, links). We will use this structure:
  * `body`
    * `header`
      * `h1`
      * `p`
    * `main`
      * `figure`
        * `img`
        * `figcaption`
      * `section`
        * `h2`
        * `ul`
          * A bunch of `li` elements. 
      * `blockquote`
        * `p`
        * `cite`
    * `footer`
      * `h3`
        * `a`
3. Be mindful of spacing and indentation!
4. Code a little, test a little. Use the "Preview" button to see your rendered HTML. Then pop it out into a new window.
5. Style the page. Use the eye dropper and ruler extensions to your advantage!

## CSS
**CSS** is the language used to add style (color, font, spacing) to the elements of a website. CSS is typically written in `.css` files and referenced by `.html` files using the `<link>` tag. 

```html
<link rel="stylesheet" href="styles.css">
```

> CSS can also be written directly into `.html` files when placed inside `<style>` tags or as inline styles.

**CSS selectors** and **CSS properties** are used to target HTML elements and define style rules for the selected elements to follow. The syntax is as follows:

```css
selector {
  property-name: property-value;
}
```

There are many ways to select HTML elements for styling but the three most common ways are:
* By tag name: `p { color: blue; }`
* By `.class` name `.red-text { color: red; }`
* By `#id` name `#special { color: purple; }`

Some CSS properties to get started with are:

Color:
* [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
* [`background`](https://developer.mozilla.org/en-US/docs/Web/CSS/background)

Text:
* [`font-family`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
* [`font-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
* [`line-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
* [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)

Box Model:
* [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width)
* [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height)
* [`padding`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
* [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
* [`margin`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
  
## Vocabulary

#### HTML
HTML is the language used to create the **structure** and **content** of a website. HTML is written and stored in `.html` files and rendered by browsers.

#### HTML Tags
HTML tags are pieces of HTML code that create either structure or content on a website. They all have a name and are written using angle brackets (`<>`). 

Most HTML tags have an _opening_ and a _closing_ tag with content or other HTML tags nested inside. For example, a paragraph tag looks like this:

```html
<p>This is shown as text</p>
```

Some HTML tags are _self closing_, meaning they don't require a closing tag. In this case, `/>` is used instead of `>`. For example, an image can be created like this:

```html
<img src="url-to-img.jpg"/>
```

#### Elements

We refer to HTML tags that are rendered by the browser as _HTML Elements_. For example, the HTML tag `<p>some text</p>` creates an HTML text element.

#### Semantic HTML tags

HTML tags are tags that convey additional meaning about the element that they create beyond physical appearance alone. Structurally semantic tags include: `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`, `<aside>`, `<main>`
* Other new semantic tags include: `<figure>`, `<figcaption>`, `<blockquote>` 
* Lastly, we are very familiar with the following semantic tags: `<p>`, `<h1>`...`<h6>`, `<ul>`, `<li>`, `<strong>`, `<em>`

#### Non-Semantic tags

Non-semantic tags do not convey any additional meaning and do not provide context for what content they contain. Non-semantic tags include:
* `<div>`, `<span>`, `<b>`, `<i>`

#### Structural elements vs. content elements

We can think of HTML elements as either displaying content (content elements) or providing structure for content (structural elements). 

Structural tags might include:
* `<div>`, `<main>`, `<article>`, etc...

Content tags might include:
* `<p>`, `<img>`, `<h1>`, `<a>`

#### Child Elements and Parent Elements

HTML elements can be _nested_ inside one another. This is how we create structure. When we nest one element inside another, the inside element is known as the _child_ element and the outside element is the _parent_ element.

In this example below, the box created by `<div>` is the parent element while the text created by `<p>` is the child element.

```html
<div id='parent'>
  <p>This text is a child</p>
</div>
```

#### CSS

CSS is the language used to add style (color, font, spacing) to the elements of a website. CSS is typically written in `.css` files and referenced by `.html` files using the `<link>` tag. CSS can also be written directly into `.html` files when placed inside `<style>` tags or as inline styles.

#### CSS Selectors

CSS selectors are used to target HTML elements for the purpose of defining style rules for the selected elements to follow. There are many ways to select HTML elements for styling but the three most common ways are:
* By tag name
* By `class` name
* By `id` name

```css
p {
  color: blue;
}
.redText { 
  color: red;
}
#specialParagraph {
  color: purple;
}
```
