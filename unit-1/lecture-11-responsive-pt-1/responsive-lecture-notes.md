# Responsive Layout Part 1

**[00:00 - 00:05]**- | Introduction | The why | Warm up Question

**[00:05 - 00:15]**- |  | 

**[00:15 - 00:35]**- |  |

**[00:35 - 00:60]**- | 

### New meta tag

To make sure that your page can support the media queries tha you will add to them, you need to make sure that you have the following `meta` tag in the head:
```HTML
    <meta name="viewport" content="width=device-width">
```
## Fluid Layout

Fluid Layout are based on proportionally laying out your website so elements take up the same percent of space on different screen sizes
They will adjust with the hight and width of a page. We achieve this using % values in the `width` and `height` properties in CSS. 

**Note:** You must insure that the parent elements will be able to hold the amount of space that you want your content to take up. 

Let take a look at what a page like this looks like.


## Responsive Web Design

Unlike Fluid Layouts, Responsive layouts uses CSS Media Queries to present different layouts based on screen sizes/type of screen

## Media Queries

A CSS media query can be used to adapt a website’s display and layout to different screen sizes. A media query begins with the `@media` keyword and is followed by one or more conditions that check screen size, orientation, resolution, and/or other properties. If these conditions are met, all CSS rules within the media query will be applied to the page. Media queries are used for responsive web design by tailoring specific stylesheets to different types of devices such as laptops, tablets, mobiles, and more.

```CSS
    @media media type and (condition: breakpoint){
        //CSS rules
    }
```
### Media Types

* `all`: Cover all of the Media Types
* `screen`: only focues on the Screen size (width and Height)
* `speech`: for Screen readers
* `print`: If something will be printed how will it look. 

### Conditions

* Width:
* Height: 
* orientation
* aspect-ratio
* [click here for more](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

### Breakpoints
This is the value that the condition must meet in order for the CSS rules in the Media Query will take effect.

Every website is accessed via devices with different screen sizes and resolutions. The software has to render perfectly across each screen size. Content or images cannot be distorted, cut out, or obscured.

To allow this, developers have to use CSS breakpoints. These are points defined in the code. Website content responds to these points and adjusts itself to the screen size to display the accurate layout.

Since CSS breakpoints for responsive design are implemented with media queries, they are also sometimes termed media query breakpoints.

With CSS breakpoints in place, the website content will align itself with screen size and displays itself in a way that pleases the eye and facilitates visual consumption. 
### Common Media Query breakpoints widths:
| Breakpoint | Description |
| -------- | ---------- |
| < 481px | Mobile devices |
| 481px — 768px | iPads, Tablets |
| 769px — 1024px | Small screens, laptops |
| 1025px — 1200px | Desktops, large screens |
| 1201px and greater | Extra large screens, TV |

### Bootstrap breakpoints:
| Breakpoint | Description |
| -------- | ---------- |
| < 576px | xs |
| >=576px | small |
| >=768px | medium |
| >=992px | large |
| >=1200px | xl |
| >=1400px | 2xl |

### Tailwind breakpoints:
| Breakpoint | Description |
| -------- | ---------- |
| < 640px | xs |
| >=640px | small |
| >=768px | medium |
| >=1024px | large |
| >=1280px | xl |
| >=1536px | 2xl |


