const container = document.querySelector('#container');//document.getElementsByTagName('div')

const newSection = document.createElement('section')
const newP = document.createElement('p');
const newH3 = document.createElement('h3')
// newP.append('this is the text') //method but bad practice
// newP.append(createTextNode('this is the text')) // method good practice
// newP.innerText = 'this is the text' //  property 
// newP.textContent = 'this is the text' // property 
container.append(newSection);
newSection.append(newP, newH3);




let arr = [1, 2, 3, 4]

for (i in arr) {
  console.log(i)
}