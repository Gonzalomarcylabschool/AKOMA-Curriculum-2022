document.getElementById('hello');//points to the h1
document.querySelector('#hello');//points to the h1
document.getElementsByClassName('myText');//points to the h1
document.getElementsByTagName('h1');//points to the h1 
document.h1 //same as getElementsByTagName. 
document.querySelectorAll('.myText')// points to the h1 and p tags

const body = document.body; //store to the variable
const h1 = document.getElementById('hello'); //store to the variable

const h3 = document.createElement('div'); //create new element

// lets add them to our page
// body.append('here is some text');
// body.appendChild('here is some more text'); 

// const div = document.createElement('div');
// const spanHi = document.createElement('span');

// body.append(div, spanHi);

// spanHi.remove()
// div.removeChild(spanHi);