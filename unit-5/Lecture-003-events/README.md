# Events

As we have learn so far in this unit, the DOM allows us to manipulate elements on our pages but in order to get the user involved, the computer has to know what look look out or listen for and then it has to be told what to do. 

Events are that part of programing that allow the user to become a participant of the page they are visiting. But where do we start?


## Callback Functions

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

## Event listener / Event handler

click => things happens
press => things happens
load => thing happens

There is a few ways we can make this happen

```HTML
<element onclick="myScript">
```
```js
element.onclick = function(){myScript};

// or

element.addEventListener("click", myScript)
```

## DOMContentLoaded

Let load our web page and see whats going on under the hood. 

```js
//let put this in the head and see what happens?
<script src="script.js"></script>

console.log('test');
```

Now what happens if we load this into our `<body>`?

So far everything still kind seems the same?

Let's put it back in the `<head>` and throw a debugger in here.



## Event listener / Event handler

click => things happens
press => things happens

