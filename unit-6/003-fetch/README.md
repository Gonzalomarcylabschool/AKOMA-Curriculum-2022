# Fetch

![this is so fetch](https://media4.giphy.com/media/3otPoUjeyRisIDxPhK/giphy.gif)

In the last lecture we talked about how we can use a `Promise` to wait for code to execute asynchronously. 

![Promise mental model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png)

We also started to talk about the `fetch` API, let's dive into it deeper.

## Fetch API and HTTP Requests

The Fetch API is a modern JavaScript API for making HTTP requests, providing a simpler and more flexible alternative to the traditional XMLHttpRequest (XHR) API. The Fetch API is supported in all modern browsers and is available in both the browser and Node.js environments. It's main function is to send a HTTP request and wait for the response and using `Promise` to then execute code that we want it to run.  

To make an HTTP request using the Fetch API, you can use the `fetch()` method, which returns a Promise that resolves to a Response object. The fetch() method takes one required argument, which is the URL of the resource being requested, and an optional second argument, an object containing any additional options or settings for the request.

Here's an example of using the Fetch API to make a simple GET request:

```js
fetch('https://reqres.in/api/users')
  .then(res => console.log(res))
```
Here is an example of the same fetch turning the response to a JSON:

```js
fetch('https://reqres.in/api/users')
.then(response => response.json()) // this get the response from the fetch request and changes it to JSON
.then(data => console.log(data))// console.log the .json 
```

## JSON

JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).


```js
{
	"name": "R2-D2",
	"height": "96",
	"mass": "32",
	"hair_color": "n/a",
	"skin_color": "white, blue",
	"eye_color": "red",
	"birth_year": "33BBY",
	"gender": "n/a",
	"homeworld": "https://swapi.dev/api/planets/8/",
	"films": [
		"https://swapi.dev/api/films/1/",
		"https://swapi.dev/api/films/2/",
		"https://swapi.dev/api/films/3/",
		"https://swapi.dev/api/films/4/",
		"https://swapi.dev/api/films/5/",
		"https://swapi.dev/api/films/6/"
	],
	"species": [
		"https://swapi.dev/api/species/2/"
	],
	"vehicles": [],
	"starships": [],
	"created": "2014-12-10T15:11:50.376000Z",
	"edited": "2014-12-20T21:17:50.311000Z",
	"url": "https://swapi.dev/api/people/3/"
}
```
### Why Use JSON?

The JSON format is syntactically similar to the code for creating JavaScript objects. Because of this, a JavaScript program can easily convert JSON data into JavaScript objects.

Since the format is text only, JSON data can easily be sent between computers, and used by any programming language.

JavaScript has a built in function for converting JSON strings into JavaScript objects:

JSON.parse()

JavaScript also has a built in function for converting an object into a JSON string:

JSON.stringify()

## Back to fetch

We will dive more in to API  tomorrow, but for now we will be using 2 APIs to see how fetch work to make HTTP request and how we can see some of the information. 

```js
const success = (position)=>{//returns the users location and fetch the data from the location and weather API
console.log(position)

  const latitude = position.coords.latitude;// constant for the latitude  coordinates 
  const longitude = position.coords.longitude;//constant for the longitude coordinates 
  console.log('long:'+longitude+' lat:'+ latitude); // check the console to make sure it worked
  //get the users locations and sets it on the page
  fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}X&localityLanguage=en')
  .then(res=> res.json())
  .then(data=> {
    console.log(data) 
  })
  //get the weather using user's location and sets it on the page
  fetch('https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&units=imperial&appid=b989a956b784b1493fe08339165f3739')
  .then(res=> res.json())
  .then(data=> {
    console.log(data)
  })
}

navigator.geolocation.getCurrentPosition(success)//this is built in!!!
```
The Fetch API can also be used to make other types of requests, such as POST requests or requests with custom headers, by passing in additional options to the fetch() method.

```js
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

```