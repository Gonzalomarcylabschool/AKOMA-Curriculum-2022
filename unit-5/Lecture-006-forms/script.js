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
    firstName: "Laura", 
    lastName: "Rouse", 
    email: "laura@gmail.com"
  }
]
teachers.forEach(t => addInstructor(t.firstName, t. lastName, t.email))
  
function addInstructor(fName, lName, email){
  const rowEl = document.createElement('tr')
  const firstNameEl = document.createElement('td')
  const lastNameEl = document.createElement('td')
  const emailEl = document.createElement('td')

  firstNameEl.innerText = fName;
  lastNameEl.innerText = lName;
  emailEl.innerText = email;

  document.querySelector('tbody').appendChild(rowEl);
  rowEl.append(firstNameEl, lastNameEl, emailEl)
}

const form = document.querySelector('#my-form');

form.addEventListener('submit', e => {
  e.preventDefault()
  console.log('test')
  const fName = document.querySelector('#first-name-input').value;
  const lName = document.querySelector('#last-name-input').value;
  const email = document.querySelector('#email-input').value;
  addInstructor(fName, lName, email)
})

//e.preventDefault()