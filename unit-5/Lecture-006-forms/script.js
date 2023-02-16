const teachers = [
  {
    firstName: "Ann", 
    lastName: "Duong", 
    email: "ann@gmail.com"
  },
  {
    firstName: "Gonzalo", 
    lastName: "Romero", 
    email: "gonzalo@gmail.com"
  },
  {
    firstName: "Ben", 
    lastName: "Spector", 
    email: "ben@gmail.com"
  }
]
teachers.forEach(t => addInstructor(t.firstName, t.lastName, t.email))
  
function addInstructor(fName, lName, email){
  //make the elements to add a new row
  const rowEl = document.createElement('tr')// make the new row
  const firstNameEl = document.createElement('td') // make the new td for first name
  const lastNameEl = document.createElement('td') // make the new td for last name
  const emailEl = document.createElement('td') // make the new td for email
  
  //add the text value in each corresponding element. 
  firstNameEl.innerText = fName;
  lastNameEl.innerText = lName;
  emailEl.innerText = email;
  
  // append the row to the body of the table.
  document.querySelector('tbody').appendChild(rowEl);
  // append each td to the row
  rowEl.append(firstNameEl, lastNameEl, emailEl)
}

// store the DOM node fo the form
const form = document.querySelector('#my-form');

// event for when the form is submitted.
form.addEventListener('submit', e => {
  e.preventDefault()// stops the default behavior
  console.log(e)

  //get the values from the inputs
  const fName = document.querySelector('#first-name-input').value;
  const lName = document.querySelector('#last-name-input').value;
  const email = document.querySelector('#email-input').value;
  
  // pass in the values from the inputs to the functions.
  addInstructor(fName, lName, email)
  // reset the inputs to clear.
  e.target.reset();
})

//e.preventDefault()










































// using e to do the same thing!

// form.addEventListener('submit', e => {
//   e.preventDefault()// stops the default behavior
//   console.log(e)

//   //get the values from the inputs
//   const fName = e.target[0].value;
//   const lName = e.target[1].value;
//   const email = e.target[2].value;
  
//   // pass in the values from the inputs to the functions.
//   addInstructor(fName, lName, email)
//   // reset the inputs to clear.
//   e.target.reset();
// })
