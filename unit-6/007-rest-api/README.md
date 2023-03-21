# REST API

A REST (Representational State Transfer) API is a type of web service that uses HTTP requests to communicate and interact with data resources. REST APIs are designed to be stateless, meaning that each request contains all the necessary information to complete the request, without needing any context from previous requests.

REST APIs typically use a set of predefined HTTP methods, such as GET, POST, PUT, PATCH, and DELETE, to perform operations on the resources. Each resource is identified by a unique URL, known as a URI (Uniform Resource Identifier).

A REST API allows client applications to access and manipulate resources on a server using a common set of protocols and standards, such as JSON (JavaScript Object Notation) and XML (Extensible Markup Language). REST APIs are widely used in web applications, mobile applications, and other client-server applications.

[example](https://images.tutorialedge.net/uploads/rest-api.png)

## But why?

As a full stack developer, learning how to use REST APIs is essential for several reasons:

* _Facilitates communication between client and server_: REST APIs provide a standardized way for client applications to communicate with server applications. This makes it easier to build client-server applications that can work together seamlessly.

* _Increases interoperability_: REST APIs are based on open standards and protocols, which means that they can be used by different programming languages and platforms. This makes it easier to integrate different systems and services together.

* _Improves scalability_: REST APIs are designed to be scalable, which means that they can handle a large number of requests and users. This makes them ideal for building high-performance applications that can handle large amounts of traffic.

* _Enables separation of concerns_: REST APIs allow you to separate the concerns of the client and server applications. This means that you can focus on building the front-end client application and the back-end server application independently.

* _Supports mobile development_: REST APIs are commonly used in mobile development because they are lightweight and can be accessed over the internet. This makes them ideal for building mobile applications that need to communicate with a server.


## Main Question for today

* What sorts of requests are most connected to submitting HTML forms?
* In which ways are GET requests different from POST requests?
* How do request headers compare to response headers?
* How can a POST request be created?
* What are other types of http requests besides GET and POST?

## HTTP Request Methods

When submitting an HTML form, the most common types of requests are:

GET: The GET request is used to retrieve data from the server. When a form is submitted using the GET method, the form data is appended to the URL as a query string. For example, a form with a GET method that contains a text input field with a value of "hello" might result in a URL like this: http://example.com/search?q=hello.

```js
fetch('https://reqres.in/api/users')
.then(res => res.json)
.then(data => console.log(data))
```

### Note: Routes Endpoints and Resources:

In web development, a route refers to the URL pattern that maps to a particular resource or action on a web server. In other words, it defines how the server should respond when a user makes a request to a specific URL.

For example, let's say you have a web application that allows users to view and create users. You might define the following routes:

GET /users - This route would be used to retrieve a list of all users.

GET /users/:id - This route would be used to retrieve a specific user by ID.

POST /users - This route would be used to create a new user.

PUT /users/:id - This route would be used to update an existing blog post by ID.

DELETE /users/:id - This route would be used to delete an existing users by ID.

So when a user makes a request to one of these URLs, the server would use the appropriate route to determine what action to take and what response to send back to the user.


## back to POST

POST: The POST request is used to submit data to the server. When a form is submitted using the POST method, the form data is sent in the request body, rather than being appended to the URL. This is often used when submitting sensitive information, such as passwords or credit card numbers.

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

```js
// Set up the request headers and data
const url = 'https://reqres.in/api/users';
const data = {name: 'John', age: 30};
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
};

// Send the request
fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  ```

PUT and DELETE: These HTTP methods are less commonly used for submitting HTML forms, but they can be used in some cases. PUT is used to update an existing resource on the server, while DELETE is used to delete a resource. These methods are typically used in RESTful APIs rather than traditional HTML form submissions.

Note that the GET and POST methods are the most commonly used for submitting HTML forms, with GET being used for simple data retrieval and POST being used for submitting more complex or sensitive data.

## Difference between `GET` and `POST`
There are several ways in which GET requests are different from POST requests:

Parameters: GET requests send parameters in the URL as a query string, while POST requests send parameters in the body of the request. This means that GET requests are limited in the amount of data they can send, while POST requests can send much larger amounts of data.

Caching: GET requests can be cached by the browser or intermediate servers, while POST requests are not cached. This means that GET requests are typically faster than POST requests, as they may not need to retrieve data from the server.

Bookmarking: GET requests can be bookmarked, while POST requests cannot. This means that users can save links to specific pages or resources on a website using GET requests, but not with POST requests.

Security: POST requests are more secure than GET requests, as the parameters are not visible in the URL. This means that sensitive data, such as passwords or credit card numbers, should always be sent using POST requests.

Idempotency: GET requests are generally considered to be idempotent, which means that multiple identical requests will have the same effect as a single request. POST requests, on the other hand, are not necessarily idempotent, as each request may have a different effect.

## Request and Response Headers: 

Request headers and response headers are both used in the HTTP protocol, but they serve different purposes:

Request headers: Request headers are sent from the client to the server as part of an HTTP request. They contain information about the request, such as the method (e.g. GET, POST, etc.), the URL being requested, and any additional parameters or data being sent. Request headers can also include information about the client, such as the user agent or the type of data the client is willing to accept.

```
GET /home.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/testpage.html
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
Cache-Control: max-age=0
```

Response headers: Response headers are sent from the server to the client as part of an HTTP response. They contain information about the response, such as the status code (e.g. 200 for success, 404 for not found, etc.), the type of content being returned (e.g. text, HTML, JSON, etc.), and any caching instructions or security information. Response headers can also include information about the server, such as the server software being used or any cookies that need to be set.

```
200 OK
Access-Control-Allow-Origin: *
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Mon, 18 Jul 2016 16:06:00 GMT
Etag: "c561c68d0ba92bbeb8b0f612a9199f722e3a621a"
Keep-Alive: timeout=5, max=997
Last-Modified: Mon, 18 Jul 2016 02:36:04 GMT
Server: Apache
Set-Cookie: mykey=myvalue; expires=Mon, 17-Jul-2017 16:06:00 GMT; Max-Age=31449600; Path=/; secure
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding
X-Backend-Server: developer2.webapp.scl3.mozilla.com
X-Cache-Info: not cacheable; meta data too large
X-kuma-revision: 1085259
x-frame-options: DENY
```

