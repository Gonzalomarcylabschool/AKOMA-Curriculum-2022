# Responsive Layout Part 2

**[00:00 - 00:05]**- | Introduction | The why | Warm up Question

**[00:05 - 00:15]**- |  | 

**[00:15 - 00:35]**- |  |

**[00:35 - 00:60]**- | 

## Warm up question/review

* What is Fluid layout?

* What is Responsive Layout?

* What is the diffrence between the two?
* 

## `!important`

An `!importan` declaration provides a way for a stylesheet author to give a CSS value more weight than it naturally has.
```CSS
    #example {
    font-size: 14px !important; 
    }
    
    #container #example {
        font-size: 10px;
    }
```
Without the use of `!important`, there are two reasons why the second declaration block should naturally have more weight than the first: The second block is later in the stylesheet (i.e. it’s listed second). Also, the second block has more specificity (`#container` followed by `#example` instead of just `#example`). But with the inclusion of !important, the first font-size rule now has more weight.

### `!important` in Media Queries

Since the styling that you will place within your media queries is intended to override previous styling when certain conditions are met, depending on the complexity of the previous styles, overriding with !important can be an ideal and neater solution.

For example, in this contrived example, if the main stylesheet contained styles such as the following:

```CSS
    .content .teaser {
       background:#aaa;
       padding:0;
    }
    .content .teaser.main {
       width:60%;
       background:#ddd;
       float:left;
    }
    .content .teaser.other {
       width:40%;
       float:right;
    }
    .content .box .teaser.main {
       width:75%;
    }
    .content .box .teaser.other {
       width:25%;
       background:#eee;
    }                               
```
And you wanted to override this on a “mobile” layout, instead of writing:
```CSS
    @media only screen and (max-width:28.125em) {
       .content .teaser.main, .content .teaser.other, .content .box .teaser.main, .content .box .teaser.other {
          width:100%;
          background:#ccc;
          float:none;
       }
    }
```
You could make use of !important and simply write:
```CSS
    @media only screen and (max-width:28.125em) {
       .content .teaser {
          width:100% !important;
          background:#ccc !important;
          float:none !important;
       }
    }
```

## Setting the Media type for Media Queries
 
As we know there are a few media types when we set our media queries. 

* `all`: Cover all of the Media Types
* `screen`: only focues on the Screen size (width and Height)
* `speech`: for Screen readers
* `print`: If something will be printed how will it look. 

If you do not set a media type, it will default to `all`.

```CSS
    @media  (condition: breakpoint){
        //CSS rules
    }
```
## Operators

### `and`

```CSS
    @media all (condition: breakpoint) and (condition: breakpoint){
       div {
            background: #9af; /* blue */
        }
    }
    }
```
### `,`

```CSS
    @media all (condition: breakpoint), (condition: breakpoint){
        div {
            background: #9af; /* blue */
        }
    }
    
```

## Conditions

We talked about there being several condition:

* Width: min or max 
* Height: min or max 
* orientation: landscape, portrait
* aspect-ratio: 4:3
* [click here for more](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)


### Orientation

```CSS
    @media all (orientation: landscape) {
        div {
            background: #9af; /* blue */
        }
    }
    
    @media all (orientation: portrait) {
        div {
         background: #9ff; /* cyan */
        }
    }
```
### Aspect Ratio

```CSS
    /* Minimum aspect ratio */
    @media (min-aspect-ratio: 8/5) {
      div {
        background: #9af; /* blue */
      }
    }
    
    /* Maximum aspect ratio */
    @media (max-aspect-ratio: 3/2) {
      div {
        background: #9ff; /* cyan */
      }
    }
    
    /* Exact aspect ratio, put it at the bottom to avoid override*/
    @media (aspect-ratio: 1/1) {
      div {
        background: #f9a; /* red */
      }
    }
```

