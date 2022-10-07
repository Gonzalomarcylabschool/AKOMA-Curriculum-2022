# Tables and Lists
## The why
* What is the problem we are tyring to solve with tables?
    * We want o orginize data  in a way that is easy to understand
    * Display information like stock prices, sports scores, invoice data, and more. This data is tabular in nature, meaning that a table is often the best way of presenting the data.
 
## Table elements

### `<table>` Table Element
In HTML, the `<table>` element has content that is used to represent a two-dimensional table made of rows and columns.

### `<thead>` Table Head Element
The table head element, `<thead>`, defines the headings of table columns encapsulated in table rows.

### `<tr>` Table Row Element
The table row element, `<tr>`, is used to add rows to a table before adding table data and table headings.

### `<td>` Table Data Element
The table data element, `<td>`, can be nested inside a table row element, `<td>`, to add a cell of data to a table.

### `<tfoot>` Table Footer Element
The table footer element, `<tfoot>`, uses table rows to give footer content or to summarize content at the end of a table.


## `colespan` and `rowspan`

### `colspan` Attribute
The colspan attribute on a table header `<th>` or table data <td> element indicates how many columns that particular cell should span within the table. The colspan value is set to 1 by default and will take any positive integer between 1 and 1000.

### `rowspan` Attribute
Similar to colspan, the rowspan attribute on a table header or table data element indicates how many rows that particular cell should span within the table. The rowspan value is set to 1 by default and will take any positive integer up to 65534.



## code-along! 

1. Every table begins with the `<table>` element which we can fill with table rows (`<tr>`) and table data (`<td>`).

```html
<table>
  <tr>
    <td>Data A1</td>
    <td>Data B1</td>
  </tr>
  <tr>
    <td>Data A2</td>
    <td>Data B2</td>
  </tr>
</table>
```


2. Adjust `width` and `height` of rows and columns.
  ```css
  tr { /* Set the height of rows*/
    height: 100px;
  }
  
  td { /* Set the width of columns */
    width: 100px;
  }
  ```

3. Which tables elements can have a border? What about padding and margin in our table cells?

  Add and collapse borders by targeting table and all of it's descendants.

  ```css
  table, table * {
    border: 1px solid black;
    border-collapse: collapse;
  }
  ```
  The default `border-collapse` property is `seperate` and has some thin white space seperating each cell. The `border-spacing` property determines how much space separtes each cell.

4. Play around with text alignment by targeting the `text-align` property of the `td` element.
  ```css
  td {
    text-align: center;
  }
  ```
  
  Play around with background colors.

  ```css
  table {
    background-color: gray;
  }
  ```
  
5. We can use table headers (`<th>`) and separate the first first row from the rest using `<thead>` and `<tbody>`. Your table structure will typically look like this (look familiar?):

  ```html
  <table>
    <thead></thead>
    <tbody></tbody>
  </table>
  ```

6. Add `scope` attributes to `<th>`s and then target those attributes for styling using an attribute selector.
  ```html
  <th scope="row">1st Period</th>
  ```
  ```css
  th[scope="row"] {
    background-color: #0b0775;
    color: #ffffff;
  }
  ```

  > This will target `th` elements with a `scope="row"` attribute. 
  
  ```html
  <th foo="bar">Some text</th>
  ```
  ```css
  [foo="bar"] {
    background: deeppink;
  }
  ```

  > Note: We can make up our own attributes and target them on their own.

7. Add `<colgroup>` elements and demonstrate how that facilitates styling targeted at table _columns_.
  ```html
   <colgroup>
      <col>
      <col>
      <col>
      <col>
      <col>
      <col>
      <col>
      <col>
    </colgroup>
  ```

8. Add an ID to a `<col>` and target it for styling that way.

9. Use the `:nth-child` **pseudo-class** ([docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)) to target another column.
  ```css
  col:nth-child(3) {
    background-color: #e9e9e9;
    width: 200px;
  }
  ```

10. Mark up the table with `<thead>`, `<tbody>`, `<tfoot>`. Talk over the accessibility benefits.

11. Demonstrate`colspan` attribute.
  ```html
   <tfoot>
      <tr>
        <td colspan="8">This is the footer</td>
      </tr>
   </tfoot>
  ```

12. Target the `<tfoot>` element to give the footer a common background color.
  ```css
  tfoot {
    background-color: #e9e9e9;
  }
  ```

13. Demonstrate`rowspan` attribute.
  ```html
  <th rowspan="2" scope="row">3rd Period</th>
  ```


## List

### Unordered HTML List
An unordered list starts with the `<ul>` tag. Each list item starts with the `<li>` tag.

The list items will be marked with bullets (small black circles) by default:

```HTML
    <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
    </ul>
```