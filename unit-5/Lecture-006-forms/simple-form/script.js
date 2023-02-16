const button = document.querySelector('#submit');

const inputs = [];
button.addEventListener('click', e => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const age =  document.querySelector('#age').value
  const email = document.querySelector('#email').value  

  console.log(name, age, email);
  inputs.push({name, email, age})
})