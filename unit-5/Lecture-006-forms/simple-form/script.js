const form = document.querySelector('#user-form');

const inputs = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const age =  document.querySelector('#age').value
  const email = document.querySelector('#email').value  

  console.log(name, age, email);
  inputs.push({name, email, age})
})







// const eInputs = [];

// console.log(e)

//   const eName = e.target[0].value;
//   const eEmail = e.target[1].value;
//   const eAge = e.target[2].value;
  
//   eInputs.push({eName, eEmail, eAge})
//   console.log(eName, eEmail, eAge);