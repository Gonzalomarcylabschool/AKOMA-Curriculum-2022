// routes
async function fetchJSONFrom(url){
  try{
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
  } catch(err) {
    console.log(`Error has occurred: ${err.stack}`)
  }
}
async function fetchTextFrom(url){
  try{
    const res = await fetch(url);
    const data = await res.text();
    console.log(data)
  } catch(err) {
    console.log(`Error has occurred: ${err.stack}`)
  }
}
// fetchTextFrom('https://api.github.com/zen')


fetchJSONFrom('https://reqres.in/api/users/')

fetch('https://reqres.in/api/users', {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json'
  }, 
  body: JSON.stringify({
    name: 'User 1'
  })
}).then(res => {
    return res.json ( )
  })
  .then (data => console. log (data))
// basic error handling 
// try {
//   book;
// } catch(err) {
//   console.log(`Error has Occurred: ${err.stack}`)
// }