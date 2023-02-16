# Forms

## Why Should we learn forms?

User interaction!

That the short answer, as you know it's more complicated than that. 

When would users interact with a form?
* Registering.
* Logging in.
* anytime they want to pass data to a website.

## Let's review how forms work

### How do you construct a Form?

There are four elements used to create a form: 
* `<form>`
    * `<form>` element is used to create an HTML form for user input.  Like the `<section>`, `<footer>`, or `<table>` element; its a container, but the browser know when it see this tag that its main purpose will be to gather data.
* `<label>`
    * The `<label>` tag defines a label for form elements.
    * It's useful for screen-reader users, because the screen-reader will read out loud the label when the user focus on the input element.
    * The `<label>` element also help users who have difficulty clicking on very small regions (such as radio buttons or checkboxes) - because when the user clicks the text within the `<label>` element, it toggles the radio button/checkbox.
    * 
    
* `<input>`
    * This element is whats used to collect the information/ data from the user. It can be displayed in many ways, depending on the `type` attribute used. [Click here](https://www.w3schools.com/html/html_form_input_types.asp) to see all the `type` attribute a `<input>` can use.
    * the main ones we will be using today will be:
        * text
        * number
        * email
        * checkbox
        * radio
        * submit(for button)
        
**Note**

The for attribute of the `<label>` tag should be equal to the id attribute of the `<input>` element to bind them together.
```HTML
<label for="name">Name</label>
<input name="name" id="name">
```
You can just put the input inside of the label like so: 

```HTML
<label>
    Name
    <input name="name">
</label>
```
but using the former is best practice. 

## Let take a look at a simple form.

In this simple form we are doing a few things.

1. We are gathering information from the user? how is this being accomplished?
2. We are checking to see if we can see the value that the user inputted. What are we using to check it?
3. We are storing the users input in an array. What data structure do you think each element is?

This is all fine, but how is this all happening? 
I already have the code written but I want to see if we can write it together using the DOM.

## What is the default of a form?

The default behavior of a submitted form is the webpage will refresh. 

This was the common practice of a form from back in the day(early basic days of the internet, all the way back in the 1990). But this is not the case anymore. We don't want our page to reload every single time that we have something happen in the page. Then the page would be reloading so many times, because there are so many things happening on the page!

So what do we do?

`event.preventDefault`
