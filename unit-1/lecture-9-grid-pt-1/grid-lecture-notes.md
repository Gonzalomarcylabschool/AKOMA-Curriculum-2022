# Grid part 1

**[00:00 - 00:05]**- | Introduction | The why | Warm up Question

**[00:05 - 00:15]**- |  | 

**[00:15 - 00:35]**- |  |

**[00:35 - 00:60]**- | 

## The Why

Like flexbox, grid helps us layout our elements on our pages. The main diffrence between the Two is how many dimentions we are using. In flexbox we work on one dimention at a time, either a row or a column. Using grid we get to set our columns and rows at the same time. 

## Parts of Grid

In Flexbox we had the main and cross axis, the flex container and the flex item. Width grid there are similar concepts that come up that we can use. 

### Grid Container

To make an HTML element behave as a grid container, you have to set the display property to grid or inline-grid.

Grid containers consist of grid items, placed inside columns and rows.

#### Grid Container Properties
* `display: grid`
* `grid-template-columns: <number>fr | <number>% | repeat (<number> <number> fr)`
* `grid-template-rows`
* `grid-template-areas`
* `grid-auto-rows`
* `grid-auto-columns`
* `grid-column-gap`
* `grid-row-gap`
* `minmax()`

### Grid Item

A grid container contains grid items.

By default, a container has one grid item for each column, in each row, but you can style the grid items so that they will span multiple columns and/or rows.

#### Grid Item Properties
* `grid-column-start`
* `grid-column-end`
* `grid-row-start`
* `grid-row-end`
* `grid-area`


### Grid Gap

The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap.

### Grid Tracks

A grid track is the space between two adjacent grid lines. They are defined in the explicit grid by using the grid-template-columns and grid-template-rows properties or the shorthand grid or grid-template properties. Tracks are also created in the implicit grid by positioning a grid item outside of the tracks created in the explicit grid.