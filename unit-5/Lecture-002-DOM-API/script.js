// document.getElementById('hello');//points to the h1


// document.querySelector('#hello');//points to the h1
// document.getElementsByClassName('myText');//points to the h1
// document.getElementsByTagName('h1');//points to the h1 
// document.h1 //same as getElementsByTagName. 
// document.querySelectorAll('.myText')// points to the h1 and p tags

const body = document.body; //store to the variable
const helloH1 = document.getElementById('hello'); //store to the variable
const header = document.createElement('header');
const allMyText = document.querySelectorAll('.myText')// all of the nodes get stored in a array
header.appendChild(helloH1);
body.appendChild(header);

const img = document.createElement('img');
img.src = `https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80`;
img.alt = `This is supposed to be a picture`;
img.id = 'cat'
img.classList='images cats other'
body.appendChild(img);

const h3 = document.createElement('h3'); //create new element
h3.innerText = '';
h3.textContent = "let's see what happens when we do this."
h3.innerHTML = 'this is the text for my h3'
body.innerHTML = '<p>this is a new</p>'

body.append('here is some more text');
body.appendChild(h3); 

// helloH1.id = 'newId'
// helloH1.title = 'this is the new header id'


// const div = document.createElement('div');
// const spanHi = document.createElement('span');

// body.append(div, spanHi);

// spanHi.remove()
// div.removeChild(spanHi);

// const ul = document.createElement('ul');
// const li = document.createElement('li')
// const liTwo = document.createElement('li')
// const liThree = document.createElement('li')
// li.textContent = 'this is an li'
// ul.appendChild(li);
// // ul.appendChild(liOne)
// // ul.appendChild(liTwo)
// // ul.appendChild(liThree)
// body.appendChild(ul)


const ul = document.createElement("ul");

//Array holding strings for li
const sports = ['Soccer', 'Football', 'Camping', 'hiking', 'hockey']

//Create a for loop to create the li and append to the ul
for (let i in sports) {
  let li = document.createElement("li");
  li.textContent = sports[i];
  ul.appendChild(li);
}

body.appendChild(ul)

// element.style.property = 'string'

// body.style.backgroundColor = 'red';
// body.style.backgroundColor = 'red';

helloH1.style.color = 'blue';
// h3.style.backgroundColor = 'coral'
// h3.style.padding = '10px'

// css(img, {
//   'width': '300px'
// })

// css(h3, {
//   'color': 'blue',
//   'background-color': 'coral',
//   'padding': '10px'
// })

// css(body, {

// })

// for (let i in allMyText){
//   css(allMyText[i], {
//     'color': 'blue',
//     'background-color': 'coral',
//     'padding': '10px',
//     'text-align': 'center'
//   })
// }

// function css(element, style) {
//   for (const property in style)
//       element.style[property] = style[property];
// }

body.removeChild(ul)