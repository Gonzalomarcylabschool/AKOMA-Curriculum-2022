// let a = 1;

// a = 2;


// let b = a;






















// let p = new Promise ((resolv, reject) => {
//   let a = 1 + 2;
//   if (a === 2) {
//     resolv('Success')
//   } else {
//     reject('Failed')
//   }
// })

// p.then((message) => {
//   console.log(message)
// }).catch((message) => {
//   console.log(message)
// })



// fetch('https://reqres.in/api/users')
// // .then(res => console.log(res))
// .then(response => response.json())
// .then(data => console.log(data.data[0].email))



fetch('https://reqres.i/api/users')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


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

// const success = (position)=>{//returns the users location and fetch the data from the location and weather API
//   console.log(position)

//     const latitude = position.coords.latitude;// constant for the latitude  coordinates 
//     const longitude = position.coords.longitude;//constant for the longitude coordinates 
//     console.log('long:'+longitude+' lat:'+ latitude); // check the console to make sure it worked
//     //get the users locations and sets it on the page
//     fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}X&localityLanguage=en')
//     .then(res=> res.json())
//     .then(data=> {
//       console.log(data) 
//     })
//     //get the weather using user's location and sets it on the page
//     fetch('https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&units='+units+'&appid=b989a956b784b1493fe08339165f3739')
//     .then(res=> res.json())
//     .then(data=> {
//       console.log(data)
//     })
//   }