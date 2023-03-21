// routes
async function fetchFrom(url){
  try{
    const res = await fetch(url);
    const data = await res.text();
    console.log(data)
  } catch(err) {
    console.log(`Error has occurred: ${err.stack}`)
  }
}

fetchFrom('https://api.github.com/zen')

// basic error handling 
// try {
//   book;
// } catch(err) {
//   console.log(`Error has Occurred: ${err.stack}`)
// }