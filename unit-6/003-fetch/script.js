const body = document.body;

// fetch('https://reqres.in/api/users')
// // .then(res => console.log(res))
// .then(response => response.json()) // this get the response from the fetch request and changes it to JSON
// .then(data => console.log(data))// console.log the .json 



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


 const error = ()=> {
  console.log('this failed')
 }
const success = (position)=>{//returns the users location and fetch the data from the location and weather API
  // console.log(position)

    const latitude = position.coords.latitude;// constant for the latitude  coordinates 
    const longitude = position.coords.longitude;//constant for the longitude coordinates 
    // console.log('long:'+longitude+' lat:'+ latitude); // check the console to make sure it worked
//     //get the users locations and sets it on the page
    // fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}X&localityLanguage=en')
    // .then(res=> res.json())
    // .then(data=> {
    //   console.log(data) 
    // })
//     //get the weather using user's location and sets it on the page
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=84&lon=-74&units=imperial&appid=b989a956b784b1493fe08339165f3739')
    .then(res=> res.json())
    .then(data=> {
      
      console.log(data.main.humidity)
      let humidityText = document.querySelector('#humidityText');
      humidityText.innerText =`The Humidity is : ${data.main.humidity}%`;
      body.appendChild(humidityText);
    }).catch(()=> console.log('fail'))
  }

  navigator.geolocation.getCurrentPosition(success, error)//this is built in!!!