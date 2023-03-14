
let p = new Promise ((resolve, reject) => {
  let a = 1 + 1;
  if (a === 2) {
    resolve('Success')
  } else {
    reject('Failed')
  }
})

p.then((message) => {
  console.log(message)
}).catch((message) => {
  console.log(message)
})



// fetch('https://reqres.in/api/users')
// // .then(res => console.log(res))
// .then(response => response.json())
// .then(data => console.log(data))



// fetch('https://reqres.in/api/users')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });


// fetch('https://reqres.in/api/users', {
//   method: 'POST',
//   headers: {
//   'Content-Type': 'application/json'
//   }, 
//   body: JSON.stringify({
//     name: 'User 1'
//   })
// }).then(res => {
//     return res.json ( )
//   })
//   .then (data => console. log (data))
