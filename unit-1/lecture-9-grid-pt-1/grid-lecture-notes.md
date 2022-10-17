[Link to video](https://us02web.zoom.us/rec/play/csMcdFcJ3ArXVXfSMjO_bFpycWrI_0DYVy8ixmV7epGDv-b8KF-buZsDmxWoeOJ0CyUNomJpgAgDwbJf.b1npAsRBVaOuLPQK?autoplay=true&startTime=1666018858000)
# Grid part 1

**[00:00 - 00:05]**- | Introduction | The why | Warm up Question

**[00:05 - 00:35]**- | Parts of Grid 

**[00:35 - 00:60]**- | Code-along | Question | Next Steps

## The Why

Like flexbox, grid helps us layout our elements on our pages. The main diffrence between the Two is how many dimentions we are using. In flexbox we work on one dimention at a time, either a row or a column. Using grid we get to set our columns and rows at the same time. There is no time when you should use grid over flexbox or vice-versa. They are both tools for layout and comes down almost to preference. The few times it may be better is if you know something needs to a grid on a screen. 

Here is some HTML you can use to follow along during this lecture:

```HTML
<div class="grid-container">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

## Parts of Grid

In Flexbox we had the main and cross axis, the flex container and the flex item. Width grid there are similar concepts that come up that we can use. 

### Grid Container

To make an HTML element behave as a grid container, you have to set the display property to grid or inline-grid.

Grid containers consist of grid items, placed inside columns and rows.

#### Grid Container Properties
* `display: grid`
* `grid-template-columns: <number> fr | <number>% | repeat (<number of times> <number unit> unit)`
    * set the size and amount of colums we want for our grid. 
* `grid-template-rows`
    * instead of setting up your grid by colums you can do it by rows 
* `grid-auto-rows`
* `grid-auto-columns`
* `minmax()`

### Grid Item

A grid container contains grid items.

By default, a container has one grid item for each column, in each row, but you can style the grid items so that they will span multiple columns and/or rows.

#### Grid Item Properties

* `align-self: `
* `justify-self: `

### Grid Tracks

A grid track is the space between two grid lines. They are defined in the explicit grid by using the grid-template-columns and grid-template-rows properties. 

![grid tacks example](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Tracks/1_grid_track.png)



```CSS
.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr 3fr;
}
```

### Grid lines

Grid lines are created when you define tracks.

![grid line example](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Lines/1_diagram_numbered_grid_lines.png)

### Grid Gap

The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap.

## Next Step

Here are the things you need to look forward to this week: 

### Lab Assignment: Product Landing Page

**10/17 EOD** - Start looking at this assigment that due at the end of the week. By the end of today you should have started your HTML and at best finished it by the end of lab.

**10/18** -  You should try to have your CSS styles Finished by this day.

**10/19** - Start working on the layout so that its not only responsive but can also fit on mobile.

**10/20** - You should complete and submit the assigment. 

### Grid part 2 and Responsive layout. 

**10/18** -  We will finish up going over grid.

**10/19** - We will start on responsive layouts covering and covering the following

* Fluid Layout
* Responsive Web Design
* Media Queries
* Breakpoints

**10/20** - We will finish up Responsive layouts.

**10/21** - We will review all the contents covered this week. 