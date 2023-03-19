## Clients and Servers

Clients and servers are two fundamental concepts in the architecture of the internet, they work together to enable communication and data transfer. Clients make requests for data or services, and servers respond by providing the requested data or services. An analogy would be if you go to chipotle, you would be the client who request a burrito the server or chipotle employee responds to  your request and provides the requested burrito. 

## Request/Response Cycle 

![Request/Response Cycle high level](https://madooei.github.io/cs421_sp20_homepage/assets/client-server-2.png)

Wether it's a mobile device, a desktop or other, there will always be a request sent to the server and it will then send it's response. 

![Request/Response Cycle low level](https://media.geeksforgeeks.org/wp-content/uploads/20210905091508/ImageOfHTTPRequestResponse-660x374.png)

## HTTP 

HTTP (Hypertext Transfer Protocol) is a protocol used for communication on the World Wide Web (WWW). It is a set of rules that govern how data is transmitted over the internet, allowing web servers and web browsers to communicate with each other.

What happens when we want to go to a website, let's say GitHub.com?

* DNS lookup
* HTTP request
* Server processing
* HTTP response
* Client processing
* Resource retrieval
* Closing the connection

## Stateless and stateful

Stateless and stateful are two terms used in computer networking and programming to describe different types of systems.

### Stateless 

Each HTTP request is independent and contains all the necessary information for the server to process the request and send back a response. After the server sends a response, it forgets about the request and the client.


### Stateful

In contrast, a stateful system is one that does store information about previous interactions or transactions. Each request is considered in the context of the previous requests made by the same client. This can allow for more efficient communication between the client and the server since less data needs to be transmitted in each request, but can also make the system more complex and less scalable.

Although HTTP is a stateless protocol, it is possible to build stateful web applications by implementing mechanisms to maintain state between requests. Here are a few common methods for building stateful web applications:

* Sessions
* Cookies
* Asynchronous JavaScript calls, or AJAX

## Asynchronous programming

Asynchronous programming is a programming paradigm that allows multiple tasks to run concurrently without blocking each other. In asynchronous programming, a program can perform operations without waiting for the completion of a previous operation. This is achieved by using non-blocking code, which allows a program to continue executing while waiting for an operation to complete.

## Blocking and Non-Blocking

Blocking code blocks the execution of a program until an Input/Output operation is completed, while non-blocking code allows the program to continue executing while waiting for an Input/Output operation to complete.

## Promise

Promise is a representation of a value that may not be available yet but will be at some point in the future. A Promise can be in one of three states:

* Pending: The initial state, indicating that the Promise has not yet been resolved or rejected.

* Resolved: The Promise has been resolved, meaning that the asynchronous operation has completed successfully, and the value is now available.

* Rejected: The Promise has been rejected, meaning that the asynchronous operation has failed, and an error has occurred.

```js
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
```

## Fetch API and HTTP Requests

The Fetch API is a modern JavaScript API for making HTTP requests, providing a simpler and more flexible alternative to the traditional XMLHttpRequest (XHR) API. The Fetch API is supported in all modern browsers and is available in both the browser and Node.js environments.

To make an HTTP request using the Fetch API, you can use the fetch() method, which returns a Promise that resolves to a Response object. The fetch() method takes one required argument, which is the URL of the resource being requested, and an optional second argument, an object containing any additional options or settings for the request.

Here's an example of using the Fetch API to make a GET request:

```js
fetch('https://reqres.in/api/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```
In this example, fetch makes an HTTP request to the specified URL and returns a promise that resolves with a response object. The first then method is used to convert the response object to JSON format, and the second then method logs the response data to the console. The catch method is used to handle any errors that may occur during the request.

## `async/await`

`async`/`await` is a feature in JavaScript that provides a cleaner and more readable way to write asynchronous code. It allows developers to write asynchronous code as if it were synchronous, without the need for callbacks or promises.

Here's an example of how async/await can be used to make an HTTP request using the Fetch API:
```js
async function getData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

```
In this example, the async keyword is used to define an asynchronous function that makes an HTTP request using fetch. The await keyword is used to wait for the response from the server and the conversion of the response data to JSON. The try/catch block is used to handle any errors that may occur during the request.

async/await differs from fetch in that it provides a simpler and more intuitive way to handle asynchronous operations. While fetch returns a promise that can be chained with then and catch methods to handle the response and errors, async/await allows developers to write asynchronous code that looks and behaves like synchronous code, making it easier to read and understand.

## API

Reading and understanding an API’s documentation can seem daunting at first, but by following these steps, you can break it down into manageable pieces:

1. Identify the purpose and scope of the API: The first step is to understand what the API does and what its intended use is. This information can usually be found in the introduction or overview section of the documentation.

2. Familiarize yourself with the API’s structure: Most APIs have a specific structure, with endpoints, methods, parameters, and responses. Familiarize yourself with these terms and how they apply to the specific API you are working with.

3. Understand the authentication process: Most APIs require some form of authentication to use them. Make sure you understand the authentication process and what credentials are needed.

4. Read the API reference: The API reference is usually the most detailed part of the documentation. It provides information on the specific endpoints, methods, parameters, and responses that are available. Take the time to read through this section carefully.

5. Try out some sample requests: To get a better understanding of how the API works, try out some sample requests. Most APIs provide sample code or a sandbox environment that you can use to experiment with the API.

6. Look for examples and use cases: Many APIs provide examples and use cases that can help you understand how the API can be used in real-world scenarios.

7. Ask for help: If you are having trouble understanding the documentation or using the API, don’t hesitate to ask for help. Many APIs have support forums or documentation that can provide additional guidance.

By following these steps, you can gain a better understanding of an API’s documentation and start using it effectively in your projects.

## Manipulate the DOM with a fetch
Often, we need to manipulate the DOM in response to a fetch call. To make a simple program that does this, we will typically follow these steps:

1. Create HTML elements (give them ids)
2. Create variables for those DOM elements in JS
3. Fetch data
4. convert from JSON
5. use the data to manipulate the DOM elements
6. Bonus: we can make a button to fetch new data