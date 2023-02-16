const form = document.querySelector('#form');

const inputs = [];
const eInputs = [];
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const age =  document.querySelector('#age').value
  const email = document.querySelector('#email').value  

  console.log(name, age, email);
  inputs.push({name, email, age})
})









// console.log(e)

  // const eName = e.target[0].value;
  // const eAge = e.target[1].value;
  // const eEmail = e.target[2].value;
  
  // eInputs.push({eName, eEmail, eAge})
  // console.log(eName, eEmail, eAge);