const form = document.getElementById('user-form');

console.log(form)

const userInputs = [];
//get the data from the user inputs 
// store them in an object that gets stored in the array
form.addEventListener('submit', (e) => {
  const name = document.querySelector('#name').value
  const email = document.querySelector('#email').value
  const age = document.querySelector('#age').value

  const obj = {name, email, age};
  userInputs.push(obj)
})