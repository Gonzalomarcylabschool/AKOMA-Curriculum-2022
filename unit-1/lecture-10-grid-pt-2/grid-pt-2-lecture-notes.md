# Grid Part 2

**[00:00 - 00:05]**- | Introduction | The why | Warm up Question

**[00:05 - 00:10]**- |  `grid-template-rows` | 

**[00:10 - 00:35]**- | `gird-template-areas` | `grid-area`

**[00:35 - 00:60]**- | code along | next steps

## Review / Warm up quesiton

* What is Grid?
* What art the parts of Grid?
* What are the gird lines?
* What are the grid Tracks?
* How do we "turn on" grid?
* What are some of the properties that we use in grid?

### Grid Container Properties
* We already talked about these properties:
    * `display: grid`
    * `grid-template-columns`
    * `grid-auto-rows`
    * `grid-auto-columns`
    * `grid-column-gap`
    * `grid-row-gap`
    * `minmax()`

I want to go in to more detail about the following:
    * `grid-template-rows`
    
example:
    
```CSS
    .grid-container {
        border: 2px solid white;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
```
    
* `grid-template-areas`
    * grid areas is a great tool to use when you want to work on a layout across your rows and columns


![](lecture-10-grid-pt-2/image.png)
### Grid Item Properties

* `grid-area`