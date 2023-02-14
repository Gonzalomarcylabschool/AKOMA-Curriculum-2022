# Events

As we have learn so far in this unit, the DOM allows us to manipulate elements on our pages but in order to get the user involved, the computer has to know what look look out or listen for and then it has to be told what to do. 

Events are that part of programing that allow the user to become a participant of the page they are visiting. But where do we start?


## Callback Functions

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

## Event listener / Event handler

click => things happens
press => things happens
load => thing happens

when I press `w` my charter walks forward. 

There is a few ways we can make this happen

```HTML
<element type="callback">
<h1 onclick="callback"></h1>
```
```js
element.type = function(){callback};
document.querySelector('h1').onclick = function(){callback};
// or

element.addEventListener("type", callback)
document.querySelector('h1').addEventListener("click", callback)
```

## DOMContentLoaded

Let load our web page and see whats going on under the hood. 

```js
//let put this in the head and see what happens?
<script src="script.js"></script>

console.log('test');

document.body? // is it there?
```

Now what happens if we load this into our `<body>`?

So far everything still kind seems the same?

Let's put it back in the `<head>` and throw a debugger in here.
```js
document;
document.body;
document.head;
```

What is happening is that the browser loads the page from top to bottom. 

```HTML
<!DOCTYPE html>
<!--^loaded-->
<html lang="en">
  <!--^loaded-->
<head>
  <!--^loaded-->
  <meta charset="UTF-8">
  <!--^loaded-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--^loaded-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!--^loaded-->
  <title>Document</title>
  <!--^loaded-->
  <script src="script.js"></script> <!--load everything from here-->
  <!--^loaded-->
</head>
<!--^loaded-->
<body>
  <!--^loaded-->
```
So when we put the `<script>` in the head `<head>` and load the page with a debugger, the `<body>` is not loaded yet. 

Let's try this again with the script in the body and see what happens `

What you might notice is that the the `<body>` is now loaded.

So what is the best practice? We are going to use `DOMContentedLoaded`. If we ever have any dependance or have code that depends on elements this is best practice. 

```js
document.addEvents('DOMContentLoaded', () => {
  //function code  
});
```


## Lets try this out:

```js
const friendsList = ['Laura', 'Ben', 'Itzel', 'Ann', 'Maya', 'Ruben']


friendsList.forEach(f => addFriend(f))


function addFriend(friendName){
  let li = document.createElement("li");
  li.textContent = friendName;
  document.querySelector('#list').appendChild(li);
}
```

## Click events and more
So I have some code that I want to count how many times I click on a button. 

Let's see how we can make them work: 

```js
let countOne = 0;
const clickCount1 = document.getElementById('counterOne');
document.getElementById("myBtn1").addEventListener("click", buttonClick);

function buttonClick(){
  countOne++
  clickCount1.innerText = countOne;
}
```