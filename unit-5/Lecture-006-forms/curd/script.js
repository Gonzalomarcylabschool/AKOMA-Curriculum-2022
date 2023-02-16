const form = document.querySelector('#survey-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log('test')
  const name = document.querySelector('#name').value;
  const age =  document.querySelector('#age').value
  const email = document.querySelector('#email').value
  const emotion = document.querySelector('#emotions');
  const emotionValue = emotion.options[emotion.selectedIndex].value
  const radios = document.getElementsByName('user-consistency'); 
  let radio; 
    for(i = 0; i < radios.length; i++) {
      if(radios[i].checked){
         radio = radios[i].value;
      }     
    }
    console.log(e.target[0].value)
//   console.log(name, email, age, emotionValue, radio);
})