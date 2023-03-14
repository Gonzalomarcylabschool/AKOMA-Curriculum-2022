## How does our code work?

So far up to know we have been working with code that works from top to bottom. Whatever is written first is executed: (unless it's a function or something that is hoisted).

## Asynchronous programming

Asynchronous programming is a programming paradigm that allows multiple tasks to run concurrently without blocking each other. In asynchronous programming, a program can perform operations without waiting for the completion of a previous operation. This is achieved by using non-blocking code, which allows a program to continue executing while waiting for an operation to complete.

Asynchronous programming is important for several reasons:

* Improved performance: Asynchronous programming allows programs to run faster by enabling them to perform multiple tasks concurrently. This can be especially useful for I/O-bound operations, where a program is waiting for input/output operations to complete.

* Scalability: Asynchronous programming makes it easier to build scalable applications by enabling programs to handle many concurrent connections or requests without blocking.

* Responsiveness: Asynchronous programming can make user interfaces more responsive by allowing them to perform background tasks without blocking the user interface thread.

* Resource efficiency: Asynchronous programming can make more efficient use of system resources by allowing programs to execute other tasks while waiting for I/O operations to complete.

* Flexibility: Asynchronous programming can be used in a variety of programming languages and frameworks, making it a flexible and widely applicable programming technique.

## HTTP Request

HTTP (Hypertext Transfer Protocol) requests are a type of message that a client sends to a server in order to request a resource or perform an action. HTTP is the protocol used for communication between web browsers and web servers on the internet.

An HTTP request typically consists of:

* Request line: The first line of an HTTP request contains the method (such as GET or POST), the URI (Uniform Resource Identifier) of the resource being requested, and the HTTP version being used.

* Headers: Additional information about the request is included in headers, which are key-value pairs that are sent in the request. Headers can include information such as the user agent (the browser or client making the request), the Accept header (which specifies the types of content the client can accept), and the Content-Type header (which specifies the type of data being sent in the request).

* Body: Some HTTP requests may also include a body, which contains additional data to be sent to the server. For example, a POST request might include form data or a JSON payload in the body.

* Once a server receives an HTTP request, it processes the request and sends an HTTP response back to the client. The response typically includes a status code (such as 200 for a successful response or 404 for a resource not found), headers, and a response body (which contains the requested resource or the result of the action being performed).

# Promise

Promises are a programming concept in JavaScript that allow asynchronous operations to be handled in a more organized and readable way. Promises provide a mechanism to handle asynchronous operations by defining a set of methods to be executed once an operation is completed, whether successfully or not.

In a nutshell, a Promise is a representation of a value that may not be available yet but will be at some point in the future. A Promise can be in one of three states:

* Pending: The initial state, indicating that the Promise has not yet been resolved or rejected.

* Resolved: The Promise has been resolved, meaning that the asynchronous operation has completed successfully, and the value is now available.

* Rejected: The Promise has been rejected, meaning that the asynchronous operation has failed, and an error has occurred.

Promises can be created using the Promise constructor, which takes a function with two arguments: resolve and reject. The resolve argument is called when the asynchronous operation is successful, and the reject argument is called when the operation fails.

Once a Promise is created, it can be used to chain asynchronous operations together in a more readable and organized way, using methods such as `then()` and `catch()`. The `then()` method is used to handle the resolved state of a Promise, while the `catch()` method is used to handle the rejected state.

Let look at this in a local example:

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
  .then(response => {// parameter for the 
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
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

## What is JSON

JSON stands for JavaScript Object Notation
JSON is a lightweight data-interchange format
JSON is plain text written in JavaScript object notation
JSON is used to send data between computers
JSON is language independent *


