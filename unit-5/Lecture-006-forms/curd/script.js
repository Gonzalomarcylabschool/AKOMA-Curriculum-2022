const button = document.querySelector('#submit');

button.addEventListener('click', e => {
  e.preventDefault();
  console.log('test')
  const name = document.querySelector('#name').value;
  const age =  document.querySelector('#age').value
  const email = document.querySelector('#email').value
  const emotion = document.querySelector('#dropdown');
  const emotionValue = emotion.options[emotion.selectedIndex].value
  console.log(emotionValue);
})