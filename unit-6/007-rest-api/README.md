# REST API

A REST (Representational State Transfer) API is a type of web service that uses HTTP requests to communicate and interact with data resources. REST APIs are designed to be stateless, meaning that each request contains all the necessary information to complete the request, without needing any context from previous requests.

REST APIs typically use a set of predefined HTTP methods, such as GET, POST, PUT, PATCH, and DELETE, to perform operations on the resources. Each resource is identified by a unique URL, known as a URI (Uniform Resource Identifier).

A REST API allows client applications to access and manipulate resources on a server using a common set of protocols and standards, such as JSON (JavaScript Object Notation) and XML (Extensible Markup Language). REST APIs are widely used in web applications, mobile applications, and other client-server applications.

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

POST: The POST request is used to submit data to the server. When a form is submitted using the POST method, the form data is sent in the request body, rather than being appended to the URL. This is often used when submitting sensitive information, such as passwords or credit card numbers.

PUT and DELETE: These HTTP methods are less commonly used for submitting HTML forms, but they can be used in some cases. PUT is used to update an existing resource on the server, while DELETE is used to delete a resource. These methods are typically used in RESTful APIs rather than traditional HTML form submissions.

Note that the GET and POST methods are the most commonly used for submitting HTML forms, with GET being used for simple data retrieval and POST being used for submitting more complex or sensitive data.
