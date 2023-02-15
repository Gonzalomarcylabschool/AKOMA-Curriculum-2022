// document.addEventListener('DOMContentLoaded', () => {
//   const button = document.querySelector('button');
//   button.addEventListener('click', print)
// });

const button = document.querySelector('button');
button.addEventListener('click', print)
let testString = 'test';
let testCount = 0;
function print(){
  testCount++
  console.log(testString+testCount);
  const p = document.createElement('p');
  p.textContent = testString+testCount;
  document.querySelector('body').appendChild(p);
}

button.addEventListener('click', (e) => {
  console.log(e);
})
const grandParent = document.querySelector('#grandParent');
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

grandParent.addEventListener('click', e =>{
  console.log(e.target)
  console.log('GP test')
},
{capture :true});

parent.addEventListener('click', e =>{
console.log(e.target)
console.log('P test')
},
{capture :true});
child.addEventListener('click', e =>{
console.log(e.target)
console.log('C test')
},
{capture :true});


const counter = document.querySelector('h1');
let count = 0;
let countId = setInterval(timer, 1000);

function timer(){
  count++;
  counter.innerText = count;
}
if (count === 5){
  clearInterval(countId);
}
