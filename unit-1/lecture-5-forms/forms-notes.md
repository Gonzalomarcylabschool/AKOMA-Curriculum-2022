# Forms

* **0:00 - 0:05** | Introduction / Warm up question / The why
* **0:05 - 0:10** | Quick Pitstop in HTTP
* **0:25 - 0:35** | How do you construct a Form?
* **0:35 - 0:60** | Breakdown sample | build the sample in HTML | CSS (if ther is time)

## Warm-up questions
* What is the name of the tag we use to make forms?
* What tag do we use collect informaiton from the user?
* What how do we set the kind of input we want the user to submit?

## Why do we use Forms?

Forms are the main point of interaction between the user and a website. 

Examples of interactions:
* Log in
* Buying things
* Adding content in the form of comments, photos or videos.
 
Forms are used to submit information/data for a spesific purpose.

Facebook (now Meta), Apple, Netflix, Instagram, Snapchat, Google, Spotify and so many more use form all day, every day, at all times! Knowing how to build forms and implement them is a skill that you will need if you are looking to get in to anyone of these gigs  

**But how!?!**

### Quick Pitstop
**HTTP** (or Hypertext Transfer Protocol) defines a set of rules for _how_ data is formatted and transmitted over the internet. We'll learn more about this in Unit 7 but here is the basic idea:
* A user submits a form and they are either **sending information** to a server or **requesting information** from a server.
* There are two "methods" that HTTP requires us to specify
    * `POST`: send
    * `GET`: request
* Learn more about HTTP [here.](https://www.youtube.com/watch?v=kBXQZMmiA4s)

Forms are wrapped in a `<form>` tag. This tag _typically_ contains two attributes:
* `method` - Indcates the HTTP method to be used (e.g. `post` or `get`) 
* `action` - Determines the location where the form information should be sent (e.g. the URL of our server).

```html
<form method="get" action="./handle_action.php">
    <!--Input elements / submit button go here-->
</form>
```
Lets take a quick look at 2 real world examples: [Facebook](https://www.facebook.com/login/) [Netflix](https://www.netflix.com/login) [Google](https://www.google.com/)
> For now, we want to focus on how to build forms without actually sending an HTTP message. Our forms can leave these attributes out and we'll return to using these attributes to build functional forms later. 

## How do you construct a Form?

There are four elements used to create a form: 
* `<form>`
    * As mentioned before the `<form>` element is used to create an HTML form for user input.  Like the `<section>`, `<footer>`, or `table` element, its a container, but the browser know when it see this tag that its main purpose will be to gather information.
* `<label>`
    * The `<label>` tag defines a label for form elements.
    * It's useful for screen-reader users, because the screen-reader will read out loud the label when the user focus on the input element.
    * The `<label>` element also help users who have difficulty clicking on very small regions (such as radio buttons or checkboxes) - because when the user clicks the text within the <label> element, it toggles the radio button/checkbox.
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
* `<button>`
   *  Used for submitting the form data to a form-handler.

### Lets take a look at an example and code it together.